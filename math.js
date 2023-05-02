console.warn() //para mostrar alerta
console.group('Cuadrado'); // para agrupar porciones de codigo

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
    return{
        perimetro: lado * 4,
        area: lado * lado,
    }
}

console.groupEnd('Cuadrado');

console.group('Triangulo');
const ladoTrianguloA = 6;
const ladoTrianguloB = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

console.log({
  ladoTrianguloA,
  ladoTrianguloB,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});
console.groupEnd('Triangulo');


