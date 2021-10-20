

console.log(repeatHi("Valeriu", 8));


function repeatHi(name, times){
    let salute = "";
    for (let i =0; i<times; i ++){
        salute += "Hi ";
    }
    return salute;
}
