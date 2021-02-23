export const updateCurrentProgress = (id, level) => {
  // debugger
    return (dispatch) => {
      const BASE_URL = process.env.REACT_APP_BASE_URL
      const PROGRESSES_URL = `${BASE_URL}/rungs`;
      const formData = {
        user_id: id,
        ...level
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
      fetch(BASE_URL+"/rungs", configOb)
      
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => {
          dispatch({
            type: "UPDATE_PROGRESS",
            newProgress: data,
          });
        });
    };
  };