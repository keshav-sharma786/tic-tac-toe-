let boxes = document.querySelectorAll(".box");
// it returns a node list, which is basically the collection of nodes , it is exactly like an array, only difference is we cannot use the methods like push(), pop()
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameDraw = 0;
const hero = 1;
// jab bhi tic tac toe game khelte hain toh humare paas alternate turns aati hain, yaani pehle 'X' khelega, phir 'O' khelega, aise hi game aage chalta rahega. Toh hume pehle track karna padega ki pehle 'X' wale player ki turn hai ya 'O' wale player ki

// humare paas ek variable hona chahiye, jiske andar hum track kar paaye ki kon se player ki turn hai?

// sabse pehle hum apne O wale player ki turn ko track kar lete hain. turnO ko shuru mein hum kar denge true

// Agar O wale player ki turn hai toh iska matlab hai humare button ke upar 'O' print hokar aayega, aur agar 'X' wale player ki turn hai, toh humare button ke upar 'X' print hokar aayega.Agar turnO ki value true hai toh humare button ke upar O print hokar aayega, aur agar turnO ki value false hai toh humare button ke upar X print hokar aayega.
let turnO = true; // playerX, PlayerO

// secondly hum apne saare ke saare winning patterns ko store kar sakte hain. in winning patterns ko store karne ke liye hum apne arrays ka use karenge. 2d arrays => array of arrays. aisa array jiske andar bahut saare arrays hote hain.

// 1-d arr
let arr = ["apple", "banana", "litchi"];

// 2-d array. iske andar hum apne 0th index par apne fruits ko store kar sakte hain. 1st index par hum apni vegetables ko store kar sakte hain. toh arr2 ke andar hi humare 3 sub arrays aa gye hain. arr2 humara array hi hai jiske 0th index par ek individual array hai, ist index par ek individual array hai, aur uske 2nd index par bhi humara ek individual array hai.
let arr2 = [
  ["apple", "litchi"],
  ["potato", "mushroom"],
  ["pents", "shirts"],
];
console.log(arr2);
// printing 0th index of aarr2
console.log(arr2[0]);
//aur agar hume arr2 ke 0th index par jo array hai, us array ka 0th index access karna hai, then we can write
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
// hum chahte hain jaise hi hum buttons par click karen toh vaise hi kuch action perform  hona chahiye, toh hum har ek box / button ke upar event listener ko add kar sakte hain.

//  In JavaScript, `forEach` is a method used to iterate over elements in an array. It allows you to execute a provided function once for each element in the array.

// ### Explanation in Layman's Terms:

// Imagine you have a list of items (like a shopping list), and you want to go through each item one by one to do something with it (like checking it off the list). The `forEach` method is like a helper that goes through each item in your list and performs a task that you specify.

// ### Example:

// Let’s say you have an array of numbers:

// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// ```

// If you want to print each number in the console, you can use `forEach` like this:

// ```javascript
// numbers.forEach(function(number) {
//   console.log(number);
// });
// ```

// ### What Happens Here:
// - **`numbers.forEach(...)`**: This goes through each item in the `numbers` array.
// - **`function(number) {...}`**: This is the function that gets executed for each item in the array. The `number` parameter represents the current item in the array as it is being processed.
// - **`console.log(number);`**: This prints the current number to the console.

// ### Output:
// ```
// 1
// 2
// 3
// 4
// 5
// ```

// So, `forEach` helps you easily perform a specific action for every item in an array, without needing to write a more complex loop.

// When you use `forEach` to add event listeners to each box, the `forEach` method itself doesn't directly handle the click event. Instead, it sets up an event listener on each box. Here's how it works:

// 1. **Setting Up Listeners**:
//    - The `forEach` loop runs once for each of the 9 boxes, and during each iteration, it attaches a `click` event listener to the current box (`box`).
//    - After the loop finishes, each box now has its own click event listener.

