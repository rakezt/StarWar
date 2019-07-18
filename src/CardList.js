import React, {Component} from 'react';
import Card from './Card';
import './App.css';


class CardList extends Component{
    render(){
        const {people, title}=this.props;
    
    return(
        <div >
           {
               people.map((user,p)=>{
                console.log(p)
               return(
                   <div key={p.height} className=" box tc bg-silver w-40 dib br3 pa3 ma2 grow bw2 shadow-5">
                        <Card 
                        id={people[p].height} 
                        name={people[p].name}
                        gender={people[p].gender}
                        birth_year={people[p].birth_year}
                        title={title[p]}                         
                        />                       
                        {/* <CharInfo charInfo={p}/> */}
                   </div>
               )
               })
           }
        </div>
    );
}}
export default CardList;