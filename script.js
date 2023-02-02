const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const caculator = $('.container')
const deleteBtn = $('#delete')
const clearBtn = $('#clear')
const operators = $$('.btn-secondary')
const screenResult = $('.result')
const screenOutput = $('.output')

let result=''
let output =''


operators.forEach(operator=>operator.onclick=()=>{
    switch(operator.textContent){
        case '1': case '2': case '3': case '4': case '5'
        : case '6': case '7': case '8': case '9':
            output += operator.textContent
            if(output.charAt(0)==='0')output = output.slice(1)
            screenOutput.textContent = output
            break
        case '/':
            if(!onCaculating(result)){
                result+=output
                result+='/'
                screenResult.textContent = result
                screenOutput.textContent = ''
                output = ''
                
            }
            else {
                result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                result+='/'
                output = ''
                screenResult.textContent = result
                screenOutput.textContent = ''
            }
            break
        case 'x':
            if(!onCaculating(result)){
                result+=output
                result+='x'
                screenResult.textContent = result
                screenOutput.textContent = ''
                output = ''
                
            }
            else {
                result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                result+='x'
                output = ''
                screenResult.textContent = result
                screenOutput.textContent = ''
            }
            break
        case '-':
            if(!onCaculating(result)){
                result+=output
                result+='-'
                screenResult.textContent = result
                screenOutput.textContent = ''
                output = ''
                
            }
            else {
                result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                result+='-'
                output = ''
                screenResult.textContent = result
                screenOutput.textContent = ''
            }
            break
        case '+':
            if(!onCaculating(result)){
                result+=output
                result+='+'
                screenResult.textContent = result
                screenOutput.textContent = ''
                output = ''
                
            }
            else {
                result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                result+='+'
                output = ''
                screenResult.textContent = result
                screenOutput.textContent = ''
            }
            break
        case '=':
            result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
            output = ''
            screenResult.textContent = result
            screenOutput.textContent = ''
            break
        case '.':
            output+='.'
            screenOutput.textContent = output
            break
    }
    console.log(`result: ${result}`,`output: ${output}`)
})

function onCaculating(str){
    let count =0
    for(let i in str){
        if(str[i]==='-'||str[i]==='+'||str[i]==='x'||str[i]==='/'){
            count++
        }
    }
    return count === 1 ? true: false
}

function caculate(a,b,str){
    switch(str){
        case '+':
            return a+b
        case '-':
            return a-b
        case 'x':
            return a*b
        case '/':
            return a/b

    }
}

clearBtn.onclick = () =>{
    screenResult.textContent = ""
    screenOutput.textContent = 0
    result = ''
    output = ''
}
deleteBtn.onclick = () =>{
    output = output.slice(0,-1)
    screenOutput.textContent = output
    if(output==='')screenOutput.textContent='0'
}

