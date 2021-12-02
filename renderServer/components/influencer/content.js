import React from 'react'
import styles from './content.module.scss'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function content({props}) {

    const influencers = props["influencers"]
    return (
        <>
            {influencers.map((influencer) => {
                return(
                    <div className={styles.contentWrapper}>
                        <div className = {styles.userBox}>
                            <div className = {styles.userThumbnail}>
                                {influencer.thumbnail.highlighted === "Gold" && (
                                    <>
                                        <a href={influencer.thumbnail.url}>
                                            <img src = {influencer.thumbnail.image} className = {styles.influencerThumbnail} alt ="thumbnail" style = {{ padding: "2px", border: "2px solid gold" }}></img>
                                        </a>
                                        <div className={styles.crown} style = {{ backgroundColor: "gold" }}>
                                            <i className="fas fa-crown"></i>
                                        </div>
                                    </>
                                )}
                                {influencer.thumbnail.highlighted === "Silver" && (
                                    <>
                                        <a href={influencer.thumbnail.url}>
                                            <img src = {influencer.thumbnail.image} className = {styles.influencerThumbnail} alt ="thumbnail" style = {{ padding: "2px", border: "2px solid silver" }}></img>
                                        </a>
                                        <div className={styles.crown} style = {{ backgroundColor: "silver" }}>
                                            <i className="fas fa-crown"></i>
                                        </div>
                                    </>
                                )}
                                {influencer.thumbnail.highlighted === "Bronze" && (
                                    <>
                                        <a href={influencer.thumbnail.url}>
                                            <img src = {influencer.thumbnail.image} className = {styles.influencerThumbnail} alt ="thumbnail" style = {{ padding: "2px", border: "2px solid #CD7F32" }}></img>
                                        </a>
                                        <div className={styles.crown} style = {{ backgroundColor: "#CD7F32" }}>
                                            <i className="fas fa-crown"></i>
                                        </div>
                                    </>
                                )}
                                {influencer.thumbnail.highlighted === "None" && (
                                    <>
                                        <a href={influencer.thumbnail.url}>
                                            <img src = {influencer.thumbnail.image} className = {styles.influencerThumbnail} alt ="thumbnail" style = {{ padding: "2px", border: "2px solid white" }}></img>
                                        </a>
                                    </>
                                )}
                            </div>
                            <div className = {styles.btnArea} style = {{ color:props.colorScheme.main, borderColor: props.colorScheme.border }}>
                                <i className="far fa-smile" style = {{ marginRight: "5px", fontSize: "18px", fontWeight: "300" }}></i> 팬하기
                            </div>
                            <div className = {styles.userInner}>
                                <div className = {styles.userArea}>
                                    <a href = {influencer.thumbnail.url} className = {styles.name}>
                                        {influencer.title}
                                    </a>
                                    <span className = {styles.fanCount}>
                                        {influencer.subtitles.fans}
                                    </span>
                                </div>
                                <div className = {styles.userEtc}>
                                    <span style = {{ color: props.colorScheme.main }}>
                                        {influencer.subtitles.title}
                                    </span>
                                    <span className = {styles.bar}/>
                                    {influencer.subtitles.expertise}
                                </div>
                            </div>
                        </div>
                        <div className = {styles.detail}>
                            <div className = {styles.keywords} style = {{ color: props.colorScheme.main }}>
                                {influencer.keywords.map((keyword, idx) => {
                                    if(idx === 0){
                                        return(
                                            <span key = {idx}>
                                                {keyword.type === "Blog" && (
                                                    <i className="fas fa-stop" style = {{ marginRight: "5px" }}></i> //blog 아이콘이 없어서 그냥 박스로 대체
                                                )}
                                                {keyword.type === "YouTube" && (
                                                    <i className="fab fa-youtube" style = {{ marginRight: "5px" }}></i>
                                                )}
                                                {keyword.type === "Company" && (
                                                    <i className="fas fa-briefcase" style = {{ marginRight: "5px" }}></i>
                                                )}
                                                <b>{keyword.title}</b>
                                                <FiberManualRecordIcon sx = {{ color: props.colorScheme.border, fontSize: "4pt", marginBottom: "2.5pt", marginLeft: "5px", marginRight: "5px" }}/>
                                            </span>
                                        )
                                    }
                                    else{
                                        return(
                                            <span key = {idx}>
                                                <span key = {idx}>{keyword.value}</span>
                                                {idx !== (influencer.keywords.length - 1) && (
                                                    <FiberManualRecordIcon sx = {{ color: props.colorScheme.border, fontSize: "4pt", marginBottom: "2.5pt", marginLeft: "5px", marginRight: "5px" }}/>
                                                )}
                                            </span>
                                        )
                                    }
                                })}
                            </div>
                            <div className = {styles.viewDetail} style = {{ borderColor: props.colorScheme.border }}>
                                <i className="fas fa-chevron-down" style = {{ color: props.colorScheme.main }}></i>
                            </div>
                        </div>
                        <div className = {styles.imgDiv}>
                            <ul className={styles.imgList}>
                                {influencer["images"].map((imgsrc, idx) => {
                                    if(idx === 0){
                                        return (
                                            <li key={idx}>
                                                <a href = {influencer.link}>
                                                    <img src = {imgsrc} className = {styles.imgFirst} alt = "thumbnail"/>
                                                </a>
                                            </li>
                                        )
                                    }
                                    else if(idx === (influencer["images"].length - 1)){
                                        return (
                                            <li key={idx}>
                                                <a href = {influencer.link}>
                                                    <img src = {imgsrc} className = {styles.imgLast} alt = "thumbnail"/>
                                                </a>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={idx}>
                                            <a href = {influencer.link}>
                                                <img src = {imgsrc} className = {styles.img} alt = "thumbnail"/>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className = {styles.descArea}>
                            <a href = {influencer.link} className = {styles.descHeader}>
                                {influencer.description.title}
                            </a>
                            <a href = {influencer.link} className = {styles.descDesc}>
                                {influencer.description.descriptionText}
                            </a>
                            <div className = {styles.date}>
                                {influencer.description.date}
                            </div>
                        </div>
                        <a href= {influencer.description.moreUrl} style = {{ textDecoration: "none" }}>
                            <div className = {styles.additionalContent}>
                                <i className="fas fa-link" style = {{ marginRight: "10px" }}></i>
                                <b>{influencer.title}</b>
                                {influencer.description.moreText}
                                <span className = {styles.Right}>
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </div>
                        </a>
                    </div>
                )
            })}
        </>  
    )
}

export default content
