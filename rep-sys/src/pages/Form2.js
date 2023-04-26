import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import { withRouter } from "react-router";

// function Getparams(){
//   let {id} = useParams();
//   console.log({id});
// }

class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            klasa: '',
            imie: '',
            nazwisko: ''
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        alert(this.state.klasa +" "+ this.state.imie +" "+ this.state.nazwisko);
        event.preventDefault();
      }
      
      render() {
        const {id} = this.props;
        return (
          <form onSubmit={this.handleSubmit} >
            console.log({id});
            <label>
                Klasa:
                <select name="klasa" value={this.state.klasa} onChange={this.handleChange}>
            <option value="4pt5" name="klasa">4PT5</option>
            <option value="5pt5" name="klasa">5PT5</option>
            </select>
            </label>
            <label>
              Imię:
              <input type="text" value={this.state.imie} onChange={this.handleChange} name='imie'/>
            </label>
            <br></br>
            <label>
              Nazwisko:
              <input type="text" value={this.state.nazwisko} onChange={this.handleChange} name='nazwisko'/>
            </label>
            <input type="submit" value="Wyślij" />
          </form>
        );
      }
}

export default Form2;