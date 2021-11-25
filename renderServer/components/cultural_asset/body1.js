import { style } from '@mui/system';
import React from 'react'
import styles from './body1.module.scss'

function body1({props}) {

    function renderInformation(lst){
        var keys = Object.keys(lst);
        var temp = []
        for (var i = 0; i<keys.length; i++){
            temp.push(
                <tr key = {i}>
                    <td className = {styles.infoHeading} key = {"td" + i}>
                        {keys[i]}
                    </td>
                    <td key = {"td" + i}>
                        {lst[keys[i]]}
                    </td>
                </tr>
            );
        }
        return(temp);
    }

    return (
        <div className = {styles.bodyDiv}>
            <div className = {styles.basicInfo}>
                <table className = {styles.titleTable}>
                    <tbody>
                        <tr key = "1">
                            <td className = {styles.nearAssets} key = "title">
                                <b>기본정보</b>
                            </td>
                            <td key = "arrow" className = {styles.arrow}>
                                <a href = {props["tab-lists"][1]["url"]} style = {{ color: "#777" }}><i className="fas fa-arrow-right"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className = {styles.details}>
                    <table>
                        <tbody>
                            {renderInformation(props["information"])}
                        </tbody>
                    </table>
                </div>
                <div style ={{fontSize: "12pt", color: "#444"}}>
                    {props["description-text"]}
                </div>
                <div className = {styles.btn}>
                    <a href = {props["place"]}><span className = {styles.mapBtn}><i className="fas fa-map-marker-alt" style ={{ color: "#06c755" }}></i> 지도</span></a>
                    <span className = {styles.shareBtn}><i className="fas fa-share-square"></i></span>
                </div>
            </div>
        </div>
    )
}

export default body1
