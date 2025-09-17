# Proyecto React: Lista de Productos con Componentes Reutilizables

¡Bienvenido a nuestro siguiente desafío en React! En el proyecto anterior, aprendimos a obtener datos de una API y mostrarlos directamente en nuestro componente `App.jsx`. Ahora, daremos un paso más allá y aprenderemos una de las prácticas más importantes en React: **la componentización**.

En este proyecto, consumiremos la API de `dummyjson.com` para mostrar una lista de productos. La pieza clave será la creación de un componente reutilizable `ProductCard` para mostrar cada producto de forma individual.

### 🎯 Objetivos de Aprendizaje

*   Reforzar el uso de los hooks `useState` y `useEffect` para obtener y almacenar datos de una API.
*   Aprender a **crear componentes personalizados** para encapsular lógica y marcado (`<ProductCard />`).
*   Entender cómo pasar datos de un componente padre a un componente hijo a través de **`props`**.
*   Mejorar la organización y legibilidad de nuestro código al separar las responsabilidades.

### 📂 Estructura del Proyecto

Nuestra estructura de carpetas ahora incluirá un nuevo directorio: `/components`. Aquí es donde vivirá nuestro componente reutilizable.
```
/dummyjson2025
/src
/components
   ProductCard.jsx   # ¡Nuestro nuevo componente reutilizable!
App.jsx              # El componente principal que obtiene los datos
main.jsx             # Punto de entrada de la aplicación
index.html
package.json
```
---

## 🚀 Pasos para Ejecutar este Proyecto

### Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/profWilliamArte/dummyjson2025.git
cd dummyjson2025
Paso 2: Instalar las Dependencias
npm install
Paso 3: Iniciar el Servidor de Desarrollo
npm run dev
Abre la URL que te proporcione Vite en tu navegador para ver la aplicación en acción.

--------------------------------------------------------------------------------
📖 Guía de Implementación: El Poder de los Componentes
La magia de este proyecto reside en cómo separamos la lógica. App.jsx se encargará de obtener los datos, mientras que ProductCard.jsx se encargará de mostrarlos de forma bonita.
1. Creando el Componente Reutilizable: 
Este componente no sabe de dónde vienen los datos. Su única misión es recibir un producto a través de props y renderizar su información. Esto lo hace increíblemente reutilizable.
// src/components/ProductCard.jsx

// Recibimos las props (title, price, thumbnail) como un objeto
function ProductCard({ title, price, thumbnail }) {
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
2. Actualizando el Componente Principal: 
El componente App sigue siendo responsable de la lógica de datos, pero ahora su tarea de renderizado es mucho más simple: solo tiene que importar y usar el componente ProductCard.
1. Obtener los datos (igual que antes): Usamos useState para crear el estado products y useEffect para hacer la petición a https://dummyjson.com/products.
2. Renderizar usando el nuevo componente: Ahora, en el return, importamos ProductCard y, dentro del .map(), en lugar de escribir todo el HTML, simplemente renderizamos nuestro componente pasándole los datos de cada producto como props.
¡Felicidades! Has aprendido a crear aplicaciones más limpias, organizadas y escalables al dividir tu interfaz en componentes reutilizables.
