import React from 'react';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    let history = useHistory();

    // Navigates to the city-weather page on submission
    function onSubmitHandler(e) {
        e.preventDefault();
        history.push(`/cityweather?city=${props.city}`);
    }

    return (
        <div id="form-container">
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="city" placeholder="Enter a city.." onChange={props.updateSearch}/>
                <br />
                <input className="btn btn-primary" type="submit"/>
            </form>
        </div>
    );
}

export default Form;