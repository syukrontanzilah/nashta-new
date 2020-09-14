import axios from "axios";

const API_URL = "http://localhost:3000";

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});



export const loadEvent = (data) => {
  return (dispatch) => {
    dispatch(updateEvent({
      loading: true
    }));
    return request
      .get("/", { params: data })
      .then(function (response) {
        dispatch(updateEvent({
          loading: false,
          ...response.data
        }));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(updateEvent({
          loading: false
        }));
      });
  };
};


export const postEvent = (data) => {
  return (dispatch) => {
    dispatch(updateEvent({
      loading: true
    }));
    return request
      .post("/", data)
      .then(function (response) {
        dispatch(updateEvent({
          loading: false,
          ...response.data
        }));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(updateEvent({
          loading: false
        }));
      });
  };
};

const updateEvent = (data) => ({
  type: "UPDATE_EVENT",
  data,
});