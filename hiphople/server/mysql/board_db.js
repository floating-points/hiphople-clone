import connection from "./mysql_connection.js";
import {randomBytes, pbkdf2Sync} from "crypto";

//DB 생성 코드
//connection.query("create database board character set utf8");

//유저 테이블 생성 코드
/*const userTableQuery="create table users"+
    "(id int not null primary key auto_increment,"+
    "username varchar(20) not null unique,"+
    "password varchar(200) not null);";

connection.query(userTableQuery);*/

//포스트 테이블 생성 코드
/*const postsTableQuery = "create table domestic_posts" +
    "(id int not null primary key auto_increment," +
    "title varchar(100)," +
    "content text(5000)," +
    "timerecord datetime not null," +
    "author int,"+
    "foreign key (author) references users(id)" +
    ");";

connection.query(postsTableQuery);*/

//댓글 db 생성 코드
/*const commentsTableQuery="create table domestic_comments" +
    "(id int not null primary key auto_increment," +
    "post_id int not null," +
    "content text(1000)," +
    "author int not null," +
    "timerecord datetime not null," +
    "foreign key(author) references users(id)," +
    "foreign key(post_id) references domestic_posts(id));";

connection.query(commentsTableQuery);*/

// 글 db에 데이터 하나 추가하는 코드
/*const insertQuery="insert into posts(id, title, content, writer, timerecord) values(1, \"테스트 제목3\", \"테스트 내용3\", 2, NOW())";

connection.query(insertQuery, (err, result, fields)=>{
    if(err){throw err;}
    console.log(result);
});

*/


//댓글 쿼리 날리는 함수들
const boardCommentFilteredByPost = async (boardName, postID) => {
    const commentFilterQuery = "select * from " + boardName + " where post_id=?";
    const result = await connection.query(commentFilterQuery, [postID]);
    console.log(result[0]);
    return result[0];
};

const boardCommentUpdate = async (boardName, commentID, newContent) => {
    const commentUpdateQuery = "update " + boardName + " set content=? where id=?";
    await connection.query(commentUpdateQuery, [newContent, commentID]);
    console.log("댓글 수정 완료");
};

const boardCommentInsert = async (boardName, postID, author, content) => {
    const commentInsertQuery = "insert into " + boardName + "(post_id, author, content, timerecord) values(?,?,?,?)";
    const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    await connection.query(commentInsertQuery, [postID, author, content, currentTime]);
    console.log("댓글 삽입 완료");
};

const userInfoInsert = async (username, password) => {
    const userInsertQuery = "insert into users(username, password) values(?,?)";
    const randomSalt = randomBytes(32).toString("hex");
    const cryptedPassword =
        pbkdf2Sync(password, randomSalt, 65536, 64, "sha512").toString("hex");
    const passwordWithSalt = cryptedPassword + "$" + randomSalt;
    await connection.query(userInsertQuery, [username, passwordWithSalt]);
};

const userPasswordVerify = async (givenPassword, encryptedPasswordAndSalt) => {
    const [encrypted, salt] = encryptedPasswordAndSalt.split("$");
    const givenEncrypted = pbkdf2Sync(givenPassword, salt, 65536, 64, "sha512").toString("hex");
    if (givenEncrypted === encrypted) {
        return 1;
    } else {
        return 0;
    }
};

const userInfoFilteredByID = async (username) => {
    const userFilterQuery = "select * from users where username=?";
    const result = await connection.query(userFilterQuery, [username]);
    return result[0];
};

export {
    boardCommentFilteredByPost,
    boardCommentInsert,
    boardCommentUpdate,
    userInfoInsert,
    userPasswordVerify,
    userInfoFilteredByID
};