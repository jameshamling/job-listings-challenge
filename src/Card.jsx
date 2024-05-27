import React from 'react'
import styles from './styles/Card.module.css'
import CardText from './CardText.jsx'
import CardFilters from './CardFilters.jsx'

function Card(props) {
    const {addFilter, data} = props

    return (
        <div className={`${styles.card_container} ${data.featured && styles.featured}`}>
            <div className={styles.logo_container}>
                <img src={data.logo} alt={`${data.company} logo`} className={styles.logo}/>
            </div>
            <CardText company={data.company} newTag={data.newTag} featured={data.featured} position={data.position} postedAt={data.postedAt} contract={data.contract} location={data.location}/>
            <CardFilters addFilter={addFilter} filters={[data.role, data.level, ...data.tools, ...data.languages]}/>
        </div>
    )
}

export default Card