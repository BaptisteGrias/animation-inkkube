const percentage = document.querySelector('.percentage');

let count = 0;

window.addEventListener('load', () => {
  let loading = setInterval(animate, 220);

  function animate() {
    if(count === 100) {
      setInterval(loading);
    } else {
      count++;
      percentage.innerHTML = count;
    }
  }
});


// const logo = document.querySelectorAll('#logo path'); 

// for(let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
