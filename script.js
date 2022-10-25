const numeroAleatorio = Math.floor(Math.random() * 50)
let chance = [];
let quantidadeChute = 5;

console.log(numeroAleatorio)
function verificar(){
    numeroChute = document.getElementById('chute')
    numeroChuteFormatado = parseInt(numeroChute.value)
    resultado = document.getElementById('resultado')
    areaPlacar = document.getElementById('selectPlacar')

     
    // Ao Acertar ou GAME OVER, bloquear o input e o botão



    chance.push(Number(numeroChute.value))  // Adicionar os chutes sempre no final

    if(chance.length >= quantidadeChute){   // Verificação de quantidades de chutes
        console.log('Acabou as suas chances !')
        resultado.innerHTML = ('<p>Acabou as suas Chances !</p>')
        resultado.innerHTML += (`<p>O número Sorteado era o número <strong>${numeroAleatorio}</strong></p>`)
        
        alert('GAME OVER')
        let item = document.createElement('option') // Adiciona o 5º chute no select
        item.text = `${chance.length}º chute, você chutou o número ${numeroChute.value} !`
        areaPlacar.appendChild(item)

        // BLOQUEAR O BOTÃO APÓS GAME OVER

        // let botao = document.getElementById('verificar');
        // botao.addEventListener('click', function(event){
        //     console.log('ok')
        //     event.preventDefault();
        // });

    } else {
        if( numeroChute.value.length == 0 || numeroChute.value < 0 || numeroChute.value > 50){
          window.alert('Digite algum valor entre 0 e 50 !')
        } 
        else {
          if(numeroChuteFormatado > numeroAleatorio){
            resultado.innerHTML = '<p>Chute <strong>maior</strong> que o valor gerado !</p>'
            resultado.innerHTML += '<p>Chute novamente !</p>'
            console.log('chute maior')
          } else {
              if(numeroChuteFormatado < numeroAleatorio){
                resultado.innerHTML = '<p>Chute <strong>menor</strong> que o valor gerado !</p>'
                resultado.innerHTML += '<p>Chute novamente !</p>'
                console.log('chute menor')
              } else {
                resultado.innerHTML = '<p>Você acertou !👍</p>'
                alert('Parabéns, você acertou !')
                console.log('acertou')
                return
                }
              }

              let item = document.createElement('option') // Adiciona um 'option' no select
              item.text = `${chance.length}º chute, você chutou o número ${numeroChute.value} !`
              areaPlacar.appendChild(item)  
        }
      }    
}