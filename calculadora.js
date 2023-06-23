const btnNum= document.querySelectorAll('.num')
const btnOp= document.querySelectorAll('.op')
const b1= document.getElementById('b1')
const display= document.getElementById('tela')
const bigual= document.getElementById('bigual')
console.log([...btnNum])
console.log([...btnOp])
let veri = false
let veri2 = false
let vreiS = false


btnNum.forEach((ele)=>{
    ele.addEventListener('click' , (e)=>{
        if(e.target.innerHTML== ',' && display.innerHTML == ''){
            display.innerHTML= '0.'
        }
        else if(e.target.innerHTML == ',' && veri == false && veri2== false){
            display.innerHTML+= '.'
            veri=true
            veri2= true
        }
        else if(e.target.innerHTML != ','){
            display.innerHTML+=e.target.innerHTML
            veri = false
            vreiS = false
        }
        console.log('veri= ' +veri)
        console.log('veri2= ' +veri2)
        console.log(vreiS)
    })
})

btnOp.forEach((ele)=>{
    ele.addEventListener('click' , (e)=>{
        if(vreiS == false && e.target.innerHTML != 'C'){
            display.innerHTML+= e.target.innerHTML
            console.log(e.target.innerHTML)
            vreiS = true
            veri2 = false
            veri= true
        }
        else if(e.target.innerHTML == 'C'){
            display.innerHTML= ''
        }
        console.log('veri= ' +veri)
        console.log('veri2= ' +veri2)
        console.log(vreiS)
})

})

bigual.addEventListener('click' , (e)=>{
    let res = eval(display.innerHTML)
    display.innerHTML= res
    console.log(display.innerHTML)
})

console.log(eval(10.5 + 0.5))

const copiar= document.querySelector('#copiar')
copiar.addEventListener('click' , ()=>{
    navigator.clipboard.writeText(display.innerHTML)
})