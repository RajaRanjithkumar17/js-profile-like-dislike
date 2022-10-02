var viewBtn = document.getElementById("view");
var user1 = document.getElementById("user1");
var col4 = document.getElementsByClassName("col-4")[0]
var next = document.getElementsByClassName("next")[0];                 //get
var row = document.getElementsByClassName("row")[0];
//var user2 = document.getElementById("user2");
// var user3 = document.getElementById("user3");
// var userImg1 = document.getElementById("userImg1" )


var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");


var nextbtn = document.createElement("button");
nextbtn.setAttribute("class", "showNext");
nextbtn.innerText = "next"


function hideuser() {                                                   //hide and show
  user1.style.display = "none";
  //     user2.style.display = "none";
  //     user3.style.display = "none";
}
hideuser();

function disableView() {
  viewBtn.setAttribute("disabled", "disabled");
}

function nextBtn() {
  nextbtn.style.display = "block"
}

function showUser() {
  user1.style.display = "block";
  // user2.style.display = "block";
  //  user3.style.display = "block";
};



viewBtn.addEventListener('click', () => {
  showUser();
  disableView();
  nextBtn();



  var user1Img = document.createElement("img");
  var user2Img = document.createElement("img");
  var user3Img = document.createElement("img");

  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  var cardTitile = document.createElement("h5");
  cardTitile.setAttribute("class", "card-title");
  cardTitile.innerText = "Ramm"


  var cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.innerText = "Sanker"

  var like = document.createElement("button");
  like.setAttribute("id", "green");
  like.setAttribute("class", "green");
  like.innerText = "like";

  var dislike = document.createElement("button");
  dislike.setAttribute("class", "red");
  dislike.setAttribute("id", "red");
  dislike.innerText = "dislike";

  user1Img.setAttribute('src', "imges/t3.jpg");       // way 1 for add img
  user1Img.setAttribute('alt', 'nature');
  user1Img.setAttribute('class', 'card-img-top');

  user2Img.setAttribute('src', "imges/testi3.jpg");
  user2Img.setAttribute('alt', 'nature');
  user2Img.setAttribute('class', 'card-img-top');


  user3Img.setAttribute('src', "imges/testi5.jpg");
  user3Img.setAttribute('alt', 'nature');
  user3Img.setAttribute('class', 'card-img-top');


  img1.appendChild(user1Img);

  next.appendChild(nextbtn);
  // img2.appendChild(user2Img);
  // img3.appendChild(user3Img);
  img1.appendChild(cardTitile);
  img1.appendChild(cardText);
  img1.appendChild(like);
  img1.appendChild(dislike);
  img1.appendChild(cardBody);
  col4.appendChild(img1)
  row.appendChild(col4)


  // img1.appendChild(user2Img);
  // img2.appendChild(user2Img);
  // img3.appendChild(user3Img);
  // cardBody.appendChild(cardTitile);
  // cardBody.appendChild(cardText);
  // cardBody.appendChild(like);
  // cardBody.appendChild(dislike);
  // img1.appendChild(cardBody);

  col4.appendChild(cardBody)

  var btn1 = document.querySelector('#green');
  var btn2 = document.querySelector('#red');


  btn1.addEventListener('click', function () {

    if (btn2.classList.contains('red')) {                   //way 1 for like dislike

      btn2.classList.remove('red');

    }
    this.classList.toggle('green');

  });

  btn2.addEventListener('click', function () {

    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');   
    }

    this.classList.toggle('red');

  });

});





var data = [{
  img: "imges/testi5.jpg",                    //way 2 for add img
  name: "mani",

},
{
  img: "imges/testi3.jpg",
  name: "ranjith",

}]

var nxt = 0;

nextbtn.addEventListener("click", () => {

  for (var i = 0; i < data.length; i++) {
    var img = data[i].img;

    var name = data[i].name;

    console.log(img);



    var row = document.getElementsByClassName("row")[0];
    var col4 = document.getElementsByClassName("col-4")[0]
   

    var img1 = document.getElementById("img1");
    col4.appendChild(img1);
    row.appendChild(col4);

    var photo = document.createElement("img");
    photo.setAttribute("class", "card-img-top  ");
    photo.setAttribute("src", img);                     //
    img1.appendChild(photo);

    var cardTitile = document.createElement("h5");
    cardTitile.setAttribute("class", "card-title");
    cardTitile.innerText = name;
    img1.appendChild(cardTitile);

    console.log(cardTitile);


    var cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = "developer";
    img1.appendChild(cardText);


    var likeBox = document.createElement("div");
    likeBox.setAttribute("class", "d-flex");
    img1.appendChild(likeBox);


    var like = document.createElement("button");
    like.innerText = "LIKE";
    like.setAttribute("class", "like-btn");
    like.setAttribute("id", "list_" + nxt);
    likeBox.appendChild(like);


    var likeEle = document.createElement("h6");
    likeEle.setAttribute("class", "likeAdd");
    likeEle.innerText = "0";
    likeBox.appendChild(likeEle);


    var unlike = document.createElement("button");
    unlike.innerText = "UNLIKE";
    unlike.setAttribute("class", "unlike-btn");
    unlike.setAttribute("id", "unlist_" + nxt);
    likeBox.appendChild(unlike);

    var dislikeEle = document.createElement("h6");
    dislikeEle.setAttribute("class", "dislikeAdd");
    dislikeEle.innerText = "0";
    likeBox.appendChild(dislikeEle);

    console.log(img1);


    var likeBtn = document.getElementsByClassName("like-btn");
    var unlikeBtn = document.getElementsByClassName("unlike-btn");

    for (var i = 0; i < likeBtn.length; i++) {            //fu 

      likeBtn[i].addEventListener("click", liked);

    }
    for (var i = 0; i < unlikeBtn.length; i++) {
      unlikeBtn[i].addEventListener("click", unliked);
    }

    nxt++;
  }
});


var putlike = false;
var putdislike = false;                     //put like and dislike
let likeEle, dislikeEle;
function liked() {
  putlike = !putlike;
  var getprnt = this.parentNode;


  likeEle = getprnt.getElementsByClassName("likeAdd")[0];
  dislikeEle = getprnt.getElementsByClassName("dislikeAdd")[0];


  if (putlike) {
    likeEle.innerText = "1";
    dislikeEle.innerText = "0";
    putdislike = false;
  }
  else {
    likeEle.innerText = "0";
  }
}

function unliked() {

  putdislike = !putdislike;
  var getprnt = this.parentNode;
 
  dislikeEle = getprnt.getElementsByClassName("dislikeAdd")[0];
  likeEle = getprnt.getElementsByClassName("likeAdd")[0];

  if (putdislike) {
    dislikeEle.innerText = "1";
    likeEle.innerText = "0";
    putlike = false;
  }
  else {
    dislikeEle.innerText = "0";

  }

}







