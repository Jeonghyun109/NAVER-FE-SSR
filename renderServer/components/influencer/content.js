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
                        <div>
                            {influencer["keywords"][0]["title"]} {influencer["keywords"][1]["value"]} {influencer["keywords"][2]["value"]} {influencer["keywords"][3]["value"]}
                        </div>
                    </div>
                )
            })}
        </>  
    )
}

export default content
