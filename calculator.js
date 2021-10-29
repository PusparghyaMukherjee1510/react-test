import React from "react";
class CalculaTor extends React.Component{
    constructor(props){
        super(props);
        this.state={ num1:<input type="number">Num1</input>,
         num2:<input type="number">Num2</input>,
         result:<input type="number">Result</input>};
    }
    add=(num1,num2)=>{
         return result=(this.setState(this.state.num1+this.state.num2));
    };
    sub=(num1,num2)=>{
        return result=(this.setState(this.state.num1-this.state.num2));
   };
    mul=(num1,num2)=>{
    return result=(this.setState(this.state.num1*this.state.num2));
};
diV=(num1,num2)=>{
    return result=(this.setState(this.state.num1/this.state.num2));
};

    render(){
        return(<div>
            <button onClick={this.add}>ADD</button>
            <button onClick={this.sub}>SUB</button>
            <button onClick={this.mul}>MUL</button>
            <button onClick={this.diV}>DIV</button>
            </div>);
    }
}
export default CalculaTor;