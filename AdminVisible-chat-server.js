// Sample admin data structure for demonstration
const admins = [
    { username: "main_admin", role: "Main Admin", isMainAdmin: true },
    { username: "john_doe_admin", role: "Admin", isMainAdmin: false },
    { username: "jane_smith_admin", role: "Admin", isMainAdmin: false },
];

// Function to simulate editing an admin
function editAdmin(username) {
    const admin = admins.find(admin => admin.username === username);
    if (admin) {
        alert(`Editing ${admin.username}'s details`);
        // This could open a modal or form to edit the admin details
    }
}

// Function to simulate deleting an admin
function deleteAdmin(username) {
    const adminIndex = admins.findIndex(admin => admin.username === username);
    if (adminIndex !== -1) {
        const admin = admins[adminIndex];
        if (!admin.isMainAdmin) {
            alert(`${admin.username} has been deleted.`);
            admins.splice(adminIndex, 1); // Simulate admin deletion
            // Also remove the admin from the UI
            document.getElementById(`admin-${adminIndex + 1}`).remove();
        } else {
            alert("You cannot delete the main admin.");
        }
    }
}

// Logout function (clear session or redirect)
function logoutAdmin() {
    alert('Logging out...');
    window.location.href = "login.html"; // Redirect to login page
}

// Filtering out the main admin from the user list
function filterAdminsFromUsers() {
    const userList = document.querySelectorAll('.userItem');
    const adminList = document.querySelectorAll('.adminItem');
    
    // Hide the main admin from regular user list
    userList.forEach(userItem => {
        if (userItem.querySelector('span').textContent === "main_admin") {
            userItem.style.display = 'none';
        }
    });

    // For admins section, make sure the main admin is shown only in the admin list
    adminList.forEach(admin => {%%
        if (admin.querySelector('span').textContent === "main_admin") {
            admin.style.display = 'none';
        }
    });
}

// Simulating search functions for groups, users, etc.
function searchGroup() { /* search logic */ }
function searchUser() { /* search logic */ }
function searchMessage() { /* search logic */ }

function banUser(username) { /* ban logic */ }
function unBanUser(username) { /* unban logic */ }
