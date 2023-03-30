import React from "react"

//=============================
// Component to be rendered
//=============================
const Header = () => {
  return <div></div>
}

//=============================
// Brick Schema
//=============================
Header.schema = {
  name: "header",
  label: "Header",
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default Header
