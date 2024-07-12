# API de Gestión de Finanzas

Esta API se utiliza para rastrear gastos personales, establecer presupuestos y gestionar las finanzas de manera eficiente. Está diseñada para ser utilizada junto con la aplicación web y móvil de Gestión de Finanzas.

## Estructura del proyecto

```
gestion-finanzas
└── api
    ├── src
    │   ├── controllers
    │   │   └── gastosController.js
    │   ├── models
    │   │   └── gastoModel.js
    │   ├── routes
    │   │   └── index.js
    │   └── app.js
    ├── package.json
    └── README.md
```

## Archivos

- **src/controllers/gastosController.js**: Este archivo exporta una clase de controlador `GastosController` que maneja la lógica para gestionar los gastos. Incluye métodos para crear, actualizar y eliminar gastos.

- **src/models/gastoModel.js**: Este archivo exporta una clase de modelo `Gasto` que representa un gasto. Define el esquema y los métodos para interactuar con los datos de los gastos.

- **src/routes/index.js**: Este archivo exporta una función `setRoutes` que configura las rutas para la API. Utiliza el `GastosController` para manejar las rutas relacionadas con los gastos.

- **src/app.js**: Este archivo es el punto de entrada de la aplicación de la API. Crea una instancia de la aplicación Express, configura el middleware y se conecta a la base de datos.

- **package.json**: Este archivo es el archivo de configuración de npm en el directorio de la API. Enumera las dependencias y scripts para la API.

- **README.md**: Este archivo contiene la documentación de la API.

Para obtener más información sobre cómo utilizar la API, consulte la documentación en el archivo README.md en el directorio raíz del proyecto.