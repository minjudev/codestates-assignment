for(let i = 0; i < 3; i++) {
    let commentTemplate = document.querySelector("#commentTemplate");
    let comments = document.querySelector("#comments");
    
    let newComments = document.importNode(commentTemplate.content, true);
    comments.appendChild(newComments);

    let username = document.querySelectorAll('.username')[i];
    let body = document.querySelectorAll('.body')[i];
    username.innerHTML = "아이디" + i;
    body.innerHTML = "내용" + i;
}