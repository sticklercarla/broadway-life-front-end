

const showProfile = (page) => ({
        type: "CHANGE_PAGE",
        page: page
    })

const updatePage = (e) => dispatch => {
    const page = e
    dispatch(showProfile(page))
};

export default {
    updatePage
};

