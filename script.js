arr = [];
document.getElementById("btn_start").onclick = function() {getNumbers()};
document.getElementById("btn_sort").onclick = function() {sortFunc()};


function getString() {
  /* Turn array of numbers into string */
  var ten = 0, f = 0;
  var s = "";
  for (f = 0; f < arr.length; f = ten + 1) {
    if (f > 100)
      break;
    else {
      var arr1 = arr.slice(ten, ten + 10);
      arr1 = arr1.join(', ');
      s = s.concat(arr1);
      s = s.concat('<br>');
      ten = ten + 10;
    }
  }
  return s;
}

function getNumbers() {
  /* Delete old content */
  var elem = document.querySelector("#numb1");
  elem.removeChild(elem.lastChild);

  /* Randomize numbers */
  var opt = document.getElementById("select");
  var n = parseInt(opt.options[opt.selectedIndex].value);
  for (i = 0; i < n; i++) {
    var randnum = Math.floor(Math.random()*(n + 1));
    arr[i] = randnum;
  }

  //sel = sel.splice(sel.length-1, sel.length-1, '.');
  var s1 = getString();
  var el = document.createElement("p");
  el.innerHTML = s1;
  document.getElementById("numb1").appendChild(el);
}

function sortFunc() {
  /* Delete old content */
  var elem = document.querySelector("#numb2");
  elem.removeChild(elem.lastChild);

  /* Sort */
  if (arr.length > 0) {
    arr.sort(function(a, b){return a-b});
    var s2 = getString();
    var el = document.createElement("p");
    el.innerHTML = s2;
    document.getElementById("numb2").appendChild(el);
  }
  else {
    alert("Numbers were not generated. You have to select any option and click on \"Start\" before.");
  }
}