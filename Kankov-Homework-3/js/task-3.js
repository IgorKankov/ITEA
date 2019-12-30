function numberValue(number){
    switch(true){
        case number <= 5:
            alert("Tiny");
            break;
        case number <= 10:
            alert("small");
            break;
        case number <= 15:
            alert("medium");
            break;
        case number <= 20:
            alert("Large");
            break;
        case number <= 30:
            alert("HUGE!!!");
            break;
        default:
            break
    }
}
const numEnt = +prompt("enter some number")
numberValue(numEnt)