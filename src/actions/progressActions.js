export const updateCurrentProgress = (id, level) => {
    return (dispatch) => {
      const BASE_URL = "http://localhost:3000";
      const PROGRESSES_URL = `${BASE_URL}/progresses`;
      const formData = {
        user_id: id,
        rung_id: level
      };
  
      const configOb = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData)
      };
      fetch(`${PROGRESSES_URL}`, configOb)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "UPDATE_USER",
            newUser: data,
          });
        });
    };
  };