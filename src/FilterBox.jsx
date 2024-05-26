import React from 'react'
import FilterTag from './FilterTag'
import styles from './styles/FilterBox.module.css'

function FilterBox() {
    return (
        <div className={styles.filterbox_container}>
            <div className={styles.filter_tags}>
                <FilterTag tag='Frontend'/>
                <FilterTag tag='CSS'/>
                <FilterTag tag='JavaScript'/>
            </div>
            <p className={styles.clear}>Clear</p>
        </div>
    )
}

export default FilterBox