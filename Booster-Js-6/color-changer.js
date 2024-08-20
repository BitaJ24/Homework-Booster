/*
- Create two sections in the middle of the page 

1- The first section contains two elements:
  - A text input.
  - A color input.

When the user clicks on the color input, a color picker will appear.
Whatever color the user chooses, the background color of the page will change accordingly.
The hex code of the selected color will be displayed in the text input.

2- Dynamic Color Change:
By modifying the code in the text input, the color of the page should update.

3- In the second section(History Section):
Display the last 10 colors selected by the user.
*/

const textInput = document.querySelector("#text");
const colorInput = document.querySelector("#color");
const list = document.querySelector("#list");
const colorPicked = [];

colorInput.addEventListener("input", () => {
  document.body.style.backgroundColor = colorInput.value;
  textInput.value = colorInput.value;
  colorPicked.push(colorInput.value);
  // console.log(colorPicked);
  show();
});

textInput.addEventListener("input", () => {
  colorInput.value = textInput.value;
  document.body.style.backgroundColor = colorInput.value;
  colorPicked.push(colorInput.value);
  // console.log(colorPicked);
  show();
});

function show() {
  const lastTenColors = colorPicked.slice(-10);
  // console.log(lastTenColors);
  list.innerHTML = "";
  lastTenColors.forEach((color) => {
    const newLi = document.createElement("li");
    newLi.innerText = color;
    newLi.style.listStyleType = "decimal";
    newLi.style.marginBottom = "10px";
    list.append(newLi);
  });
}
