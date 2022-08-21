import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import { graphql } from 'gatsby'

class WorkPage extends Component {
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
    let workData = this.props.data.allWorkJson.nodes[0]
    let workItems = []
    let i = 0
    workData.work_items.forEach(item => {
      workItems.push(
        <div
          key={i}
          onClick={this.openModal.bind(this, item)}
          onKeyDown={this.openModal.bind(this, item)}
          className={
            this.state.smallScreen ? "grid-item-small" : "work-grid-item"
          }
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "100%",
          }}
        ></div>
      )
      i++
    })
    return (
      <Layout page={"work"}>
        <h1 className="title">{workData.title}</h1>
        <div className="text">{workData.text}</div>
        <div                                                                              //This div is for making the workItems them a single column on a small screen
          className={
            this.state.smallScreen
              ? "grid-container-small"
              : "work-grid-container"
          }
        >
          {workItems}
        </div>
        <div id="modal" className="modal" onClick={this.closeModal} onKeyDown={this.closeModal}>                      {/* This has to be changed to change the click-closes-the-window thing */}
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
                  src={this.state.modal.image}
                  alt={this.state.modal.name}
                  className="modal-image"
                ></img>
              </div>
            </div>
          </div>
        </div>
{/*
//
//
*/}
        <div>
          <h1 className="title">{workData.publications}</h1>
            <p className="text-body">
              Perniciaro, Leon, editor. <i><a href="https://www.havenspec.com">Haven Spec Magazine</a></i>, 2021.
            </p>
            <p className="text-body">
              Perniciaro, Leon. “<a href="https://www.utopiasciencefiction.com/letter-from-the-editor-21-02">For Every Work of Art and Every Human Heart</a>.” <i><a href="https://www.utopiasciencefiction.com">Utopia Science Fiction Magazine</a></i>, Feb. 2021, p. 5.
            </p>
            <p className="text-body">
              Perniciaro, Leon, and J. Nathan Raby. “<a href="https://fatherbother.simplecast.com/">Father Bother</a>,” <i>Chicken Patty Mondays Productions</i>, 2021.
            </p>
            <p className="text-body">
              Perniciaro, Leon. “<a href="http://factorfourmag.com/smallpox-ate-the-americas-once-by-leon-perniciaro/">Smallpox Ate the Americas Once</a>.” <i><a href="http://factorfourmag.com">Factor Four Magazine</a></i>, Jul. 2019, pp. 24-27.
            </p>
            <p className="text-body">
              Perniciaro, Leon, and J. Nathan Raby. “<a href="https://tinkandjupiter.podbean.com/">Tink & Jupiter</a>,” <i>Chicken Patty Mondays Productions</i>, 2018.
            </p>
            <p className="text-body">
              Dorn, Patricia, Perniciaro, Leon, et al. “<a href="https://wwwnc.cdc.gov/eid/article/13/4/06-1002_article">Autochthonous transmission of Trypanosoma cruzi, Louisiana</a>.” <i>Emerging Infectious Diseases</i>, vol. 13, no. 4, 2007, pp. 605-7.
            </p>
        </div>
{/*
//
//
*/}
        <div>
          <h1 className="title">{workData.conferences}</h1>
            <p className="text-body">
              <b>80th World Science Fiction Convention</b> <br />
              Chicago, IL, USA, 2022<br />
              <u>Panelist</u>: <i>Ancient Cities and Futuristic Design</i> <br />
              <u>Panelist</u>: <i>Technological Solutions to Environmental Problems</i> <br />
              <u>Panelist</u>: <i>If It's Not Love, Then It's The Bomb That Will Bring Us Together</i> <br />
              <u>Panelist</u>: <i>We're Probably Not All in This Together</i> <br />
            </p>
            <p className="text-body">
              <b>Watersheds: Association for the Study of Literature and Environment 2022 Symposium</b> <br />
              University of Delaware, Newark, DE, 2022<br />
              <u>Conference talk</u>: <i>'The Wild Things of Bois Sauvage': Blurring the Human and Nonhuman in Jesmyn Ward’s </i>Salvage the Bones
            </p>
            <p className="text-body">
              <b>79th World Science Fiction Convention</b> <br />
              Washington, D.C., USA, 2021<br />
              <u>Panelist</u>: <i>Introducing the Hugo Award for Best Video Game</i>
            </p>
            <p className="text-body">
            <b>77th World Science Fiction Convention</b> <br />
              Dublin, Ireland, 2019<br />
              <u>Poster</u>: <i>Post-Vaccination Pneumococcal Disease Dynamics: How to fight a pathogen that sometimes isn’t a pathogen</i> (with Stephanie Perniciaro)
            </p>
            <p className="text-body">
            <b>75th World Science Fiction Convention</b> <br />
              Helsinki, Finland, 2017<br />
              <u>Panel moderator</u>: <i>Military SF: pro-war or anti-war?</i>
            </p>
            <p className="text-body">
            <b>Mid-Atlantic Popular/American Culture Association Annual Conference</b> <br />
              Washington, D.C., USA, 2010 <br />
              <u>Panelist</u>: <i>Bugs and Brotherhood: Militarism & the Just War Theory in Starship Troopers</i>
            </p>
            <p className="text-body">
            <b>55th Annual Meeting of the American Society for Tropical Medicine and Hygiene</b> <br />
              Atlanta, Georgia, USA, 2006<br />
              <u>Poster presenter</u>: <i>First Report of Autochthonous Transmission of </i>Trypanosoma cruzi<i> in Louisiana and Sixth in the United States</i>
            </p>
        </div>
      </Layout>
    )
  }
}
export default WorkPage

export const query = graphql`
  query {
    allWorkJson {
      nodes {
        id
        title
        description
        text
        publications
        conferences
        work_items {
          name
          description
          projStatus
          link
          image
        }
      }
    }
  }
`
