import React from 'react'
import styles from './Skill.module.less'

type SkillPropsType = {
    name: string;
    info: string;
    icon: string;
};

const skillData = [
    {
        name: 'WebGL',
        info: '熟悉HTML5，CSS3，JavaScript，对交互设计等用户体验有实践经验，能编写可复用的通用组件；',
        icon: 'icon-html',
    },
    {
        name: 'CSS',
        info: '掌握使用React，Redux-Toolkit，React-Router，Antd等开发专用组件及页面；',
        icon: 'icon-css',
    },
    {
        name: 'JavaScript',
        info: '熟练掌握JavaScript，能够编写符合W3C标准的页面；',
        icon: 'icon-js',
    },
    {
        name: 'TypeScript',
        info: '掌握基本数据结构，掌握Node.js标准库的使用；',
        icon: 'icon-ts',
    },
    {
        name: 'React',
        info: '掌握Three.js，WebGL前端3D知识，能基于Three.js开发相应3D应用；',
        icon: 'icon-react',
    },
    {
        name: 'Vue',
        info: '了解Babel，Webpack等工具的使用',
        icon: 'icon-vue',
    },
]


export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>资质技能</div>
            <div className={styles.content}>
                {skillData.map((item, index) => (
                    <div className={styles.item}>
                        <div>{index + 1}、</div>
                        {/* <div className={styles.name}>{item.name}</div> */}
                        <div className={styles.info}>{item.info}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
