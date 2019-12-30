function identificator(name, surname){
    const fullname = `${name}` + " " + `${surname.substring(0, 1)}`
    if (surname === ""){
        alert("Undefined surname")
    } else {
        alert(fullname)
    }
    
}
let name = "John";
let surname = "doe";
identificator(name, surname)