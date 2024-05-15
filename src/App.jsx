// import logo from "./logo.svg";
import desktopImage from "./illustration-sign-up-desktop.svg";
import mobileImage from "./illustration-sign-up-mobile.svg";
import iconList from "./icon-list.svg";
import "./App.css";
import { React } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
// import Success from "./pages/success/Success"

function App() {


  
const navigate = useNavigate();
  const handleSubmit = () => {
    // Perform form submission logic here
    navigate("/success");

  };
  return (
    <div className="App">
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
           
            handleSubmit();
          }}
        >

          {({ errors, touched, values }) => (

               <Form className="form">
              <div className="form-label">
              
                  <p className="label">Email address</p>
                  <ErrorMessage name="email" component="div" className="formError"/>
              
              </div>

              <Field
              type="email"
              name="email"
              placeholder="email@company.com"
              className={`email mt-1 block w-full ${
                errors.email && touched.email ? 'formError1' : 'formSuccess'
              }`}
            />

              <button className="btn" type="submit">
                Subscribe to monthly newsletter
              </button>
              {/* <Success email={values.email} /> */}
            </Form> 
      )}
        
          
      
        </Formik>
      </div>
    </div>
  );
}

export default App;
