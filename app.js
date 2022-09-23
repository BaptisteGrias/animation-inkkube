const percentage = document.querySelector('.percentage');

let count = 0;

window.addEventListener('load', () => {
  let loading = setInterval(animate, 355);

  function animate() {
    if (count === 100) {
      setInterval(loading);
    } else {
      count++;
      percentage.innerHTML = count;
    }
  }
});

