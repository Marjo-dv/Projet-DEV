import '../styles/CardStyle.css'
function Card ({ restaurant }) {
  const attributes = restaurant.attributes
  return (
    <div className='card'>
      <div className='card-header'>
        <img src='http://via.placeholder.com/300x150' />
      </div>

      <div className='card-body'>
        <h4>{attributes.name}</h4>
        <p>{attributes.description}n</p>
      </div>

      <div className='card-footer'>
        <button> Ajouter au panier</button>
      </div>
    </div>
  )
}

export default Card
