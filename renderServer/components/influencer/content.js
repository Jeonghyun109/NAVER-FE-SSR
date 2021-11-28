import React from 'react'
import styles from './content.module.scss'

function content({props}) {

    // const renderKeywords(dict){

    // }

    const influencers = props["influencers"]
    return (
        <>
            {influencers.map((influencer) => {
                return(
                    <div className = {styles.contentBody}>
                        <table className = {styles.headerBody}>
                            <tbody>
                                <tr>
                                    <td rowSpan = {2} className = {styles.headerThumbnail}>
                                        <img src = {influencer["thumbnail"]["image"]} className = {styles.influencerThumbnail} alt ="thumbnail"></img>
                                    </td>
                                    <td className = {styles.headerDetail}>
                                        <span className = {styles.title}>{influencer["title"]}</span> &nbsp; <span className = {styles.fans}>{influencer["subtitles"]["fans"]}</span>
                                    </td>
                                    <td rowSpan = {2} className = {styles.fanTab}>
                                        <div className = {styles.fanBtn}>
                                            <i className="fas fa-check"></i> 팬
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className = {styles.title}>{influencer["subtitles"]["title"]}</span> &nbsp; <span className = {styles.fans}>{influencer["subtitles"]["expertise"]}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className = {styles.keywords}>
                            <b>{influencer["keywords"][0]["title"]}</b> {influencer["keywords"][1]["value"]} {influencer["keywords"][2]["value"]} {influencer["keywords"][3]["value"]}
                        </div>
                        <div className = {styles.imgDiv}>
                            <ul className={styles.imgList}>
                                {influencer["images"].map((imgsrc, idx) => {
                                    if(idx === 0){
                                        return (
                                            <li className={styles.imgFirst} key={idx}>
                                                <a href = {props["link"]}>
                                                    <img src = {imgsrc} className = {styles.img} alt = "thumbnail"/>
                                                </a>
                                            </li>
                                        )
                                    }
                                    else if(idx === (influencer["images"].length - 1)){
                                        return (
                                            <li className={styles.imgLast} key={idx}>
                                                <a href = {props["link"]}>
                                                    <img src = {imgsrc} className = {styles.img} alt = "thumbnail"/>
                                                </a>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li className={styles.imgBox} key={idx}>
                                            <a href = {props["link"]}>
                                                <img src = {imgsrc} className = {styles.img} alt = "thumbnail"/>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </>  
    )
}

export default content
