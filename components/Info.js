import style from "./info.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
export default function Info(props) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&display=swap');
        </style>
      </Head>
      <div className={style.mh}>
        <img src={props.ur}></img>
        <span> {props.mh}</span>
      </div>
      <div  className={style.mb}>
      {props.mb}
      </div>
      
    </>
  );
}
