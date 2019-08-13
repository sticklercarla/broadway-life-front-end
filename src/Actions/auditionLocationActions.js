const getAuditionLocations = (audition_locations) => ({
        type: "GET_AUDITION_LOCATIONS",
        all_audition_locations: audition_locations
    })

const getAuditionLocationsFromDB = () => dispatch => {
    fetch("http://localhost:3000/audition_locations")
    .then(res => res.json())
    .then(data => dispatch(getAuditionLocations(data)))
}

export default {
    getAuditionLocationsFromDB
};