# **CompraYA**

### **Proyecto de Construcción de Software 5**

**Nombres de los integrantes:**

- Samuel Molina Parra
- Juan Camilo Hernández

## **Descripción del Proyecto**

**CompraYA** es una aplicación de comercio electrónico desarrollada como parte del curso de **Construcción de Software 5**. Esta aplicación permite a los usuarios navegar por una amplia gama de productos, agregar artículos al carrito, realizar compras y gestionar sus perfiles.

## **Requisitos Previos**

- Node.js (v19 o superior)
- JDK 17
- Chocolatey
- Android Studio (para emulación en Android)

## **Pasos para Ejecutar el Proyecto**

1. **Clonar el Repositorio:**

   Clona el repositorio.

2. **Instalar Dependencias:**

   Navega a la raíz del proyecto y ejecuta el comando `npm install` para instalar todas las dependencias necesarias.



3. **Ejecutar la Aplicación:**

   Para iniciar la aplicación en un dispositivo Android, ejecuta el comando:

   ```bash
   npx react-native run-android
   ```

4. **Solución de Problemas de `gradlew`:**

   Si encuentras problemas con `gradlew`, navega al directorio `android` y ejecuta los siguientes comandos:

   ```bash
   cd android
   ./gradlew clean
   ```

## **Librerías Utilizadas**

### **1. Twrnc**

   - **Descripción**: Twrnc es una librería que permite utilizar Tailwind CSS en React Native, facilitando la escritura de estilos utilizando una sintaxis familiar y concisa.


### **2. React Native Navigation**

   - **Descripción**: React Native Navigation es una biblioteca de navegación específica para React Native que permite crear navegaciones complejas en aplicaciones móviles. Es altamente configurable y soporta patrones de navegación como stack, tabs, y drawers.
   - **Dependencias**:
     - `@react-navigation/native`
     - `@react-navigation/stack`
     - `@react-navigation/bottom-tabs`
     - `@react-navigation/drawer`

### **3. React Native Toast Message**

   - **Descripción**: Esta librería permite mostrar mensajes de tipo "toast" en la aplicación, proporcionando una forma sencilla y no intrusiva de notificar a los usuarios sobre eventos como errores, confirmaciones o advertencias.

### **4. @react-native-picker/picker**

   - **Descripción**: Esta librería proporciona un componente Picker para React Native, que permite a los usuarios seleccionar opciones de una lista desplegable.

### **5. react-native-image-picker**

   - **Descripción**: `react-native-image-picker` es una librería que permite seleccionar imágenes y videos desde la galería o capturarlos con la cámara. Es útil para aplicaciones que requieren capturar o subir medios visuales directamente desde el dispositivo del usuario.

### **6. firebase**

   - **Descripción**: `firebase` proporciona el conjunto completo de servicios de Firebase y permite integrarlos en aplicaciones web o móviles. Es una opción robusta para manejar autenticación, bases de datos en tiempo real, Firestore, y mucho más en tu aplicación, facilitando un desarrollo rápido y escalable.

### **7. @react-native-firebase/app**

   - **Descripción**: `@react-native-firebase/app` es la base de Firebase en aplicaciones React Native. Proporciona una integración fácil con Firebase y facilita el uso de otros servicios de Firebase, como autenticación, base de datos en tiempo real y almacenamiento. Esta biblioteca es el núcleo de Firebase y es necesaria para usar otras dependencias de Firebase en la aplicación.

### **8. @react-native-firebase/storage**

   - **Descripción**: `@react-native-firebase/storage` permite la integración de Firebase Storage en aplicaciones React Native. Esta biblioteca facilita la carga, descarga y gestión de archivos multimedia en la nube, ideal para aplicaciones que necesitan almacenamiento de imágenes, videos y documentos.


## **Solución de Problemas con React Native Gesture Handler**

Si tienes problemas con el `handler` de `react-native`, puedes intentar lo siguiente:

1. **Limpiar la Caché y el Proyecto:**

   Ejecuta los siguientes comandos para limpiar la caché y el proyecto:

   ```bash
   npm cache clean --force
   npx react-native-clean-project
   ```

## **Usuario de Prueba**

Para realizar pruebas en la aplicación:

- **Username**: Admin
- **Contraseña**: Admin@12

