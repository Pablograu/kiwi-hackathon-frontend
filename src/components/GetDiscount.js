import React from 'react'


export default function GetDiscount() {
  return (
    <div className="getDiscount">
      <div>
        <img src={process.env.PUBLIC_URL + '/15_image.png'} alt="landscape"/>
      </div>
      <div>
        <h2>Get up to 15% discount in Kiwi.com</h2>
        <p>You can get up to 15% discount in every booking you make at kiwi.com</p>
        <p>More bookings in kiwi.com also means increase chances of you being the winer of one of the four trips</p>
      </div>
    </div>
  )
}
