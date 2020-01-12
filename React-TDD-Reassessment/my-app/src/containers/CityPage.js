import React , {useState, useEffect} from 'react';
import Axios from 'axios';
import CityImage from '../components/CityImage';
import CityInfo from '../components/CityInfo';
import { useLocation } from 'react-router-dom';
import '../styles/CityPage.css';

const CityPage = () => {
    // The "city" query parameter
    let query = new URLSearchParams(useLocation().search);
    let searchedCity = query.get("city");

    // Setting the state of CityPage func component
    const [image, setImage] = useState('assets/loading.gif');
    const [cityInfo, setCityInfo] = useState({});

    // Fetches an img related to the city via the Unsplash Source API
    function getImage(city) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Axios.get(`https://source.unsplash.com/500x500/?${city},city`)
                    .then(res => resolve(res.config.url))
                    .catch(err => reject(err));
                }, 1000);
        });
    }

    // Retrieves info about the city from the Open Weather API
    function getWeather(city) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=065d3f9085c98dfdd8c5c10a66d7046f`)
                    .then(res => resolve(res.data))
                    .catch(err => reject(err));                
            }, 1000);
        });
    }

    useEffect(() => {
        getImage(searchedCity)
            .then(url => setImage(url))
            .catch(err => console.log(err));
        
        getWeather(searchedCity)
            .then(cityData => setCityInfo(cityData))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>This is the City/Country page!!!</h1>
            <div className="flex-container">
                <CityImage image={image}/>
                <CityInfo cityInfo={cityInfo}/>
            </div>
        </div>
    );        
}

export default CityPage;