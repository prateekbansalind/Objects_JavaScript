// title
// body
// author
// views
// comments
// (author, body)
// isLive

let blogPostObject = new Post('JavaScript Tutorial', 'Body of the post', 'Mr. Author');
console.log(blogPostObject);



function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

