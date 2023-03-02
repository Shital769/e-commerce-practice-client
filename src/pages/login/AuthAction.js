import { loginAdmin } from "../../helper/axiosHelper";
import { requestPending, requestSuccess } from "./AuthSlice";
import { toast } from "react-toastify";

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending);

    //call axios now
    const pendingResponse = loginAdmin(formData);
    toast.promise(pendingResponse, { pending: "Please wait.." });

    const { status, message, user } = await pendingResponse;
    toast[status](message);

    status === "success"
      ? dispatch(requestSuccess(user))
      : dispatch(requestSuccess({}));
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
