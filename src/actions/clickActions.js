export const updateCurrentClick = (userID, stepID, rowID) => {
  // debugger
    return (dispatch) => {
      const BASE_URL = process.env.REACT_APP_BASE_URL
      const PROGRESSES_URL = `${BASE_URL}/clicks`;
      const formData = {
        user_id: userID,
        steps_id: stepID,
        rows_id: rowID,
      };
      let token = localStorage.getItem("token")
      const configOb = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      };
      fetch(BASE_URL+"/clicks", configOb)
      
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => {
          dispatch({
            type: "UPDATE_CLICKS",
            newClicks: data,
          });
        });
    };
  };