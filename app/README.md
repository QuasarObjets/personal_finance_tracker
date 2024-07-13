# Aplicación móvil para rastrear gastos personales

Esta aplicación móvil te permite rastrear tus gastos personales, establecer presupuestos y gestionar tus finanzas de manera eficiente.

## Estructura de archivos

El proyecto tiene la siguiente estructura de archivos:

En la carpeta "api":
- `api/src/controllers/gastosController.js`: Este archivo exporta un controlador llamado `gastosController` que contiene métodos para manejar las operaciones relacionadas con los gastos, como crear, actualizar y eliminar gastos.
- `api/src/models/gastoModel.js`: Este archivo exporta un modelo llamado `gastoModel` que define la estructura de los datos de un gasto en la base de datos MongoDB.
- `api/src/routes/index.js`: Este archivo exporta un enrutador que maneja las rutas relacionadas con los gastos, como la ruta para obtener todos los gastos y la ruta para crear un nuevo gasto.
- `api/src/app.js`: Este archivo es el punto de entrada de la aplicación Express. Configura el servidor Express y establece las rutas y middleware necesarios.
- `api/package.json`: Este archivo es el archivo de configuración de npm para la API. Lista las dependencias y scripts necesarios para la API.
- `api/README.md`: Este archivo contiene la documentación para la API.
- `api/.env`: Este archivo contiene las variables de entorno necesarias para la configuración de la API, como la URL de la base de datos MongoDB.

En la carpeta "app":
- `app/src/components/GastoItem.js`: Este archivo exporta un componente llamado `GastoItem` que muestra los detalles de un gasto en la aplicación móvil.
- `app/src/screens/HomeScreen.js`: Este archivo exporta un componente llamado `HomeScreen` que muestra la pantalla principal de la aplicación móvil, donde se muestran los gastos y se pueden realizar operaciones como agregar, editar y eliminar gastos.
- `app/src/screens/PresupuestoScreen.js`: Este archivo exporta un componente llamado `PresupuestoScreen` que muestra la pantalla de presupuesto de la aplicación móvil, donde se pueden establecer y actualizar los presupuestos.
- `app/src/App.js`: Este archivo es el punto de entrada de la aplicación móvil. Configura la navegación y establece las pantallas principales de la aplicación.
- `app/src/config/axios.js`: Este archivo exporta una instancia de Axios configurada para realizar solicitudes HTTP a la API.
- `app/package.json`: Este archivo es el archivo de configuración de npm para la aplicación móvil. Lista las dependencias y scripts necesarios para la aplicación móvil.
- `app/README.md`: Este archivo contiene la documentación para la aplicación móvil.
- `app/app.json`: Este archivo es el archivo de configuración de la aplicación móvil para React Native. Contiene información sobre la aplicación, como el nombre y la versión.

En la raíz del proyecto:
- `README.md`: Este archivo contiene la documentación general del proyecto, incluyendo información sobre la estructura de archivos y las rutas de la API y la aplicación móvil.
- `.gitignore`: Este archivo especifica los archivos y carpetas que deben ser ignorados por Git durante el control de versiones.
```

Recuerda que debes crear los archivos README.md en cada subcarpeta del proyecto con la documentación correspondiente.