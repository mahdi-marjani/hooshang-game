function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var count = 0;
var min = 0;
var max = 99;
var random_num = randomInteger(min, max);
var num_hads = document.getElementById("num-hads");
num_hads.innerHTML = random_num;
function ok() {
  let javab = document.getElementById("javab");
  if (document.getElementById("err").innerHTML == "" && javab.value !== "") {
    let tbody = document.getElementById("tbody");
    let row = document.createElement("div");
    let result = document.getElementById("result");
    let inputs = document.getElementById("inputs");
    let again = document.getElementById("again");
    let body = document.getElementById("body");

    count++;
    if (javab.value == "b") {
      min = random_num + 1;
    } else if (javab.value == "k") {
      max = random_num - 1;
    } else if (javab.value == "d") {
      result.innerHTML = "جواد اسکریپت برنده شد با " + count + " حدس";
      result.style.color = "#D4FF00";
      inputs.style.display = "none";
      again.style.display = "flex";
      count = 0;
      setInterval(function () {
        if (count % 2 == 0) {
          body.className = "win";
          count++;
        } else {
          body.className = "defult";
          count = 0;
        }
      }, 300);
    }

    row.classList.add("row");
    row.innerHTML =
      '<div class="td">' +
      count +
      '</div><div class="td">' +
      random_num +
      '</div><div class="td">' +
      javab.value +
      "</div>";
    tbody.append(row);
    random_num = randomInteger(min, max);
    if (javab.value != "d") {
      num_hads.innerHTML = random_num;
    }
    javab.value = "";
  }
}
function test_javab() {
  let javab = document.getElementById("javab");
  let lable_err = document.getElementById("err");
  if (
    javab.value !== "b" &&
    javab.value !== "k" &&
    javab.value !== "d" &&
    javab.value !== ""
  ) {
    lable_err.innerHTML = "Just b/k/d";
    javab.className = "err";
  } else {
    lable_err.innerHTML = "";
    javab.className = "defult";
  }
}
function start() {
  let form = document.getElementById("form");
  let start_menu = document.getElementById("start-menu");

  start_menu.style.display = "none";
  form.style.display = "flex";
}
