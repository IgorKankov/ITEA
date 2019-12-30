function calculator(){
    const multipliedNum = +prompt("enter any number")
    const lastFactor = +prompt("enter last factor number")
    let result = 0
    for(let i = 1; i <= lastFactor; i++){
        result = multipliedNum * i;
        console.log(`${multipliedNum}` + ` * ` + `${i}` + ` = ` + `${result}` )
    }
}
calculator()