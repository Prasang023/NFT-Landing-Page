import React from "react"
import NFT from "../assets/NFT.png"

const Hometop = () => {
  return (
    <div className="videoContainer">
      <div className="videoContent">
        <h1>The only NFT <br></br>Marketplace you need</h1>
        <div className="vidbutton">
          <button className="btn btnfilled">Create Collection</button>
          <button className="btn btnborder">Explore Marketplace</button>
        </div>
      </div>
      <img src={NFT} width="500" height="500" className="videoImg" alt="" />
    </div>
  )
}

export default Hometop
