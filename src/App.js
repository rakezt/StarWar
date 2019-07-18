import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import "tachyons"

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      people:[],
      title:" ",
    }
    this.getPeople=this.getPeople.bind(this);
    this.getTitle=this.getTitle.bind(this); 
  }
  
  getPeople(){
    fetch("https://swapi.co/api/people/")
    .then((response)=>response.json())
      .then(data =>
        this.setState({
          people: data.results,
          isLoading: false,
        })
      )
    }

  getTitle(){
     fetch("https://swapi.co/api/films/")
     .then((response)=>response.json())
     .then(data =>
         this.setState({
           title: data.results.map(result => result.title),
           isLoading: false,
         })
       )
     }
  
  componentDidMount(){
    this.getPeople()
    this.getTitle()   
  }
  
  render(){   
    const{people}=this.state;
    const{title}=this.state;
    return (
      <div className="tc">
        <img src="https://images.cooltext.com/5309767.png" alt="starwar"/>
        <CardList people={people} title={title}/>
        <p>&copy; yoursweetnightmare</p>        
      </div>
    );
}}

export default App;