import React from 'react';
class IfElsePart extends React.Component{
    state={
        counter:0,
        edit:false
    }
    changeCounter = () =>{
        this.setState({
            edit:true
        })
    } 

    setCounter = (e) =>{
        this.setState({
            counter1:e.target.value
        })
    }
    displayCounter = () =>{
        this.setState({
            counter:this.state.counter1,
            edit:false
        })
    }
 
    render(){
        let {counter,counter1,edit}=this.state;
        if(edit){
            return( 
                <div>
                    <h2>Using If Else Show/Hide Div</h2>
                    <h3>counter: {counter}</h3>
                    <input type="number" value={counter1} onChange={this.setCounter}></input>
                    <input type="button" value="SUBMIT" onClick={this.displayCounter}></input>
                    <hr/>
                </div>
                )
            }
        else{
            return( 
                <div>
                  <div>
                  <h2>Using If Else Show/Hide Div</h2><h3>counter: {counter}</h3></div>
                  <input type="button" value="EDIT" onClick={this.changeCounter}></input>
                  <hr/>
                </div>
                )  
            }
    }
}
export default IfElsePart;