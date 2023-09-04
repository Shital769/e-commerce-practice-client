import { fetchAdminProfile, loginAdmin } from "../../helper/axiosHelper";
import { requestPending, requestSuccess } from "./AuthSlice";
import { toast } from "react-toastify";

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending);

    //call axios now
    const pendingResponse = loginAdmin(formData);
    toast.promise(pendingResponse, { pending: "Please wait..." });

    const { status, message, tokens } = await pendingResponse;
    toast[status](message);
    console.log(tokens);

    if (status === "success") {
      const { accessJWT, refreshJWT } = tokens;

      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);

      dispatch(getAdminProfile());
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

const getAdminProfile = () => async (dispatch) => {
  const { status, user, message } = await fetchAdminProfile();
  console.log(user?._id.status.message);
  status === "success"
    ? dispatch(requestSuccess(user))
    : dispatch(requestSuccess({}));
};

export const autoLogin = () => async (dispatch) => {
  //if accessJWT exists, get the user and mount in our redux store

  //check for accessJWT
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (accessJWT) {
    dispatch(getAdminProfile());

    //call for new accessJWT
    const { status, accessJWT } = await fetchNewAccessJWT();

    if (status === "success") {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getAdminProfile());
      return;
    } else {
      //force logout
      dispatch(forceLogout());
    }
  }
};

const forceLogout = () => (dispatch) => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(requestSuccess({}));
};
