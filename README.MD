# 🎨 Generador de Paletas Interactivo

## 📌 Descripción

Colorfly Studio es una aplicación web interactiva diseñada para generar paletas de colores de forma dinámica y rápida.

Permite explorar combinaciones cromáticas aleatorias, visualizar sus códigos correspondientes y copiarlos al portapapeles con un solo clic, facilitando su uso en proyectos de diseño y desarrollo.

La aplicación fue desarrollada como parte del Proyecto Integrador del Módulo 1, poniendo en práctica conceptos fundamentales de HTML, CSS y JavaScript, con foco en la manipulación del DOM y la interacción con el usuario.

---

## 🚀 Demo

🔗  https://nadiastarna.github.io/ProyectoM1_NadiaStarna/

---

## 🛠️ Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript
- Git  
- GitHub  

---

## ✨ Funcionalidades

- Generación aleatoria de paletas de colores.
- Visualización de códigos HEX y/o HSL.
- Copiado automático del código al portapapeles.
- Interfaz visual interactiva.
- Diseño adaptable.
- Feedback visual al copiar un color (tooltip o efecto visual).

---

## 🌐 Despliegue de la app (con GitHub Pages)

La aplicación fue desplegada utilizando GitHub Pages.  
Para realizar el despliegue se siguieron los siguientes pasos:

1. Subir el proyecto a un repositorio en GitHub.
2. Acceder a la sección "Settings" del repositorio.
3. Ir a la opción "Pages".
4. En "Source", seleccionar la rama "main".
5. Guardar los cambios.
6. GitHub genera automáticamente un enlace público para acceder a la aplicación.

---

## Descarga y Ejecución Local

Para ejecutar la aplicación en tu computadora de manera local, sigue estos pasos:

1. Acceder al repositorio del proyecto en GitHub mediante el enlace proporcionado.

2. Clonar el repositorio en tu computadora:  
   - Copiar la URL del repositorio (botón “Code” → “HTTPS”)  
   - Abrir la terminal o consola en tu computadora.  
   - Escribir el siguiente comando y presionar Enter:

     bash
     git clone: https://github.com/NadiaStarna/ProyectoM1_NadiaStarna.git
     
3. Acceder a la carpeta del proyecto recién descargada:

"ProyectoM1_NadiaStarna"

4. Abrir el archivo index.html en tu navegador web:
    - Hacer doble clic sobre el archivo, o
    - Abrir el navegador y arrastrar el archivo index.html dentro de la ventana.

5. La aplicación se ejecutará exactamente igual que en la versión desplegada en GitHub Pages.

6. Desde la versión local, se pueden usar todas las funcionalidades:
   - Seleccionar cantidad de colores
   - Elegir formato HEX o HSL
   - Generar nuevas paletas
   - Copiar colores
   - Guardar colores
   - Eliminar colores individuales o limpiar la paleta completa

7. Repetir los pasos de generación y guardado tantas veces como se desee.

---

## 📦 Instrucciones de Uso de la Aplicación

1. Acceder a la aplicación mediante el enlace público proporcionado anteriormente.

2. Seleccionar la cantidad de colores que se desean generar utilizando el selector correspondiente (por ejemplo: 6, 8 o 9 colores).

3. Elegir el formato en el que se desea visualizar los colores:
   - HEX
   - HSL  
   La visualización de los códigos se actualizará automáticamente según la opción seleccionada.

4. Presionar el botón "Generar Paleta" para crear la nueva combinación de colores.

5. Los colores se mostrarán en formato ovalado en pantalla junto con su código correspondiente.

6. Para copiar el formato de un color generado, hacer clic directamente sobre el óvalo del color.  
   El valor se copiará automáticamente al portapapeles y se mostrará una notificación visual indicando que la acción fue realizada correctamente.

7. Para guardar una paleta, utilizar la opción de "guardar paleta".
   Los colores seleccionados se agregaran debajo de los botones.

8. En la sección de peletas guardadas:
   - También se puede copiar el formato de un color haciendo clic sobre el mini-círculo.
   - Para eliminar una paleta completa, hacer clic en la *cruz (X)* que aparece a su derecha.
   - Para eliminar todas las paletas guardadas de una sola vez, utilizar la opción *"Limpiar Paleta"*, que borra todos los colores guardados simultáneamente.

9. El usuario puede repetir los pasos de generación, copia y guardado tantas veces como desee, modificando la cantidad de colores o el formato antes de generar nuevas paletas.

---

## 🧠 Decisiones técnicas

- Se utilizó JavaScript Vanilla para reforzar los fundamentos del manejo del DOM sin depender de librerías externas.
- Se implementó `navigator.clipboard` para permitir el copiado automático del código de color.
- Se priorizó una interfaz limpia y minimalista para mejorar la experiencia de usuario.
- La generación de colores se realiza mediante funciones que producen valores aleatorios dentro del rango HEX/HSL.
- Se trabajó con eventos del DOM para detectar interacciones del usuario y actualizar dinámicamente la interfaz.

---

## 🤖 Uso de Inteligencia Artificial

Se utilizó inteligencia artificial como herramienta de apoyo para:

- Consultas específicas sobre manipulación del DOM.
- Implementación de la función de copiado al portapapeles.
- Mejora de estructura y refactorización de código.
- Optimización de estilos visuales.

El código generado fue analizado, adaptado y modificado para ajustarse a la estructura del proyecto y comprender su funcionamiento.

---

## 📌 Autor

Nadia Starna  
Proyecto Integrador - Módulo 1