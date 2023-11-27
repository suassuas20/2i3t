escrever = msg => alert(msg);
let a = "";
let b = "";
let c = "";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = "";
let executar = "";
let temPonto = false;
let desligada = false;
soma = (a, b) => Number(a) + Number(b);
sub = (a, b) => Number(a) - Number(b);
mult = (a, b) => Number(a) * Number(b);
div = (a, b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);

equacao2Grau = (a, b, c) => {
    let delta = sub(mult(b, b), mult(4, mult(a, c)));
    document.getElementById("delta").innerHTML = delta;
    
    if (delta < 0) return "Não possui raiz real.";
    if (delta == 0) return "x<sub>1</sub> = x<sub>2</sub> = " + div(-b, mult(2, a));
    return  "x<sub>1</sub> = " + (- b + raiz(delta)/2*a);
    "  x<sub>2</sub> = " + (- b + raiz(delta)/2*a);2
}

function mostrar_resultado() {
    document.getElementById("resultado").value = valor;
}
function raiz_quadrada() {
    valor = raiz(valor);
    mostrar_resultado();
    valor = "";

}
function porcentagem() {
    if (executar == "mult") {
        b = valor;
        valor = div(mult(a, b), 100);
        mostrar_resultado();
        valor = "";
    }
}
function calcular() {
    if (executar != "") {
        b = valor;
        if (executar == "soma") valor = soma(Number(a), Number(b));
        if (executar == "sub") valor = sub(Number(a), Number(b));
        if (executar == "div") valor = div(Number(a), Number(b));
        if (executar == "mult") valor = mult(Number(a), Number(b));

        mostrar_resultado();
        executar = ""
        a = "";
        b = "";
        valor = "";
    }
}

function desliga() {
    if (desligada) {
        desligada = false;
        zerar();
    } else {
        zerar()
        mostrar_resultado();
        desligada = true;
    }
    return desligada;
}

function calcula_raiz() {
    if (valor == "") {
        valor = 0;
    }
    valor = raiz(valor);
    mostrar_resultado();
}

function zerar() {
    if (desligada) return;
    a = "";
    b = "";
    valor = "0";
    executar = "";
    mostrar_resultado();
    valor = "";
}

function operacao(op) {
    if (desligada) return;
    executar = op;
    a = valor;
    valor = "";
}


function digitando(tecla) {
    if (desligada) return;
    if (tecla == ".") {
        if (!temPonto) {
            valor = valor + tecla;
            mostrar_resultado();
            temPonto = true;
        }
        return
    }
    valor = valor + tecla;
    mostrar_resultado();
}



const calcular_equacao = () => {
    if (a != "" && a != "0") {
     a = Number (a);
     b = Number (b);
     c = Number (c);
     if(sa != "+") a = -a;
     if(sb != "+") b = -b;
     if(sc != "+") c = -c;
        alert(sa + a + "x2" +sb + b + "x" +sc + c + "= 0 ");
        document.getElementById("raiz").innerHTML = equacao2Grau(3,-2,-8);
    }
}

const set_sinal_a = () => {
    sa = document.getElementById("sinal_a").value;
    calcular_equacao();
}
const set_sinal_b = () => {
    sb = document.getElementById("sinal_b").value;
    calcular_equacao();
}
const set_sinal_c = () => {
    sc = document.getElementById("sinal_c").value;
    calcular_equacao();
}

const set_valor_a = () => {
    a = document.getElementById("valor_a").value;
    calcular_equacao();
}
const set_valor_b = () => {
    b = document.getElementById("valor_b").value;
    calcular_equacao();
}
const set_valor_c = () => {
    c = document.getElementById("valor_c").value;
    calcular_equacao();
}

let pa_a1 = "";
let pa_r = "";
let pa_n = "";
const setpa_a1 = ()=>{
    pa_a1 = Number(document.getElementById("pa_a1").value);
    mostrarpa_seq();
}

const setpa_r = ()=>{
    pa_r = Number(document.getElementById("pa_r").value);
    mostrarpa_seq();
}

const setpa_n = ()=>{
    pa_n = Number(document.getElementById("pa_n").value);
    mostrarpa_seq();
}

const mostrarpa_seq= ()=>{
    let pa = "";
    if(pa_a1 !="") pa += pa_a1
    if(pa_r !="" && pa_n !="" && n > 0){
        for(let i = 1; i > pa_n; i++){
            pa += ", " + (i* pa_r) + pa_a1;
        }
    }
    document.getElementById("seq_pa").innerHTML = pa; 
}