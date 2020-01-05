const salaries = {
    "ivan": 500,
    "petya": 600,
    "serhiy":2000,
    "sasha": 2500
  }
function bigestSalaryCheck(obj){
    let values = Object.values(obj)
    
    
    return Math.max.apply(this, values)
}

console.log(bigestSalaryCheck(salaries)) 