function eachLetter(str, bool){
     if(bool === true){
        for(let i = 0; i < str.length; i++){
            if(str[i] === "t"){
                break
            } 
            console.log(str[i])
        }   
    } else if (bool === false){
        for(let i = 0; i < str.length; i++){
            if(str[i] === "t"){
                continue
            } 
            console.log(str[i])
        }   
    }
}
let str = "Hello world"
str = "picture"
bool = false
eachLetter(str, bool)