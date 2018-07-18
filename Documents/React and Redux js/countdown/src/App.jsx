import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

/*BootStrap react*/
import { Form, FormControl, Button } from 'react-bootstrap';


/*Calender */
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from "react-calendar-icon";
import { ThemeProvider } from "styled-components";


/* moment for time */
import Moment from 'react-moment';
import 'moment-timezone';



const dateOptions = {
    header: { weekday: "long" },
    footer: { month: "long" },
    value: { day: "2-digit" },
    locale: []
  };

  const theme = {
    calendarIcon: {
      textColor: "white", // text color of the header and footer
      primaryColor: "black", // background of the header and footer
      backgroundColor: "#fafafa",
    
    }
  };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    const date = new Date();
    return (
  
      <div className="App">
      <div class="vertical-center">
      <div class="container">
        <div className="App-title">
        <well>Coundown to {this.state.deadline}</well>
        </div>

        <div className ="App-span">
                <span>
                    <well> 
                         <Clock
                 deadline={this.state.deadline} 
               />
               </well>
                </span>
                
                </div>

           
    <div className="form-group">

</div>
<div className="form-group">
        <Form inline>

         <div className="col-lg-2 col-centered">
        <div className="row">
        <div class="col-xs-3">
        

        </div>
            
            <div>

                 <div className="Calender">
         <div>
             From
         </div>


            <ThemeProvider theme={theme}>
            <CalendarIcon date={new Date()} />
            </ThemeProvider>
            </div>


             
         <div className="alender">
                <div>
                    To 
                </div>

            <ThemeProvider theme={theme}>
            <CalendarIcon date={new Date(this.state.deadline)} />
            </ThemeProvider>
        </div>

            
            <input
                className="Deadline-input"
                id="margin"
                placeholder='new date'
                onChange={event => this.setState({newDeadline: event.target.value})}
            />
            


            <Button onClick={() => this.changeDeadline()}>
                Submit
            </Button> 

            </div>
    
          
          </div>
        </div>
        </Form>
        </div>
       
      </div>
      </div>
      </div>
    )
  }
}

export default App;
