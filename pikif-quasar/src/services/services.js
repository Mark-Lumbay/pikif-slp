import axios from "axios";
import { useStore } from "vuex";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/island-kids", // Replace with your API endpoint
});

const store = useStore();

export async function testCall(token) {
  console.log(token);
  const response = await apiClient.get("/test", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function register(data) {
  console.log(data);

  try {
    await apiClient.post("/register", data);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}
