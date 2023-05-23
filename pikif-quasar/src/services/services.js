import axios from "axios";
import { useStore } from "vuex";
import store from "../store";
import { auth } from "../firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";

const apiClient = axios.create({
  baseURL: "http://pikif-slp-production.up.railway.app/island-kids", // Replace with your API endpoint
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      window.location.href = "/login";
    }
  }
);

export async function testCall(token) {
  const response = await apiClient.get("/test", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Add to audit log
export async function toggleActive(id) {
  const token = store.getters.getToken;
  const uid = id;
  const data = store.getters.getBasicDetails;
  const details = {
    accInfo: data,
  };
  try {
    const result = await apiClient.post(`/setInactive/toggle/${uid}`, details, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (err) {
    return err;
  }
}

export async function register(data) {
  try {
    await apiClient.post("/register", data);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export async function loadDashboard() {
  const token = store.getters.getToken;

  const store2 = useStore();

  try {
    const result = await apiClient.get(`/loadDashboard`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const basicInfo = [];
    const fullInfo = [];

    for (const info of result.data.data) {
      const name = `${info.clientInfo.firstName} ${info.clientInfo.middleName} ${info.clientInfo.lastName}`;
      basicInfo.push({
        id: info.id,
        status: info.clientInfo.active,
        fullName: name,
        age: info.clientInfo.age,
        sex: info.clientInfo.sex,
        category: info.clientInfo.category,
        educAttn: info.clientInfo.educAttn,
        materials: info.clientInfo.materials,
        condition: info.clientInfo.condition,
        conditionOthers: info.clientInfo.conditionOthers,
        findings: info.initialFindings,
      });
    }

    for (const info of result.data.data) {
      fullInfo.push({
        ...info,
      });
    }

    store2.dispatch("storeData", fullInfo);
    return basicInfo;
  } catch (err) {
    console.log(`nag error yawa ${err}`);
    return { success: false, message: err.message };
  }
}

export async function getOneStudent(id) {
  const token = store.getters.getToken;

  try {
    const studentInfo = await apiClient.get(`/getClient/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return studentInfo.data.data;
  } catch (err) {
    return { success: false, message: `Error ${err.message}` };
  }
}

// Add audit log func
// Complete
export async function addStudent(data) {
  const token = store.getters.getToken;

  const accInfo = store.getters.getBasicDetails;
  const payload = {
    accInfo,
    data,
  };
  try {
    await apiClient.post("/addClientInfo", payload, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

// Add audit log func
// Completed
export async function updateInfo(data, id) {
  const token = store.getters.getToken;

  const accInfo = store.getters.getBasicDetails;
  console.log(accInfo);
  const payload = {
    accInfo,
    data,
  };
  try {
    const res = await apiClient.put(`/updateInfo/${id}`, payload, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (res.data.success) {
      return true;
    } else {
      return false;
    }
  } catch (err) {}
}

// Add audit log func
export async function addFindings(findings, id) {
  const token = store.getters.getToken;

  const accInfo = store.getters.getBasicDetails;
  const payload = {
    accInfo,
    findings,
  };
  try {
    const addRes = await apiClient.post(`/addFindings/${id}`, payload, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (addRes) return true;
    return false;
  } catch (err) {
    return false;
  }
}

export async function checkUserExists(data) {
  const token = store.getters.getToken;

  try {
    const searchRes = await apiClient.get("/search", {
      params: {
        firstName: data.firstName,
        lastName: data.lastName,
      },

      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return searchRes;
  } catch (err) {
    return { status: false };
  }
}

export async function getUserDetails(id) {
  const token = store.getters.getToken;

  try {
    const userDetails = await apiClient.get(`/getUserDetails/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return userDetails.data.data.customClaims;
  } catch (err) {
    return { status: false };
  }
}

export async function updateUserDetails(data, id) {
  const token = store.getters.getToken;

  try {
    const result = await apiClient.post(`/updateUserInfo/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return { status: false, data: result.data.data.data };
  } catch (err) {
    console.log(err);
    return { status: false, data: err };
  }
}

export async function updateUserEmail(emailData, id) {
  const token = store.getters.getToken;

  try {
    const res = await apiClient.put(`/updateEmail/${id}`, emailData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    return { status: false, message: "Something went wrong!" };
  }
}

export async function updateUserPassword(passData, id) {
  const token = store.getters.getToken;

  try {
    const result = await apiClient.put(`/updatePassword/${id}`, passData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(`Result is ${result}`);
    return true;
  } catch (err) {
    return false;
  }
}

export async function getUserAuth(id) {
  const token = store.getters.getToken;

  try {
    const result = await apiClient.get(`/getUserAuth/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (err) {
    return false;
  }
}

export async function resetPass(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err.message);
  }
}

export async function getAudit() {
  const token = store.getters.getToken;
  try {
    const data = await apiClient.get("/loadAuditLog", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return data.data;
  } catch (err) {
    return { status: false, message: err };
  }
}

export async function getAccessLvl() {
  const token = store.getters.getToken;
  try {
    const levels = await apiClient.get("/loadAccessLvl", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return levels.data;
  } catch (err) {
    return { status: false, message: err };
  }
}

export async function updateRole(newRole, id) {
  const token = store.getters.getToken;
  const accInfo = store.getters.getBasicDetails;

  const payload = {
    accInfo,
    newRole: newRole,
  };
  try {
    await apiClient.patch(`/updateUserRole/${id}`, payload, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return { status: false, message: err };
  }
}

export async function updateStatus(newStatus, id) {
  const token = store.getters.getToken;
  try {
    await apiClient.patch(
      `/updateUserStatus/${id}`,
      { newStatus: newStatus },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    return { status: false, message: err };
  }
}

export async function getUserStatus(id) {
  const token = store.getters.getToken;
  try {
    const status = await apiClient.get(`/getActiveStatus/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return status.data;
  } catch (err) {
    return { status: false, message: err };
  }
}

export { apiClient };
