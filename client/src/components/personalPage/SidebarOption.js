import React from "react";
import "../../styles/SidebarOption.css";

import Icon from '@material-ui/core/Icon';

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      {/* <Icon>{IconName}</Icon> */}
      <h2>{text}</h2>
      <Icon />
    </div>
  );
}

export default SidebarOption;
