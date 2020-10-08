import React, { Component } from 'react';
import CardList from './CardList';
import './index.css';
import 'tachyons';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

import SearchBox from './SearchBox';



class  App extends Component{

    constructor(){

        super()
        this.state={
       // robots:robots,in real app we don#t use like this we use as follows
       robots:[],
        searchField:''


        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())
        .then(users =>  this.setState({robots:users}));
            
       
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
       
    }
    render(){
        const filteredRobots=this.state.robots.filter(data=>{
            return data.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // if fetching get delayed we can give a intimation to users like this

        if(this.state.robots.length===0){
            return<h1 className='tc'> Loading..........</h1>
        }else{
            return(
                <div className='tc'>
                          <h1 className='f1'>Robo Friends</h1>
                          <SearchBox searchChange={this.onSearchChange}/>
                          <Scroll>
                              <ErrorBoundry>     
                                 <CardList robots={filteredRobots}/>
                            </ErrorBoundry>
                         </Scroll>
                 </div>
              
                  );

        }

      
    }
    
}
export default App;