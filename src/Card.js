import React from 'react';
const Card=(props)=>{
  {/*const Card=({name,email,id})=>{  we can directly  destructure on props parameter*/}

    const{name,email,id}=props;{/*object destructuring*/}
    return(
     

<div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>{/*this is tachyons style*/}

  { /*<img src='https://robohash.org/test'/>*/} 
    <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>

    <div>
       {/*<h2> {props.name}</h2>
        <p>{props.email}</p>*/}
        <h2> {name}</h2>
        <p>{email}</p>
    </div>
</div>

    );
}
export default Card;