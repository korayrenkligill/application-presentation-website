const buttons = document.getElementsByClassName("frame");
const comment = document.getElementById("interactive-comment");

const messages = [
    "Nam elementum lectus et efficitur semper. Sed efficitur nec justo sed faucibus. Quisque ultrices nulla tincidunt semper vulputate. Donec vestibulum viverra accumsan. In sapien eros.",
    "Lobortis et luctus in, hendrerit sed nulla. Phasellus luctus augue velit, sit amet varius ligula posuere ac.",
    "Maecenas eu est erat. Morbi accumsan nulla ac dui faucibus, sit amet interdum dolor maximus. Donec placerat sollicitudin elit, eget efficitur enim.",
    "In hac habitasse platea dictumst. Aliquam laoreet finibus eros, pretium suscipit tortor tincidunt id."
]
const date = [
    "5 Jan 2022",
    "12 May 2021",
    "21 May 2022",
    "8 Apr 2021",
]

buttons[0].addEventListener("mouseover",()=>{
    SetActiveComment(0);
});
buttons[1].addEventListener("mouseover",()=>{
    SetActiveComment(1);
});
buttons[2].addEventListener("mouseover",()=>{
    SetActiveComment(2);
});
buttons[3].addEventListener("mouseover",()=>{
    SetActiveComment(3);
});

SetActiveComment(0);
function SetActiveComment(number){
    switch(number){
        case 0:
            buttons[0].classList.add("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.remove("active");
            buttons[3].classList.remove("active");
            comment.innerHTML = `“${messages[0]}“ <br><br> was made at <span>${date[0]}</span>`
            break;
        case 1:
            buttons[0].classList.remove("active");
            buttons[1].classList.add("active");
            buttons[2].classList.remove("active");
            buttons[3].classList.remove("active");
            comment.innerHTML = `“${messages[1]}“ <br><br> was made at <span>${date[1]}</span>`
            break;
        case 2:
            buttons[0].classList.remove("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.add("active");
            buttons[3].classList.remove("active");
            comment.innerHTML = `“${messages[2]}“ <br><br> was made at <span>${date[2]}</span>`
            break;
        case 3:
            buttons[0].classList.remove("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.remove("active");
            buttons[3].classList.add("active");
            comment.innerHTML = `“${messages[3]}“ <br><br> was made at <span>${date[3]}</span>`
            break;
    }
}