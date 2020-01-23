import React from 'react';

class ElementReturn extends React.Component{
    state={
        counter:0,
        edit:false
    }
    changeCounter = () =>{
        this.setState({
            edit:true
        })
    } 

    setCounter = e =>{
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
        let element;
        if(edit){
            element= <div>
                        <input type="number" value={counter1} onChange={this.setCounter}></input>
                        <input type="button" value="SUBMIT" onClick={this.displayCounter}></input>
                    </div>
            }
        else{
            element = <div>
                        <input type="button" value="EDIT" onClick={this.changeCounter}></input>
                    </div>
            }

            return(
                <div>
                    <h2>Using Element Show/Hide Div</h2>
                    <h3>counter: {counter}</h3>
                    {element}
                    <hr/>
                </div>
            )
        }
}
export default ElementReturn;
;