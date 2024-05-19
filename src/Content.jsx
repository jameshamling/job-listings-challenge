import React from 'react'
import Card from './Card.jsx'
import styles from './styles/Content.module.css'

function Content() {
    return (
        <div className={styles.content_container}>
            <Card />
        </div>
    )
}

export default Content