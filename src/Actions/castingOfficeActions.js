const getCastingOffices = (casting_offices) => ({
        type: "GET_CASTING_OFFICES",
        all_casting_offices: casting_offices
    })

const getCastingOfficesFromDB = () => dispatch => {
    fetch("http://localhost:3000/casting_offices")
    .then(res => res.json())
    .then(data => dispatch(getCastingOffices(data)))
}

export default {
    getCastingOfficesFromDB
};