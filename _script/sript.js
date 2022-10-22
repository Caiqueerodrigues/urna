    function inicial() {
        var inicial = document.getElementById('tela-inicial')
        var inicial2 = document.getElementById('display')
        inicial.style.display = 'none'   
        inicial2.style.display = 'block'
    }

var visor1 = document.getElementById('pri')
    visor1.value = `0`
var visor2= document.getElementById('seg')
    visor2.value = `0`

var presidente = [
    document.getElementById('foto'),
    document.getElementById('presnome'),
    document.getElementById('partido'),
    document.getElementById('foto2'),//foto do vice
    document.getElementById('nome2'),//nome do vice
]
var audio = [
    document.getElementById('somTecla'),
    document.getElementById('somFinal')
]

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
        if (value == `bco`) {
          visor1.value = `1.5`
          visor2.value = `1.5`  
        }
        audio[0].play()
var  voto = visor1.value + visor2.value

        switch (voto) {
            case `23`: {
                presidente[0].innerHTML = ``
                presidente[0].style.backgroundImage= "url('_imagens/luigi-candidato.jpg')"
                presidente[0].style.backgroundSize = `cover`
                presidente[1].innerHTML = `Luigi Brós`
                presidente[2].innerHTML = `Popular`
                presidente[3].style.backgroundImage = "url('_imagens/luigi-candidato-vice.jpg')"
                presidente[3].style.backgroundSize = `cover`
                presidente[3].style.backgroundPosition = `center center`
                presidente[3].innerText = ``
                presidente[4].innerHTML = `Mariazinha`
            }
            break
            case `45`: {
                presidente[0].innerHTML = ``
                presidente[0].style.backgroundImage= "url('_imagens/mario-candidato.jpg')"
                presidente[0].style.backgroundSize = `cover`
                presidente[1].innerHTML = `Mário Brós`
                presidente[2].innerHTML = `Do </br> Povo`
                presidente[3].innerText = ``
                presidente[3].style.backgroundImage = "url('_imagens/mario-candidato-vice.jpg')"
                presidente[3].style.backgroundSize = `cover`
                presidente[3].style.backgroundPosition = `left center`
                presidente[4].innerHTML = `Prof Augusto`
            }
            break
            case `33`: {
                presidente[0].innerHTML = ``
                presidente[0].style.backgroundImage= "url('_imagens/robo-candidato.jpg')"
                presidente[0].style.backgroundSize = `cover`
                presidente[1].innerHTML = `Robô Léo`
                presidente[2].innerHTML = `Tec`
                presidente[3].innerHTML = ``
                presidente[3].style.backgroundImage = "url('_imagens/robo-candidato-vice.jpg')"
                presidente[3].style.backgroundPosition = `center top`
                presidente[3].style.backgroundSize = `cover`
                presidente[4].innerHTML = `João do Povo`
            }
            break
            case `16`: {
                presidente[0].innerHTML = ``
                presidente[0].style.backgroundImage= "url('_imagens/yoshi-candidato.jpg')"
                presidente[0].style.backgroundSize = `cover`
                presidente[1].innerHTML = `Yoshi Munchakoopas`
                presidente[2].innerHTML = `Liberal`
                presidente[3].innerHTML = ``
                presidente[3].style.backgroundImage = "url('_imagens/yoshi-candidato-vice.jpg')"
                presidente[3].style.backgroundSize = `cover`
                presidente[3].style.backgroundPosition = `center center`
                presidente[4].innerHTML = `Pedro Mec`
            }
            break
            case '1.51.5': {
                presidente[0].innerHTML = `Branco`
                presidente[1].innerHTML = `Branco`
                presidente[2].innerHTML = `Branco`
                presidente[3].innerHTML = `Branco`
                presidente[4].innerHTML = `Branco`
                visor1.value = 1.5
                visor2.value = 1.5
            }
            break
            default: {
                presidente[0].innerHTML = `Voto Nulo`
                presidente[1].innerHTML = `Voto Nulo`
                presidente[2].innerHTML = `Voto Nulo`
                presidente[3].innerHTML = `Voto Nulo`
                presidente[4].innerHTML = `Voto Nulo`
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
        presidente[0].innerHTML = ` `
        presidente[0].style.backgroundImage = ""
        presidente[1].innerHTML = ` `
        presidente[2].innerHTML = ` `
        presidente[3].innerHTML = ` `
        presidente[3].style.backgroundImage = ""
        presidente[4].innerHTML = ` `
        audio[0].play()
    }

    function fim () {
            if (visor1.value != 0 && visor1.value != 0) {
            var final = document.getElementById('tela-final')
            var fim = document.querySelector('h1#final')
            visor1.value = 1.7
            visor2.value = 1.7
            audio[1].play()
            /*daqui pra baixo é para adc a saudção*/
            var agora = new Date()
            var hr = agora.getHours()
            final.style.display = 'none'
            fim.style.display = 'block'
            
            }else {
                alert(`[ERRO] Por favor, Escolha um Candidato`)
            }
            if (hr < 12) {
                fim.innerHTML = `FIM <br> Bom Dia`
            } else if (hr >= 12 && hr <= 18) {
                fim.innerHTML = `FIM <br> Boa tarde`
            } else if (hr >=18 && hr <= 23.59 ) {
                fim.innerHTML = `FIM <br> Boa noite`
            }

    }