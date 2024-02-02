# Inicio rapido

- Abra el proyecto con visual studio code
- Instale la extension live Server
- Ejecute o inicie la extension Live Server

## Data.js

GitHub Copilot: Este código JavaScript utiliza funciones asíncronas para interactuar con una API y obtener datos. 

La función `callGet` realiza una solicitud GET a un punto final de API especificado. Esta función toma dos argumentos: `apiEndpoint`, que es la URL del punto final de la API, y `params`, que es un objeto que contiene los parámetros de la solicitud. La función `buildUrlSearchParams` se utiliza para convertir el objeto `params` en una cadena de consulta URL. Luego, la función `fetch` se utiliza para realizar la solicitud GET a la API. Finalmente, la respuesta de la API se devuelve como un objeto JSON.

La función `callPost` es similar a `callGet`, pero realiza una solicitud POST en lugar de GET. Además de `apiEndpoint` y `params`, también toma un tercer argumento `body`, que es el cuerpo de la solicitud POST. El cuerpo de la solicitud se convierte en una cadena JSON antes de ser enviado.

Las funciones `getMovies` y `getAuthor` utilizan `callGet` para obtener datos de películas y autores, respectivamente, de la API. Los datos obtenidos se almacenan en las propiedades `movies` y `authors` del objeto `lists`.

Finalmente, se crea una aplicación utilizando la función `createApp`, que toma un objeto con las propiedades `lists`, `values` y `api`. Las funciones `getMovies` y `getAuthor` se pasan como métodos de la propiedad `api`. Después de crear la aplicación, se monta utilizando el método `mount`.

Las funciones `getMovies` y `getAuthor` se llaman al final del script para iniciar la obtención de datos de la API.

AndresGnu: @workspace /explain 

GitHub Copilot: Este es un archivo HTML que contiene dos elementos de selección (dropdowns) y un script que se vincula al final del cuerpo del documento.

El primer elemento de selección permite al usuario elegir un autor de una lista. Esta lista se genera dinámicamente utilizando la directiva `v-for` de Vue.js, que crea una opción para cada autor en la lista de autores. El valor de cada opción es el ID del autor y el texto mostrado es el nombre del autor. La directiva `v-model` se utiliza para vincular el valor seleccionado a la propiedad `values.author`. Además, hay una directiva `v-effect` que llama a la función `api.getMovies()` cada vez que el valor seleccionado cambia, pero solo si el valor no está vacío.

El segundo elemento de selección permite al usuario elegir una película de una lista. Al igual que con el primer elemento de selección, la lista de películas se genera dinámicamente utilizando la directiva `v-for`. El valor de cada opción es el ID de la película y el texto mostrado es el nombre de la película. La directiva `v-model` se utiliza para vincular el valor seleccionado a la propiedad `values.movies`.

Finalmente, el script `/data.js` se vincula al final del cuerpo del documento. Este script es un módulo, como lo indica el atributo `type="module"`. Este script probablemente contiene la lógica para obtener los datos de los autores y las películas, así como para manejar los cambios en los valores seleccionados.

## index.html

Este es un archivo HTML que contiene dos elementos de selección (dropdowns) y un script que se vincula al final del cuerpo del documento.

El primer elemento de selección permite al usuario elegir un autor de una lista. Esta lista se genera dinámicamente utilizando la directiva `v-for` de Vue.js, que crea una opción para cada autor en la lista de autores. El valor de cada opción es el ID del autor y el texto mostrado es el nombre del autor. La directiva `v-model` se utiliza para vincular el valor seleccionado a la propiedad `values.author`. Además, hay una directiva `v-effect` que llama a la función `api.getMovies()` cada vez que el valor seleccionado cambia, pero solo si el valor no está vacío.

El segundo elemento de selección permite al usuario elegir una película de una lista. Al igual que con el primer elemento de selección, la lista de películas se genera dinámicamente utilizando la directiva `v-for`. El valor de cada opción es el ID de la película y el texto mostrado es el nombre de la película. La directiva `v-model` se utiliza para vincular el valor seleccionado a la propiedad `values.movies`.

Finalmente, el script `/data.js` se vincula al final del cuerpo del documento. Este script es un módulo, como lo indica el atributo `type="module"`. Este script probablemente contiene la lógica para obtener los datos de los autores y las películas, así como para manejar los cambios en los valores seleccionados.