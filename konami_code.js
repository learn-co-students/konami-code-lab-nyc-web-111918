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
  let secretCode = []
  let index = 0
  document.body.addEventListener("keydown", (e)=>{
    const key = e.key;
    console.log(key)
    if (key===codes[index]){
      index++;
      if (index === codes.length){
        window.alert("Hurray!");
        index=0;
      }
    } else{
      index=0;
    }
    // while (secretCode.length <=10){
    //   console.log(e.key)
    //   secretCode.push(e.key)
    // }
    // if (secretCode === codes){
    //   alert("Hurray!")
    // }
  })
}
