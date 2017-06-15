import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class MyButton extends React.Component
{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

        this.state = {value: this.props.value};
    }

    render() {
        return (<a href="#" onClick={this.onClick}>{this.props.text} {this.state.value}</a>);
    }

    onClick() {
        this.props.callBack(this.props.value);
    }
}

class Clock extends React.Component
{
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.handleButtons = this.handleButtons.bind(this);

        this.state = {count: 0, inc: this.props.inc};
    }

    componentDidMount() {
        //this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({count: this.state.count + this.state.inc});
    }

    handleButtons(value) {
        this.setState({inc: this.state.inc + value})
    }

    render() {
        let btn = <MyButton text="UXXp" value={1} callBack={this.handleButtons}/>;

        return (
            <div>
                <h1>Welcome {this.state.count} ({this.state.inc})</h1>
                {btn} | <MyButton text="Down" value={-1} callBack={this.handleButtons}/>
            </div>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()})
    }

    handleSubmit(event) {
        alert('Submited name:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

function App() {
    return (
        <div>
            <Clock name="Joe" inc={1} />
            <Clock name="Carl" inc={2} />
            <Clock name="Max" inc={3} />
            <NameForm />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
