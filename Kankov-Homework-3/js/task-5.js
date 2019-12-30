function genderCheckByName(name){
    switch(name){
        case "Andry":
        case "Nazar":
        case "Volodya":
            alert("Man's name");
            break;
        case "Olya":
        case "Natalia":
        case "Galyna":
            alert("Woman's name");
            break;
        default:
            alert("Unknown name");
            break;
    }
}
const nameEnt = prompt("enter your name");
genderCheckByName(nameEnt)