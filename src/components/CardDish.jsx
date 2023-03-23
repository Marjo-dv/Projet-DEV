import '../styles/CardDishStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function CardDish ({ dish }) {
  console.log('heloo')
  const attributes = dish.attributes

  let imageURL = ''
  if (attributes.image) {
    imageURL = IMAGE_URL + attributes.image.data.attributes.formats.thumbnail.url
  } else {
    imageURL = 'http:via.placeholder.com/300x150'
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <img src={imageURL} alt='img-restaurant' />
      </div>

      <div className='card-body'>
        <h4>{attributes.name}</h4>
        <p>{attributes.description}</p>
        <b>{attributes.price}0 €</b>
      </div>

      <div className='card-footer'>
        <button>Ajouter au panier</button>
      </div>
    </div>
  )
}
export default CardDish
