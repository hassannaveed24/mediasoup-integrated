import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from "../constants/ActionTypes";
import axios from 'util/Api'

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignUp = ({ name, email, password }) => {
  console.log(name, email, password);
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.post('auth/register', {
      email: email,
      password: password,
      name: name
    }
    ).then(({ data }) => {
      console.log("data:", data);
      if (data.result) {
        localStorage.setItem("token", JSON.stringify(data.token.access_token));
        axios.defaults.headers.common['Authorization'] = "Bearer " + data.token.access_token;
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_TOKEN_SET, payload: data.token.access_token });
        dispatch({ type: USER_DATA, payload: data.user });
      } else {
        console.log("payload: data.error", data.error);
        dispatch({ type: FETCH_ERROR, payload: "Network Error" });
      }
    }).catch(function (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log("Error****:", error.message);
    });
  }
};

export const userSignIn = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    // axios.post('auth/login', {
    //   email: email,
    //   password: password,
    // }
    // ).then(({ data }) => {
      //   var  data= JSON.stringify(`    "data":
      //   {
      //       "result":true,
      //       "token":
      //       {
      //           "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nLWF4b24ud29ya1wvand0YXV0aFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5NDUwODI1MywiZXhwIjoxNTk0NTExODUzLCJuYmYiOjE1OTQ1MDgyNTMsImp0aSI6IjZud2hROGlpZUNqMTZDSTQiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.n2dA3tanGXJZvUml5yDS0ZPGwXK8jc902ydoA1eK3Mk",
      //           "token_type":"bearer",
      //           "expires_in":3600
      //       }
      //   }
      // `);
  //    console.log("userSignIn: ", data);
   //   if (data.result) {
      //  console.log("userSignIn: ", data.result);
        localStorage.setItem("token", JSON.stringify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nLWF4b24ud29ya1wvand0YXV0aFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5NDUwODI1MywiZXhwIjoxNTk0NTExODUzLCJuYmYiOjE1OTQ1MDgyNTMsImp0aSI6IjZud2hROGlpZUNqMTZDSTQiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.n2dA3tanGXJZvUml5yDS0ZPGwXK8jc902ydoA1eK3Mk"));
        axios.defaults.headers.common['Authorization'] = "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nLWF4b24ud29ya1wvand0YXV0aFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5NDUwODI1MywiZXhwIjoxNTk0NTExODUzLCJuYmYiOjE1OTQ1MDgyNTMsImp0aSI6IjZud2hROGlpZUNqMTZDSTQiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.n2dA3tanGXJZvUml5yDS0ZPGwXK8jc902ydoA1eK3Mk";
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_TOKEN_SET, payload: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nLWF4b24ud29ya1wvand0YXV0aFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5NDUwODI1MywiZXhwIjoxNTk0NTExODUzLCJuYmYiOjE1OTQ1MDgyNTMsImp0aSI6IjZud2hROGlpZUNqMTZDSTQiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.n2dA3tanGXJZvUml5yDS0ZPGwXK8jc902ydoA1eK3Mk" });
      // } else {
      //   dispatch({ type: FETCH_ERROR, payload: data.error });
      // }
    // }).catch(function (error) {
    //   dispatch({ type: FETCH_ERROR, payload: error.message });
    //   console.log("Error****:", error.message);
    // });
  }
};

export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.post('auth/me',
    ).then(({ data }) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_DATA, payload: data.user });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    }).catch(function (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log("Error****:", error.message);
    });
  }
};


export const userSignOut = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.post('auth/logout',
    ).then(({ data }) => {
      if (data.result) {
        dispatch({ type: FETCH_SUCCESS });
        localStorage.removeItem("token");
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: SIGNOUT_USER_SUCCESS });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    }).catch(function (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log("Error****:", error.message);
    });
  }
};
