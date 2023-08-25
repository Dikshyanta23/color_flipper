const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function generateRandomColor() {
  hexStr = '#';
  for (var i = 0; i < 6; i++) {
    instance = Math.floor(Math.random() * hex.length);
    hexStr += hex[instance];
  }
  return hexStr;
}

// target the elements
const btn = document.getElementById('btn1');
const body = document.body;
const textVal = document.getElementById('txt-val');

btn.addEventListener('click', function () {
  instance = generateRandomColor();
  console.log(instance);
  body.style.backgroundColor = instance;
  textVal.textContent = instance;
  btn.style.background = instance;
  btn.style.color = 'white';
});
