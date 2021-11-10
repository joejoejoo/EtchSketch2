//function to initialize our grid
function initializeGrid(gridSize) {
  // Here we create our grid rows and col using dom and javascript.
  BigPAPA.style.gridTemplateColumns = `repeat(${gridSize}, auto`;
  BigPAPA.style.gridTemplateRowss = `repeat(${gridSize}, auto`;

  //Hopefully this creates our 16 by 16 grid.
  for (i = 0; i < gridSize * gridSize; i++) {
    let div1 = document.createElement("div");
    // WIth our newly divs created with assign a unique class name, using
    // inline, javascript. So each new div will have a unique class name bassed on
    // the iterator
    div1.classList.add(`pixelEtch${i}`);
    BigPAPA.appendChild(div1);
  }

  //prior to the upcomming for loop we just had

  /* let mouseOve = document.querySelector(".pixelEtch");
  mouseOve.addEventListener("mouseenter", function (e) {
  highlight the mouseenter target
  console.log(e);

  mouseOve.style.backgroundColor = "lightblue"; 
  }); */

  // The issue with this statement was that it was only triggering one mouseover event
  // on the first div in our grid. And it was the only block being tunrned light
  // blue.

  // It turns out that our statement only created the mouseover event, for just one
  // div element. Which was the first one. We neeeded to "turn on" the event handler
  // for all the blocks.

  // Hence I used a for loop, that will loop throught each div's unique class
  // and assign them there evenhandler. Turned out perfect!!

  for (i = 0; i < gridSize * gridSize; i++) {
    let mouseOve = document.querySelector(`.pixelEtch${i}`);
    mouseOve.addEventListener("mouseenter", function (e) {
      // highlight the mouseenter target
      console.log(e);

      // if flag rainbow ON then raindow. if not then NO rainbow
      if (raidowFlagON) {
        mouseOve.style.backgroundColor = getRandomColor();
      } else {
        mouseOve.style.backgroundColor = color;
      }
    });
  }
}

//function to clear grid, when we want to change the size. If we dont, we will
// just create new grids on top of each other and it will result in messy display
function clearGrid() {
  for (i = 0; i < gridSize * gridSize; i++) {
    let divRemove = document.querySelector(`.pixelEtch${i}`);
    divRemove.remove();
    console.log(gridSize);
  }
}

//this is our random ccolor generator. I admit i took it off stack overflow
//https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var colorRet = "#";
  for (var i = 0; i < 6; i++) {
    colorRet += letters[Math.floor(Math.random() * 16)];
  }
  return colorRet;
}

console.log("Hello");

let BigPAPA = document.querySelector(".GridContainer");

//Prior to this program we were using flex. This worked out great initially
//However when it was time to create our col rows dynamically, flexbox had
// a severve limitations when trying to fit our div childrens into the
//parent cointainer. So I chose to pursue grid. Grid allows use to choose
// number of cols and rows and their size. And we can later use the dom along
//javascript to dynamically increase the col and rows.

//create DIV

//intial grid specs
let gridSize = 16;
initializeGrid(gridSize);
let color = "lightblue";

//this will be a flag that will turn on raindow color
let raidowFlagON = false;

//button to allow user to select grid size
const btnGridsize = document.querySelector(".btnGrid");
btnGridsize.addEventListener("click", () => {
  clearGrid();
  console.log(gridSize);

  //need to validate input <= 100
  let userGridSize = prompt("What is your grid size (enter below 100)");
  BigPAPA.style.gridTemplateColumns = 0;
  BigPAPA.style.gridTemplateRowss = 0;

  //this variable declaration is crucial inorder for our clear function to work.
  //essentially we declare the new user choice grid size to our previous var gridSize, updating its value.
  // the gridSize is used to tell cleearGrid function "How much to delete", since it is being used as an iterator in a loop for deleting,
  //all the gridcointainer divs.
  //SO if we dont update our gridSize, we will just be deleting with the initial amount of 16. And as the user creates new gridsizes
  //The clearfuction wont be updated to delete the new gridsizes, it will just delete 16 of em.
  gridSize = userGridSize;

  initializeGrid(userGridSize);
});

const btnDefCol = document.querySelector(".btnDefCol");
btnDefCol.addEventListener("click", () => {
  raidowFlagON = false;
  color = "lightblue";
});

const btnRain = document.querySelector(".btnRainbow");
btnRain.addEventListener("click", () => {
  raidowFlagON = true;
});

const btnBlack = document.querySelector(".btnBlack");
btnBlack.addEventListener("click", () => {
  raidowFlagON = false;
  color = "black";
});

//divide by zero?!?! my nigga,who you think you are?!?!? GOD?? You know I would slap a foo like youself.
