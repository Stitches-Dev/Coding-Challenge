import { publicRequest } from "./requestMethod";
import { getUniversityFailure, getUniversityStart, getUniversitySuccess } from "./universityRedux";

export const getAllUniversities = async (dispatch) => {
    dispatch(getUniversityStart());
    try {
      const res = await publicRequest.get("/university/all");
      dispatch(getUniversitySuccess(res.data));
    } catch (err) {
      dispatch(getUniversityFailure());
    }
  };
