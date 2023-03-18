const imageGaleryButtons = document.getElementsByClassName("section");
const imageGaleryFrame = document.getElementById("galery-frame");
const galeryImages = ["./src/app-image1.png","./src/app-image2.png","./src/app-image3.png"]



rowNumber = 0;
galeryInterval = setInterval(()=>{
    imageGaleryFrame.src = galeryImages[rowNumber];
    switch(rowNumber){
        case 0:
            imageGaleryButtons[0].classList.add("active");
            imageGaleryButtons[1].classList.remove("active");
            imageGaleryButtons[2].classList.remove("active");
            break;
        case 1:
            imageGaleryButtons[0].classList.remove("active");
            imageGaleryButtons[1].classList.add("active");
            imageGaleryButtons[2].classList.remove("active");
            break;
        case 2:
            imageGaleryButtons[0].classList.remove("active");
            imageGaleryButtons[1].classList.remove("active");
            imageGaleryButtons[2].classList.add("active");
            break;
        default:
            imageGaleryButtons[0].classList.remove("active");
            imageGaleryButtons[1].classList.remove("active");
            imageGaleryButtons[2].classList.remove("active");
            rowNumber = 0;
            break;
    }
    rowNumber < 2 ? rowNumber++ : rowNumber=0;
}, 2500);
imageGaleryButtons[0].addEventListener("click",()=>{
    imageGaleryFrame.src = galeryImages[0];
    imageGaleryButtons[0].classList.add("active");
    imageGaleryButtons[1].classList.remove("active");
    imageGaleryButtons[2].classList.remove("active");
    clearInterval(galeryInterval);
});
imageGaleryButtons[1].addEventListener("click",()=>{
    imageGaleryFrame.src = galeryImages[1];
    imageGaleryButtons[0].classList.remove("active");
    imageGaleryButtons[1].classList.add("active");
    imageGaleryButtons[2].classList.remove("active");
    clearInterval(galeryInterval);
});
imageGaleryButtons[2].addEventListener("click",()=>{
    imageGaleryFrame.src = galeryImages[2];
    imageGaleryButtons[0].classList.remove("active");
    imageGaleryButtons[1].classList.remove("active");
    imageGaleryButtons[2].classList.add("active");
    clearInterval(galeryInterval);
});

