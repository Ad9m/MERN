import React, { Component } from 'react';
import classes from './MyNewComponent.module.css';

class PersonComponent extends Component{
    constructor(props){
    super(props);
    this.state ={
        age:this.props.age
    }
    }
    changeAge =() =>{
        this.setState({age:this.state.age +1});
    }
    render(){

        return(
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick={this.changeAge}>Birthday Buttton for {this.props.firstname} {this.props.lastname}</button>
                </div>
            </div>
        );

    }
}

export default PersonComponent;