const getCastingOffices = (casting_offices) => ({
    type: "GET_CASTING_OFFICES",
    all_casting_offices: casting_offices
})

// const addNewCastingOffice = (casting_office) => ({
//     type: "ADD_CASTING_OFFICE",
//     casting_office: casting_office
// })

const getCastingOfficesFromDB = () => dispatch => {
    fetch("http://localhost:3000/casting_offices")
    .then(res => res.json())
    .then(data => dispatch(getCastingOffices(data)))
}

// const createNewCastingOfficeToDB = casting_office => dispatch => {
//     fetch('http://localhost:3000/casting_offices', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(casting_office)
//     }).then(res => res.json())
//     .then(data => {
//         dispatch(addNewCastingOffice(data))
//     })
// }

export default {
    getCastingOfficesFromDB
};