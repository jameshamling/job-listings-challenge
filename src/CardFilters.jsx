import React from 'react'
import CardFilter from './CardFilter'
import styles from './styles/CardFilters.module.css'

function CardFilters(props) {
    return (
        <div className={styles.filters_container}>
            <CardFilter name='Frontend' addFilter={props.addFilter}/>
            <CardFilter name='Junior' addFilter={props.addFilter}/>
            <CardFilter name='React' addFilter={props.addFilter}/>
            <CardFilter name='Sass' addFilter={props.addFilter}/>
            <CardFilter name='JavaScript' addFilter={props.addFilter}/>
        </div>
    )
}

export default CardFilters