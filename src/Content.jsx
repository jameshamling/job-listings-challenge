import React from 'react'
import FilterBox from './FilterBox.jsx'
import Card from './Card.jsx'
import styles from './styles/Content.module.css'

function Content() {
    return (
        <div className={styles.content_container}>
            <FilterBox />
            <Card />
        </div>
    )
}

export default Content