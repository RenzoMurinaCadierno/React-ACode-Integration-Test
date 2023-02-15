import React from "react";
import styles from "./Snippet.module.css";
import { cnp } from "hub";

export default function Snippet() {
  return (
    <button
      onClick={() => {
        alert(cnp.if(1, "!", "@#"));
      }}
      className={styles.Snippet_Button}
    >
      span from snippet
    </button>
  );
}
