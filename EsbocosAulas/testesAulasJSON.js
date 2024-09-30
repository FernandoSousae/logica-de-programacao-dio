let invoice ={
    name: 'Fernando',
    age: 38,
    products:{
        0: ["Mouse 2xwm", 29.99],
        1: ["Tecledo mecânico", 129.90],
        2: ["Monitor", 899.90]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}.`)
    console.log(`A idade é ${invoice.age}.`)
    
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
    }

}