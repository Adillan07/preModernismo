//Efeito para fazer conetúdo aparecer quando estiver visível
const observer = new IntersectionObserver(entries => { //observador que verifica quando um elemento entra ou sai do viewport
    Array.from(entries).forEach( entry => { //transforma a lista de elementos observados pelo observador em um Array (por padrão, ela é tipo NodeList). O "forEach" passará por cada item desse Array executando a função.
        if(entry.intersectionRatio >= 1){ //garante que a ação só será executada quando 100% do elemento estiver visível na tela
            entry.target.classList.add('initHiddenOff')
        }
    })
}, {
    threshold: [0,.5,1] //configuração especial que diz ao observador verificar a posição do elemento na tela em três momentos diferentes: quando o primeiro pixel aparecer (0), quando metade dele estiver aparecendo (.5) e quando ele estiver totalemente na tela (1)
})
Array.from(document.querySelectorAll('.initHidden')).forEach(element => {
    observer.observe(element)
})

let showing1 = false
let showing2 = false
//Definindo características do modal
const BG:any = document.getElementById("bg")
BG.style.transition = 'opacity 1s ease'
//Efeito da janela Modal
function openModal(element:number,titulo:string):void{
    const BGCONT:any = document.getElementById("bgContent")
    switch(element){
        case 1:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Aqui teve início um repúdio pelas escolas literárias importadas da Europa, em busca de uma expressão artística moderna e verdadeiramente brasileira.</p>`
            break
        case 2:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Alguns autores optaram pela incorporação de elementos da linguagem coloquial na linguagem literária, ampliando o léxico das obras para regionalismos, expressões populares, neologismos e gírias.</p>`
            break
        case 3:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Preferência pela abordagem das desigualdades sociais, colocando em evidência um Brasil miserável e marginalizado, um Brasil não oficial, que as promessas de modernização do governo republicano tentavam encobrir.</p>`
            break
        case 4:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Retratando, por exemplo, sua preguiça nas mais diferentes regiões do Brasil.</p>`
            break
        case 5:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Montava-se um vasto painel brasileiro: o Norte e Nordeste com Euclides da Cunha; o Vale do Paraíba e o interior paulista com Monteiro Lobato; o Espírito do Santo com Graça Aranha; o subúrbio carioca com Lima Barreto;</p>`
            break
        case 6:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Cruzamento de características neo-realistas, neo-parnasianas e neo-simbolistas.</p>` 
            break
        case 7:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Foco nos tipos humanos marginalizados: o sertanejo nordestino, o caipira, os funcionários públicos, os mulatos.</p>`
            break
        case 8:
            BGCONT.innerHTML = `<h6 display-6>${titulo}</h6><p>Ligação com fatos políticos, econômicos e sociais contemporâneos, diminuindo a distância entre a realidade e a ficção.</p>`
            break
    }
    BG.style.display = 'flex'
    setTimeout(() => {BG.style.opacity = 1},50)
}
function closeModal():void{
    BG.style.opacity = 0
    setTimeout(() => {BG.style.display = 'none'},500)
}

//Definindo animação do triangulo 1
const TRIANGLE1:any = document.getElementById('triangulo1')
TRIANGLE1.style.transition = "all 0.5s ease"
TRIANGLE1.addEventListener('mouseenter',() => {
    if(showing1 == false){
        TRIANGLE1.style.transform = 'rotate(180deg)'
    } else{
        TRIANGLE1.style.transform = 'rotate(0deg)'
    }
});
TRIANGLE1.addEventListener('mouseleave',() => {
    if(showing1 == false){
        TRIANGLE1.style.transform = 'rotate(0deg)'
    } else{
        TRIANGLE1.style.transform = 'rotate(180deg)'
    }
});
  
//Definindo animação do triangulo 2
const TRIANGLE2:any = document.getElementById('triangulo2')
TRIANGLE2.style.transition = "all 0.5s ease"
TRIANGLE2.addEventListener('mouseenter',() => {
    if(showing2 == false){
        TRIANGLE2.style.transform = 'rotate(180deg)'
    } else{
        TRIANGLE2.style.transform = 'rotate(0deg)'
    }
});
TRIANGLE2.addEventListener('mouseleave',() => {
    if(showing2 == false){
        TRIANGLE2.style.transform = 'rotate(0deg)'
    } else{
        TRIANGLE2.style.transform = 'rotate(180deg)'
    }
});
//Definindo características da coluna 1
const COLUMN1:any = document.getElementById('coluna1')
COLUMN1.style.transition = 'height 1s ease'
//Definindo características da coluna 2
const COLUMN2:any = document.getElementById('coluna2')
COLUMN2.style.transition = 'height 1s ease'
//Função de mostrar e esconder colunas
function changeHeight(valor:number):void{
    if (valor == 1 && !showing1){
        COLUMN1.style.height = 'auto';
        TRIANGLE1.style.transform = 'rotate(180deg)'
        showing1 = true;
    } else if (valor == 1 && showing1){
        COLUMN1.style.height = '3.5em';
        TRIANGLE1.style.transform = 'rotate(0deg)'
        showing1 = false;
    } else if(valor == 2 && !showing2){
        COLUMN2.style.height = 'auto';
        TRIANGLE2.style.transform = 'rotate(180deg)'
        showing2 = true;
    } else if(valor == 2 && showing2){
        COLUMN2.style.height = '3.5em';
        TRIANGLE2.style.transform = 'rotate(0deg)'
        showing2 = false;
    }
}
//definindo cards
const CARD1:any = document.getElementById("card1")
const CARD2:any = document.getElementById("card2")
const CARD3:any = document.getElementById("card3")
const CARD4:any = document.getElementById("card4")
const CARD5:any = document.getElementById("card5")
//definindo os card-contents
const CARDCONT1:any = document.getElementById("cardContent1")
CARDCONT1.style.transition = "all 0.8s ease"
const CARDCONT2:any = document.getElementById("cardContent2")
CARDCONT2.style.transition = "all 0.8s ease"
const CARDCONT3:any = document.getElementById("cardContent3")
CARDCONT3.style.transition = "all 0.8s ease"
const CARDCONT4:any = document.getElementById("cardContent4")
CARDCONT4.style.transition = "all 0.8s ease"
const CARDCONT5:any = document.getElementById("cardContent5")
CARDCONT5.style.transition = "all 0.8s ease"
//animações dos cards - se você está lendo isso, me perdoe por essa aberração, mas já estou mexendo nesse site a mais de 9 horas. Infelizemente, meu cérebro já não está funcionando corretamente.
CARD1.addEventListener('mouseenter',() => {
    CARDCONT1.style.top = '0vh'
});
CARD1.addEventListener('mouseleave',() => {
    CARDCONT1.style.top = '100vh'
});
CARD2.addEventListener('mouseenter',() => {
    CARDCONT2.style.top = '0vh'
});
CARD2.addEventListener('mouseleave',() => {
    CARDCONT2.style.top = '100vh'
});
CARD3.addEventListener('mouseenter',() => {
    CARDCONT3.style.top = '0vh'
});
CARD3.addEventListener('mouseleave',() => {
    CARDCONT3.style.top = '100vh'
});
CARD4.addEventListener('mouseenter',() => {
    CARDCONT4.style.top = '0vh'
});
CARD4.addEventListener('mouseleave',() => {
    CARDCONT4.style.top = '100vh'
});
CARD5.addEventListener('mouseenter',() => {
    CARDCONT5.style.top = '0vh'
});
CARD5.addEventListener('mouseleave',() => {
    CARDCONT5.style.top = '100vh'
});
