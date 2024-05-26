import React from 'react'
import styles from './styles/FilterTag.module.css'

function FilterTag({tag}) {

    return (
        <div className={styles.filtertag_container}>
            <div className={styles.text_container}>
                <p className={styles.text}>{tag}</p>
            </div>
            <div className={styles.img_container}>
                <img src='/assets/images/icon-remove.svg' alt='close'/>
            </div>
        </div>
    )
}

export default FilterTag