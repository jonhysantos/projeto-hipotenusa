function calcular() {
    let co = window.document.querySelector('input#co')
    let ca = window.document.querySelector('input#ca')
    let co1 = Number(co.value)
    let ca1 = Number(ca.value)
    let res = window.document.querySelector('p#res')
    let hi = (co1 ** 2 + ca1 ** 2) ** (1/2)
    let form = window.document.querySelector('div#form')
    if(ca.value.length == 0 || co.value.length == 0 ){
        ca.style.border = '2px solid red'
        co.style.border = '2px solid red'
        window.alert('Por favor verifique os dados e tente novamente')   
    }else {form.style.height = '250px'
        co.style.border = '2px solid black'
        ca.style.border = '2px solid black.'
        res.innerHTML = `A hipotenusa vai medir ${hi.toFixed(2).replace('.',',')}`
    }
    
    


}