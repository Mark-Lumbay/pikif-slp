import axios from "axios";
import { useStore } from "vuex";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/island-kids", // Replace with your API endpoint
});

const store = useStore();

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
  try {
    const result = await apiClient.get("/loadDashboard");
    return result.data.data;
  } catch (err) {
    return { success: false, message: err.message };
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
