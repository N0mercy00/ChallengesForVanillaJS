const clockC = document.querySelector(".js-clock");
const title = clockC.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const M = xmasDay.getMonth() - date.getMonth();
  const D = xmasDay.getDate() - date.getDate();
  const H = xmasDay.getHours() - date.getHours();
  const m = xmasDay.getMinutes() - date.getMinutes();
  const s = xmasDay.getSeconds() - date.getSeconds();

  const dayd = M * 30.5 + D - 1;
  console.log(dayd);

  title.innerText = `${dayd}d ${H + 23}h ${m + 59}m ${s + 59}s `;
}

function init() {
  setInterval(() => {
    getTime();
  }, 1000);
}

init();
