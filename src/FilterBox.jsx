import React from 'react'
import FilterTag from './FilterTag'
import styles from './styles/FilterBox.module.css'

function FilterBox({filterList, removeFilter, clearFilters}) {

    const filters = []

    filterList.map((filter, i) => {
        filters.push(<FilterTag name={filter} key={i} removeFilter={removeFilter} />)
    })

    return (
        <div className={`${styles.filterbox_container} ${filterList.length === 0 ? styles.filterbox_hidden : ''}`}>
            <div className={styles.filter_tags}>
                {filters}
            </div>
            <p className={styles.clear} onClick={clearFilters}>Clear</p>
        </div>
    )
}

export default FilterBox