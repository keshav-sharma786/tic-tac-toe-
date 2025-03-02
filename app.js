let boxes = document.querySelectorAll(".box");
// it returns a node list, which is basically the collection of nodes , it is exactly like an array, only difference is we cannot use the methods like push(), pop()
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameDraw = 0;
const hero = 1;

let turnO = true; // playerX, PlayerO


let arr = ["apple", "banana", "litchi"];


let arr2 = [
  ["apple", "litchi"],
  ["potato", "mushroom"],
  ["pents", "shirts"],
];
console.log(arr2);
// printing 0th index of aarr2
console.log(arr2[0]);

console.log(arr2[0][0]);

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(winPatterns);

const resetGame = () => {
  turnO = true;
  enableBoxes();
  gameDraw = 0;
  msgContainer.classList.add("hide");
};




// So, clicking on the 9th box doesn't trigger checks for all boxes; the browser knows exactly which box was clicked because the event listener was already attached to that specific box.

// In the code you've shared, the `forEach` method iterates over all the `box` elements and adds an event listener to each one. Here’s a step-by-step explanation of how this works:

// 1. **Iteration with `forEach`**:
//    - The `forEach` method goes through each `box` in the `boxes` array (which is assumed to be a collection of elements representing the boxes in the tic-tac-toe grid).
//    - For each `box`, it attaches a `click` event listener. This means that every `box` will now listen for a `click` event.

// 2. **Event Listener Execution**:
//    - When a specific `box` is clicked, the code inside the event listener (i.e., the function passed to `addEventListener`) is executed.
//    - The code inside this function doesn’t run until the specific `box` is clicked. So, the `if-else` logic is only executed when a box is clicked, not during the iteration.

// 3. **Order of Operations**:
//    - The `forEach` method only attaches the event listener to all the boxes during the iteration.
//    - The `if-else` logic and other code inside the event listener are executed only when a particular `box` is clicked.

// **Clarification**:
// - The code first adds a click event listener to **all** the boxes.
// - After the event listener is attached to all boxes, nothing happens until a user clicks on a box.
// - Once a box is clicked, the function inside the event listener executes for that particular box, and this is where the `if-else` logic comes into play.

// **In Summary**:
// - The `forEach` method **does not** execute the `if-else` part immediately.
// - It simply adds a `click` event listener to each box.
// - The `if-else` part runs only when a user clicks on a box, and it runs only for the box that was clicked.

// When `turnO === true`, JavaScript determines which box was clicked through the event listener attached to each box. Here's how it works:

// 1. **Event Listener Setup**:
//    - You attach an event listener to each box using `box.addEventListener("click", ...)`.
//    - This event listener waits for a `click` event to occur on the specific `box` it was attached to.

// 2. **Click Event Trigger**:
//    - When you click on a particular box, the event listener for that specific box gets triggered.
//    - The function inside the event listener executes, and the code inside this function runs only for the box that was clicked.

// 3. **Changing Inner Text**:
//    - Inside the event listener, the code `box.innerText = "O";` or `box.innerText = "X";` is executed.
//    - The `box` variable in this context refers to the specific box that was clicked.
//    - So, when `turnO === true`, and the code `box.innerText = "O";` is executed, it directly changes the inner text of the clicked box to `"O"`.

// **How JavaScript Knows Which Box Was Clicked**:
// - The event listener is attached to each individual box.
// - When a box is clicked, the event listener for that specific box is triggered, and the `box` variable within that listener refers to the box that was clicked.
// - This is why `box.innerText = "O";` changes the inner text of only the clicked box and not any other box.

// **In Simple Terms**:
// - Imagine you have a bunch of buttons, and you assign a task to each button: "When you are clicked, change your label to 'O' or 'X' based on the turn."
// - When you click on a specific button, only that button knows it was clicked and does its task—changing its label. The other buttons don't do anything because they weren't clicked.

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    gameDraw++;
    if (turnO === true) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      // plyerX
      box.innerText = "X";
      turnO = true;
    }
    
    box.disabled = true;
   
    checkWinner();
  });
});

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const showTie = () => {
  msg.innerText = "Game is tie.";
  msgContainer.classList.remove("hide");
  disableBoxes();
  // showTie = 0;
};

// making checwinner() function, which is going to be my arrow function
const checkWinner = () => {
  let winnerFound = false;
 
    console.log(pattern[0], pattern[1], pattern[2]);

    // comment out it

    console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );
    
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    console.log(pos1Val);

   
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);

        showWinner(pos1Val);
        winnerFound = true;
        break;
      }
      // if (gameDraw == 9) {
      //   if (pos1Val != pos2Val || pos2Val != pos3Val) {
      //     showTie();
      //   }
      // }
    }
  }
  if (gameDraw === 9 && !winnerFound) {
    showTie();
    
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
// So, very good you understood the game logic. keep it up and try to  make more tic tac toes in future also of 16 boxes and more and try to make them on your own without looking at the tutorial. very good,keep it up..
