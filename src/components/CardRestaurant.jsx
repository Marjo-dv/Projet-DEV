import '../styles/RestaurantStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function CardRestaurant ({ restaurant }) {
  const attributes = restaurant.attributes
  let imageUrl = ''
  if (attributes.image) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'http:via.placeholder.com/300x150'
  }

  return (
    <div className='fiche'>
      <div className='column-left'>
        <img src={imageUrl} />
      </div>
      <div className='column-right'>
        <h2>{restaurant.attributes.name}</h2>
        <h3>Spécialité</h3>
        <p>{restaurant.attributes.description}</p>
        <p>{restaurant.attributes.adresse.street}</p>
        <p>{restaurant.attributes.adresse.postcode}, {restaurant.attributes.adresse.city}</p>
        <p>{restaurant.attributes.adresse.phone}</p>
        <p>{restaurant.attributes.adresse.email}</p>
        <button>Commander</button>
      </div>
    </div>
  )
}

export default CardRestaurant
