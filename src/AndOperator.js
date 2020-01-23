import React from 'react';

class AndComponent extends React.Component{
    state={
        show:false
    }
    handleToggle = () =>{
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        let {show}=this.state;
        return <div>
            <h2>Logical AND Operator</h2>
            <input type="button" value={`${show ? "Hide" : "Show"} Display`} onClick={this.handleToggle}></input>
            {this.state.show && <div><h3>Hello,I Am Display</h3></div>}
            <hr />
        </div>
    }
}
export default AndComponent;