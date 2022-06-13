import axios from "axios";
import { API_HOST } from "../../api_utils";

export const TYPES = {
  LIST_PAGE_REQUEST_SEND: "LIST_PAGE_REQUEST_SEND",
  LIST_PAGE_REQUEST_ERROR: "LIST_PAGE_REQUEST_ERROR",
  LIST_PAGE_REQUEST_SUCCESS: "LIST_PAGE_REQUEST_SUCCESS",

  CREATE_PAGE_REQUEST: "CREATE_PAGE_REQUEST",
  CREATE_PAGE_ERROR: "CREATE_PAGE_ERROR",
  CREATE_PAGE_SUCCESS: "CREATE_PAGE_SUCCESS",

  // PAGE_DELETE_REQUEST:"DELETE_PAGE_REQUEST",
  // PAGE_DELETE_ERROR:"DELETE_PAGE_ERROR",
  // DELETE_PAGE_SUCCESS:"DELETE_PAGE_SUCCESS"
};

export const pageLoad = () => async (dispatch) => {
  dispatch({ type: TYPES.LIST_PAGE_REQUEST_SEND });
  try {
    const response = await axios.get(`${API_HOST}pages/`);
    dispatch({ type: TYPES.LIST_PAGE_REQUEST_SUCCESS, data: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: TYPES.LIST_PAGE_REQUEST_ERROR, error: error });
  }
};

export const createPage = (name) => async (dispatch) => {
  dispatch({ type: TYPES.CREATE_PAGE_REQUEST });
  try {
    const response = await axios.post(`${API_HOST}pages/`, { name });
    dispatch({ type: TYPES.CREATE_PAGE_SUCCESS, data: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: TYPES.CREATE_PAGE_ERROR, data: error });
  }
};
// export const deletePage = (id) => async (dispatch) => {
//   dispatch({ type: TYPES.DELETE_REQUEST_SEND });
//   try {
//     const response = await axios.delete(`${API_HOST}pages/${id}`);
//     dispatch({ type: TYPES.PAGE_DELETE_SUCCESS, data: response.data });
//     console.log(response.data);
//   } catch (error) {
//     dispatch({ type: TYPES.PAGE_DELETE_ERROR, error: error });
//   }
// };
