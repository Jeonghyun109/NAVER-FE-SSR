import React from 'react'
import styles from "./index.module.scss";
import Header from "./header";
import Images from "./images";
import Body1 from './body1';
import Body2 from './body2';

export default function CulturalAsset({props}) {

    return (
        <>
        <div className = {styles.container}>
            <div className = {styles.maincard}>
                <Header props = {props}/>
                <Images props = {props}/>
                <Body1 props = {props}/>
                <Body2 props = {props}/>
                <br/><br/>
            </div>
            <br/>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        </>
    )
}
