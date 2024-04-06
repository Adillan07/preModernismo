//Efeito para fazer conetúdo aparecer quando estiver visível
var observer = new IntersectionObserver(function (entries) {
    Array.from(entries).forEach(function (entry) {
        if (entry.intersectionRatio >= 1) { //garante que a ação só será executada quando 100% do elemento estiver visível na tela
            entry.target.classList.add('initHiddenOff');
        }
    });
}, {
    threshold: [0, .5, 1] //configuração especial que diz ao observador verificar a posição do elemento na tela em três momentos diferentes: quando o primeiro pixel aparecer (0), quando metade dele estiver aparecendo (.5) e quando ele estiver totalemente na tela (1)
});
Array.from(document.querySelectorAll('.initHidden')).forEach(function (element) {
    observer.observe(element);
});
var showing1 = false;
var showing2 = false;
//Definindo características do modal
var BG = document.getElementById("bg");
BG.style.transition = 'opacity 1s ease';
//Efeito da janela Modal
function openModal(element, titulo) {
    var BGCONT = document.getElementById("bgContent");
    switch (element) {
        case 1:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Aqui teve in\u00EDcio um rep\u00FAdio pelas escolas liter\u00E1rias importadas da Europa, em busca de uma express\u00E3o art\u00EDstica moderna e verdadeiramente brasileira.</p>");
            break;
        case 2:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Alguns autores optaram pela incorpora\u00E7\u00E3o de elementos da linguagem coloquial na linguagem liter\u00E1ria, ampliando o l\u00E9xico das obras para regionalismos, express\u00F5es populares, neologismos e g\u00EDrias.</p>");
            break;
        case 3:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Prefer\u00EAncia pela abordagem das desigualdades sociais, colocando em evid\u00EAncia um Brasil miser\u00E1vel e marginalizado, um Brasil n\u00E3o oficial, que as promessas de moderniza\u00E7\u00E3o do governo republicano tentavam encobrir.</p>");
            break;
        case 4:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Retratando, por exemplo, sua pregui\u00E7a nas mais diferentes regi\u00F5es do Brasil.</p>");
            break;
        case 5:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Montava-se um vasto painel brasileiro: o Norte e Nordeste com Euclides da Cunha; o Vale do Para\u00EDba e o interior paulista com Monteiro Lobato; o Esp\u00EDrito do Santo com Gra\u00E7a Aranha; o sub\u00FArbio carioca com Lima Barreto;</p>");
            break;
        case 6:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Cruzamento de caracter\u00EDsticas neo-realistas, neo-parnasianas e neo-simbolistas.</p>");
            break;
        case 7:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Foco nos tipos humanos marginalizados: o sertanejo nordestino, o caipira, os funcion\u00E1rios p\u00FAblicos, os mulatos.</p>");
            break;
        case 8:
            BGCONT.innerHTML = "<h6 display-6>".concat(titulo, "</h6><p>Liga\u00E7\u00E3o com fatos pol\u00EDticos, econ\u00F4micos e sociais contempor\u00E2neos, diminuindo a dist\u00E2ncia entre a realidade e a fic\u00E7\u00E3o.</p>");
            break;
    }
    BG.style.display = 'flex';
    setTimeout(function () { BG.style.opacity = 1; }, 50);
}
function closeModal() {
    BG.style.opacity = 0;
    setTimeout(function () { BG.style.display = 'none'; }, 500);
}
//Definindo animação do triangulo 1
var TRIANGLE1 = document.getElementById('triangulo1');
TRIANGLE1.style.transition = "all 0.5s ease";
TRIANGLE1.addEventListener('mouseenter', function () {
    if (showing1 == false) {
        TRIANGLE1.style.transform = 'rotate(180deg)';
    }
    else {
        TRIANGLE1.style.transform = 'rotate(0deg)';
    }
});
TRIANGLE1.addEventListener('mouseleave', function () {
    if (showing1 == false) {
        TRIANGLE1.style.transform = 'rotate(0deg)';
    }
    else {
        TRIANGLE1.style.transform = 'rotate(180deg)';
    }
});
//Definindo animação do triangulo 2
var TRIANGLE2 = document.getElementById('triangulo2');
TRIANGLE2.style.transition = "all 0.5s ease";
TRIANGLE2.addEventListener('mouseenter', function () {
    if (showing2 == false) {
        TRIANGLE2.style.transform = 'rotate(180deg)';
    }
    else {
        TRIANGLE2.style.transform = 'rotate(0deg)';
    }
});
TRIANGLE2.addEventListener('mouseleave', function () {
    if (showing2 == false) {
        TRIANGLE2.style.transform = 'rotate(0deg)';
    }
    else {
        TRIANGLE2.style.transform = 'rotate(180deg)';
    }
});
//Definindo características da coluna 1
var COLUMN1 = document.getElementById('coluna1');
COLUMN1.style.transition = 'height 1s ease';
//Definindo características da coluna 2
var COLUMN2 = document.getElementById('coluna2');
COLUMN2.style.transition = 'height 1s ease';
//Função de mostrar e esconder colunas
function changeHeight(valor) {
    if (valor == 1 && !showing1) {
        COLUMN1.style.height = 'auto';
        TRIANGLE1.style.transform = 'rotate(180deg)';
        showing1 = true;
    }
    else if (valor == 1 && showing1) {
        COLUMN1.style.height = '3.5em';
        TRIANGLE1.style.transform = 'rotate(0deg)';
        showing1 = false;
    }
    else if (valor == 2 && !showing2) {
        COLUMN2.style.height = 'auto';
        TRIANGLE2.style.transform = 'rotate(180deg)';
        showing2 = true;
    }
    else if (valor == 2 && showing2) {
        COLUMN2.style.height = '3.5em';
        TRIANGLE2.style.transform = 'rotate(0deg)';
        showing2 = false;
    }
}
//definindo cards
var CARD1 = document.getElementById("card1");
var CARD2 = document.getElementById("card2");
var CARD3 = document.getElementById("card3");
var CARD4 = document.getElementById("card4");
var CARD5 = document.getElementById("card5");
//definindo os card-contents
var CARDCONT1 = document.getElementById("cardContent1");
CARDCONT1.style.transition = "all 0.8s ease";
var CARDCONT2 = document.getElementById("cardContent2");
CARDCONT2.style.transition = "all 0.8s ease";
var CARDCONT3 = document.getElementById("cardContent3");
CARDCONT3.style.transition = "all 0.8s ease";
var CARDCONT4 = document.getElementById("cardContent4");
CARDCONT4.style.transition = "all 0.8s ease";
var CARDCONT5 = document.getElementById("cardContent5");
CARDCONT5.style.transition = "all 0.8s ease";
//animações dos cards - se você está lendo isso, me perdoe por essa aberração, mas já estou mexendo nesse site a mais de 9 horas. Infelizemente, meu cérebro já não está funcionando corretamente.
CARD1.addEventListener('mouseenter', function () {
    CARDCONT1.style.top = '0vh';
});
CARD1.addEventListener('mouseleave', function () {
    CARDCONT1.style.top = '100vh';
});
CARD2.addEventListener('mouseenter', function () {
    CARDCONT2.style.top = '0vh';
});
CARD2.addEventListener('mouseleave', function () {
    CARDCONT2.style.top = '100vh';
});
CARD3.addEventListener('mouseenter', function () {
    CARDCONT3.style.top = '0vh';
});
CARD3.addEventListener('mouseleave', function () {
    CARDCONT3.style.top = '100vh';
});
CARD4.addEventListener('mouseenter', function () {
    CARDCONT4.style.top = '0vh';
});
CARD4.addEventListener('mouseleave', function () {
    CARDCONT4.style.top = '100vh';
});
CARD5.addEventListener('mouseenter', function () {
    CARDCONT5.style.top = '0vh';
});
CARD5.addEventListener('mouseleave', function () {
    CARDCONT5.style.top = '100vh';
});
