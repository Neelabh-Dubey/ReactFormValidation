import styles from './Card.module.css';

function Card(props){
    return(
        <div className={styles.card}>
            <span className={styles.span}>Name: {props.person.name}</span>
            <span className={styles.span}>Age: {props.person.age}</span>
        </div>
    )
}

export default Card;