import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

// functional component to display alerts, uses the alert context
const Alerts = () => {
  //initialising context
  const alertContext = useContext(AlertContext);
  return (
    // if the length of the alerts is greater than 0 the alerts get mapped through and will be displayed accordingly
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
