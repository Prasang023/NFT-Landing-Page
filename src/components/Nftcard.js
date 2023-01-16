import React from "react"

const Nftcard = ({ imgsrc, title, author }) => {
  return (
    <div className="cardContainer">
      <div className="imgDiv">
        <img src={imgsrc} width="350px" height="426px" className="cardImg" />
      </div>
      <div className="cardText">
        <h5>{title}</h5>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default Nftcard
