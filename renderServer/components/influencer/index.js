import React from 'react'
import styles from './index.module.scss'
import Filter from './filter'
import Content from './content'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function index(props) {

    return (
        <div className = {styles.influencerBody}>
            <div className = {styles.title_area}>
                <h2 className = {styles.title}>
                    인플루언서 
                    {/* <i className={"fas fa-exclamation-circle " + styles.alert}></i> */}
                    <ErrorOutlineIcon className = {styles.alert} sx = {{ color: "#0068c3", fontSize: "18px" }}/>
                </h2>
                <div className = {styles.subtitle}><a href="https://in.naver.com/" className = {styles.Link}>서비스 홈 바로가기</a></div>
            </div>
            <Filter props = {props.influencer}/>
            <Content props = {props.influencer}/>
        </div>
    )
}

export default index
