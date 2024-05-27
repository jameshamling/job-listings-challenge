import React from 'react'
import CardFilter from './CardFilter'
import styles from './styles/CardFilters.module.css'

function CardFilters(props) {
    const {addFilter, filters} = props

    const cardFilters = filters.map(filter => <CardFilter name={filter} key={filter} addFilter={addFilter}/>)

    return (
        <div className={styles.filters_container}>
            {cardFilters}
        </div>
    )
}

export default CardFilters