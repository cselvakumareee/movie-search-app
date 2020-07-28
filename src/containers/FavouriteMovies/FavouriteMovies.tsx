import React, { Component } from 'react';
import axios from 'axios';
import './FavouriteMovies.scss';
import IndividualCard from '../../shared-components/IndividualCard/IndividualCard';

class FavouriteMovies extends Component{
    constructor(props:any){
        super(props);
    }
    state:any={
        favData:[]
    }
    componentDidMount(){
        this.fetchFavourites();
    }
    fetchFavourites(){
        axios.get('https://movie-search-app-afa7b.firebaseio.com/favourites.json')
         .then((res:any)=>{
             console.log(res.data);
            const fetchedOrders = [];
          for(let key in res.data){
            fetchedOrders.push({...res.data[key],id:key});
            }
            this.setState({ favData: fetchedOrders})
        }).catch((err:any)=>{
            console.log(err);
        })
    }
    render(){
    
        return (
            <div className="favMovies">
                
                {this.state.favData.map((data:any)=>{
            return <IndividualCard data={data}/>
        })}
            </div>
        )
    }
}


export default FavouriteMovies;