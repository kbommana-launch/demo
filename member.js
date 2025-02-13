let members = [];

// Function to add a member
function addMember(name, email, password, role) {
    if (!name || !email || !password) {
        return "Please fill all fields";
    }

    let member = { name, email, role };
    members.push(member);
    return "Member added successfully";
}

// Function to get all members
function getMembers() {
    return members;
}

// Function to delete a member by index
function deleteMember(index) {
    if (index < 0 || index >= members.length) {
        return "Invalid index";
    }
    members.splice(index, 1);
    return "Member deleted";
}

// Function to edit a member
function editMember(index, newName, newEmail, newRole) {
    if (index < 0 || index >= members.length) {
        return "Invalid index";
    }
    if (!newName || !newEmail) {
        return "Name and Email cannot be empty";
    }

    members[index].name = newName;
    members[index].email = newEmail;
    members[index].role = newRole;
    return "Member updated successfully";
}

module.exports = { addMember, getMembers, deleteMember, editMember };
