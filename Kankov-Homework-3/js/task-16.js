function calculator(){
    const a = +prompt("enter any number")
    result = 0
    for(let i = 1; i <= 10; i++){
        result = a * i;
        console.log(`${a}` + ` * ` + `${i}` + ` = ` + `${result}` )
    }
}
calculator()