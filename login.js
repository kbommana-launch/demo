const users = {
    admin: "12345",
    user: "password"
};

// Function to validate login
function login(username, password) {
    if (users[username] && users[username] === password) {
        return "Login Successful";
    } else {
        return "Invalid Username or Password";
    }
}

module.exports = { login };  // Export function for testing
