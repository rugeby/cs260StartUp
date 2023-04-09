# cs260StartUp
an Homework of my CS260 start up

Change from my development environment！

Change from GitHub

Note: 
first git clone first:
git clone URL(click code, click HTTPS, copy the link here)

how to trans local file to GitHub:
git push
git comment
username&personal token
eg: 
printf "\nChange from my development environment!\n" >> README.md
git commit -am "update(notes) thoughts about start up applications"
git push

how to create personal toke to access GitHub?
under "Settings"
click "Developer settings"
click "personal access tokens"
click "Tokens(classic)"
click "generate new tokens(classic)"

how to update file in GitHub to local:
git pull





Start up deliverable - specification

Buy some Sweets!!

Hi there! Have you ever wondered how to order some home made desserts for a party/social activity more efficiently? On this website, you can browse all our desserts, including different varieties of handmade chocolates, candies, pie, and cupcakes. And reserve a large number of orders for events/parties. And we offer delivery service if you order more than $30! When you open each different kind of dessert, there are many descriptions of the raw materials, the production process and other information about the dessert, as well as more and more detailed pictures.


![IMG_1526](https://user-images.githubusercontent.com/112892818/215225968-ac3e68ec-84d7-4144-953c-78bbdfdf5cf4.jpg)

![IMG_1527](https://user-images.githubusercontent.com/112892818/215225975-4314b0a1-c33c-4cf0-bd4a-5b7a41b4281b.jpg)


Key features:

> Display all the popular/best selling sweet products

> Users can easily search their targets from search box

> Ability to change the quantity tehy want

> Information of every product is transparent 

> Users can get help both through online webpage or call

> Display all categories 



HTML notes:
Attributes: describe the specific details of the element.
id: give a unique ID to the element so that you can distinguish it.
class: designates the element as being classified into a named group of elements.
<p id="hello" class="greeting">Hello world</p>
""/'' all work for attributes

Hyperlinks:
take you from one page to another another with a simple click
<a href="https://byu.edu">Go to the Y</a>

<!DOCTYPE html> (this is a header)
this tells the browser the type and version of ducoment.
//告诉浏览器文档的类型和版本

<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>



new one test code:
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>
  
  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
      </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>
  
  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>


trans file to my webpage:
./deployWebsite.sh -k ~/Desktop/production.pem -h rubyby.click
(deployWebsite.sh can be changed). \n
trans file to my simon webpage:
./deployWebsite.sh -k ~/Desktop/production.pem -h rubyby.click -s simon(also cam be changed)\n


notes of html and css:

Html, css, javascript
CSS - adj
HTML - nouns
JS - verbs

HTML:
Common elements include:
<p> - represents a paragraph of text
<h1> - represents the main header on a page -代表一个页面的主要标题
<img> - embeds an image -  嵌入一个图像
<form> - represents a form - 代表一种形式

HTML Tages:
We create elements by writing tags.
Most(not all) elements consist of an opening and closing tag:
<p> I am a paragraph </p>
HTML-paragraph elements:
<p> context

HTML- heading elements:
<h>~<h6>字符大小不同，h最大，h6最小

HTML-List Element: ul:  无序列表 <ul><li>list item<li></ul>：
ol: number list:有序列表 <ol><li></li></ol>



CSS Rules:
(almost)everything in CSS follows this basic pattern:
Selector{
	property: value;
}

CSS- Eg: make all <h1>elements purple:
H1{
	color: purple;
}

CSS-Eg: make all image elements 100 pixels wide&200 pixel tall:
Img{
	width: 100px;
	height: 200px;
}

CSS-Eg: select every other text input and give it a red border:
input[type = “text”]: nth-of-type(2n){
	border:2px solid red;
}

一个很有用的css website: text shadow CSS generator
https://html-css-js.com/css/generator/text-shadow/


JavaScript:
Numbers:
Java has one number type:
+/-/integers/decimal numbers

Javascript: NaN(Not a Number)
 0/0 => NaN
1 + NaM => NaN

JavaScript-Function:
Define a function:
Function funcName(){
//do something
}

JavaScript: Regular expression:
创建一个正则表达式：
Gim: 
JavaScript Patterns. You can add 3 possible modifiers to the regular expression: case-sensitivity (i), global searches (g), and multiline mode (m). These modifiers influence how the string is parsed. You can combine these by stringing them together, like so: /pattern/gim.
JavaScript模式。你可以给正则表达式添加3个可能的修饰符：大小写敏感度（i），全局搜索（g）和多行模式（m）。这些修饰符会影响字符串的解析方式。你可以通过把它们串在一起来组合它们，像这样。/pattern/gim。
Const re = /ab+c/
Syntax(句法)：
/pattern/modifiers;  => w3schools/I;
search(): searches a string for a specified value and returns the position of the match
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);

N =6;

replace(): replaces a specified value with another value in a string;
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");


JavaScript - Rest and Spread:
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ruby','Li']);
console.log(p);

function myBio(firstName, lastName, ...otherInfo){
    return otherInfo; 
}
 
let spreadResult = myBio("Ruby", "Li", "cs260", "nice", "cool");
console.log(spreadResult);

function restTest(a, b, ...otherNumber){
  console.log('a',a);
  console.log('b',b);
  console.log('...otherNumber', otherNumber);
}

restTest(1,2,3,4,5,6);

三个点表示省略。


JavaScript: Destruct:
const AlistFruit = ["banana", "apple","peach", "grape","blueberry"];
//destruct array here
const[first, second, ...others] = AlistFruit;
console.log(first, second);
console.log("...others = ", others);
//destruct object here

const object = {a: "banana",  b:12, c:["apple", "peach", "grape"] }
const {b : number, a : string, c:array} = object;
console.log("a = string = ", string);
console.log("b = number = ", number);
console.log("c = array = ", array);






JavaScript-Exception:

The try statement defines a code block to run (to try).
The catch statement defines a code block to handle any error.
The finally statement defines a code block to run regardless of the result.
The throw statement defines a custom error.
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}


