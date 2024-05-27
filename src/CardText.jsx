import React from 'react'
import CardTag from './CardTag'
import styles from './styles/CardText.module.css'

function CardText(props) {
    const { company, newTag, featured, position, postedAt, contract, location } = props

    return (
        <div className={styles.text_container}>
            <div className={styles.header_container}>
                <p className={styles.company}>{company}</p>
                <div className={styles.tag_container}>
                    {newTag && <CardTag name="New!"/>}
                    {featured && <CardTag name="Featured"/>}
                </div>
            </div>
            <p className={styles.role}>{position}</p>
            <p className={styles.facts}>{postedAt} • {contract} • {location}</p>
        </div>
    )
}

export default CardText