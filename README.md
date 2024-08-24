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

   Para iniciar la aplicación en un dispositivo Android, ejecuta el comando `npx react-native run-android`.

4. **Solución de Problemas de `gradlew`:**

   Si encuentras problemas con `gradlew`, navega al directorio `android` y ejecuta los siguientes comandos:

   - `cd android`
   - `./gradlew clean`

## **Librerías Utilizadas**

### **1. Twrnc**

   - **Descripción**: Twrnc es una librería que permite utilizar Tailwind CSS en React Native, facilitando la escritura de estilos utilizando una sintaxis familiar y concisa.
   - **Uso**: Twrnc es ideal para aplicar estilos rápidos y reutilizables en componentes de React Native.

### **2. React Native Navigation**

   - **Descripción**: React Native Navigation es una biblioteca de navegación específica para React Native que permite crear navegaciones complejas en aplicaciones móviles. Es altamente configurable y soporta patrones de navegación como stack, tabs, y drawers.
   - **Dependencias**:
     - `@react-navigation/native`
     - `@react-navigation/stack`
     - `@react-navigation/bottom-tabs`
     - `@react-navigation/drawer`

### **3. React Native Toast Message**

   - **Descripción**: Esta librería permite mostrar mensajes de tipo "toast" en la aplicación, proporcionando una forma sencilla y no intrusiva de notificar a los usuarios sobre eventos como errores, confirmaciones o advertencias.

## **Solución de Problemas con React Native Gesture Handler**

Si tienes problemas con el `handler` de `react-native`, puedes intentar lo siguiente:

1. **Limpiar la Caché y el Proyecto:**

   - Ejecuta los siguientes comandos para limpiar la caché y el proyecto:
     - `npm cache clean --force`
     - `npx react-native-clean-project`

2. **Ajustar el `MainActivity` en Android:**

   Abre el archivo `MainActivity.java`, que se encuentra en `android/app/src/main/java/<tu-paquete>/MainActivity.java`, y asegúrate de que contiene lo siguiente:

   - Importa `RNGestureHandlerEnabledRootView`:
     - `import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;`
   
   - Ajusta el método `createReactActivityDelegate()`:
     - ```java
       @Override
       protected ReactActivityDelegate createReactActivityDelegate() {
           return new ReactActivityDelegate(this, getMainComponentName()) {
               @Override
               protected RNGestureHandlerEnabledRootView createRootView() {
                   return new RNGestureHandlerEnabledRootView(MainActivity.this);
               }
           };
       }
       ```



