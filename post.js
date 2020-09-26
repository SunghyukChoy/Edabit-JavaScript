function Post(author, content) {
  this.author = author;
  this.content = content;

  this.hasAuthor = function() {
    console.log(this.author != '');
  }
}

var post = new Post('성혁', '웰컴투더헬');

console.log(post);
post.hasAuthor();

var post2 = {
  author: '성혁',
  content: '웰컴투더 헬2',
  hasAuthor: function() {
    console.log('Hello World!');
  }
}

console.log(post2);
post2.hasAuthor();



// $.ajax({
//   url: '/member/login',
//   method: 'post',
//   data: {
//     MEM_ID: 'likeaglow',
//     MEM_PASSWORD: '1111'
//   },
//   success: function(reponse) {
//     if (response.result) {
//       location.href = "/fakedc";
//     } else {
//       //alert(response.result_message);
//       alert('로그인 정보가 맞지 않습니다')
//     }
//   },
//   error: function(response, status, error) {

//   }
// })

// { "result" : false, "result_message": "해당 사용자의 로그인 정보가 없습니다"}