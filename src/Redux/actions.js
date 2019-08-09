// Action creators

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

//FETCH

const profileUserFromDB = () => dispatch => {

    fetch("http://localhost:3000/profile", {
        headers: { Authorization: "bearer " + localStorage.token }
    })
      .then(r => r.json())
      .then(user => {
        dispatch(profileUser(user));
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
    })
}

const createNewUserToDB = user => dispatch => {
    fetch('http://localhost:3000/users', {
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