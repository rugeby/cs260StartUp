function displayPicture(data) {
    const containerEl = document.querySelector("#picture");
  
    const width = containerEl.offsetWidth;
    const height = containerEl.offsetHeight;
  
    const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imgUrl);
    containerEl.appendChild(imgEl);
  }

  function callService(url, displayCallback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayCallback(data);
      });
  }

  const random = Math.floor(Math.random() * 1000);
  
  callService(
    `https://picsum.photos/v2/list?page=${random}&limit=1`,
    displayPicture
  );


class Buyer{
  buyername;
  buyercomments;
  socket;

  constructor(){
    
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();

    this.configureWebSocket();


  }


  getBuyerComment(){
    const buyerComments = document.querySelector('#comments').value;
    console.log(buyerComments);
    broadcastEvent('Mystery buyer', buyerComments);
    saveComment(buyerComments);
    
  }

  getBuyerName() {
    return localStorage.getItem('userName') ?? 'Mystery buyer';
  
  }

  async saveComment(comments){
    const buyername = this.getBuyerName();
    const date = new Date().toLocaleDateString();
    const buyercomments = {name: buyername, comments: comments, date:date};
    


    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(buyercomments),
      });

      this.broadcastEvent(buyername, buyercomments);

      const comments = await response.json();
      localStorage.setItem('comments', JSON.stringify(comments));
    } catch {
      console.log("Not successfully get the comments :(")
    }



  }

  configureWebSocket(){
    const protocol = window.location.protocol === 'http:'?'ws':'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    // this.socket.onopen = (event) => {
    //   this.desplayMsg('system', 'game', 'connected');
    // };
    // this.socket.onclose = (event) => {
    //   this.desplayMsg('system', 'game', 'disconnected');
    // };

    this.socket.onmessage = async(event) => {
      const msg = JSON.parse(await event.data.text());
      this.displayMsg('buyer', msg.from,  `comments ${msg.comments}`);
    };

  }


displayMsg(cls, from, msg){
  const chatText = document.querySelector('comments');
  chatText.innerHTML = 
  `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

broadcastEvent(from, comments){
  const event = {
    from: from,
    comments: comments,
  };
  this.socket.send(JSON.stringify(event));
}

updateCommentsLocal(newComment){
  let comments =[];
  const commentText = localStorage.getItem('comments');
  if (commentText) {
    comments = JSON.parse(commentText);
  }
  let found = false;
  if (!found) {
    comments.push(commentText);
  }
  localStorage.setItem('comments', JSON.stringify(comments));
}

}

const buyer = new Buyer();

