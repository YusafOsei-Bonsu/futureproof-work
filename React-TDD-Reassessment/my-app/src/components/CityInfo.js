import React from 'react';

const CityInfo = ({cityInfo}) => {
    return (
        <div>
            <ul>
                <li><strong>Country/City:</strong> {cityInfo.name} </li>
                <li><strong>COD:</strong> {cityInfo.cod} </li>
                <li><strong>Visibility:</strong> {cityInfo.visibility} </li>
                <li><strong>Timezone:</strong> {cityInfo.timezone} </li>
            </ul>
        </div>
    );
}

export default CityInfo;