function modo (tipoSelecionado){

    const botao =  [];
        
        botao [0] = document.querySelector('.btn1');
        botao [1] = document.querySelector('.btn2');
        botao [2] = document.querySelector('.btn3');
        botao [3] = document.querySelector('.btn4');
        botao [4] = document.querySelector('.btn5');
        botao [5] = document.querySelector('.btn6');
        botao [6] = document.querySelector('.btn7');
        botao [7] = document.querySelector('.btn8');
        botao [8] = document.querySelector('.btn9');
        botao [9] = document.querySelector('.btn10');
        botao [10] = document.querySelector('.btn11');
        botao [11] = document.querySelector('.btn12');
        botao [12] = document.querySelector('.btn13');
        botao [13] = document.querySelector('.btn14');
        botao [14] = document.querySelector('.btn15');
        botao [15] = document.querySelector('.btn16');
        botao [16] = document.querySelector('.btn17');
        botao [17] = document.querySelector('.btn18');
        botao [18] = document.querySelector('.btn19');
        botao [19] = document.querySelector('.btn20');
        botao [20] = document.querySelector('.btn21');
        botao [21] = document.querySelector('.btn22');
        botao [22] = document.querySelector('.btn23');
        botao [23] = document.querySelector('.btn24');
        botao [24] = document.querySelector('.btn25');
        botao [25] = document.querySelector('.btn26');
        botao [26] = document.querySelector('.btn27');
        botao [27] = document.querySelector('.btn28');
        botao [28] = document.querySelector('.btn29');
        botao [29] = document.querySelector('.btn30');
        botao [30] = document.querySelector('.btn31');
        botao [31] = document.querySelector('.btn32');
        botao [32] = document.querySelector('.btn33');
        botao [33] = document.querySelector('.btn34');
        botao [34] = document.querySelector('.btn35');
        botao [35] = document.querySelector('.btn36');
        botao [36] = document.querySelector('.btn37');
        botao [37] = document.querySelector('.btn38');
        botao [38] = document.querySelector('.btn39');
        botao [39] = document.querySelector('.btn40');
        botao [40] = document.querySelector('.btn41');
        botao [41] = document.querySelector('.btn42');
        botao [42] = document.querySelector('.btn43');
        botao [43] = document.querySelector('.btn44');
        botao [44] = document.querySelector('.btn45');
        botao [45] = document.querySelector('.btn46');
        botao [46] = document.querySelector('.btn47');
        botao [47] = document.querySelector('.btn48');
        botao [48] = document.querySelector('.btn49');
        botao [49] = document.querySelector('.btn50');
        botao [50] = document.querySelector('.btn51');
        botao [51] = document.querySelector('.btn52');
        botao [52] = document.querySelector('.btn53');
        botao [53] = document.querySelector('.btn54');
        botao [54] = document.querySelector('.btn55');
        botao [55] = document.querySelector('.btn56');
        botao [56] = document.querySelector('.btn57');
        botao [57] = document.querySelector('.btn58');
    
        var i = 0;

/*Animação 1*/

    if (tipoSelecionado === 1) {

        const botaoAnimar = document.getElementById('btnF1');

        botaoAnimar.addEventListener("click", ()=> {

            for(i; i != 58; i++){
            botao[i].style.animation = "none";
            }
        });
 
/* Animação 2*/

    } else if (tipoSelecionado === 2){

        const botaoAnimar = document.getElementById('btnF2');
            botaoAnimar.addEventListener("click", ()=> {

                for(i; i != 58; i++){
                botao[i].style.animation = "rgbMode1 8s linear infinite";

                }
            });

/*Animação 3 */

        } else if (tipoSelecionado === 3){
        const botaoAnimar = document.getElementById('btnF3');
            botaoAnimar.addEventListener("dblclick", ()=> {

                
               
                    for(i; i != 58; i++){
                        botao[i].style.animation = "rgbMode2 8s linear infinite";
                        }
            });
    } 
}

/*----------------------------------------função inserir caracteres------------------------------------------------------------*/

function caracter (tipo, valor){
var armazena

    if (tipo === 'caracterEspecial'){
    switch (valor){

        case '+':document.getElementById('input').value += valor; break
        case '-':document.getElementById('input').value += valor; break
        case '=':document.getElementById('input').value += valor; break
        case '':document.getElementById('input').value = ''; break
        case '+':document.getElementById('input').value += valor; break
        case '...':var armazena1 = document.getElementById('input').value += valor;
            armazena1.value.style.color = '#ffff'

        break
    }
        } else if (tipo == 'letra'){
            armazena = document.getElementById('input').value += valor
            } else if(tipo == 'numero') {
                armazena = document.getElementById('input').value += valor
    }
}