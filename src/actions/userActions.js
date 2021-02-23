export const setCurrentUser = (currentUser) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_USER",
      newUser: currentUser,
    });
  };
};

export const getCurrentUser = (id, currentUser) => {
  return (dispatch) => {
    // const BASE_URL = "http://localhost:3000";
    const BASE_URL = "https://pure-waters-30920.herokuapp.com"
    const USERS_URL = `${BASE_URL}/users`;
    const SPECIFIC_USER = `${USERS_URL}/${id}`;

    fetch(`${SPECIFIC_USER}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_USER",
          newUser: data,
        });
      });
  };
};

export const updateCurrentUser = (id, dataObj, currentStep) => {
  console.log(`updateCurrentUser id = `, id, `dataObj = `, dataObj, `currentStep = `, currentStep);
  return (dispatch) => {
    // const BASE_URL = "http://localhost:3000";
    const BASE_URL = "https://pure-waters-30920.herokuapp.com"
    const USERS_URL = `${BASE_URL}/users`;
    const SPECIFIC_USER = `${USERS_URL}/${id}`;
    const formData = {
      user: {
        ...dataObj,
        current_step: currentStep,
      },
    };
    let token = localStorage.getItem("token");
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    };
    fetch(`${SPECIFIC_USER}`, configObj)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_USER",
          newUser: data,
        });
      });
  };
};

export const loginCurrentUser = (userObj) => {
  return (dispatch) => {
    // const BASE_URL = "http://localhost:3000";
    const BASE_URL = "https://pure-waters-30920.herokuapp.com"
    const USERS_URL = `${BASE_URL}/login`;
    let token = localStorage.getItem("token");
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userObj),
    };
    fetch(`${USERS_URL}`, configObj)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "UPDATE_USER",
          newUser: data,
        })
      );
  };
};
