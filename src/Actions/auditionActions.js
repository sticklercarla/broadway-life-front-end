
const getAuditions = (auditions) => ({
        type: "GET_AUDITIONS",
        all_auditions: auditions
    })

const addNewAudition = audition => ({
        type: "ADD_AUDITION",
        new_audition: audition
    })

const updateAudition = audition => {
    console.log(audition)
    return {
        type: "UPDATE_AUDITION",
        new_audition: audition
    }
}

const deleteAudition = audition_id => ({
    type: "DELETE_AUDITION",
    deleted_audition_id: audition_id
})

const clearAuditions = () => ({
    type: "CLEAR_AUDITIONS"
})


const createNewAuditionToDB = audition => dispatch => {
    console.log(audition)
    fetch('http://localhost:3000/auditions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(audition)
    }).then(res => res.json())
    .then(data => {
        
        dispatch(addNewAudition(data))
    })
}

const updateAuditionToDB = audition => dispatch => {
    const id = audition.audition_id
    console.log(audition)
    fetch(`http://localhost:3000/auditions/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(audition)
    }).then(res => res.json())
    .then(data => {
        dispatch(updateAudition(data))
    })
}

const deleteAuditionToDB = audition_id => dispatch => {
    fetch(`http://localhost:3000/auditions/${audition_id}`, {
        method: "DELETE",
    }).then(() => {
        dispatch(deleteAudition(audition_id))
    })
}

export default {
    clearAuditions,
    getAuditions,
    createNewAuditionToDB,
    updateAuditionToDB,
    deleteAuditionToDB
};