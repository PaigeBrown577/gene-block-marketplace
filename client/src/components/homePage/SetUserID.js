import React, { useState, useEffect } from "react";
import api from "../../api"
import "../../styles/Login.css";

import { useHistory } from "react-router-dom";

function SetUserID({ user, setUser }) {

    useEffect(() => {
        let dummyUserID = "604544ee29ab881613ad43b1"
        const getUser = async () => {
              await api.getUserById(dummyUserID).then(user => {
                setUser(user.data.data);
              })
          }
          getUser();
    }, [])

    return (
      <div>
          <h1>User ID set to dummy value</h1>
      </div>
    );

}

export default SetUserID;
