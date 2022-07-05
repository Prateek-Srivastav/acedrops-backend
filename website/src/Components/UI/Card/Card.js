import classes from './Card.module.css'

const Card = (props) => {

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.name}</h2>
      <p className={classes.para}>{props.text}</p>
      <button className={classes.btn}>More</button>
    </div>
  )
}

export default Card