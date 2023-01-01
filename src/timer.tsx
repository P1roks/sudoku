import {Component} from "react"

//Class and not a function because I need a ref to it and this seems better than forwarding
export class Timer extends Component<{},{time: number}>{
	timeInterval: any;
	constructor(props: {}){ //props are unused but TS needs them for some reason
		super(props);
		this.state = {time: 0};
	}

	componentDidMount(): void {
		this.timeInterval = setInterval(() => this.setState((prev:{time: number}) => ({time: prev.time + 1})),1000);
	}

	componentWillUnmount(): void { clearInterval(this.timeInterval) }

	stopTimer(){ clearInterval(this.timeInterval) }
	
	//setting interval again is needed bcs someone can submit and then reset
	resetTimer(){ 
		clearInterval(this.timeInterval) 
		this.setState(() => ({time: 0})) 
		this.timeInterval = setInterval(() => this.setState((prev:{time: number}) => ({time: prev.time + 1})),1000);
	}

	render(){
		let time = this.state.time;
		return <div id="timer"><p>Twój czas: {`${Math.floor(time/60)}:${(time % 60).toString().padStart(2,'0')}`}</p></div> 
	}
}
