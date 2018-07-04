import React from "react";
import "./Calc.css";
class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expression: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.clear = this.clear.bind(this);
        this.back = this.back.bind(this);
      }
      handleClick(event) {
        this.setState({expression : this.state.expression + event.target.value})
      }
      evaluate(event){
          this.setState({
            expression: eval(this.state.expression)
          })
      }
      clear(){
          this.setState({
              expression: ""
          })
      }
      back() {
          this.setState({
              expression: this.state.expression.substr(0,this.state.expression.length-1 )
          })
      }
    render() {
        return(
        <div className="wrapper">
            <header className="header">
                <h3>CALCULATOR</h3>
            </header>
            <div  className="calc">
                <textarea className="textarea" id="display" value={this.state.expression} readOnly ></textarea>
                <div className="buttons"> 
                    <button value="1" className="btn" onClick={this.handleClick}>1</button>
                    <button value="2" className="btn" onClick={this.handleClick}>2</button>
                    <button value="3" className="btn" onClick={this.handleClick}>3</button>
                    <button value="+" className="btn" onClick={this.handleClick}>+</button>
                    <button value="4" className="btn" onClick={this.handleClick}>4</button>
                    <button value="5" className="btn" onClick={this.handleClick}>5</button>
                    <button value="6" className="btn" onClick={this.handleClick}>6</button>
                    <button value="-" className="btn" onClick={this.handleClick}>-</button>
                    <button value="7" className="btn" onClick={this.handleClick}>7</button>
                    <button value="8" className="btn" onClick={this.handleClick}>8</button>
                    <button value="9" className="btn" onClick={this.handleClick}>9</button>
                    <button value="*" className="btn" onClick={this.handleClick}>*</button>
                    <button value="0" className="btn" onClick={this.handleClick}>0</button>
                    <button value="." className="btn" onClick={this.handleClick}>.</button>
                    <button className="btn" onClick={this.clear}>AC</button>
                    <button value="/" className="btn" onClick={this.handleClick}>/</button>
                    <button id="back" onClick={this.back}>back</button>       
                    <button id="AC" onClick={this.evaluate}>=</button>
                </div>
            </div>
        </div>
        )
    }

}
export default Calc