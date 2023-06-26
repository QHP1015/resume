import React from "react";
import styles from "./Education.module.less";
import data from "@/data.json";

type EducationPropsType = {
  name: string;
  info: string;
  icon: string;
};

export const Education = (props: EducationPropsType) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>教育背景</div>
      <div className={styles.content}>
        {data?.educationData.map((item: any) => (
          <div className={styles.item}>
            <div className={styles.overview}>
              <div className={styles.time}>{item.time}</div>
              <div className={styles.name}>{item.school}</div>
              <div className={styles.tag}>{item.major}</div>
            </div>
            <div className={styles.info}>主修课程：{item.majorCourse}</div>
            <div className={styles.gpa}>{item.GPA}</div>
            <div className={styles.honor}>{item.honor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
