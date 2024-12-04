// Logout function (clear session or redirect)
function logoutAdmin() {
    alert('Logging out...');
    // In a real app, you would clear session tokens or redirect to login page
    window.location.href = "login.html"; // Redirect to login page
}

// Simulating search functions
function searchUser() {
    const searchQuery = document.getElementById('searchUser').value.toLowerCase();
    const users = document.querySelectorAll('.userItem');
    users.forEach(user => {
        const username = user.querySelector('span').textContent.toLowerCase();
        if (username.includes(searchQuery)) {
            user.style.display = 'block';
        } else {
            user.style.display = 'none';
        }
    });
}

function searchPost() {
    const searchQuery = document.getElementById('searchPost').value.toLowerCase();
    const posts = document.querySelectorAll('.postItem');
    posts.forEach(post => {
        const postContent = post.querySelector('span').textContent.toLowerCase();
        if (postContent.includes(searchQuery)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

function searchComment() {
    const searchQuery = document.getElementById('searchComment').value.toLowerCase();
    const comments = document.querySelectorAll('.commentItem');
    comments.forEach(comment => {
        const commentContent = comment.querySelector('span').textContent.toLowerCase();
        if (commentContent.includes(searchQuery)) {
            comment.style.display = 'block';
        } else {
            comment.style.display = 'none';
        }
    });
}

// Simulating admin actions on users, posts, and comments
function banUser(username) {
    alert(`User ${username} has been banned.`);
    // In a real app, send a request to the backend to ban the user
}

function unBanUser(username) {
    alert(`User ${username} has been unbanned.`);
    // In a real app, send a request to the backend to unban the user
}

function deletePost(postId) {
    alert(`Post ${postId} has been deleted.`);
    // In a real app, send a request to delete the post from the backend
}

function deleteComment(commentId) {
    alert(`Comment ${commentId} has been deleted.`);
    // In a real app, send a request to delete the comment from the backend
}
