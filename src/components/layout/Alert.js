import React from "react";

const Alert = props => {
  return (
    <div className={`alert alert-${props.alert.type}`}>
      <i className="fa fa-info-circle"></i> {props.alert.msg}
    </div>
  );
};

export default Alert;
