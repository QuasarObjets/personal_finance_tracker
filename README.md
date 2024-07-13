# FinWise - Gestión Finanzas Personales - Aplicación Web/Móvil

Esta es una aplicación para rastrear gastos personales, establecer presupuestos y gestionar las finanzas de manera eficiente. La aplicación está diseñada para ser utilizada en la web y también está disponible en dispositivos móviles utilizando React Native.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de carpetas:

```
gestion-finanzas
├── api
│   ├── src
│   │   ├── controllers
│   │   │   └── gastosController.js
│   │   ├── models
│   │   │   └── gastoModel.js
│   │   ├── routes
│   │   │   └── index.js
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── web
│   ├── src
│   │   ├── components
│   │   │   └── Gastos.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── public
│   │   └── index.html
│   └── README.md
└── mobile
    ├── src
    │   ├── components
    │   │   └── Gastos.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
    ├── App.json
    └── README.md
```

## API

La carpeta `api` contiene los archivos necesarios para la API del proyecto:

- `api/src/controllers/gastosController.js`: Este archivo exporta una clase de controlador `GastosController` que maneja la lógica para gestionar los gastos. Incluye métodos para crear, actualizar y eliminar gastos.

- `api/src/models/gastoModel.js`: Este archivo exporta una clase de modelo `Gasto` que representa un gasto. Define el esquema y los métodos para interactuar con los datos de los gastos.

- `api/src/routes/index.js`: Este archivo exporta una función `setRoutes` que configura las rutas para la API. Utiliza el `GastosController` para manejar las rutas relacionadas con los gastos.

- `api/src/app.js`: Este archivo es el punto de entrada de la aplicación de la API. Crea una instancia de la aplicación Express, configura el middleware y se conecta a la base de datos.

- `api/package.json`: Este archivo es el archivo de configuración de npm en el directorio de la API. Enumera las dependencias y scripts para la API.

- `api/README.md`: Este archivo contiene la documentación para la API.

## Aplicación Web

La carpeta `web` contiene los archivos necesarios para la aplicación web:

- `web/src/components/Gastos.js`: Este archivo exporta un componente de React `Gastos` que muestra y gestiona los gastos en la aplicación web.

- `web/src/App.js`: Este archivo es el punto de entrada de la aplicación web. Configura las rutas y renderiza los componentes principales de la aplicación.

- `web/src/index.js`: Este archivo es el punto de entrada para la aplicación web. Renderiza el componente raíz y lo monta en el DOM.

- `web/package.json`: Este archivo es el archivo de configuración de npm en el directorio web. Enumera las dependencias y scripts para la aplicación web.

- `web/public/index.html`: Este archivo es la plantilla HTML para la aplicación web. Incluye los scripts necesarios y proporciona un marcador de posición para renderizar los componentes de React.

- `web/README.md`: Este archivo contiene la documentación para la aplicación web.

## Aplicación Móvil

La carpeta `mobile` contiene los archivos necesarios para la aplicación móvil:

- `mobile/src/components/Gastos.js`: Este archivo exporta un componente de React `Gastos` que muestra y gestiona los gastos en la aplicación móvil.

- `mobile/src/App.js`: Este archivo es el punto de entrada de la aplicación móvil. Configura las rutas y renderiza los componentes principales de la aplicación.

- `mobile/src/index.js`: Este archivo es el punto de entrada para la aplicación móvil. Renderiza el componente raíz y lo monta en el contenedor de la aplicación.

- `mobile/package.json`: Este archivo es el archivo de configuración de npm en el directorio móvil. Enumera las dependencias y scripts para la aplicación móvil.

- `mobile/App.json`: Este archivo es el archivo de configuración para la aplicación React Native. Especifica el nombre, el nombre para mostrar y el punto de entrada de la aplicación.

- `mobile/README.md`: Este archivo contiene la documentación para la aplicación móvil.

¡Gracias por utilizar nuestra aplicación de gestión financiera! Si tienes alguna pregunta, consulta la documentación correspondiente en cada carpeta.