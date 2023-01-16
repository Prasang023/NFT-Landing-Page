import React from "react"
import nft1 from "../assets/nft1.png"
import Nftcard from "./Nftcard"
import { nftList } from "./Nftpanel.data"

const Nftpanel = () => {
  return (
    <div className="nftpanel">
      <h3>Projects you'll love</h3>
      <div className="NftPanelContainer">

      {nftList.map((item) =>
      <Nftcard imgsrc={item.img} title={item.title} author={item.author}/>
      )
    }
    </div>
    </div>
  )
}

export default Nftpanel
