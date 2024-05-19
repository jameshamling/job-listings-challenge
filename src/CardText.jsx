import React from 'react'
import CardTag from './CardTag'
import styles from './styles/CardText.module.css'

function CardText() {
    return (
        <div className={styles.text_container}>
            <div className={styles.header_container}>
                <p className={styles.company}>Account</p>
                <div className={styles.tag_container}>
                    <CardTag name="New!"/>
                    <CardTag name="Featured"/>
                </div>
            </div>
            <p className={styles.role}>Junior Frontend Developer</p>
            <p className={styles.facts}>1d ago • Full Time • USA Only</p>
        </div>
    )
}

export default CardText