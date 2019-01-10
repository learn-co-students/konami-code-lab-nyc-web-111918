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
const entered = [];

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('keydown', function(event){

    entered.push(event.key)
    if(codes.join().includes(entered.join())){
      console.log(entered)
      if (codes.join() === entered.join()){
        alert("Hurray!");
        entered.splice(0, entered.length)
      }
    } else {
      entered.splice(0, entered.length)
    }
  })
})

function init() {
  // your code here

}
