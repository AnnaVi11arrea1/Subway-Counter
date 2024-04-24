// document.getElementById("count-el").innerText = 5
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
 
function increment() {
    count += 1
    countEl.innerText = count
    document.getElementById("count-el").classList.add('rotate')
    setTimeout(function() {
        document.getElementById("count-el").classList.remove('rotate');
    }, 1000);

}

function save(){
    let counted = count + " - "
    saveEl.innerText += counted
    console.log(count)
   
}

