import React from 'react'
import styles from './styles/CardFilter.module.css'

function CardFilter(props) {
    const {name, addFilter} = props

    return (
        <div className={styles.filter_container} onClick={addFilter} id={name}>
            <p className={styles.text}>{name}</p>
        </div>
    )
}

export default CardFilter