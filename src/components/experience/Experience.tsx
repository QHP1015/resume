import React from 'react'
import styles from './Experience.module.less'
import data from "@/data.json";

type ExperiencePropsType = {
    name: string;
    info: string;
    icon: string;
};

export const Experience = (props: ExperiencePropsType) => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>项目经历</div>
            <div className={styles.content}>
                {data?.experienceData.map((item:any, index:any) => (
                    <div className={styles.item}>
                        <div className={styles.overview}>
                            <div className={styles.time}>{item.time}</div>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.tag}>{item.tag}</div>
                        </div>
                        <div className={styles.info}>项目介绍：{item.info}</div>
                        <div className={styles.works}>
                            工作描述：{item.works.map((item:any, index:any) => (
                                <div className={styles.work}>
                                    <div className={styles.text}>{index + 1}、{item}</div>
                                </div>
                            ))}
                        </div>
                        {index === 0 && <div className={styles.separator}></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}
