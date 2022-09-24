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

<svg width="1648" height="137" viewBox="0 0 1648 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1C1 1 228 29.0498 290.5 47.9009C413.5 85 442.992 101.786 560 121.205C687.013 142.285 778 134.5 900.5 134.5C1023 134.5 1083.85 131.472 1201 128.37C1296 125.854 1328.7 126.708 1416.5 121.205C1515.5 115 1647 107.5 1647 107.5" stroke="black" stroke-linejoin="round"/>
</svg>
