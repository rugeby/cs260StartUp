const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
    throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const scoreCollection = client.db('simon').collection('score');
const commentsCollection = client.db('startup').collection('comments');



//findone

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}
function getComments(comments){
    return commentsCollection.findOne({comments: comments});
   // commentsCollection.find({}, function(err, comments) {
        
    //     if (err) {
    //         // handle error
    //         console.log(err);
    //         return;
    //       }
        
    //       // loop through each document in the array
    //       comments.forEach(function(comment) {
    //         console.log(comment);
    //       });
    //   });
}

function addComments(comments){
    return commentsCollection.insertOne(comments);
}



async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);

    return user;
}

async function createComments(email, comments) {
    // Hash the password before we insert it into the database
   

    const user = {
        email: email,
        comments: comments,
    };
    await commentsCollection.insertOne(user);

    return user;
}



module.exports = {
    getUser,
    getUserByToken,
    createUser,
    createComments,
};
