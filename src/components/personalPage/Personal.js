import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./Personal.css";

function Personal() {
  return (
    <div className="personal">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Personal;
