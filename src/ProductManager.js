const fs = require('fs')



class ProductManager {
    static id = 0;
    constructor(title, description, price, thumbnail, stock, path) {
        this.products = []
        this.code = ProductManager.id++;
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
        this.path = path
    }
    writeFileProducts() {
        fs.writeFile('products.json', JSON.stringify(this.products),
            (err) => {
                if (err) throw err;
                console.log('agregado con exito')
            }
        )
    }
    readFileProducts() {
        fs.readFile('products.json', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log((JSON.parse(data)))
        })
    }
    addProduct(product) {
        let codeUsed = this.products.some(item => item.code === product.code)

        // agregar un producto
        if (product.title && product.description && product.price && product.thumbnail && product.code && product.stock && !codeUsed) {
            this.products.push({
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock,
            })
            console.log(`Producto ${product.title} agregado`)
            // console.log('Productos...', this.products)
        } else {
            console.error(`Error: Code repetido. El code ${product.code} ya esta en uso`)
        }
    }
    getProducts() {
        //retornar todos lo productos
        return this.products
    }
    getProductById(id) {
        // retornar el producto que cuente con este id
        let productFound = this.products.find(prod => prod.code === id)
        if (productFound) {
            return productFound
        } else {
            console.error(`no product found with id ${id}`)
        }
    }
    deleteProduct(id) {
        let arrayVacio = []
        this.products.map((product) => {
            if (product.code !== id) arrayVacio.push(product)


            fs.writeFile('products.json', JSON.stringify(arrayVacio),
                (err) => {
                    if (err) throw err;
                    console.log(`producto con el ${id} eliminado con exito`)
                })
        })
    }
    updateFile(id, obj) {
        this.products.map((product) => {
            if (product.code === id) {
                product.title = obj.title;
                product.description = obj.description;
                product.price = obj.price;
                product.thumbnail = obj.thumbnail;
                product.code = id;
                product.stock = obj.stock;
            }
            fs.writeFile('products.json', JSON.stringify(this.products),
                (err) => {
                    if (err) throw err;
                    console.log(`producto con el ${id} actualizado con exito`)
                })
        })
    }

}

const gestionProd = new ProductManager()


class FileManager{

    constructor(path){
        this.path = path
    }

    async fileReader(){

            if (!fs.existsSync(this.path)){
                /*Si no existe el archivo te lo crea*/
                let emptyDataJSON = JSON.stringify([
                    {
                        "title": "producto prueba",
                        "description": "Este es un producto prueba",
                        "price": 200,
                        "thumbnail": "Sin imagen",
                        "code": "abc123",
                        "stock": 25,
                        "id": 1
                        },
                        {
                        "title": "producto prueba",
                        "description": "Este es un producto prueba",
                        "price": 200,
                        "thumbnail": "Sin imagen",
                        "code": "abc123456",
                        "stock": 25,
                        "id": 2
                        },
                        {
                          "title": "producto prueba",
                          "description": "Este es un producto prueba",
                          "price": 200,
                          "thumbnail": "Sin imagen",
                          "code": "abc123",
                          "stock": 25,
                          "id": 3
                          },
                          {
                          "title": "producto prueba",
                          "description": "Este es un producto prueba",
                          "price": 200,
                          "thumbnail": "Sin imagen",
                          "code": "abc123456",
                          "stock": 25,
                          "id": 4
                          },
                          {
                            "title": "producto prueba",
                            "description": "Este es un producto prueba",
                            "price": 200,
                            "thumbnail": "Sin imagen",
                            "code": "abc123",
                            "stock": 25,
                            "id": 5
                            },
                            {
                            "title": "producto prueba",
                            "description": "Este es un producto prueba",
                            "price": 200,
                            "thumbnail": "Sin imagen",
                            "code": "abc123456",
                            "stock": 25,
                            "id": 6
                            },
                            {
                              "title": "producto prueba",
                              "description": "Este es un producto prueba",
                              "price": 200,
                              "thumbnail": "Sin imagen",
                              "code": "abc123",
                              "stock": 25,
                              "id": 7
                              },
                              {
                              "title": "producto prueba",
                              "description": "Este es un producto prueba",
                              "price": 200,
                              "thumbnail": "Sin imagen",
                              "code": "abc123456",
                              "stock": 25,
                              "id": 8
                              },
                              {
                                "title": "producto prueba",
                                "description": "Este es un producto prueba",
                                "price": 200,
                                "thumbnail": "Sin imagen",
                                "code": "abc123",
                                "stock": 25,
                                "id": 9
                                },
                                {
                                "title": "producto prueba",
                                "description": "Este es un producto prueba",
                                "price": 200,
                                "thumbnail": "Sin imagen",
                                "code": "abc123456",
                                "stock": 25,
                                "id": 10
                                }
                ])

                try{                
                    await fs.promises.writeFile(this.path,emptyDataJSON)
                }
                catch(error){
                    console.log({error})
                }

            }

        }
}

path = 'products.json'

let localData = new FileManager(path)
localData.fileReader()

// Creación Productos
/* const placa = new ProductManager('Placa de video', 'Placa de video nvidia 3060', 14000, 'sin imagen', 23)
const placa2 = new ProductManager('Placa de video 2', 'Placa de video nvidia 2060super', 25000, 'sin imagen', 30)
const placa3 = new ProductManager('Placa de video 3', 'Placa de video nvidia 3090', 190000, 'sin imagen', 19) */


// TEST

/* gestionProd.addProduct(placa)
gestionProd.addProduct(placa2)
gestionProd.addProduct(placa3) */


console.log(gestionProd.getProducts())

// Hago uso de la funcion getProducts para ver cuantos productos tengo en el array products
/*  console.table(gestionProd.getProducts()) */



module.exports = ProductManager;





