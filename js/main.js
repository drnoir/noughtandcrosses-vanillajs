window.onload=function(){
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  const box4 = document.getElementById("box4");
  const box5 = document.getElementById("box5");
  const box6 = document.getElementById("box6");
  const box7 = document.getElementById("box7");
  const box8 = document.getElementById("box8");
  const box9 = document.getElementById("box9");

  box1.addEventListener('click',function(){clickBox(event,1), false});
  box2.addEventListener('click',function(){clickBox(event,2), false});
  box3.addEventListener('click',function(){clickBox(event,3), false});
  box4.addEventListener('click',function(){clickBox(event,4), false});
  box5.addEventListener('click',function(){clickBox(event,5), false});
  box6.addEventListener('click',function(){clickBox(event,6), false});
  box7.addEventListener('click',function(){clickBox(event,7), false});
  box8.addEventListener('click',function(){clickBox(event,8), false});
  box9.addEventListener('click',function(){clickBox(event,9), false});
};

let naught = true;
const gridArr = [1,2,3,4,5,6,7,8,9];

function clickBox(event,num){
  this.addShape(num);
  this.checkGameState(num);
}

function checkGameState(num){
  const gridArrIndex = gridArr.indexOf(num);
  if (naught===true){
    gridArr.splice(gridArrIndex,1,'O')
    console.log("current state"+gridArr,'num index'+gridArrIndex);
    naught=false;
  }
  else{
    gridArr.splice(gridArrIndex,1,'X')
    console.log("current state"+gridArr,'num index'+gridArrIndex);
    naught=true;
  }
  this.checkWin();
}

function addShape(num){
  console.log(num);
  const box = document.getElementById('box'+num);
  switch (naught){
    case true:
      const newNaught =document.createElement('div');
      box.appendChild(newNaught)
      box.classList.add("nought");
      break;
    case false:
      const newCross = document.createElement("div");
      box.appendChild(newCross);
      box.classList.add("cross");
      break;
    default:
      console.log("something went wrong");
  }
}

function checkWin(){

  function contains(a,b,c, arr){
    return arr.indexOf(a)>-1 && arr.indexOf(b) > -1 && arr.indexOf(c) > -1
  }

  let noughtIndices = gridArr.map((e,i) => e==='O' ? i : '').filter(String);
  let crossIndices = gridArr.map((e,i) => e==='X' ? i : '').filter(String);

  console.log('o',noughtIndices,'x',crossIndices);
  //win conditions for noughts
  const checkWinHorizontal = contains(0,1,2, noughtIndices )
  const checkWinHorizontal2 = contains(6,7,8, noughtIndices )
  const checkWinDiag = contains(0,4,8, noughtIndices )
  const checkWinDiag2 = contains(2,4,6, noughtIndices )
  const checkWinvert1 = contains(3,4,5, noughtIndices )
  const checkWinvert3= contains(1,4,7, noughtIndices )
  const checkWinmiddle = contains(0,3,6, noughtIndices )
  const checkWinnvert2 = contains(2,5,8, noughtIndices )

//check index values for winning crosses
  const checkCrossWinHorizontal = contains(0,1,2, crossIndices )
  const checkCrossWinHorizontal2 = contains(6,7,8, crossIndices )
  const checkCrossWinDiag = contains(0,4,8, crossIndices )
  const checkCrossWinDiag2 = contains(2,4,6, crossIndices  )
  const checkCrossWinvert1 = contains(3,4,5, crossIndices )
  const checkCrossWinvert3= contains(1,4,7, crossIndices  )
  const checkCrossWinmiddle = contains(0,3,6, crossIndices )
  const checkCrossWinnvert2 = contains(2,5,8, crossIndices )
//win condition checking for noughts
  if (checkWinHorizontal ||checkWinHorizontal2 || checkWinDiag || checkWinDiag2 || checkWinvert1 || checkWinnvert2  || checkWinmiddle || checkWinvert3=== true)
  {
    alert("Nought Win");
    this.Reset();
  }

  //win condition checking for crosses
  if (checkCrossWinHorizontal || checkCrossWinHorizontal2 ||  checkCrossWinDiag || checkCrossWinDiag2 || checkCrossWinvert1  || checkCrossWinvert3|| checkCrossWinmiddle || checkCrossWinnvert2 === true)
  {
    alert("Crosses Win");
    this.Reset();
  }
  if(gridArr.every(function(element) {return typeof element === 'string';})
      &&!checkWinHorizontal && !checkWinHorizontal2  && !checkWinDiag && !checkWinDiag2 && !checkWinvert1 && !checkWinnvert2  && !checkWinmiddle && !checkWinvert3
      &&!checkCrossWinHorizontal&& !checkCrossWinHorizontal2 &&!checkCrossWinDiag &&  !checkCrossWinDiag2&&  !checkCrossWinvert1  &&  !checkCrossWinvert3&& !checkCrossWinmiddle && !checkCrossWinnvert2)
  {
    alert ("DRAW");
    this.Reset();
  }
}

function Reset(){
  location.reload();
}