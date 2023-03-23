import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/RestaurantStyle.css'
import CardRestaurant from '../components/CardRestaurant'
import CardMap from '../components/CardMap'
import DishesList from '../components/DishesList'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate[image][populate]=*&populate[dishes][populate]=*&populate[adresse][populate]=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurant(data)
      }
    }
    loadData()
  }, [])

  return restaurant && (
    <>
      <h1>FICHE DU RESTAURANT : {id}</h1>
      <CardRestaurant restaurant={restaurant} />
      <DishesList dishes={restaurant.attributes.dishes} />
      <CardMap address={restaurant.attributes.adresse} />
      {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}
    </>
  )
}

export default Restaurant
