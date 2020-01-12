import React from 'react';
import User from './User';
import './App.css';

// The Homepage
const Home = (props) => {
    const users = props.users;
        return (
            <div>
                <h1>Users</h1>
                <div className="flex-container">
                    {users.map(user => {
                        return <User userId={user.id} name={user.name}/>;
                    })}
                </div>               
            </div>
        );
}

export default Home;