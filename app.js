class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProducts(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `      
        
        <div class="card text-center mb-4">
            <div class="card-body">
            <strong>Product Name</strong> : ${product.name}
            <strong>Product Price</strong> : ${product.price}
            <strong>Product Year</strong> : ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>                 
        `;
        productList.appendChild(element);

    
    }

    resetForm() {
        // @ts-ignore
        document.getElementById('product-form').reset();
    }

    deleteProducts(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Product deleted successfuññy', 'danger')
        }
    }

    showMessage(message,cssClass) {
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass} mt-3`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const app = document.querySelector('#App')
        container.insertBefore(div,app)
        setTimeout( function () { 
            document.querySelector('.alert').remove()
        } , 2000)
    }
}

// DOM Events
document.getElementById('product-form')
.addEventListener('submit', function(e) {
    // @ts-ignore
    const name = document.getElementById('name').value
    // @ts-ignore
    const price = document.getElementById('price').value
    // @ts-ignore
    const year = document.getElementById('year').value

    const product = new Product(name, price, year)

    const ui = new UI()

    if(name === '' || price === '' || year === '' ) {
        return ui.showMessage('Complete Fields', 'info')
    }

    ui.addProducts(product)

    ui.resetForm();

    ui.showMessage('Product added successfully', 'success');

    e.preventDefault();
})

document.getElementById('product-list').addEventListener('click',function(e) {
    
    const ui = new UI()
    ui.deleteProducts(e.target);
})