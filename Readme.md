# Inicio rapido

- Abra el proyecto con visual studio code
- Instale la extension live Server
- Ejecute o inicie la extension Live Server

## Data.js

Este código JavaScript utiliza la biblioteca `petite-vue` para crear una aplicación web y realizar operaciones de red. 

Las funciones `callGet` y `callPost` son funciones asincrónicas que realizan solicitudes GET y POST respectivamente a un punto final de la API especificado. Ambas funciones utilizan la función `fetch` para realizar la solicitud de red y devuelven la respuesta como un objeto JSON. La función `callPost` también incluye un cuerpo de solicitud y establece el encabezado 'Content-Type' en 'application/json'. Si la respuesta no es exitosa, lanza un error.

La función `getMovies` realiza una solicitud GET a la API para obtener una lista de películas de un autor específico. El autor se obtiene de un objeto reactivo `values`. Si la solicitud es exitosa, la lista de películas se almacena en el objeto reactivo `lists`. Si ocurre un error durante la solicitud, se llama a la función `errorHandler`.

La función `getAuthor` es similar a `getMovies`, pero obtiene una lista de autores en lugar de películas. 

La función `errorHandler` simplemente registra cualquier error que se le pase en la consola.

Finalmente, se crea una aplicación `petite-vue` y se monta. Las funciones `getMovies` y `getAuthor` se llaman inmediatamente después de montar la aplicación para llenar los objetos reactivos con datos desde la API.


## index.html

Este es un archivo HTML que contiene dos elementos de selección (dropdowns) y un script que se vincula al final del cuerpo del documento.

El primer elemento de selección permite al usuario elegir un autor de una lista. Esta lista se genera dinámicamente utilizando la directiva `v-for` de Vue.js, que crea una opción para cada autor en la lista de autores. El valor de cada opción es el ID del autor y el texto mostrado es el nombre del autor. La directiva `v-model` se utiliza para vincular el valor seleccionado a la propiedad `values.author`. Además, hay una directiva `v-effect` que llama a la función `api.getMovies()` cada vez que el valor seleccionado cambia, pero solo si el valor no está vacío.

El segundo elemento de selección permite al usuario elegir una película de una lista. Al igual que con el primer elemento de selección, la lista de películas se genera dinámicamente utilizando la directiva `v-for`. El valor de cada opción es el ID de la película y el texto mostrado es el nombre de la película. La directiva `v-model` se utiliza para vincular el valor seleccionado a la propiedad `values.movies`.

Finalmente, el script `/data.js` se vincula al final del cuerpo del documento. Este script es un módulo, como lo indica el atributo `type="module"`. Este script probablemente contiene la lógica para obtener los datos de los autores y las películas, así como para manejar los cambios en los valores seleccionados.

### Enlaces importantes
- [Petite vue](https://github.com/vuejs/petite-vue)
- [Sintaxis Template vue](https://es.vuejs.org/v2/guide/syntax)
- [Renderizado de listas](https://es.vuejs.org/v2/guide/list)
- [Formularios](https://es.vuejs.org/v2/guide/forms)