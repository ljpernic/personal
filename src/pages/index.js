import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import { graphql } from 'gatsby'

class IndexPage extends Component {
  state = {
    smallScreen: false,
    modal: { name: "" },
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth <= 840 })
  }

  openModal(e) {
    this.setState({ modal: e })
    document.getElementById("modal").style.display = "block"
  }

  closeModal() {
    document.getElementById("modal").style.display = "none"
  }
  render() {
    let indexData = this.props.data.allIndexJson.nodes[0]
    console.log(this.props.data)
    let homeItems = []
    let i = 0
    indexData.home_items.forEach(item => {
      homeItems.push(
        <div
          key={i}
          onClick={this.openModal.bind(this, item)}
          onKeyDown={this.openModal.bind(this, item)}
          aria-hidden="false" 
          role="presentation"
          className={
            this.state.smallScreen ? "grid-item-small" : "home-grid-item"
          }
          style={ this.state.smallScreen ? 
            {
              backgroundImage: `url(${item.imageSoc})`,
              backgroundSize: "100%",
            } : {
              backgroundImage: `url(${item.imageSoc})`, 
              backgroundSize: "100%",
            }
          }
          ></div>
      )
      i++
    })
    return (
      <Layout page={"home"}>
        <h1 className="title">{indexData.title}</h1>
        <div className="home-main">
          <div className="text-center">{indexData.text}</div>
          <div className="text-center">{indexData.secondText}</div>
          <div className="divider"></div>
           <h2 className="subtitle">{indexData.subtitle}</h2>
          <div
            className={
              this.state.smallScreen
                ? "grid-container-small"
                : "home-grid-container"
            }
          >
            {homeItems}
          </div>
        </div> 
        <div id="modal" className="modal" onClick={this.closeModal} onKeyDown={this.closeModal} aria-hidden="false" role="presentation">
          <div
            className={
              this.state.smallScreen ? "modal-content-small" : "modal-content"
            }
          >
            <span className="modal-close">&times;</span>
            <div className="modal-grid-container">
              <div className="modal-grid-item-left">
                <span className="modal-title">{this.state.modal.name}</span>
                <p className="modal-text">{this.state.modal.description}</p>
                <p className="modal-text">
                  <a href={this.state.modal.link}>Find the project here</a>
                </p>
                <p className="modal-text">
                  Status: {this.state.modal.projStatus}
                </p>
              </div>
              <div className="modal-grid-item-right">
                <img
                  src={this.state.modal.imageSquare}
                  alt={this.state.modal.name}
                  className="modal-image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default IndexPage

export const query = graphql`
  query {
    allIndexJson {
      nodes {
        title
        description
        text
        secondText
        subtitle
        home_items {
          name
          description
          projStatus
          link
          imageSquare
          imageSoc
        }
      }
    }
  }
`
