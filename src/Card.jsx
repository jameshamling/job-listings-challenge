import React from 'react'
import styles from './styles/Card.module.css'
import CardText from './CardText.jsx'
import CardFilters from './CardFilters.jsx'

function Card() {
    return (
        <div className={styles.card_container}>
            <div className={styles.logo_container}>
                <img src="/assets/images/account.svg" alt="account logo" className={styles.logo}/>
            </div>
            <CardText />
            <CardFilters />
        </div>
    )
}

export default Card