function strings(first, second){
    if(first.toUpperCase() === second.toUpperCase()){
        alert("true")
    } else {
        alert("false")
    }
}
const first = prompt("enter first string");
const second = prompt("enter second string");
strings(first, second)