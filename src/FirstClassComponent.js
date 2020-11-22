 import React  from 'react';


export default class FirstClassComponent extends React.Component{

    render(){
      return  <div>
      <h2>Employee Details...</h2>
      <p>
        <label>Name : <b>{this.props.name}</b></label>
      </p>
      <p>
        <label>Dept : <b>{this.props.dept}</b></label>
      </p>
      </div>;
    }
}