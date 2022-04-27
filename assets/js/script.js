let nick = document.querySelector('#nick')
let email = document.querySelector('#email')

let time = document.querySelector('#time')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

let run = document.querySelector('#run')

let nickOK = false
let emailOK = false
let timeOK = false
let runOK = false

function validatesNick() {
    if (nick.value.length > 3) {
        nickOK = true
    }
    else{
        nickOK = false
    }
}

function validatesEmail() {
    let regex = /^((?!\ .)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    if (regex.test(email.value)) {
        emailOK = true
        return
    }
    else{
        emailOK = false
    }
}

function validatesTime(e) {
    //remodelado validação de tempo; modelo anterior não iria funcionar
    if(hours.value && minutes.value && seconds.value){
        timeOK = true
    }
    else{
        timeOK = false
    }
}

function validatesRunlink() {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    let url = run.value
    if (p.test(url)) {
        runOK = true
        return true
    }
    else{
        runOK = false
        console.log('email does not validate')
    }
}

function send() {
    console.log(`nick: ${nickOK}, email: ${emailOK}, time: ${timeOK}, run: ${runOK}`)
    //⬇ na esmagadora maioria dos casos, use === no lugar de ==;
    if (nickOK === true && emailOK === true && timeOK === true && runOK === true) {
        alert('Success!!')
    } else {
        alert('Error!!')
    }
}
