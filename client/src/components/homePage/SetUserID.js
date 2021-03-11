import React, { useState, useEffect } from "react";
import api from "../../api"
import "../../styles/Login.css";

import { useHistory } from "react-router-dom";

function SetUserID({ userID, setUserID }) {

    useEffect(() => {
        let dummyUserID = "604544ee29ab881613ad43b1"
        setUserID(dummyUserID);
    }, [])

    return (
      <div>
          <h1>User ID set to dummy value</h1>
      </div>
    );

}

export default SetUserID;
