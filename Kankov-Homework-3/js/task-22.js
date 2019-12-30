function numByOrder(){
    const numOrderStr = prompt("enter any number")
    let lastSymbol = numOrderStr[numOrderStr.length - 1]
    switch(lastSymbol){
        case "1":
            console.log(`${numOrderStr}` + `st`);
            break;
        case "2":
            console.log(`${numOrderStr}` + `nd`);
            break;
        case "3":
            console.log(`${numOrderStr}` + `rd`);
            break;
        default:
            console.log(`${numOrderStr}` + `th`);
            break;
    }
}

numByOrder()