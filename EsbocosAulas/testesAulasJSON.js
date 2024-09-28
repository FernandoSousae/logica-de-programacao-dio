let invoice = {
    name:"Fernando",
    age: 38,
    products: {
        0: ["mouse 2xwm", 29.99],
        1: ["teclado mecânico", 129.99],
        2: ["Monitor", 899.99]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)

    for(let index in invoice.products){
        let [productName, productPrice] = invoice[index]
        console.log(`Os produtos são ${invoice.products}`)
    }
    console.log(`O produto é ${invoice.products[0]}`)
}