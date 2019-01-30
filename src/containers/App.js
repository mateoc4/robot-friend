import React, {Component} from 'react';
import { robots } from '../robots';
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import './App.css'




class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:robots}));
       
    }

     onSearchChange = (event) => { // wazne zeby zrobic tak a nie tak onSearchChange (event){
        this.setState({ searchfield: event.target.value })
        
     }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        } else {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }  
}
}

export default App;












/* przed wejsciem do gry statów ;]

const App = () => {
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox/>
            <CardList robots={robots} />
        </div>
    );
}

export default App;
*/