console.warn(); //para mostrar alerta
console.group("Cuadrado"); // para agrupar porciones de codigo

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd("Cuadrado");

console.group("Triangulo");
const ladoTrianguloA = 6;
const ladoTrianguloB = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lado, base) {
  if(lado == base){
    console.warn('Este no es un triangulo isosceles');
  }else{
    return Math.sqrt((lado**2) - ((base**2))/4);
  }
}

function trianguloEscaleno(ld1,ld2,ld3) {
  if(ld1 == ld2 || ld2 == ld3 || ld3 == ld1){
    return false;
  }
  let s = (ld1+ld2+ld3)/2;
  let area = Math.sqrt(s * (s-ld1) * (s-ld2) * (s-ld3));
  let altura = (2/ld1) * area;
  return Math.round(altura); 

}

console.log({
  ladoTrianguloA,
  ladoTrianguloB,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});
console.groupEnd("Triangulo");

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlcuadrado = Math.pow(radio, 2);

  return {
    circunferencia: (radio * 2) * Math.PI,
    area: radioAlcuadrado * Math.PI.toFixed(18),
  };
}

console.groupEnd("Circulo");
