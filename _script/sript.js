    function inicial() {
    var inicial = document.getElementById('tela-inicial')
    var inicial2 = document.getElementById('display')
    inicial.style.display = 'none'   
    inicial2.style.display = 'block'
    }
    function fim () {
        var final = document.getElementById('tela-final')
        var fim = document.querySelector('h1#final')
        /*daqui pra baixo é para adc a saudção*/
        var agora = new Date()
        var hr = agora.getHours()
        final.style.display = 'none'
        fim.style.display = 'block'
        if (hr <12) {
            fim.innerHTML += `<br>Bom Dia`
        } else if (hr >=12 && hr <18) {
            fim.innerHTML += `<br>Boa Tarde`
        } else if (hr >= 18 && hr <= 23)
            fim.innerHTML += `<br>Boa Noite`
    }

//nao funcional ainda
var visor1 = document.getElementsByClassName('visor')[0]
    var v1=String(visor1.value)
var visor2= document.getElementsByClassName('visor')[1]
    var v2=String(visor2.value)

    function tecla1() {
        var tx1 = document.getElementById('um')
        //var t1 = Number(tx1.value)
        if (tx1 =='1' && visor1 == '') {
            visor1.innerHTML = '1'
        } else {
            visor2.innerHTML = `1`
        }
    }
    function tecla2() {
        var tx2 = document.getElementById('dois')
        var t2 = Number(tx2.value)
        if (t2 == 2) {
            visor1.innerHTML = '2'
            alert(visor2.value)
        } 
    }
    function tecla3() {
        var tx3 = document.getElementById('tres')
        var t3 = Number(tx3.value)
        if (t3 == 3) {
            visor1.innerHTML = '3'
        } 
    }
    function tecla4() {
        var tx4 = document.getElementById('quatro')
        var t4 = Number(tx4.value)
        if (t4 == 4) {
            visor1.innerHTML = '4'
        } 
    }
    function tecla5() {
        var tx5 = document.getElementById('cinco')
        var t5 = Number(tx5.value)
        if (t5 == 5) {
            visor1.innerHTML = '5'
        } 
    }
    function tecla6() {
        var tx6 = document.getElementById('seis')
        var t6 = Number(tx6.value)
        if (t6 == 6) {
            visor1.innerHTML = '6'
        } 
    }
    function tecla7() {
        var tx7 = document.getElementById('sete')
        var t7 = Number(tx7.value)
        if (t7 == 7) {
            visor1.innerHTML = '7'
        } 
    }
    function tecla8() {
        var tx8 = document.getElementById('oito')
        var t8 = Number(tx8.value)
        if (t8 == 8) {
            visor1.innerHTML = '8'
        } 
    }
    function tecla9() {
        var tx9 = document.getElementById('nove')
        var t9 = Number(tx9.value)
        if (t9 == 9) {
            visor1.innerHTML = '9'
        } 
    }
    function tecla0() {
        var tx0 = document.getElementById('z')
        var t0 = Number(tx0.value)
        if (t0 == 0) {
            visor1.innerHTML = '0'
        } 
    }

    function voto () {
        var ft = document.getElementById('foto')
            
        var voto= v1 + v2
        switch (voto) {
            case 23: {
        

            }break
            case 37: {

            }break
            case 49: {

            }break
            case  63: {

            }break
            default:{

            }
        }
    
    }