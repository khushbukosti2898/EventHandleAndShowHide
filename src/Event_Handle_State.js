import React from 'react';

class EventHandleState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:'',
            inputConstructor:'',
            inputArrow:'',
            inputpara_bind:'',
            inputpara_bind_Arrow:''

        }
        this.getInputConstructor=this.getInputConstructor.bind(this);
    }
    
    getInput(e){
        this.setState({ input: e.target.value });
    }

    getInputConstructor(e){
        this.setState({ inputConstructor: e.target.value });
    }

    getInputArrow(e){
        this.setState({ inputArrow: e.target.value });
    }

    getInputpara_bind(p1,p2,e){
        console.log('MyParameter1: ', p1);
        console.log('MyParameter2: ', p2);
        this.setState({ inputpara_bind: e.target.value });
    }
    
    getInputpara_Arrow(p1,p2,e){
        console.log('MyParameter1: ', p1);
        console.log('MyParameter2: ', p2);
        this.setState({ inputpara_bind_Arrow: e.target.value });
    }

    render(){
        return (
            <div>
                <form>
                    <h2>1 Inline method binding</h2>
                    Enter Value:
                    <input type="text" onChange={this.getInput.bind(this)}></input>
                    <h2>{this.state.input}</h2>
                    
                    <h2>2 Bind method in constructor</h2>
                    Enter Value:
                    <input type="text" onChange={this.getInputConstructor}></input>
                    <h2>{this.state.inputConstructor}</h2>
                    
                    <h2>3 Method binding using arrow function</h2>
                    Enter Value:
                    <input type="text" onChange={(e) => this.getInputArrow(e)}></input>
                    <h2>{this.state.inputArrow}</h2>
                    
                    <h2>4 Bind method parameters</h2>
                    Enter Value:
                    <input type="text" onChange={this.getInputpara_bind.bind(this,this.state.input,this.state.inputConstructor)}>
                    </input>
                    <h2>{this.state.inputpara_bind}</h2>
                    
                    <h2>5 Binding method with parameters using arrow function</h2>
                    Enter Value:
                    <input type="text" onChange={(e) => this.getInputpara_Arrow(this.state.input,this.state.inputConstructor,e)}>
                    </input>
                    <h2>{this.state.inputpara_bind_Arrow}</h2>
                    <hr/>
                </form>
                
            </div>
        )
    }
}
export default EventHandleState;