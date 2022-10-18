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


var visor1 = document.getElementById('pri')
    visor1.value = `0`
    var v1=Number(visor1.value)
var visor2= document.getElementById('seg')
    visor2.value = `0`
    var v2=Number(visor2.value)

    function tecla() {
        var tx1 = document.getElementById('um')
            var t1 = Number(tx1.value)
        var tx2 = document.getElementById('dois')
            var t2 = Number(tx2.value)
        var tx3 = document.getElementById('tres')
            var t3 = Number(tx3.value)
        var tx4 = document.getElementById('quatro')
            var t4 = Number(tx4.value)
        var tx5 = document.getElementById('cinco')
            var t5 = Number(tx5.value)
        var tx6 = document.getElementById('seis')
            var t6 = Number(tx6.value)
        var tx7 = document.getElementById('sete')
            var t7 = Number(tx7.value)
        var tx8 = document.getElementById('oito')
            var t8 = Number(tx8.value)
        var tx9 = document.getElementById('nove')
            var t9 = Number(tx9.value)
        var tx0 = document.getElementById('z')
            var t0 = Number(tx0.value)

        if (visor1.value != 0 && visor2.value != 0) {
            alert(`[ERRO] Aperte Corrige e Inicie Novamente`)
            }
        if (visor1.value == `0` && t1 == 1) {
            visor1.innerHTML = `${t1}`
            visor1.value = `1`
            } else if (visor2.value == `0` && t1 == 1) {
            visor2.innerHTML = `${t1}`
            visor2.value = `1`
            } 
            //nao funcional ainda
        if (visor1.value == `0` && t2 == `2`) {
            visor1.innerHTML = `${t2}`
            visor1.value = `2`
        }
    }

    function corrige() {
        visor1.innerHTML = ` `
        visor2.innerHTML = ` `
        visor1.value = 0
        visor2.value = 0
        v1 = 0
        v2 = 0
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
