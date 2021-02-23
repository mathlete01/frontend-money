export const updateCardDebts = (id, cardDebtObj) => {
    // debugger
      return (dispatch) => {
        const PROGRESSES_URL = `${process.env.REACT_APP_BASE_URL}/credit_card_debts`;
        const formData = {
          user_id: id,
          ...cardDebtObj
        };
    
        const configOb = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData)
        };
        fetch(`${process.env.REACT_APP_BASE_URL}/credit_card_debts`, configOb)
        
          .then((res) => res.json())
          // .then((data) => console.log(data))
          .then((data) => {
            dispatch({
              type: "UPDATE_CARDDEBTS",
              newCardDebts: data,
            });
          });
      };
    };