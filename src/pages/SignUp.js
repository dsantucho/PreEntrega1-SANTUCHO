import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase/firebaseConfig";
//FORMIK
import { Formik } from "formik";
//YUP => crea un esquema de validacion para los campos
import * as yup from "yup";
//component
import Spinner from "../components/Spinner";

//esquema de validacion
const yupSchema = yup.object({
  password: yup.string().min(6).max(10).required("password name is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Password is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const SignUp = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleSignUp = async (values) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Extract the uid from the userCredential object
      const uid = userCredential.user.uid;

      // Create the new user document in Firestore
      const docRef = await addDoc(collection(db, "users"), {
        uid: uid,
        email: values.email,
        password: values.password,
        date: new Date().toLocaleDateString("es-AR"), // Add the date in the desired format
        status: "Active", // Add the state
      });

      console.log("Document written with ID: ", docRef.id);
      dispatch({ type: "LOGIN", payload: userCredential.user });
      navigate("/");
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="nav-fix div-signin d-flex flex-column align-items-center justify-content-center">
      <h2>SignIn</h2>
      <Formik
        initialValues={{
          password: "",
          repeatPassword: "",
          email: "",
        }}
        onSubmit={(values) => handleSignUp(values)}
        validationSchema={yupSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          dirty,
          ErrorMessage,
        }) => (
          <form
            className="formContainer formSignUp d-flex flex-column"
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column">
              <h4 className="mb-3 mt-3">Email</h4>
              <TextField
                className="mb-3"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div className="d-flex flex-column">
              <h4 className="mb-3 mt-3">Password</h4>
              <TextField
                className="mb-3"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
              <TextField
                className="mb-3"
                placeholder="Repeat Password"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.repeatPassword}</span>
              )}
            </div>
            {isLoading ? (<Spinner />
            ) : (
              <Button
                className="btnForm d-flex justify-content-center m-3"
                type="submit"
                disabled={!(isValid && dirty)}
              >
                Register
              </Button>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
