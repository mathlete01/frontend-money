export const updateCurrentProgress = (id, level) => {
  // debugger
    return (dispatch) => {
      const BASE_URL = "http://localhost:3000";
      const PROGRESSES_URL = `${BASE_URL}/rungs`;
      const formData = {
        user_id: id,
        ...level
      };
  
      const configOb = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData)
      };
      // fetch(`${PROGRESSES_URL}`, configOb)
      fetch("http://localhost:3000/rungs", configOb)
      
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