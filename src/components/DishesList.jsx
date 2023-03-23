import '../styles/CardDishStyle.css'
import CardDish from './CardDish'

function DishesList ({ dishes }) {
  return (
    <>
      <h2>LISTE DE REPAS :</h2>
      <div className='dishes-list'>
        {
          dishes.data.map(dish => {
            return (
              <CardDish key={dish.id} dish={dish} />
            )
          })
        }
      </div>
    </>
  )
}

export default DishesList
