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





