export const setCurrentUser = (userObject) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_USER",
      newUser: userObject,
    });
  };
};

export const getCurrentUser = (id, userObject) => {
  return (dispatch) => {
    const BASE_URL = "http://localhost:3000";
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

export const updateCurrentUser = (id, dataObj) => {
  return (dispatch) => {
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;
    const SPECIFIC_USER = `${USERS_URL}/${id}`;
    const formData = {
      ...dataObj,
    };

    const configOb = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData)
    };
    fetch(`${SPECIFIC_USER}`, configOb)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_USER",
          newUser: data,
        });
      });
  };
};
