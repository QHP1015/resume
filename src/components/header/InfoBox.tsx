import React, { FC, ReactElement } from "react";
import styles from "./InfoBox.module.less";

type PropsType = {
  el: ReactElement;
  title: string;
  message: string;
};

export const InfoBox: React.FC<PropsType> = props => {
  return (
    <>
      <div className={styles.infoBox}>
<div className={styles.icon}> {props.el}</div>
        <div className={styles.title}>{props.title}：</div>
        <div>{props.message}</div>
      </div>
    </>
  );
};

