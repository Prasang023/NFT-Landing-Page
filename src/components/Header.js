import React, { useState } from "react"
import logo from "../assets/logo.png"
import { navbarList, connectionButton } from "./Header.data"
import { FaUser } from "react-icons/fa"
import { BiMenuAltRight, BiX } from "react-icons/bi"
// import { Link } from "react-router-dom"
import "@rainbow-me/rainbowkit/styles.css"

const Header = () => {
  const [navbarMobile, setNavbarMobile] = useState(false)
  return (
    <div className="navbarContainer">
      {navbarMobile ? null : (
        <>
          <div className="navbarLogo">
            {/* <Link to="/"> */}
            <img src={logo} width="50" height="50" alt="Logo" />
            {/* </Link> */}
          </div>

          <div className="navbarList">
            {navbarList.map((listItem, index) => (
              <div key={index} className="navbarItem">
                {/* <Link to={listItem.link}> */}
                <p>{listItem.name}</p>
                {/* </Link> */}
              </div>
            ))}
          </div>
          <div
            className="connectionbtn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* <Link to="/profile"> */}
            <div
              className="btn"
              style={{
                padding: "6px 8px",
                borderRadius: "100%",
                margin: "10px"
              }}
            >
              <FaUser size={18} />
            </div>
            {/* </Link> */}

            {connectionButton()}
          </div>
          <BiMenuAltRight
            className="navbarIcon"
            size={30}
            onClick={() => setNavbarMobile(!navbarMobile)}
          />
        </>
      )}

      {navbarMobile ? (
        <div className="navbarMobile">
          <BiX
            className="navbarMobileClose"
            onClick={() => setNavbarMobile(!navbarMobile)}
            size={30}
          />
          {navbarList.map((item, index) => (
            <h3 className="navbarMobileItem" key={index}>
              {item.name}
            </h3>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Header
