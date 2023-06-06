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
        {props.el}
        <div>{props.title}</div>
        <div>{props.message}</div>
      </div>
    </>
  );
};

