import axios from "axios";
const rootUrl = process.env.REACT_APP_DOMAIN + "api/v1";
const adminApi = rootUrl + "/admin";

const ftechProcessor = async ({ method, url, data, isPrivate, token }) => {
  try {
    const jwtToken = token || sessionStorage.getItem("accessJWT");
    console.log(jwtToken);
    const headers = isPrivate
      ? {
          Authorization: jwtToken,
        }
      : null;

    const res = await axios({
      method,
      url,
      data,
      headers,
    });
    return res.data;
  } catch (error) {
    const message = error.message;

    if (error?.response?.data?.message === "jwt expired") {
      const { accessJWT } = await fetchNewAccessJWT();
      sessionStorage.setItem("accessJWT", accessJWT);
      return fetchProcesser({ method, url, data, isPrivate, token: accessJWT });
    }

    return {
      status: "error",
      message: error.message,
    };
  }
};

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
