let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector(".btn-rest");
let turn0 = true; //playerx , playerO
let msgcontainer = document.querySelector(".msg-conatiner");
let newGamebtn = document.querySelector("#new-btn");
let newGamebtn2 = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let draw = document.querySelector(".draw");
let count =0;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
const restGame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    draw.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log(count)
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0 = false;

        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();

    })
})
const diableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =(winner)=>{
    msg.innerText = `Congarlutions , winner is ${winner} `;
    msgcontainer.classList.remove('hide');
    count=0;
    diableBoxes();

}
const checkWinner=()=>{
   for(patterns of winningPatterns ){
    let postval1 = boxes[patterns[0]].innerText; 
    let postval2 = boxes[patterns[1]].innerText; 
    let postval3 = boxes[patterns[2]].innerText; 

    if(postval1 != "" && postval2 !="" && postval3 != ""){
        if(postval1=== postval2 && postval2===postval3){
            showWinner(postval1);
            
        }
    }
    if(count===9){
        draw.classList.remove('hide');
    }
   }
};

newGamebtn.addEventListener("click",restGame);
newGamebtn2.addEventListener("click",restGame);

restbtn.addEventListener("click",restGame);