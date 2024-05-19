import React from 'react'
import CardFilter from './CardFilter'
import styles from './styles/CardFilters.module.css'

function CardFilters() {
    return (
        <div className={styles.filters_container}>
            <CardFilter name='Frontend' selected={true}/>
            <CardFilter name='Junior' selected={false}/>
            <CardFilter name='React' selected={false}/>
            <CardFilter name='Sass' selected={false}/>
            <CardFilter name='JavaScript' selected={false}/>
        </div>
    )
}

export default CardFilters