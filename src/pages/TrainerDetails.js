import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TrainerImages from '../components/TrainerImages.js';
import Button from '../components/Button'
import trainerService from '../services/trainer-service'


class Explore extends Component {
  state = {
    trainer: {}
  }

  componentDidMount() {
    trainerService.getTrainerById(this.props.match.params.id)
    .then((trainer) =>{
      console.log(trainer.trainer)
      this.setState({trainer: trainer.trainer})
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {
    const {trainer} = this.state
    return (
      <section className="details-container">
        <section className="img-trainer">
          <TrainerImages data={trainer}/>
        </section>
        <section className="details-content">
          <section className="details-section">
            <h3>Description</h3>
            <p>{trainer.description}</p>
          </section>
          <section className="details-section">
            <h3>Academic degree</h3>
            <ul>
              <li>
                <a href="/" alt="inef">Inef</a>
              </li>
              <li>
                <a href="/" alt="inef">Master in Sports Performance</a>
              </li>
            </ul>
          </section>
          <section className="details-section">
            <h3>Skills</h3>
            <section className='skill'>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
            </section>
          </section>
          <section className="details-section">
            <h3>Where do I train?</h3>
            <ul>
              <li>
                <a href="/" alt="inef">Metropolitan Iradier</a>
              </li>
              <li>
                <a href="/" alt="inef">Street training</a>
              </li>
            </ul>
          </section>
          <section className="book-now">
            <h3 className="book-now-title">Do you want to train with me?</h3>
            <p>Contact with me to schedule a training</p>
            <Button route='#' color='btn-gradient' title='Book now' />
          </section>
        </section>
          <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);