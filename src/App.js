import logo from './logo.svg';
import './styles/variables.css';
import './App.css';
import Clock from './components/Clock';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { async } from 'q';
import axios from 'axios';

function App() {
  // On déclare une variable (restaurants) qui va contenir nos restaurants
  // On obtient une méthode (setRestaurants) permettant de mettre à jour les restaurants et de rafraichir l'affichage 
  const [restaurant, setRestaurants] = useState()

  // Méthode du cycle de vie d'un composant React permettant d'effectuer une action du montage du composant 
  // Le montage c'est l'apparition du composant à l'écran, or le démontage c'est pour le retirer de l'écran
  useEffect (() => {
    // On crée une méthode pour récupérer les données provenant du backend (Strapi)
    const loadData = async () => {
      //On récupère les données du backend avec la librairie Axios (c'est un appel HTTP)
      const response = await axios.get('http://localhost:1337/api/restaurants?populate=*') // ?populate=* => pour récupérer toutes les données 
      // On vérifie que l'appel d'API s'est bien passé (status = 200 = ok)
      if (response.status === 200){
        // Si l'appel d'API est ok, on enregistre les restaurants dans la variable "restaurants" 
        const data = response.data.data
        setRestaurants(data)
      }
    }
    // On appelle la méthode créée précédemment 
    loadData()
  }, [])

  return (
    <div className="App">
      <Header/>
      <main>
        <Clock/>
        {
          // On vérifie qu'on a bien récupérer les restaurants
          // On créer une boucle sur le tableau de restaurants grâce à la fonction "map()"
          // On retourne pour chaque restaurant une Card pour afficher son contenu
          restaurant && restaurant.map(restaurant => {
            return(
              <Card restaurant={restaurant} />
            )
          })
        }
      </main>
      <Footer/>        
    </div>
  );
}

export default App;
