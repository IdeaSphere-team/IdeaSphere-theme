/**
 * 用户操作
 */

// 获取CSRF Token
async function getCSRFToken() {
    const response = await fetch('/api/csrf-token');
    const data = await response.json();
    return data.csrf_token;
}

// 定义点赞函数
async function incrementLike(postId) {
    const csrfToken = await getCSRFToken();
    console.log(csrfToken)
    fetch(`/like_post/${postId}`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 更新点赞计数
            const likeCountElement = document.querySelector('.like-count');
            likeCountElement.textContent = `点赞: ${data.like_count}`;
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

// 定义举报帖子函数
async function reportPost(postId) {
    const reason = prompt('请输入举报原因');
    if (!reason) {
        alert('举报原因不能为空');
        return;
    }

    const csrfToken = await getCSRFToken();
    fetch(`/api/report_post/${postId}`, {  // 修正 URL
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reason })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

// 定义举报评论函数
async function reportComment(commentId) {
    const reason = prompt('请输入举报原因');
    if (!reason) {
        alert('举报原因不能为空');
        return;
    }

    const csrfToken = await getCSRFToken();
    fetch(`/api/report_comment/${commentId}`, {  // 修正 URL
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reason })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}
// 定义评论点赞函数
async function incrementLikeComment(commentId) {
    const csrfToken = await getCSRFToken();
    fetch(`/like_comment/${commentId}`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 更新评论的点赞计数
            const likeCountElement = document.querySelector(`.comment-like-count-${commentId}`);
            likeCountElement.textContent = `点赞: ${data.like_count}`;
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

// 回复评论
async function replyComment(commentId) {
    const reply_message = prompt("请输入回复内容，不能为空！")
    if (!reply_message){
        alert("回复内容不能为空！")
    }

    const CSRF = await getCSRFToken()
    fetch(`/reply/${reply_message}/${commentId}`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': CSRF,
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    })
}
let cig_id = document.getElementById("comment-input-group");
let comment_id = document.getElementById("comment");
