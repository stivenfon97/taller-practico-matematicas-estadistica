const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const result = document.querySelector('#result');
const cupon = document.querySelector('#discountO');
const inputPriceP = document.querySelector('#priceO');
const nameCup = document.querySelector('#nameCup');
const pay = document.querySelector('#pagar');

btn.addEventListener('click', cup);
//cupon.addEventListener('change', cupones);

function calcularPrecioDescuento(precio, descuento){
    //Formula descuento (P * (100-D))/100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        result.innerText = 'Debe de ingresar valores a las casillas';
        return;
    }

    if(discount > 100){
        result.innerText = 'Supero valor permitido del descuento';
        return;
    }

    const newPrice = (price * (100-discount))/100;

    result.innerText = 'El nuevo precio del producto con el descuento es $'+ newPrice;
}

function cupones(c) {

    const price = Number(inputPriceP.value); 
    const cupon = Number(c.target.value);
    
    switch (cupon){
        case 1:
            descuento = 10;
            break;
        case 2:
            descuento = 20;
            break;
        case 3:
            descuento = 30;
            break;
        case 5:
            descuento = 50;
            break;
        default:
            descuento = 0;
    }
    
    pay.textContent = (price * (100-descuento))/100;
    
}

const cuponera = [];
    cuponera.push({
        name: 'primer',
        discount: 30,
        limit: 50,
    });

    cuponera.push({
        name: 'segundo',
        discount: 20,
    });

    cuponera.push({
        name: 'cincuenta',
        discount: 50,
    });

function cup(){

    const price = Number(inputPriceP.value);
    const coupon = nameCup.value;

    if(!price || !coupon){
        pay.innerText = "No existe CUPON";
        return;
    }

    let descuento;

    function corre(cuponElement){
       return cuponElement.name == coupon;
    }

    //console.log(descuento2);

    const couponInArray = cuponera.find(corre);

    //if(couponInArray.length > 0){ sirve para validar con filter
    if(couponInArray){
        descuento = couponInArray.discount;
    }else{
        pay.innerText = 'El cupon no es valido';
        return;
    }

    const newPrice = (price * (100 - descuento)) / 100;

    pay.innerText = 'El nuevo precio con descuento es $' + newPrice;

    /* const descuentos = {
        primer: 10,
        segundo: 20,
        tercer: 30,
        quinto: 50
    };

    const cupon = nameCup.value;

    for(const des in descuentos){
        if(cupon == des) var porcentaje = descuentos[des];
    }

    pay.textContent = (price * (100-porcentaje))/100; */
    /* OTRA FORMA */
    /* if(descuentos[cupon]){
       des = descuentos[cupon];
    } */
    /* OTRA FORMA */
    
}; 

const users = [];
    users.push({ id: 123, name: 'Juanito Alcachofa' });
    users.push({ id: 456, name: 'Juanita Alcaparra' });

function solution(users, id){

    const usuario = users.find(function (user) {
        return user.id == id
    });

    if(usuario) return usuario.name;

    if(!usuario) return false;
}

let datos = [425,325,500,675,780,900];

function promedio() {

    let suma = 0;
    let cantidad = datos.length;
    for(let i=0; i<datos.length; i++){
        suma += datos[i];
    }

    return suma/cantidad;
}