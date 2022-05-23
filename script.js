const uppercase=document.querySelector(".uppercase")
const lowercase=document.querySelector(".lowercase")
const numbers=document.querySelector(".numbers")
const symbols=document.querySelector(".symbols")
const length=document.querySelector("#length")
const generate=document.querySelector("#generate")
let result=document.querySelector(".result")
let btn=document.querySelector("#clipboard")
// console.log(generate)
console.log(length)

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const sign = "!@#$%^&*()_+=";


generate.addEventListener("click",generatePassword)
btn.addEventListener("click",()=>{
    const textarea = document.createElement("textarea");
    const password = result.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
})

function generatePassword(){
 let len=length.value
 console.log(len)
    let password=""

    if(uppercase.checked)
    password+=addup()

    if(lowercase.checked)
    password+=addlow()

    if(numbers.checked)
    password+=addnumb()

    if(symbols.checked)
    password+=addsym()

    for(let i=password.length;i<len;i++)
    {
        // console.log(generateone())
        password+=generateone()
    }
    console.log(password)

    result.innerText=password

}


function generateone(){

    let a=[]

    if(uppercase.checked)
    a.push(addup())

    if(lowercase.checked)
    a.push(addlow())

    if(numbers.checked)
    a.push(addnumb())

    if(symbols.checked)
    a.push(addsym())
//   console.log(a,)
    if(a.length===0)
    return ""

    return a[Math.floor(Math.random()*a.length)]
}





function addup(){

    return upper[Math.floor(Math.random()*upper.length)]
  
}

function addlow(){
    return lower[Math.floor(Math.random()*lower.length)]
}

function addnumb(){
    return number[Math.floor(Math.random()*number.length)]
}

function addsym(){

    return sign[Math.floor(Math.random()*sign.length)]
  
}

