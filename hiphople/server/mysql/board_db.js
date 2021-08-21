import connection from "./mysql_connection.js";

//DB 생성 코드
//connection.query("create database board character set utf8");

/*테이블 생성 코드
const postsTableQuery="create table posts" +
  "(id int not null primary key auto_increment," +
  "title nvarchar(100)," +
  "content text(5000)," +
  "writer int not null," +
  "timerecord datetime not null);";

connection.query(tableQuery, (err, result)=>{
    if(err){throw err;}
    console.log("게시글 테이블 생성 완료");
});*/

//댓글 db 생성 코드
/*const commentsTableQuery="create table domestic_comments" +
    "(id int not null primary key auto_increment," +
    "post int not null," +
    "content text(1000)," +
    "writer int not null," +
    "timerecord datetime not null);";

connection.query(commentsTableQuery);*/

// 글 db에 데이터 하나 추가하는 코드
/*const insertQuery="insert into posts(id, title, content, writer, timerecord) values(1, \"테스트 제목3\", \"테스트 내용3\", 2, NOW())";

connection.query(insertQuery, (err, result, fields)=>{
    if(err){throw err;}
    console.log(result);
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "server/form.html"));
});*/


//댓글 쿼리 날리는 함수들

const boardCommentFilteredByPost=async (boardName, postID)=>{
  const commentFilterQuery="select * from "+boardName+" where post=?";
  const result=await connection.query(commentFilterQuery, [postID]);
  console.log(result[0]);
  return result[0];
};

const boardCommentUpdate=async (boardName, commentID, newContent)=>{
  const commentUpdateQuery="update "+boardName+" set content=? where id=?";
  await connection.query(commentUpdateQuery, [newContent, commentID]);
  console.log("댓글 수정 완료");
};

const boardCommentInsert=async(boardName, postID, writer, content)=>{
  const commentInsertQuery="insert into "+boardName+"(post, writer, content, timerecord) values(?,?,?,?)";
  const currentTime=new Date().toISOString().slice(0, 19).replace("T", " ");
  await connection.query(commentInsertQuery, [postID, writer, content, currentTime]);
  console.log("댓글 삽입 완료");
};

export {boardCommentFilteredByPost, boardCommentInsert, boardCommentUpdate};