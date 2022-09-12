const loader = document.querySelector('.loader');
const percentage = document.querySelector('.percentage');

let count = 0;

window.addEventListener('load', () => {
  let loading = setInterval(animate, 100);
  function animate() {
    if(count === 100) {
      clearInterval(loading);
    } else {
      count++;
      percentage.innerHTML = count + '%';
    }
  }
}, 50);






// const logo = document.querySelectorAll('#logo path'); 

// for(let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
