import React, { useState, useEffect } from "react";
import api from "../../api"
import "../../styles/Login.css";

import { useHistory } from "react-router-dom";

function SetUserID({ userID, setUserID }) {

    useEffect(() => {
        let dummyUserID = "60443c81ea08502f6daf2b48"
        setUserID(dummyUserID);
    }, [])

    return (
      <div>
          <h1>User ID set to dummy value</h1>
      </div>
    );

}

export default SetUserID;
