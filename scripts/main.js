//Code credit to Mindy McAdams
//https://jsfiddle.net/macloo/e2yr41La/
//https://jsfiddle.net/macloo/z6mq5x2c/

let div1 = document.querySelector('#flyingtext');
let image1 = document.querySelector('#flyingbat');

image1.style.display = 'none';

div1.onclick = () => {
  image1.style.display = 'block'
};

const div2 = document.querySelector('#smallbattext');
const image2 = document.querySelector('#smallbat');

image2.onmouseenter = (e) => {
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
};
image2.onmouseleave = (e) => {
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
};
