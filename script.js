escrever = msg => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) => {
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta < 0) return "Não possui raiz Real";
    if (delta == 0)return "x1 = x2 " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)), mult(2,a)) + 
           "x2 = " + div(sub (-b,raiz(delta)),mult(2,a));
}

const set_resultado = document.getElementByid("resultado").value =resultado;
let a = 0;
let b = 0;
let resultado = 0;
let executar = "";


calcular = () =>{
    if(executar = "soma") mostrar_resultado(soma(a,b))
    if(executar = "-") mostrar_resultado(sub)
    if(executar = "/") mostrar_resultado(div)
    if(executar = "*") mostrar_resultado(mult)
    
}