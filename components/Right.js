import style from "./right.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import countries from "i18n-iso-countries";
import { useFormik } from "formik";
import enLocale from "i18n-iso-countries/langs/en.json";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import { useAuth } from '../context/AuthContext'
import Head from "next/head";
export default function Right(props) {
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);
  const options = [
    { value: "Role", label: "Role" },
    {
      value: "Agency / Partner Developer",
      label: "Agency / Partner Developer",
    },
    { value: "Hobbyist", label: "Hobbyist" },
    { value: "Professional Developer", label: "Professional Developer" },
    {
      value: "Technology / Business Manager",
      label: "Technology / Business Managerbbyist",
    },
    { value: "Other", label: "Other" },
  ];
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

 
  const captref = useRef(null);
  const poptions = [
    { value: "Select a language", label: "Select a language" },
    { value: "ruby", label: "ruby" },
    { value: "php", label: "php" },
    { value: "python", label: "python" },
    { value: "node", label: "node" },
    { value: "java", label: "java" },
    { value: "clojure", label: "clojure" },
    { value: "scala", label: "scala" },
    { value: "go", label: "go" },
    { value: "other", label: "other" },
    { value: "none", label: "none" },
  ];
  countries.registerLocale(enLocale);
  const cobj = countries.getNames("en", { select: "official" });
  const carr = Object.entries(cobj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      f_name: "",
      l_name:"",
      pass:""
    },
    onSubmit: async(e) => {
      console.log(e)
      e.preventDefault()

      try {
        await signup(data.email, data.password)
      } catch (err) {
        console.log(err)
      }
  
      console.log(data)
    },
   
  });
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&display=swap');
        </style>
      </Head>
      <div className={style.mbody}>
        <form className="w-50" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className={style.flabel}>
              {"First Name"} <span className={style.fspan}>{"*"}</span>
            </label>
            <input
              type="text"
              name="f_name"
              placeholder="First Name"
              className={style.finput}
            />
            {formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="name" className={style.flabel}>
              {"Last Name"} <span className={style.fspan}>{"*"}</span>
            </label>
            <input
              type="text"
              name="l_name"
              placeholder="Last Name"
              className={style.finput}
            />
            {formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className={style.flabel}>
              {"Email address"} <span className={style.fspan}>{"*"}</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={style.finput}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
            />
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="com_name" className={style.flabel}>
              {'Company name'}
            </label>
            <input
              type="text"
              name="com_name"
              placeholder="Company name"
              className={style.finput}
            />
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="role" className={style.flabel}>
              {'Role'} <span className={style.fspan}>{'*'}</span>
            </label>
            <Select
              options={options}
              name="role"
              placeholder="Role"
              className={style.fsel}
            />
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="cont" className={style.flabel}>
              {'Country'} <span className={style.fspan}>{'*"}</span>
            </label>
            <Select
              options={carr}
              name="cont"
              placeholder="Country"
              className={style.fsel}
            />
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="plang" className={style.flabel}>
              {"Primary development language"}
              <span className={style.fspan}>{'*'}</span>
            </label>
            <Select
              options={poptions}
              name="plang"
              placeholder="Select a language"
              className={style.fsel}
            />
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className={style.flabel}>
              {'Password'} <span className={style.fspan}>{'*'}</span>
            </label>
            <input
              type="password"
              name="pass"
              placeholder="Password"
              className={style.finput}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
            />
            {formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <ReCAPTCHA
            sitekey="6LciwxYjAAAAAKOA06wQy0NvXeLASiFnhT8U6hLu"
            ref={captref}
          ></ReCAPTCHA>
          <button type="submit" className={style.btn}>
        <soan>
            {'Create an Account'}
        </soan>
          </button>
        </form>
      </div>
    </>
  );
}
