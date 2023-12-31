let a = "";
let b = "";
let valor = "";
let executar = "";
let temPonto = false;
let desligada = true;
soma = (a,b) => Number(a) + Number(b);
sub = (a,b) => Number(a) - Number(b);
mult = (a,b) => Number(a) * Number(b);
div = (a,b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           " x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}
function mostrar_resultado(){
    document.getElementById("resultado").value = valor;
}
function raiz_quadrada(){
    valor = raiz (valor);
    mostrar_resultado();
}
function calcular(){
    if(executar != ""){
        b = valor;
        if(executar == "soma") valor = soma(a,b);
        if(executar == "sub") valor = sub(a,b);
        if(executar == "div") valor = div(a,b);
        if(executar == "mult") valor = mult(a,b);

        mostrar_resultado();
        executar = "";
        a = "";
        b = "";
        valor = "";
        temPonto = false;
    }
}
function desliga(){
    if(desligada){
        desliga = false;
        zerar();
    }else{
        zerar();
        mostrar_resultado();
        desliga = true;
    }
    desligada = !desligada;
}
function zerar(){
    a = "";
    b = "";
    valor = "0";
    executar = "";
    mostrar_resultado();
    valor = "";
}
function operacao(op){
    executar = op;
    a = valor;
    valor = "";
}
function digitando(tecla){
   if (tecla == "."){
       if(!temPonto) {
         valor = valor + tecla;
         mostrar_resultado();
         temPonto = true;
       }
       return;
   }
   valor = valor + tecla;
   mostrar_resultado();
}