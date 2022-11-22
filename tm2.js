let links = document.querySelector(".links");
let toggleBtn = document.querySelector(".menu")
toggleBtn.onclick = function () {
    links.classList.toggle("open");
    toggleBtn.classList.toggle("x");
}

// headroom
let header = document.querySelector("header");
let headroom = new Headroom(header);
headroom.init()
// end headroom



// change images
let page = document.querySelector(".landing");

let pictures = ['img03.jpg','img01.jpg','img02.jpg'];
let btnPrev = document.querySelector(".prevnext > i");
let btnNext = document.querySelectorAll(".prevnext i")[1];

let imgnumber = 1;

btnNext.onclick =  function() {
    if (imgnumber == 2) return false;
    imgnumber++;
    changeImages(imgnumber);
    changeBullets();
}
btnPrev.onclick =  function () {
    if (imgnumber == 0) return false;
    imgnumber--;
    changeImages(imgnumber);
    changeBullets();
}
// get bullets
let bullets = document.querySelectorAll('.bullets li');
function changeBullets () {
    bullets.forEach(bull => {
        bull.classList.remove("active");
        bullets[imgnumber].classList.add("active");
    });
}
function changeImages(num){
    page.style.backgroundImage = `url(../images/${pictures[num]})`;
};

bullets.forEach(bull => {
    bull.addEventListener("click", (e)=> {
        bullets.forEach(bul => {
            bul.classList.remove("active");
        });
        e.target.classList.add("active");
        changeImages(e.target.dataset.index);
    });
});



// stats number
let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .number");
console.log(stats)


// window.onscroll =  () => {
//     if (scrollY >= stats.offsetTop) { 
//         nums.forEach((num) => startCount(num));
//     }
// };

// function startCount(ele) {
//     let cont = setInterval(() => {
//         ele.textContent++;
//         if (ele.innerHTML == ele.dataset.number) { 
//             clearInterval(cont);
//         };
//     },10);
// }
