import { Component } from "react";
class Stopwatch extends Component{
    constructor(){
        super()
        this.state={
            time:0,
            isRunning:false,
            timer:null
        }
    }
    formatTime = (seconds) => {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hrs}:${mins}:${secs}`
    };
    handleStart=()=>{
        if (!this.state.isRunning) {
            this.timer = setInterval(() => {
              this.setState((prevState) => ({ time: prevState.time + 1 }));
            }, 1000)
            this.setState({ isRunning: true })
          }
    }
    handleStop=()=>{
        this.setState({ isRunning: false })
        clearInterval(this.timer)
    }
    handleReset=()=>{
        clearInterval(this.timer)
        this.setState({ time: 0, isRunning: false })
    }
    render(){
        return(
            <>
            <div>
            <h1>Stop Watch</h1>
            <h2>{this.formatTime(this.state.time)}</h2>
            <button onClick={this.handleStart}>Start</button> 
            <button onClick={this.handleStop}>Stop</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
            </>
        )
    }
}
export default Stopwatch