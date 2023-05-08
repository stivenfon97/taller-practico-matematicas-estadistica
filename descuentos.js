const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const result = document.querySelector('#result');
const cupon = document.querySelector('#discountO');
const inputPriceP = document.querySelector('#priceO');
const pay = document.querySelector('#pagar');
const nameCup = document.querySelector('#nameCup');

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

function cup(){

    const price = Number(inputPriceP.value);

    const descuentos = {
        primer: 10,
        segundo: 20,
        tercer: 30,
        quinto: 50
    };

    const cupon = nameCup.value;

    for(const des in descuentos){
        if(cupon == des) var porcentaje = descuentos[des];
    }

    pay.textContent = (price * (100-porcentaje))/100;
    /* OTRA FORMA */
    if(descuentos[cupon]){
       des = descuentos[cupon];
    }
    /* OTRA FORMA */
    const desList = [];
    desList.push({
        name: 'primer',
        discount: 30,
        limit: 50,
    });

    desList.push({
        name: 'segundo',
        discount: 20,
    });

    desList.push({
        name: 'cincuenta',
        discount: 50,
    });
}; 