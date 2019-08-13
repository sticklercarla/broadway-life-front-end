
const getAuditions = (auditions) => {
    console.log(auditions)
    return {
        type: "GET_AUDITIONS",
        all_auditions: auditions
    }
}

export default {
    getAuditions
};