import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hero extends Component{
    state = {
        heroId : 100
    };
    render(){

        //we can use a <div> or <React.Fragment> as below 
        // return (<diV>
        //         <h1>Avengers Incoming.....</h1><br/>
        //         <button class='btn btn-warning'>Add Hero</button>               
        //     </diV>
        // );

        return (
            <React.Fragment>               
                <div class="container">
                    <div class="form">
                        <h1>Avengers Incoming.....</h1><br/>
                        <input type="text" class="form-control form-control-sm"></input><br/>
                        <label>hero Id : {this.state.heroId}</label><br/>
                        <button class='btn btn-warning'>Add Hero</button>
                    </div>
                </div>               
            </React.Fragment>
        )
    }
}

export default Hero;
