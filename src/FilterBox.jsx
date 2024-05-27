import React from 'react'
import FilterTag from './FilterTag'
import styles from './styles/FilterBox.module.css'

function FilterBox({filterList, removeFilter}) {

    const filters = []

    filterList.map((filter, i) => {
        filters.push(<FilterTag name={filter} key={i} removeFilter={removeFilter}/>)
    })

    return (
        <div className={styles.filterbox_container}>
            <div className={styles.filter_tags}>
                {filters}
            </div>
            <p className={styles.clear}>Clear</p>
        </div>
    )
}

export default FilterBox