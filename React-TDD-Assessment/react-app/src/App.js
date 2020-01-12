import React from 'react';
import './App.css';
import Home from './Home';
import axios from 'axios';
import ToDoList from './ToDoList';
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalTodos: [],  users: [] }
    }

    // Gets info about users after the mounting of the components
    componentDidMount() {
        // Retrieves 10 users from the API
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                for (let user of res.data) {
                    this.setState({ users: [...this.state.users, user] });
                }
            })
            .catch(err => console.error(err));
        
        // Retrieving all todos made by each user
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                for (let todo of res.data) {
                    this.setState({ totalTodos: [...this.state.totalTodos, todo] });
                }
            })
            .catch(err => console.error(err));
    }
    
    /* Ideally your routes should go here. One for "/" (homepage or equivalent) and one for the UserID page or have the route for the user ID page nested. 
    
    Header should be a navbar component with links to the appropriate routes */ 
    render() {
        return (
            <Router>
                <header>
                    <ul>
                        <li id="todoapp"><Link to="/todolist">TO DO APP</Link></li>
                        <li id="homepage"><Link to="/">HOMEPAGE</Link></li>
                    </ul>
                </header>
                <Switch>
                    {/* Navigates to the homepage where you can see all names */}
                    <Route exact path='/'><Home users={this.state.users}/></Route>
                    <Route exact path='/todolist'><ToDoList /></Route>
                    <Route exact path='/todolist/:id/:name'><ToDoList allTodos={this.state.totalTodos} /></Route>
                    <Route Component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;