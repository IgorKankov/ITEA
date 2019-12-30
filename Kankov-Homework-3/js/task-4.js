function marksConversation(markLetter){
    switch(markLetter){
        case "A":
        case "a":
            alert("You got 90 or more");
            break;
        case "B":
        case "b":
            alert("You got 80 or more");
            break;
        case "C":
        case "c":
            alert("You got 70 or more");
            break;
        case "D":
        case "d":
            alert("you got 60 or more");
            break;
        default:
            alert("you got bad result");
            break;
    }
}
const letterEnt = prompt("Enter you bal letter equivalent")
marksConversation(letterEnt)