// 2. **Clicking a Box**:
//    - When you click on a box (let's say the 9th box), the browser directly triggers the `click` event listener that was attached to that specific box during the `forEach` loop.
//    - The `forEach` method does not get involved during the click. It only ran once initially to set up the listeners.

// 3. **No Extra Checks**:
//    - The browser does not check all boxes to see which one was clicked. It directly knows that the 9th box was clicked because an event listener was specifically attached to that box. The task (code inside the event listener) is then executed only for that box.

// ### Summary:
// - **`forEach`**: Used only to attach the event listeners during the initial setup.
// - **Clicking a Box**: When you click the 9th box, the browser directly executes the event listener attached to it. There’s no need to check all other boxes.

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
    // but problem yeh hai ki jaise hi hum kisi box par dobara click kar rhe hain,let say agar kisi box ke upar 'X' likha hua hai toh voh 'O' mein change ho rha hai. dobara click kiya toh 'X' mein change ho gya, dobara click kiya toh 'O' mein change ho gya. par tic toe mein toh agar kisi box mein koi value fix ho jati hai toh,baad mein usko change nhi kar sakte.

    // toh is functionality ko apply karne ke liye hume kya karna padega, jaise hi kisi box ke andar humne inner text likh diya, vaise hi us box ko, us button ko hume disable karna padega.

    // disabled is a property of the box object, not a method.
    box.disabled = true;
    // hume ab basically kya karna padega, jaise hi koi bhi button click ho rha hai, usi time par hume check karna padega ki koi  humare paas winner aa rha hai.

    // calling chechWinner() function
    // hum kisi bhi box par click karenge toh checkWinner() ke paas call jayegi.
    // checkWinner() ek ek karke saare ke saare patterns ko nikalega.

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
  // winner ko check karne ke liye hume ek ek winning pattern ko check karna padega
  // sabse pehle 0,1,2 ko check karo
  // 0th box par dekho kon sa element hai
  // 1st position pe dekho kon sa element hai
  // 2nd position pe dekho kon sa element hai
  // Agar teenon positions par same element hai, us case mein kya hoga? us case mein humare paas winner aa gya. winner kon hai jo teenon positions pe same element hai.
  // Agar teenon positions mein se koi ek bhi position khaali reh gyi, ya teenon positions pe same element nhi hai, toh hum kya karenge second pattern ko check karenge i.e (3, 4, 5)
  // (3, 4, 5) ko check karne ke liye, jo humara 3rd index hai, vo ban jayegi humari position 1, 4th index humari position 2 ban jayegi, 5th index humari position 3 ban jayegi.
  // ab in teenon positions pe check karenge ki teenon positions pe same element hai ya nhi.
  // uske baad next positions ko check karenge
  // agar hum (0, 4, 8) kko check kar rhe hain toh, 0th index humari first position ban jayegi, 4th index humari second position ban jayegi, aur 8th index humari 3rd position ban jayegi
  // ab hum check karenge ki teenon positions par same element hai ya nhi, agar toh same elements hain, toh hume winner mil gya, agar nhi hai same element toh hume winner nhi mila.
  // matlab hume har ek pattern ke upar jaana padega, uspe traverse karna padega kya vahan se humare paas koi winner nikal ke aa rha hai ya nhi
  // humare paas jo array hai winPatterns uske upar hume loop chalana hai
  for (let pattern of winPatterns) {
    // ek ek karke humare saare patterns humare paas aa jayenge
    console.log(pattern[0], pattern[1], pattern[2]);

    // comment out it

    console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );
    // this pattern variable is our individual array
    // ab hum in patterns se apni positions nikal sakte hain
    // sabse pehle humare paas jo humara pattern array hai, isme se hum individual index nikal lete hain.
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    console.log(pos1Val);

    // sabse pehle hum check kar lenge ki humari teenon positions bhari honi chahiye, teenon positions mein se koi ek bhi position khaali nhi honi chahiye
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