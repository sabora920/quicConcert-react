// import { API_BASE_URL } from '../config';
export const FETCH_CONCERT_REQUEST = 'FETCH CONCERT REQUEST';
export const FETCH_CONCERT_SUCCESS = 'FETCH CONCERT SUCCESS';
export const FETCH_CONCERT_ERROR = 'FETCH CONCERT ERROR';
export const SHOW_LANDING = 'SHOW LANDING';
export const SHOW_LOCATION = 'SHOW LOCATION';
export const SHOW_ABOUT_DESCRIPTION = 'SHOW ABOUT DESCRIPTION';
export const CONCERT_SELECTED = 'CONCERT SELECTED';

const API_BASE_URL = 'https://quickconcert.herokuapp.com';

// sync actions 

export const fetchConcertRequest = () => ({
        type: FETCH_CONCERT_REQUEST
})

export const fetchConcertSuccess = (data) => ({
        type: FETCH_CONCERT_SUCCESS,
        data
})

export const fetchConcertError = (err) => ({
        type: FETCH_CONCERT_ERROR,
        err
})

export const displayLanding = () => ({
        type: SHOW_LANDING
})

export const displayUserLocation = () => ({
        type: SHOW_LOCATION
})

export const aboutPage = () => ({
        type: SHOW_ABOUT_DESCRIPTION
})

export const selectConcert = (concert) => ({
        type: CONCERT_SELECTED, 
        payload: concert
})

//async action: there can be more than one
//pass in arg for dates and location
export const fetchConcerts = function(location){
//use url params to pass data
    return function(dispatch){
        dispatch(fetchConcertRequest());
        return fetch(`${API_BASE_URL}/api/concerts?city=${location}`)
        .then(res => {
            console.log(res);
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(concert => {
            dispatch(fetchConcertSuccess(concert));
        }).catch(err => {
            dispatch(fetchConcertError(err))
        })
    };
};

