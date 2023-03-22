import '../styles/HeaderStyle.css'

function Header () {
  return (
    <header className='navbar'>
      <div className='column-left'>
        <ul>
          <li>
            <a href='/'>Accueil</a>
          </li>
          <li>
            <a href='/restaurants'>Restaurants</a>
          </li>
          <li>
            <a href='/about'>A propos</a>
          </li>
        </ul>
      </div>

      <div className='column-middle'>
        <img src='delivery-man.png' alt='logo' />
      </div>

      <div className='column-right'>
        <ul>
          <li>
            <img src='instagram.png' />
          </li>
          <li>
            <img src='pinterest.png' />
          </li>
        </ul>
      </div>

    </header>
  )
}

export default Header
