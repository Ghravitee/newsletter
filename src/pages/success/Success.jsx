import React from "react";
import Style from "./Success.module.css";
import iconSuccess from "../../icon-success.svg";
import { Link} from "react-router-dom";
import { useLocation} from "react-router-dom";
// import { Formik, Form, Field, useFormikContext } from 'formik';




const Success = () => {
  const location = useLocation();
  const { email } = location.state || "Not A Email";


return (
    
      <div className={Style.container}>
        <div className={Style.icon}>
          <img src={iconSuccess} alt="" />
        </div>
        <h1 className={Style.heading}>Thanks for Subscribing!</h1>
        <p className={Style.paragraph}>
          A confirmation email has been sent to{" "}
          <span className={Style.email}>{email}</span>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <Link to="/" className={Style.btn}>Dismiss message</Link>
      </div>
 
  );
};

export default Success;
