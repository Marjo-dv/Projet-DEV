import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/RestaurantStyle.css'
import CardRestaurant from '../components/CardRestaurant'
import CardMap from '../components/CardMap'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate=*`)
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
      <CardMap />
      <pre>{JSON.stringify(restaurant, null, 2)}</pre>
    </>
  )
}

export default Restaurant
