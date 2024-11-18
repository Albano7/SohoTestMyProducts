# Lista de productos - App Test
![Descripción de la imagen](./assets/ListadoProductos_logo.png)

## Descripción del proyecto
Este proyecto es una aplicación móvil de ejemplo para demostrar mis conocimientos, desarrollada con TypeScript y React Native v0.76.2 sin el framework EXPO, esta app muestra 3 vistas: inicio de sesión, lista de productos y detalle de productos. He llamado a la aplicación "Lista de productos" y le asigné un icono de app. La aplicación consume datos de la API (https://fakestoreapi.com/) y presenta la interfaz con diseños atractivos y responsivos.

## Consultas realizadas

| Title | Type    | Request |
| :---:   | :---: | :---: |
| Login | POST   | https://fakestoreapi.com/auth/login   |
| Productos | GET   | https://fakestoreapi.com/products   |
| Detalle de usuario | GET   | https://fakestoreapi.com/users/${id-usuario}   |


## Demo
- Puedes descargar la app mediante el siguiente enlace [React Native App](https://drive.google.com/file/d/1lSV4pReliv7Sd-basRY58WEIONKsxqZO/view?usp=sharing) 
- Puedes ver el video demo con el siguiente enlace [React Native App Products List](https://drive.google.com/file/d/11aoh6ycK9ZKNcbPCY8NQppopPF2AwNUd/view?usp=sharing) 

## Dependencias usadas
- React Native: Framework para el desarrollo de aplicaciones móviles multiplataforma.
- TypeScript: Lenguaje de programación que agrega tipado estático a JavaScript.
- Redux: Librería para administrar el estado de la aplicación.
- Axios: Cliente HTTP para realizar solicitudes a la API.
- @react-native-async-storage/async-storage: Para el almacenamiento local de datos.
- @react-native-material/core: Componentes de interfaz de usuario basados en Material Design.
- @react-navigation: Navegación entre pantallas.
- Formik y Yup: Para la gestión de formularios y validación de datos.
- @react-native-community/netinfo: Validación de conexión a red

## Requisitos del sistema
- Node.js (versión 18 o superior)
- React Native CLI (instalado de forma global)
- Un emulador Android o iOS 

## Instalación y configuración

1. Clona el repositorio del proyecto:
```
git clone git@github.com:Albano7/SohoTestMyProducts.git
```
o
```
git clone https://github.com/Albano7/SohoTestMyProducts.git
```

2. Navega hasta el directorio del proyecto:
```
cd SohoTestMyProducts
```

3. Instala las dependencias del proyecto:
```
npm install
```

4. Inicia el servidor de desarrollo de React Native:
```
npm start
```

5. Ejecutar en un emulador o dispositivo:
```
npm run android  # Para Android
npm run ios     # Para iOS
```


6. Ejecutar pruebas unitarias
```
npm test
```

## Estructura del proyecto
El proyecto sigue una estructura de archivos y carpetas siguiendo el patron de diseño convencional para el proyecto FDD -  Feature-Driven Development, DDD - Domain Driven Design y parte de los principios SOLID en React Native:

```
SohoTestMyProducts/
├── android/
├── ios/
├── app/
│   ├── api/
│   ├── components/
│   ├── features/
│   ├── styles/
│   ├── store/
│   ├── hooks/
│   ├── interface/
│   ├── commands/
│   └── ProductList.tsx
├── .gitignore
├── babel.config.js
├── metro.config.js
├── package.json
├── App.tsx
├── index.js
└── README.md
```

Como ya se mencionó esta estructura de carpetas se alinea con los principios del patrón Feature-Driven Development (FDD) y Domain-Driven Design (DDD):

FDD: Organiza el código en torno a las características de la aplicación, lo que facilita el desarrollo y el mantenimiento a medida que el proyecto crece.
DDD: Divide el código en torno a los diferentes dominios de la aplicación, lo que ayuda a mantener una arquitectura limpia y modular.

- `android/` y `ios/`: Contiene los archivos nativos de Android e iOS.
- `app/`: Alberga todo el código fuente de la aplicación React Native.
  - `components/`: Contiene los componentes reutilizables de la aplicación.
  - `features/`: Incluye la nueva raquitectura lógica de Redux (acciones, reducers, store).
  - `styles/`: Almacena los estilos CSS utilizados en la aplicación.
  - `hooks/`: Contiene funciones y utilidades auxiliares.
  - `commands/`: Contiene funciones que interacturan con los actions de redux.
  - `views/`: Contiene las vistas mostradas al usuario.
- `.gitignore`: Especifica qué archivos y carpetas deben ser ignorados por Git.
- `babel.config.js` y `metro.config.js`: Configuración de Babel y Metro, respectivamente.
- `package.json`: Contiene información del proyecto y las dependencias.
- `README.md`: Este archivo de documentación.
- `index.js`: El punto de entrada de la aplicación.

## Scripts de npm disponibles

- `npm start`: Inicia el servidor de desarrollo de React Native.
- `npm run android`: Ejecuta la aplicación en un emulador o dispositivo Android.
- `npm run ios`: Ejecuta la aplicación en un emulador o dispositivo iOS.

