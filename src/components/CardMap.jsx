/* function CardMap ({ adresse }) {
  console.log(adresse)
  return (
    <div className='localisation'>
      <h3>Où se situe le restaurant :</h3>
      <a href='https://goo.gl/maps/1udzDytEgdkvdCCa8' />
      <iframe
        width='100%'
        height='300'
      />
    </div>
  )
}

export default CardMap */

function CardMap ({ address }) {
  console.log(address)
  return (
    <div className='address'>
      <h2>OÙ NOUS SITUER :</h2>
      <div className='map'>
        <iframe
          width='100%'
          height='300'
          src={`https://maps.google.com/maps?q=${address.street}&hl=fr&z=14&amp&output=embed`}

        />
      </div>
    </div>
  )
}

export default CardMap
