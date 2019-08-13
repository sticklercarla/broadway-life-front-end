// Action creators
import songBook from './songBookActions';
import allAuditions from './auditionActions'

const loginUserAction = user => ({
    type: "LOGIN",
    payload: user
});

const logoutUser = () => ({
    type: "LOGOUT"

});

const createUser = user => ({
    type: "SIGNUP"
});

const profileUser = user => ({
    type: "PROFILE",
    payload: user
});

//FETCH

const profileUserFromDB = () => dispatch => {

    fetch("http://localhost:3000/profile", {
        headers: { Authorization: "bearer " + localStorage.token }
    })
      .then(r => r.json())
      .then(user => {
        dispatch(profileUser(user))
        dispatch(songBook.getSongs(user.songs))
        dispatch(allAuditions.getAuditions(user.auditions))
       
      });
  };
  
const loginUserToDB = user => dispatch => {
    return fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data => {
        if (!data.token) {
            alert("Wrong username of password")
            return
        }
        localStorage.token = data.token;
        dispatch(loginUserAction(data.user))
        dispatch(songBook.getSongs(data.user.songs))
        dispatch(allAuditions.getAuditions(data.user.auditions))
    })
}

const createNewUserToDB = user => dispatch => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json)
    .then(data => {
        dispatch(createUser(data.user)) 
    })
}

const logoutUserFromStore = () => dispatch => {
    localStorage.clear();
    dispatch(logoutUser());
}

export default {
    loginUserToDB,
    createNewUserToDB,
    profileUserFromDB,
    logoutUserFromStore
  };