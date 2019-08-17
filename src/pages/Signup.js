import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import Button from '../components/Button'
import FormCreatePersonalAccount from '../components/FormCreatePersonalAccount.js';
import FormCreateTrainerAccount from '../components/FormCreateTrainerAccount.js';

class Signup extends Component {

  state = {
    mail: '',
    password: '',
    form: 0
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const mail = this.state.mail;
    const password = this.state.password;

    this.props.signup({ mail, password })
      .then( (user) => {
        this.setState({
            mail: '',
            password: '',
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handlePersonal = () => {
    this.setState({
      form: 1
    })
  }
  handleTrainer = () => {
    this.setState({
      form: 2
    })
  }
  handleCloseForm= ()=>{
    this.setState({
      form: 0
    })
  }
  
  render() {
    const classContainer = this.state.form === 1 || this.state.form === 2 ? 'opened' : '';
    return (
      <>
      <section className={`container ${classContainer}`}>
        <section className='selector-group'>
          <div className='previous'>
            <button onClick={this.props.history.goBack}>
            <p>Previous</p>
            </button>
          </div>
          <div className='info-container'>
            <div className='info'>
              <h2>Are you looking for a personal trainer?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Duis eget nibh sed sem tempus 
              pharetra non nec odio.</p>
              <Button route='/signup' color='btn-gradient' title='Sign up' handler={this.handlePersonal}/>
            </div>
            <div className='info'>
              <h2>Are you a personal trainer?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Duis eget nibh sed sem tempus 
              pharetra non nec odio. </p>
              <Button route='/signup' color='btn-gradient' title='Sign up' handler={this.handleTrainer}/>
            </div>
          </div>
        </section>
        <section className="form-sign-up">
        <div onClick={this.handleCloseForm}>Previous</div>
       { this.state.form === 1 ? <FormCreatePersonalAccount /> : null }
       { this.state.form === 2 ? <FormCreateTrainerAccount /> : null }
        </section>
      </section>
      </>
    )
  }
}

export default withAuth(Signup);