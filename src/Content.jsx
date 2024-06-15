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

    const allData = data.map(item => {
        return {
            data: item, 
            filters: [item.role, item.level, ...item.tools, ...item.languages]
        }
    })

    const allCards = allData.map(item => <Card addFilter={handleAddFilter} key={item.data.id} data={item.data} filters={item.filters} />)

    //filter cards based on filterList
    const filteredData = allData.filter(item => item.filters.some(filter => filterList.includes(filter)))
    const filteredCards = filteredData.map(item => <Card addFilter={handleAddFilter} key={item.data.id} data={item.data} filters={item.filters} />)

    return (
        <div className={styles.content_container}>
            <FilterBox filterList={filterList} removeFilter={handleRemoveFilter} clearFilters={clearFilters}/>
            {filterList.length > 0 ? filteredCards : allCards}
        </div>
    )
}

export default Content