import React, { useContext } from "react";
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext)
  if(alertContext.alert.msg !== '') {
    console.log(alertContext.alert.msg)
    return <div className={`alert alert-${alertContext.alert.type}`}>
      <i className="fa fa-info-circle"></i> {alertContext.alert.msg}
    </div>
  } else {
    return <div></div>
  }
};

export default Alert;
