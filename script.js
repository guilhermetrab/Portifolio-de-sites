function tela(){
    if(window.innerWidth >= 768){
        itens.style.display = ''
        burguer.style.display = 'none'
        botoes.style.display = 'none'
    } else{
        itens.style.display = 'none'
        burguer.style.display = 'block'
    }
}
function clickMenu(){
    if(botoes.style.display == 'none'){
        botoes.style.display = 'block'
    } else{
    botoes.style.display = 'none'
    }
}


