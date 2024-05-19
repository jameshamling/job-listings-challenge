import React from 'react'
import styles from './styles/CardTag.module.css'

function CardTag(props) {
    const {name} = props

    const styleName = name === 'New!' ? 'primary' : 'secondary'

    return (
        <div className={styles[styleName]}>
            <p className={styles.text}>{name}</p>
        </div>
    )
}

export default CardTag

