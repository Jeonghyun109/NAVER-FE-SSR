import { StyleTwoTone } from '@mui/icons-material'
import React from 'react'
import styles from './body2.module.scss'

function body2({props}) {
    return (
        <div className = {styles.body2div}>
            <table className = {styles.titleTable}>
                <tbody>
                    <tr key = "1">
                        <td className = {styles.nearAssets} key = "title">
                            <b>
                                주변 문화재
                            </b>
                        </td>
                        <td key = "arrow" className = {styles.arrow}>
                            <a href = {props["tab-lists"][3]["url"]} style = {{ color: "#777" }}><i className="fas fa-arrow-right"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className = {styles.imgDiv}>
                <ul className={styles.imgList}>
                    {props["similar"].map((assetInfo, idx) => {
                        if(idx === 0){
                            return (
                                <li className={styles.imgFirst} key={idx}>
                                    <a href = {assetInfo["href"]}>
                                        <img src = {assetInfo["src"]} className = {styles.img} alt = {assetInfo["title"]}/>
                                    </a>
                                    <div className = {styles.title}>
                                        <strong className = {styles.titleStrong}>
                                            {assetInfo["title"]}
                                        </strong>
                                    </div>
                                    <div className = {styles.sub_title}>
                                        {assetInfo["sub_text"]}
                                    </div>
                                </li>
                            )
                        }
                        else if(idx === 9){
                            return (
                                <li className={styles.imgLast} key={idx}>
                                    <a href = {assetInfo["href"]}>
                                        <img src = {assetInfo["src"]} className = {styles.img} alt = {assetInfo["title"]}/>
                                    </a>
                                    <div className = {styles.title}>
                                        <strong className = {styles.titleStrong}>
                                            {assetInfo["title"]}
                                        </strong>                                    
                                    </div>
                                    <div className = {styles.sub_title}>
                                        {assetInfo["sub_text"]}
                                    </div>
                                </li>
                            )
                        }
                        return (
                            <li className={styles.imgBox} key={idx}>
                                <a href = {assetInfo["href"]}>
                                    <img src = {assetInfo["src"]} className = {styles.img} alt = {assetInfo["title"]}/>
                                </a>
                                <div className = {styles.title}>
                                    <strong className = {styles.titleStrong}>
                                        {assetInfo["title"]}
                                    </strong>
                                </div>
                                <div className = {styles.sub_title}>
                                    {assetInfo["sub_text"]}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <br/>
        </div>
    )
}

export default body2
