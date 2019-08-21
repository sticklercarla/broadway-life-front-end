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
    type: "SIGNUP",
    payload: user
});

const profileUser = user => ({
    type: "PROFILE",
    payload: user
});

const updateUser = user => ({
        type: "UPDATE_USER",
        new_user: user
    })

const deleteUser = user_id => ({
    type: "DELETE_USER",
    deleted_user_id: user_id
})

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
    }).then(res => res.json())
    .then(data => {
        if (data.errors) {
            alert(data.errors)
        } else {
            localStorage.token = data.token
            dispatch(createUser(data.user)) 
        }
    })
}

const updateUserToDB = user => dispatch => {
    fetch(`http://localhost:3000/users/${user.user_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data => {
        dispatch(updateUser(data))
    })
}

const logoutUserFromStore = () => dispatch => {
    localStorage.clear();
    dispatch(logoutUser());
    dispatch(songBook.clearSongs());
    dispatch(allAuditions.clearAuditions());
}


const deleteUserFromDB = user_id => dispatch => {
    return fetch(`http://localhost:3000/users/${user_id}`, {
        method: "DELETE",
    }).then(() => {
        localStorage.clear()
        dispatch(deleteUser(user_id))
    })
}

export default {
    deleteUserFromDB,
    updateUserToDB,
    loginUserToDB,
    createNewUserToDB,
    profileUserFromDB,
    logoutUserFromStore
  };