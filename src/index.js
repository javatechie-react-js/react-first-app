import React from 'react';
import ReactDOM from 'react-dom';
import FirstClassComponent from './FirstClassComponent'

//Create react element using JSX
//const element = <h1>React element is created using JSX</h1>;

//Create react element without using JSX
//const element = React.createElement("div", null, "React element is created without using JSX")

//Create React Component (Function Component)

function DisplayOrder(order) {
  return <div>
    <p>
      <label>Order Id : <b>{order.id}</b></label>
    </p>
    <p>
      <label>Order Name : <b>{order.name}</b></label>
    </p>
  </div>;
}

//Call function component
//const element=<DisplayOrder id='1098-2345' name="veg biriyani"></DisplayOrder>

//call class component
const element=<FirstClassComponent name='Basant' dept='Full-Stack Developer'></FirstClassComponent>
ReactDOM.render(element, document.getElementById('root'));

// This document.getElementById('root') will give you container which mentioned in index.html 
// container is a place where you can run any element and render its value