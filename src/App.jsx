import desktopImage from "./illustration-sign-up-desktop.svg";
import mobileImage from "./illustration-sign-up-mobile.svg";
import iconList from "./icon-list.svg";
import "./App.css";
import { React, useState} from "react";
import { Formik, ErrorMessage} from "formik";
import { useNavigate } from "react-router-dom";

function App() {
  let [email, setEmail] = useState("");

  const navigate = useNavigate();
 
 
  return (
    <main className="App">
      <div className="image-container">
        <picture class="first-container">
          <source
            media="(min-width:768px)"
            srcset={desktopImage}
            class="desktop-image"
          />
          <img src={mobileImage} alt="lady on a banner" class="mobile-image" />
        </picture>
      </div>
      <div className="text-container">
        <h1>Stay updated!</h1>
        <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
        <div className="main-list">
          <div className="sub-list">
            <img src={iconList} alt="" className="icon-list" />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="sub-list">
            <img src={iconList} alt="" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="sub-list">
            <img src={iconList} alt="" />
            <p>And much more!</p>
          </div>
        </div>

        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log('Form Values:', values);

            navigate("/success", { state: { email: values.email } });
          }}
        >
          {({
            errors,
            touched,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-label">
                <p className="label">Email address</p>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="formError"
                />
              </div>

              <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                placeholder="email@company.com"
                className={`email mt-1 block w-full ${
                  errors.email && touched.email ? "formError1" : "formSuccess"
                }`}
              />

              <button className="btn" type="submit" disabled={isSubmitting}>
                Subscribe to monthly newsletter
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}

export default App;
