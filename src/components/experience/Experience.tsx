import React from 'react'
import styles from './Experience.module.less'

type ExperiencePropsType = {
    name: string;
    info: string;
    icon: string;
};

const experienceData = [
    {
        name: '旅游电商网站',
        time: '2022.6--2022.8',
        tag: '前端开发',
        info: '该项目是一个旅游电商网站，提供给用户各地的旅游项目，提供浏览，搜索产品，加入购物车，购买等功能，网站使用TypeScript + React框架搭配Ant-Design UI库共同开发，使用Redux-Toolkit进行状态管理，使用JWT进行用户认证',
        works: [
            '负责系统架构设计、数据库结构设计、各个模块开发、核心代码等设计及实现；',
            '负责系统架构设计、模块开发、核心代码等设计及实现；',
            '负责前端页面开发',
        ]
    },
    {
        name: 'Web3D智慧校园',
        time: '2022.11--2023.5',
        tag: '3D开发',
        info: '该项目是一个基于Web3D的智慧校园，提供给用户各种校园场景，提供浏览，搜索场景，加入购物车，购买等功能，网站使用TypeScript + React框架搭配Ant-Design UI库共同开发，使用Redux-Toolkit进行状态管理，使用JWT进行用户认证',
        works: [
            '负责系统架构设计、数据库结构设计、各个模块开发、核心代码等设计及实现；',
            '负责系统架构设计、模块开发、核心代码等设计及实现；',
            '负责前端页面开发',
        ]
    }
]


export const Experience = (props: ExperiencePropsType) => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>项目经历</div>
            <div className={styles.content}>
                {experienceData.map((item, index) => (
                    <div className={styles.item}>
                        <div className={styles.overview}>
                            <div className={styles.time}>{item.time}</div>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.tag}>{item.tag}</div>
                        </div>
                        <div className={styles.info}>项目介绍：{item.info}</div>
                        <div className={styles.works}>
                            工作描述：{item.works.map((item, index) => (
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
