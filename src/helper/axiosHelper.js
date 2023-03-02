import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";

export const postNewAdmin = async (data) => {
  try {
    const res = await axios.post(adminApi + "/register", data);
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//post email verification
export const postEmailVerification = async (data) => {
  try {
    const res = await axios.post(adminApi + "/verify", data);
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login admin
export const loginAdmin = async (loginData) => {
  try {
    const res = await axios.post(adminApi + "/login", loginData);
    return res.loginData;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
