function Randomize(ar) {
  var s = document.getElementById("select");
  var n = parseInt(s.options[s.selectedIndex].value);
  for (i = 0; i < n; i++) {
    var randnum = Math.floor(Math.random()*(n + 1));
    ar[i] = randnum;
  }
  return ar;
}

function getNumbers() {
  var arr = [];
  Randomize(arr);
  var ten = 0, f = 0;
  do {
    if (f > 100)
      break;
    else
    {
      var arr1 = arr.slice(ten, ten+10);
      sel = new String();
      sel = arr1.join(", ");
      ten = ten+10;
      f = ten+1;
      
      var el = document.createElement("p");
      el.innerHTML = sel;
      document.getElementById("1").appendChild(el);
    }
  } while(f < arr.length);
}