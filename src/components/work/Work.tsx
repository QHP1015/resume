import React from 'react'
import styles from './Work.module.less'

type WorkPropsType = {
    name: string;
    info: string;
    icon: string;
};

const workData = [
    {
        campany: '唱游数据科技有限公司',
        time: '2021.6--2021.8',
        job: '前端开发',
        info: '公司主要业务为旅游相关数据大屏展示与交互，在实习中主要负责公司大屏项目以及公司内部管理系统的开发',
        works: [
            '基于Echarts开发图表组件；',
            '实现UI提供的设计稿；',
            '与后端数据进行联调',
        ]
    }
]


export const Work = (props: WorkPropsType) => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>实习经历</div>
            <div className={styles.content}>
                {workData.map((item, index) => (
                    <div className={styles.item}>
                        <div className={styles.overview}>
                            <div className={styles.time}>{item.time}</div>
                            <div className={styles.name}>{item.campany}</div>
                            <div className={styles.tag}>{item.job}</div>
                        </div>
                        <div className={styles.info}>项目介绍：{item.info}</div>
                        <div className={styles.works}>
                            工作描述：{item.works.map((item, index) => (
                                <div className={styles.work}>
                                    <div className={styles.text}>{index + 1}、{item}</div>
                                </div>
                            ))}
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}
