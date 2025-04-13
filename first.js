let turn='0'; 
let total_turn=0;

let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array = new Array(9).fill("E");
// [0 ,1 ,2, 3  ,4,  5,  6,  7,  8];
// ['E','E','E','E','E','E','E','E'];

function check_winner(){
    for(let [index0,index1,index2] of winner){
        if(board_array[index0]!="E" && board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2]){
            return 1;
        }
    }
    return 0;
}

const stop=(event)=>{               // call back function 

    // console.log(event.target.id);

    const element=event.target;

    if(board_array[element.id]==="E"){   // to avoid change again after already filled
    // element.innerHTML="0";
    total_turn++;

    if(turn==="0"){
        element.innerHTML="0";
         board_array[element.id]="0";
         if(check_winner()){
            document.getElementById('win').innerHTML="Winner is 0";
            select1.removeEventListener('click',stop);
            return;
         }

        turn="X";
    }
    else{
        element.innerHTML="X";
        board_array[element.id]="X";
        if(check_winner()){
            document.getElementById('win').innerHTML='winner is X';
            select1.removeEventListener('click',stop);
            return;
        }
        turn="0";
    }
    if(total_turn==9){
        document.getElementById('win').innerHTML="Match is Draw";
    }
  }
}


const select1=document.getElementById('inner_board');
// const select1=document.querySelector('.inner');

select1.addEventListener('click',stop);


// Active Restart Button

const Restart=document.getElementById('restart');
Restart.addEventListener('click',()=>{
     const box = document.getElementsByClassName('box');
    
     Array.from(box).forEach((value)=>{
        value.innerHTML="";
     })
     turn='0';
     total_turn=0;
     board_array = new Array(9).fill("E");
     document.getElementById('win').innerHTML="";
     select1.addEventListener('click',stop);
})