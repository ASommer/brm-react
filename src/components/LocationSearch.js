import React, {useState, useEffect } from 'react'
import getLocationByCityname from '../helper/geoLocationByCityName';

const LocationSearch = ({updateLocation}) => {

    const testResult = [{
        id: 1,
        name: 'halle'
    }, {
        id: 2,
        name: 'leipzig'
    }]

    const [searchTerm, setSearchTerm] = useState('');
    const [locSuggestions, setLocSuggestions] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        updateLocation({locationName: searchTerm})
        setLocSuggestions(testResult)
        console.log('locSuggestions :', locSuggestions);
    }
    const handleLocationSelection = () => {
        console.log('handle location selection');
        // setLocSuggestions(() => getLocationByCityname(searchTerm));
        //get location value from node
        // run submithandler ?
    }

    useEffect(() => {
        // fetchLocationsdata
        console.log('useeffe');
        // setLocSuggestions(testResult)
        // return () => {
        //     cleanup
        // };
    }, [searchTerm])

    return (
        <div>
            <form className='searchform' onSubmit={submitHandler}>
                <p>{searchTerm}</p>
                <label htmlFor="citysearch"></label>
                <input type="text" id="citysearch" onChange={e => setSearchTerm(e.target.value)}/>
                <input type="button" value="Search City"/>
                {locSuggestions.length > 1 && <div className="typeahead">
                    typeahead
                    <ul>
                        {locSuggestions.map( item => <li key={item.id}><button>{item.name}</button></li>)}
                        
                    </ul>
                </div>}
            </form>
        </div>
    )
}

export default LocationSearch
