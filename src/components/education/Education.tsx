import React from 'react'
import styles from './Education.module.less'

type EducationPropsType = {
    name: string;
    info: string;
    icon: string;
};

const educationData = [
    {
        school: '嘉兴学院',
        time: '2019.9--2023.6',
        major: '软件工程 | 本科',
        majorCourse: '主修课程：高级语言程序设计，移动互联开发，数据库系统原理，软件工程，软件系统分析与设计，大数据技术，云计算与虚拟化，安卓开发等',
        GPA: 'GPA：3.55/4.0',
        honor: '校内荣誉：获一次国家励志奖学金，六次学习优秀奖学金，电子商务竞赛省三等奖'

    }
]


export const Education = (props: EducationPropsType) => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>实习经历</div>
            <div className={styles.content}>
                {educationData.map((item, index) => (
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
    )
}
