import React from 'react'
import styles from './images.module.scss'

function images(props) {
    //TODO image 개수 알려주는 thumbnail
    return (
        <div className={styles.imgdiv}>
            <ul className={styles.img_list}>
            {props.common.imageList.map((imgInfo, idx) => {
                if (idx === 0) {
                return (
                    <li key={idx}>
                    <a href={props.common.imgURL}>
                        <img
                        className={styles.imgFirst}
                        src={imgInfo["src"]}
                        alt={imgInfo["alt"]}
                        />
                    </a>
                    </li>
                );
                } else if (idx === props.common.imageList.length - 1) {
                return (
                    <li key={idx}>
                    <a href={props.common.imgURL}>
                        <img
                        className={styles.imgLast}
                        src={imgInfo["src"]}
                        alt={imgInfo["alt"]}
                        />
                    </a>
                    </li>
                );
                } else {
                return (
                    <li key={idx}>
                    <a href={props.common.imgURL}>
                        <img
                        className={styles.img}
                        src={imgInfo["src"]}
                        alt={imgInfo["alt"]}
                        />
                    </a>
                    </li>
                );
                }
            })}
            </ul>
        </div>
    )
}

export default images
