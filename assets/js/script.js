let nick = document.querySelector('#nick')
let email = document.querySelector('#email')
let time = document.querySelector('#time')
let run = document.querySelector('#run')

let nickOK = false
let emailOk = false
let timeOK = false
let runOK = false

function validatesNick() {
    if (nome.value.length > 3) {
        let nickOK = true
    } else {
        let nickOK = false
    }
}

function validatesEmail() {
    let regex = /^((?!\ .)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (email.value.match(regex)) {
        let emailOk = true
    } else {
        let emailOk = false
    }
}

function validatesTime() {
    if (time.value.indexOf('h')== -1 && time.value.indexOf('m')== -1 && time.value.indexOf('s')== -1 && nome.value.length > 9) {
        let timeOK = false
    } else {
        let timeOK = true
    }
}

function validatesRunlink(url) {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if(url.match(p)){
        let runOK = true
    } else {
        let runOK = false
    }
}

function send() {
    if (nomeOK == true && emailOk == true && timeOK == true && runOK == true ) {
        alert ('Success!!')
    } else {
        alert ('Error!!')
    }
}