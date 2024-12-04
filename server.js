
let postLikes = {
    post1: 0,
};

function likePost(postId) {
    postLikes[postId]++;
    document.getElementById(postId).querySelector('.like-button').textContent = `Like (${postLikes[postId]})`;
}

function openComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    const commentInput = prompt("Enter your comment:");
    
    if (commentInput) {
        const newComment = document.createElement("p");
        newComment.textContent = `User: ${commentInput}`;
        commentsSection.appendChild(newComment);
    }
}

// Function to simulate user registration and login
function registerUser(username, password) {
    // This would send the data to a backend server
    console.log("User registered:", username);
}

function loginUser(username, password) {
    // Simulate user login
    console.log("User logged in:", username);
}
