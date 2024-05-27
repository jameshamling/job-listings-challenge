import React from 'react'
import styles from './styles/FilterTag.module.css'

function FilterTag({name, removeFilter}) {
    return (
        <div className={`filterTagContainer ${styles.filtertag_container}`} id={name}>
            <div className={styles.text_container}>
                <p className={styles.text}>{name}</p>
            </div>
            <div className={styles.img_container} onClick={removeFilter}>
                <img src='/assets/images/icon-remove.svg' alt='close'/>
            </div>
        </div>
    )
}

export default FilterTag