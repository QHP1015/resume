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
        info: '熟练掌握WebGL，能够编写符合W3C标准的页面',
        icon: 'icon-html',
    },
    {
        name: 'CSS',
        info: '熟练掌握CSS3，能够编写符合W3C标准的页面',
        icon: 'icon-css',
    },
    {
        name: 'JavaScript',
        info: '熟练掌握JavaScript，能够编写符合W3C标准的页面',
        icon: 'icon-js',
    },
    {
        name: 'TypeScript',
        info: '熟练掌握TypeScript，能够编写符合W3C标准的页面',
        icon: 'icon-ts',
    },
    {
        name: 'React',
        info: '熟练掌握React，能够编写符合W3C标准的页面',
        icon: 'icon-react',
    },
    {
        name: 'Vue',
        info: '熟练掌握Vue，能够编写符合W3C标准的页面',
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
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.info}>{item.info}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
