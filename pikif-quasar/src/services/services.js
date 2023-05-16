import axios from "axios";
import { useStore } from "vuex";

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

export async function addStudent(data) {
  try {
    await apiClient.post("/addClientInfo", data);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export async function updateInfo(data, id) {
  try {
    const res = await apiClient.put(`/updateInfo/${id}`, data);
    if (res.data.success) {
      return true;
    } else {
      return false;
    }
  } catch (err) {}
}

export async function addFindings(findings, id) {
  try {
    const addRes = await apiClient.post(`/addFindings/${id}`, findings);

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

    return userDetails.data.data;
  } catch (err) {
    return { status: false };
  }
}
