import { useState } from 'react'
import React from 'react'
import FilterBox from './FilterBox.jsx'
import Card from './Card.jsx'
import data from './data.json'
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

    const clearFilters = () => {
        setFilterList([])
    }

    const cards = data.map(item => <Card addFilter={handleAddFilter} key={item.id} data={item} />)

    return (
        <div className={styles.content_container}>
            <FilterBox filterList={filterList} removeFilter={handleRemoveFilter} clearFilters={clearFilters}/>
            {cards}
        </div>
    )
}

export default Content