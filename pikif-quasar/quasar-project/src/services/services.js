import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/island-kids", // Replace with your API endpoint
});
export async function testCall(token) {
  console.log(token);
  const response = await apiClient.get("/test", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
