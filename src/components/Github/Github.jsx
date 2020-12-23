import React from "react";
import { Link, Typography } from "@material-ui/core";
import styles from "./Github.module.css";

const Github = () => {
  return (
    <div className={styles.text}>
      <Link
        href="https://github.com/Muhammad-Mustafa/Covid-19-Tracker-App"
        underline="hover"
        rel="noreferrer"
        target="_blank"
      >
        <Typography
          variant="subtitle2"
          align="justify"
          color="textPrimary"
          styles={styles.typo}
        >
          {/* <Link componen="button" > */}
          Shujaat bhai zindabad Click Here For the Github Repository Don't
          Forget to give me a Star 🌟
          {/* </Link> */}
        </Typography>
      </Link>
    </div>
  );
};

export default Github;
