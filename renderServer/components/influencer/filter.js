import React from 'react'
import styles from './filter.module.scss'

function filter({props}) {
    return (
        <div className = {styles.filterDiv}>
            {props["tab-lists"].map((tab, idx) => {
                if(idx === 0){
                    return (
                        <a className = {styles.link} key = {idx}>
                            <div className={styles.tabFirst}>
                                <span className = {styles.tabTitle}>{tab["title"]}</span> <span className = {styles.tabSubTitle}>{tab["subtitle"]}</span>
                            </div>
                        </a>
                    )
                }
                return (
                    <a href = {tab["url"]} className = {styles.link} key = {idx}>
                        <div className={styles.tabs}>
                            <img src = {tab["image"]} className = {styles.tabThumbnail} alt = {idx}/>
                            <span className = {styles.tabTitleTabs}>{tab["title"]}</span> <span className = {styles.tabSubTitleTabs}>{tab["subtitle"]}</span>            
                        </div>
                    </a>
                );
            })}
        </div>
    )
}

export default filter
