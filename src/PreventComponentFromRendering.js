import React from 'react';
import IfElsePart from './If_Else_Part';

class PreventComponent extends React.Component{
    state={
        edit:false
    }
    handleToggle = () => {
        this.setState({
            edit:!this.state.edit
        })
    }

    showDiv = edit =>{
        if(!edit){
            return null;
        }
        return (
            <IfElsePart />
        )
    }

    render(){
        let {edit}=this.state;
        return <div>
            <h2>Prevent Component from Rendering</h2>
            <input type="button" value={`${edit ? "Hide" : "Show"} Using If Else Show/Hide Div`} onClick={this.handleToggle}></input>
            {this.showDiv(edit)}
            <hr></hr>
        </div>
    }
}
export default PreventComponent;
