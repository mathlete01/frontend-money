export const updateCurrentClick = (userID, stepID, rowID) => {
  // debugger
    return (dispatch) => {
      // const BASE_URL = "http://localhost:3000";
      const BASE_URL = "https://pure-waters-30920.herokuapp.com"
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
      fetch("http://localhost:3000/clicks", configOb)
      
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