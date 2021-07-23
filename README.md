# e-mkt #

**Tienda online dedicada a la venta de perifericos para GAMERS**

# HOME
![alt text](https://github.com/aguescribano87/e-mkt/blob/44c0e54b1a91da4ccc7b2e4c97cb9c2863eec861/src/img/Home.gif)

# CATEGORIAS
![alt text](https://github.com/aguescribano87/e-mkt/blob/eaf7204ce6a8f4ba550e73ca6415338456c6cbe8/src/img/Categorias.gif)

# ITEM DETAIL
![alt text](https://github.com/aguescribano87/e-mkt/blob/eaf7204ce6a8f4ba550e73ca6415338456c6cbe8/src/img/Item%20Detail.gif)

# CARRITO
![alt text](https://github.com/aguescribano87/e-mkt/blob/eaf7204ce6a8f4ba550e73ca6415338456c6cbe8/src/img/Carrito.gif)

# CHECK-OUT
![alt text](https://github.com/aguescribano87/e-mkt/blob/eaf7204ce6a8f4ba550e73ca6415338456c6cbe8/src/img/Check-out.gif)


### COMPONENTS ###

**-NavBar:** En el NavBar encontrado el Logo que al hacerle click nos lleva a la home de la página donde se pueden ver todos los productos, las Categorías que mediante un arreglo y un mapeo se pueden ver listadas una al lado de la otra, si clickeamos cualquiera de ellas nos va a filtrar los productos disponibles de cada categoría. También tenemos el Carrito que nos lleva a la ruta /cart donde podemos ver lo que tenemos agregado.

**-ItemListConteiner:** Este componente se encarga de traer de nuestra base de datos (dataBase) todos nuestros productos y guardarlos en un estado para luego compartirlo con otros componentes mediante props, también hacemos filtros por categorías mediante el hook useParams que lo recibe del navBar y filtros por stock los productos con stock 0 no se mostraran en la página.

**-ItemList:** Recibe mediante una prop (items) los productos traídos desde la base de datos por el componente anterior y se encarga de mapearlos al componente Item.

**-Item:** Se encarga de mostrar las propiedades de cada producto (imagen, precio, título), al hacer click en un producto hace una ruta hacia el componente ItemDetailConteiner.

**-ItemDetailConteiner:** Mediante el Hook useParams recibe el ID del producto que se clickeo con anterioridad y hace búsqueda de ese producto a la base de datos.

**-ItemDetail:** Muestra en detalle el producto que recibió por parámetro del ItemDetailConteiner (imagen, precio, título, descripción), también podemos ver el componente ItemCount.

**-ItemCount:** Este componente se ubica en la vista detallada del producto y se encarga de mostrarnos el stock disponible, un contador para agregar al carrito la cantidad de este producto el mínimo es 1 y el máximo que dejara es el stock y también un botón para agregar al carrito que le envía la compra al cartContext. Al agregar productos al carrito aparecerá un botón para finalizar la compra que este nos lleva al la vista del carrito.

**-Cart:** Aquí se pueden ver todos los productos agregados al carrito. Cada item cuenta con una imagen del producto, el título, un CartCounter, el sub-total y un botón para eliminarlo del carrito. Por debajo de los productos encontramos el LOGO que al hacer click nos lleva a la HOME, un botón para limpiar el carrito, y el botón comprar que nos lleva al CheckOut. Si no hay productos agregados al carrito muestra un mensaje que el carrito esta vacío y los botones anteriormente mencionados no estarán disponibles.

**-CartCounter:** Muestra la cantidad de un producto que se agregó al carrito, también se pueden descontar hasta un mínimo de 1 y sumar hasta el máximo que el stock lo permite.

**-CartWidjer:** Es un contador que aparecerá en el icono del carrito que se encuentra en el NavBar, muestra la sumatoria total de la cantidad de productos que tenemos en el carrito, en el caso que el carrito este vacío este no aparecerá.

**-CheckOut:** ...

### CONTEXT ###

...

### FIREBASE ###