JavaScript&HTML — DOM(document object model):



JavaScript - Add to HTML

Index.js:


function sayHello() {
  console.log('hello');
}

Index.html: 

<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>



<button onClick="let i=1;i++;console.log(i)">press me</button> 
<!-- OUTPUT: 2 -->









JavaScript-types, operation:
两种方式声明变量： let x = 1;
Const y =2;

Other object type:
===(equality)









三木运算符： Ternary operator:
A === 1? console.log(1) : console.log(‘not 1’);


For in: 
Const obj = {a: 1, b : ‘fish’}
For(const name in obj){
Console.log(name);
}

Output: a b
遍历对象的属性名称

对于array 的for (const name in arr)
遍历arr的index数组索引

For of: 遍历array索引对应的值（不是index）;


JavaScript 自带的 String function:
length: the number of characters in the string
indexOf: the starting index of a given substring(给定子字符串的起始索引)
Split: split the string into an array on the given delimiter string
下面这俩return T/F
startsWith: 如果字符串里有给定前缀 -> T
endsWith:如果字符串里有给定后缀. -> T
toLowerCase



JavaScript - Function:
${} 是 getElementByID的缩写
getElementById(): let you grab an html element by its ID, and perform an action on it.
可以让你通过它的id抓取一个HTML元素，并对它执行一个动作const myElement = document.getElementById(“demo”);
myElement.style.color = “red”;
//get the element and change its color;
 
等价表达：
Document.getElementById(“demo”).style.color = “red”;


JavaScript - Arrow Function:
() => 3;
不接受任何参数并且总是返回3；

() => {
	return 3;
}

Hello = function() {
	return “cool”;
}
等价于：

Hello = () => {
Return “cool”;
}

Hello = () => “cool”; // only can be used if the function only has one statement;

Const add = (x,y) => {
Return x + y;
}
	
	
Simon Service:
Index.js: 
trying to make a bridge that can collect the data from website and save them into database.
This file is the entry point; 
Nodes will call it when running the web service;



After that, use node.js run index.js:
	Node,js service:
		app.use(express.static(‘public’));
	
	
	
Simon -db note:
	
	export MONGOUSER=<yourmongodbusername>
	export MONGOPASSWORD=<yourmongodbpassword>
	export MONGOHOSTNAME=<yourmongodbhostname>
	
	set those 3 veriables to my own mongo username/password/hostname:
	
	export MONGOUSER=cs260ruby
	export MONGOPASSWORD=Liruge@123
	export MONGOHOSTNAME=cluster0.ebjpusg.mongodb.net
	
	this will be set in the code automatically, and store the data in mongo database.
	
	step to set up:
	command line:
	1. sudo vi /etc/environment
	2. i(so I can fix and change the file)
	3. :wq(after change, use this to exit)
	4. pm2 restart all --update-env
	5. pm2 save
	
	hint: if it does not work, restart the laptop:)
	
	
Simon-Login note:
Endpoint:
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

App.post()function send all the data we collected from user to our database;


app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});


const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
	

	
	
	
Simon WebSocket note:
Use JavaScript -> WebSocket API.
Create a WebSocket conversation:

const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening’);


After that:
WebSocketServer:
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});


The Step to debug the server:
Create a dir name: testWebSocket;
Use command line inside of this dir
Command line: nom init -y
Command line: nom install ws
Main.js:
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });


Startup-Service Note:
	fetch function: pass data to the database;
	debug for Start-up:
	ssh -i ~/Desktop/production.pem ubuntu@rubyby.click(log in to the services)
	cd services
	cd startup
	pm2 ls
	pm2 log
	(control + c) step out
	npm install
	(then install from all error it shows)
	pm2 restart all
	
	
	
simon-react Note:
	-> jsx file: combine hmtl and javascript together
	-> before use ./deployReact.sh -k ~/Desktop/production.pem -h rubyby.click -s simon
	   type "npm install" before(because React tool-chain that bundles my React JSX files into the build directory              that the deployment strip copies to my production env is not installed until i run"npm install")
	
