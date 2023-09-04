import axios from "axios";
const rootUrl = process.env.REACT_APP_DOMAIN + "api/v1";
const adminApi = rootUrl + "/admin";

const fetchProcessor = async ({ method, url, data, isPrivate, token }) => {
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

//admin
export const postNewAdmin = async (data) => {
  const url = adminApi + "/register";
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcessor(obj);
};

//post email verification
export const postEmailVerification = async (data) => {
  const url = adminApi + "/verify";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcessor(obj);
};

//login admin
export const loginAdmin = async (loginData) => {
  const url = adminApi + "/login";
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcessor(obj);
};

//fetch admin profile
export const fetchAdminProfile = async () => {
  const url = adminApi + "/user-profile";
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcessor(obj);
};

export const fetchOtpRequest = async (formData) => {
  const url = adminApi + "/request-otp";
  const obj = {
    method: "post",
    url,
    data: formData,
  };
  return fetchProcesser(obj);
};

export const resetPasswordRequest = async (formData) => {
  const url = adminApi + "/reset-password";
  const obj = {
    method: "patch",
    url,
    data: formData,
  };
  return fetchProcesser(obj);
};

//jwt
