import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Right from "../components/right";
import Left from "../components/left";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500&display=swap');
        </style>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <svg
            width="17.69px"
            height="12.54px"
            className={styles.sv}
            viewBox="0 0 28 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Salesforce Developers</title>
            <g
              id="Section-/-Nav-/-Footer-/-Architects-0"
              transform="translate(-148.000000, -447.000000)"
            >
              <path
                d="M163.003774,447.648649 C164.8,447.648649 166.384906,448.675676 167.230189,450.189189 C167.969811,449.864865 168.762264,449.648649 169.607547,449.648649 C172.883019,449.648649 175.524528,452.351351 175.524528,455.702703 C175.524528,459.054054 172.883019,461.756757 169.607547,461.756757 C169.184906,461.756757 168.815094,461.702703 168.445283,461.648649 C167.70566,463 166.279245,463.918919 164.641509,463.918919 C163.954717,463.918919 163.320755,463.756757 162.739623,463.486486 C162,465.27027 160.256604,466.513514 158.196226,466.513514 C156.083019,466.513514 154.233962,465.162162 153.54717,463.216216 C153.230189,463.27027 152.913208,463.324324 152.596226,463.324324 C150.060377,463.324324 148,461.216216 148,458.621622 C148,456.891892 148.898113,455.378378 150.271698,454.567568 C150.007547,453.918919 149.849057,453.162162 149.849057,452.405405 C149.849057,449.432432 152.226415,447 155.184906,447 C157.033962,447.054054 158.566038,447.864865 159.516981,449.162162 C160.415094,448.243243 161.630189,447.648649 163.003774,447.648649 Z"
                id="Path-0"
                fill="#00A1E0"
              ></path>
            </g>
          </svg>

          <span style={{ color: "#032D60" }}>Salesforce Developers</span>
          <span style={{ color: "#444444" }}>/</span>
          <span style={{ color: "#444444" }}>Heroku</span>
        </div>
        <div className={styles.mainhead}>
          <div className={styles.mhbo}>
            <div className={styles.mhbody}>
              <div className={styles.mh1}>
                <img src="https://signup.heroku.com/assets/logo-horizontal-30c94876b673967b26d0e4a698748b3a157e699845045b3b64fe69706c794bb9.png"></img>
                <div className={styles.mh1d}>
                  Already have an account?
                  <button>
                    <span>Log in</span>
                  </button>
                </div>
              </div>
              <div className={styles.mh2}>Get started on Heroku today</div>
            </div>
            <div className={styles.mbody}>
              <Left></Left>
              <Right></Right>
            </div>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}
