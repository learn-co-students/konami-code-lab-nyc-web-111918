const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  const body = document.querySelector('body')
  body.addEventListener('keydown', function(onKeyDownHandler) {
    const key = onKeyDownHandler.key;

    if (key === codes[index]) {
      console.log(key)
      console.log(index)
      index++;

      if (index === codes.length) {
        alert("Congrats!");

        index = 0;
      }
    } else {
        index = 0;
    }
  })
}
