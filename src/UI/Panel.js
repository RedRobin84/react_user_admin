import React from "react";
import classes from "./Panel.module.css";

const Panel = (props) => {
  return (
    <div className={classes.panel}>
      <div className={classes["panel__header"]}>{props.headerText}</div>
      <div className={classes["panel_content"]}>{props.children}</div>
    </div>
  );
};

export default Panel;
