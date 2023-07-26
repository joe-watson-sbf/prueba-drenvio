# Documentación de API

## Instalación
npm install
npm run dev

## Configuración
### Crear archivo .env
```
PORT=8000
MONGO_URI='YOUR DATABASE URI'
```



## ENDPOINTS

# Init

  Guarda los productos en la base de datos y precios especiales

    http://localhost:8000/products
    method: POST
    

# Obtener productos en stock

    http://localhost:8000/products

# Obtener precio especial para cliente y producto

    http://localhost:8000/price/{user_id}/{nombre_producto}


### GET PRODUCT SPECIAL PRICE BY USER ID AND PRODUCT NAME
http://localhost:8000/price/1/T-Shirt


