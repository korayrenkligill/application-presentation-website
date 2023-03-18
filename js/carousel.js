let carouselImages = document.getElementsByClassName("carousel-img");
let carouselButtons = document.getElementsByClassName("carousel-button");

let rowNumber = 0;
// ChangeCarouselImage(rowNumber);
// const carouselInterval = setInterval(() => {
//     rowNumber < 2 ? rowNumber++ : rowNumber=0;
//     ChangeCarouselImage(rowNumber);
// }, 3000);


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


function ChangeCarouselImage(number){
    switch(number){
        case 0:
            carouselButtons[0].classList.add("active");
            carouselButtons[1].classList.remove("active");
            carouselButtons[2].classList.remove("active");
            carouselImages[0].classList.add("active");
            carouselImages[1].classList.remove("active");
            carouselImages[2].classList.remove("active");
            break;
        case 1:
            carouselButtons[0].classList.remove("active");
            carouselButtons[1].classList.add("active");
            carouselButtons[2].classList.remove("active");
            carouselImages[0].classList.remove("active");
            carouselImages[1].classList.add("active");
            carouselImages[2].classList.remove("active");
            break;
        case 2:
            carouselButtons[0].classList.remove("active");
            carouselButtons[1].classList.remove("active");
            carouselButtons[2].classList.add("active");
            carouselImages[0].classList.remove("active");
            carouselImages[1].classList.remove("active");
            carouselImages[2].classList.add("active");
            break;
        default:
            carouselButtons[0].classList.remove("active");
            carouselButtons[1].classList.remove("active");
            carouselButtons[2].classList.remove("active");
            carouselImages[0].classList.remove("active");
            carouselImages[1].classList.remove("active");
            carouselImages[2].classList.remove("active");
            rowNumber = 0;
            ChangeCarouselImage(rowNumber);
            break;
    }
}
function ButtonChangeCarouselImage(number){
    switch(number){
        case 0:
            carouselButtons[0].classList.add("active");
            carouselButtons[1].classList.remove("active");
            carouselButtons[2].classList.remove("active");
            carouselImages[0].classList.add("active");
            carouselImages[1].classList.remove("active");
            carouselImages[2].classList.remove("active");
            break;
        case 1:
            carouselButtons[0].classList.remove("active");
            carouselButtons[1].classList.add("active");
            carouselButtons[2].classList.remove("active");
            carouselImages[0].classList.remove("active");
            carouselImages[1].classList.add("active");
            carouselImages[2].classList.remove("active");
            break;
        case 2:
            carouselButtons[0].classList.remove("active");
            carouselButtons[1].classList.remove("active");
            carouselButtons[2].classList.add("active");
            carouselImages[0].classList.remove("active");
            carouselImages[1].classList.remove("active");
            carouselImages[2].classList.add("active");
            break;
        default:
            carouselButtons[0].classList.remove("active");
            carouselButtons[1].classList.remove("active");
            carouselButtons[2].classList.remove("active");
            carouselImages[0].classList.remove("active");
            carouselImages[1].classList.remove("active");
            carouselImages[2].classList.remove("active");
            rowNumber = 0;
            ChangeCarouselImage(rowNumber);
            break;
    }
    clearInterval(carouselInterval);
}