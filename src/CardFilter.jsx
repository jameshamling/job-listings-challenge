import React from 'react'
import styles from './styles/CardFilter.module.css'

function CardFilter(props) {
    const {name, selected} = props

    return (
        <div className={styles.filter_container}>
            <p className={styles.text}>{name}</p>
        </div>
    )
}

export default CardFilter