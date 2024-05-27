import { useState, useEffect } from 'react'
import React from 'react'
import FilterBox from './FilterBox.jsx'
import Card from './Card.jsx'
import styles from './styles/Content.module.css'

function Content() {
    const [filterList, setFilterList] = useState([])

    const handleAddFilter = (e) => {
        const filter = e.target.closest('div')
        setFilterList((prevList) => {
            if (filterList.some(filterName => filterName == filter.id)) {
                return [...prevList]
            } else {
                return [...prevList, filter.id]
            }
        })
    }

    const handleRemoveFilter = (e) => {
        const filter = e.target.closest('.filterTagContainer')
        setFilterList((prevList) => prevList.filter(name => name !== filter.id))
    }

    return (
        <div className={styles.content_container}>
            <FilterBox filterList={filterList} removeFilter={handleRemoveFilter}/>
            <Card addFilter={handleAddFilter}/>
        </div>
    )
}

export default Content