import React, { ReactElement } from "react";
import styles from "./Header.module.less";
import test from "@/assets/职业意向-01-01.png";
import { InfoBox } from "./InfoBox";
import data from "@/data.json";

type PropsType = {
  name: string;
  job: string;
  mobile: string;
  email: string;
};

export const Header: React.FC<PropsType> = props => {
  type InfoBoxPropsType = {
    icon: ReactElement;
    title: string;
    message: string;
  };

  function createInfoBox(params: [InfoBoxPropsType]): ReactElement[] {
    return params.map(item => (
      <InfoBox el={<div className='icon iconfont'>{item.icon}</div>} title={item.title} message={item.message} />
    ));
  }

  return (
    <div className={styles.header}>
      <div className={styles.name}>钱海蓬</div>
      <br />
      <div className={styles.message}>
      <div className={styles.textBox}>
        <div className={styles.title}>求职意向:</div>
        <div>前端工程师</div>
      </div>
      <div className={styles.messageBox}>{createInfoBox(data?.basicMessage)}</div>
      </div>
    </div>
  );
};
