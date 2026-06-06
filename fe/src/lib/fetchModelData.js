import axios from "axios";

export const BASE_URL = "https://lsd48f-8081.csb.app";

async function fetchModelData(url, method = "GET", data = null) {
  try {
    const response = await axios({
      url: `${BASE_URL}${url}`,
      method,
      data,
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export default fetchModelData;
