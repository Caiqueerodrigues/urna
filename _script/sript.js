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
var visor2= document.getElementById('seg')
    visor2.value = `0`

var nomepresidente = document.getElementById('presnome')

    function tecla(value) {
        if (visor1.value != 0 && visor2.value != 0) {
            alert(`[ERRO] Aperte Corrige e Inicie Novamente`)
            }

        if (value == 1 && visor1.value == `0`) {
            visor1.innerHTML = 1
            visor1.value = '1'
            } else if (value == 1 && visor2.value == `0`) {
            visor2.innerHTML = 1
            visor2.value = '1'
            } 
        if (value == 2 && visor1.value == `0` ) {
            visor1.innerHTML = 2
            visor1.value = '2'
        } else if (value == 2 && visor2.value == `0`) {
            visor2.innerHTML = 2
            visor2.value = '2'
        }
        if (value == 3 && visor1.value == `0`) {
            visor1.innerHTML = 3
            visor1.value = `3`
        } else if (value == 3 && visor2.value == `0`) {
            visor2.innerHTML = 3
            visor2.value = `3`
        }
        if (value == 4 && visor1.value == `0`) {
            visor1.innerHTML = 4
            visor1.value= `4`
        } else if (value == 4 && visor2.value == `0`) {
            visor2.innerHTML = 4
            visor2.value = `4`
        }
        if (value == 5 && visor1.value == `0`) {
            visor1.innerHTML = 5
            visor1.value = `5`
        } else if (value == 5 && visor2.value == `0`) {
            visor2.innerHTML = 5
            visor2.value = `5`
        }
        if (value == 6 && visor1.value == `0`) {
            	visor1.innerHTML = 6
                visor1.value = `6`
        } else if (value == 6 && visor2.value == `0`) {
            visor2.innerHTML = 6
            visor2.value = `6`
        }
        if (value == 7 && visor1.value == `0`) {
            visor1.innerHTML = 7
            visor1.value = `7`
        } else if (value == 7 && visor2.value == `0`) {
            visor2.innerHTML = 7
            visor2.value = `7`
        }
        if (value == 8 && visor1.value == `0`) {
            visor1.innerHTML = 8
            visor1.value = `8`
        } else if (value == 8 && visor2.value == `0`) {
            visor2.innerHTML = 8
            visor2.value = `8`
        }
        if (value == 9 && visor1.value == `0`) {
            visor1.innerHTML = 9
            visor1.value = `9`
        } else if (value == 9 && visor2.value == `0`) {
            visor2.innerHTML = 9
            visor2.value = `9`
        }
        if (value == 0 && visor1.value ==`0`) {
            visor1.innerHTML = 0
            visor1.value = `0.0`
        } else if (value == 0 && visor2.value == `0`) {
            visor2.innerHTML = 0
            visor2.value = `0.0`
        }
        var  voto = visor1.value + visor2.value

        switch (voto) {
            case `23`: {
              nomepresidente.innerHTML = `Luigi Brós`
            }
            break
            case `45`: {
                nomepresidente.innerHTML = `Mário Brós`
            }
            break
            case `33`: {
                nomepresidente.innerHTML = `Robô Léo`
            }
            break
            case `16`: {
                nomepresidente.innerHTML = `Yoshi Munchakoopas`
            }
            default: {
                nomepresidente.innerHTML = `Voto Nulo` 
            }
        
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