/*
- We should have 4 buttons.

- In the names: happy, sad, angry and random.

- Clicking on each button should show an emoji with the same state.

* Each time a different emoji of the same state should be observed.

- When an emoji is shown, its state is written below.

- By clicking on the random button, an emoji should be shown from all modes.
*/

const happy = document.querySelector("#Happy");
const sad = document.querySelector("#Sad");
const angry = document.querySelector("#Angry");
const random = document.querySelector("#Random");

const BaseURLOne = "https://api.api-ninjas.com/v1/emoji";
// "XPQlJitgPEoOZABheVfcFg==TUh2r7s1DXxVwK16"
// didn't work

const BaseURLTwo =
  "https://emoji-api.com/categories/smileys-emotion?access_key=94b443396bd67a1cc91ee7fe8bbb99ac271b2a4b";

// function for getting emojis based on what we want
async function getEmoji(item) {
  const res = await fetch(
    `https://emoji-api.com/emojis?search=${item}&access_key=94b443396bd67a1cc91ee7fe8bbb99ac271b2a4b`
  );
  // const res = await fetch(BaseURLTwo);
  const data = await res.json();
  // console.log(data);
  return data;
}

// happy array
const happyArr = [];
getEmoji("grinning-face").then((emojis) => {
  emojis.forEach((emoji) => {
    happyArr.push({
      character: emoji.character,
      state: emoji.unicodeName.slice(5),
    });
  });
});
// console.log(happyArr);

// sad array
const sadArr = [];
getEmoji("frowning").then((emojis) => {
  for (let i = 0; i < 3; i++) {
    sadArr.push({
      character: emojis[i].character,
      state: emojis[i].unicodeName.slice(5),
    });
  }
});
getEmoji("pensive").then((emojis) => {
  sadArr.push({
    character: emojis[0].character,
    state: emojis[0].unicodeName.slice(5),
  });
});
getEmoji("crying").then((emojis) => {
  emojis.forEach((emoji) => {
    sadArr.push({
      character: emoji.character,
      state: emoji.unicodeName.slice(5),
    });
  });
});
// console.log(sadArr);

// angry array
const angryArr = [];
getEmoji("angry").then((emojis) => {
  emojis.forEach((emoji) => {
    angryArr.push({
      character: emoji.character,
      state: emoji.unicodeName.slice(5),
    });
  });
});
getEmoji("steam from nose").then((emojis) => {
  angryArr.push({
    character: emojis[0].character,
    state: emojis[0].unicodeName.slice(5),
  });
});
getEmoji("enraged").then((emojis) => {
  angryArr.push({
    character: emojis[0].character,
    state: emojis[0].unicodeName.slice(5),
  });
});
getEmoji("symbols-on-mouth").then((emojis) => {
  angryArr.push({
    character: emojis[0].character,
    state: emojis[0].unicodeName.slice(5),
  });
});
// console.log(angryArr);

// function for getting all emojis
async function getEmojiAll() {
  const res = await fetch(BaseURLTwo);
  const data = await res.json();
  // console.log(data);
  return data;
}

// random array
const randomArr = [];
getEmojiAll().then((emojis) => {
  emojis.forEach((emoji) => {
    randomArr.push({
      character: emoji.character,
      state: emoji.unicodeName.slice(5),
    });
  });
});
// console.log(randomArr);

// event for each button
const happyEmojy = document.createElement("div");
const stateHappy = document.createElement("p");

const sadEmojy = document.createElement("div");
const stateSad = document.createElement("p");

const angryEmojy = document.createElement("div");
const stateAngry = document.createElement("p");

const randomEmojy = document.createElement("div");
const stateRandom = document.createElement("p");

function clickEvent(btnName, array, emoji, state) {
  btnName.addEventListener("click", (e) => {
    let randomNum = Math.floor(Math.random() * array.length);
    // console.log(randomNum);
    emoji.textContent = array[randomNum].character;
    state.innerText = array[randomNum].state;
    emoji.style.marginTop = "10px";
    e.target.parentElement.append(emoji, state);
  });
}

clickEvent(happy, happyArr, happyEmojy, stateHappy);
clickEvent(sad, sadArr, sadEmojy, stateSad);
clickEvent(angry, angryArr, angryEmojy, stateAngry);
clickEvent(random, randomArr, randomEmojy, stateRandom);
