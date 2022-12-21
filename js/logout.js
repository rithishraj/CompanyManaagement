function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location="googleLogin.html";
        alert('sign out sucessfully');
    }).catch(function(error) {
        // An error happened.
    });
}
