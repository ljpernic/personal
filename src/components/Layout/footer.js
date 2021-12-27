import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://www.leonperniciaro.com" className="footer-text">
          © {new Date().getFullYear()}
          {` `} Leon Perniciaro. All rights reserved.
        </a>
      </footer>
    )
  }
}
export default Footer
