import axios from "axios";
import { useStore } from "vuex";
import store from "../store";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/island-kids", // Replace with your API endpoint
});

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
  const uid = id;
  const data = store.getters.getBasicDetails;
  const details = {
    accInfo: data,
  };
  try {
    const result = await apiClient.post(`/setInactive/toggle/${uid}`, details);
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
  const store = useStore();

  try {
    const result = await apiClient.get("/loadDashboard");
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

    store.dispatch("storeData", fullInfo);
    return basicInfo;
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export async function getOneStudent(id) {
  try {
    const studentInfo = await apiClient.get(`/getClient/${id}`);
    return studentInfo.data.data;
  } catch (err) {
    return { success: false, message: `Error ${err.message}` };
  }
}

// Add audit log func
// Complete
export async function addStudent(data) {
  const accInfo = store.getters.getBasicDetails;
  const payload = {
    accInfo,
    data,
  };
  try {
    await apiClient.post("/addClientInfo", payload);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

// Add audit log func
// Completed
export async function updateInfo(data, id) {
  const accInfo = store.getters.getBasicDetails;
  console.log(accInfo);
  const payload = {
    accInfo,
    data,
  };
  try {
    const res = await apiClient.put(`/updateInfo/${id}`, payload);
    if (res.data.success) {
      return true;
    } else {
      return false;
    }
  } catch (err) {}
}

// Add audit log func
export async function addFindings(findings, id) {
  const accInfo = store.getters.getBasicDetails;
  const payload = {
    accInfo,
    findings,
  };
  try {
    const addRes = await apiClient.post(`/addFindings/${id}`, payload);

    if (addRes) return true;
    return false;
  } catch (err) {
    return false;
  }
}

export async function checkUserExists(data) {
  try {
    const searchRes = await apiClient.get("/search", {
      params: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });
    return searchRes;
  } catch (err) {
    return { status: false };
  }
}

export async function getUserDetails(id) {
  try {
    const userDetails = await apiClient.get(`/getUserDetails/${id}`);
    return userDetails.data.data.customClaims;
  } catch (err) {
    return { status: false };
  }
}

export async function updateUserDetails(data, id) {
  try {
    const result = await apiClient.post(`/updateUserInfo/${id}`, data);
    return { status: false, data: result.data.data.data };
  } catch (err) {
    console.log(err);
    return { status: false, data: err };
  }
}

export async function updateUserEmail(emailData, id) {
  try {
    const res = await apiClient.put(`/updateEmail/${id}`, emailData);
    return res;
  } catch (err) {
    return { status: false, message: "Something went wrong!" };
  }
}

export async function updateUserPassword(passData, id) {
  try {
    const result = await apiClient.put(`/updatePassword/${id}`, passData);
    console.log(`Result is ${result}`);
    return true;
  } catch (err) {
    return false;
  }
}

export async function getUserAuth(id) {
  try {
    const result = await apiClient.get(`/getUserAuth/${id}`);
    return result.data;
  } catch (err) {
    return false;
  }
}
