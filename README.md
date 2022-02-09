
# Gradi Theme Reto Colaborativo

## Documentacion:

En este Readme encontrarás la documentación necesaria para poder utilizar el botón de favoritos y todas sus funcionalidades como son listar los productos favoritos y demás.

### add-favourite-button:

![image](https://user-images.githubusercontent.com/98895092/153215067-10630d12-35be-4efc-b676-d637ebb4ec0a.png)

```
{% comment %}
    Renders a favourite button
    Accepts:
    - product: {Object} Product Liquid object
    Usage:
    {% render "add-favourite-button"
      product: product
    %}
{% endcomment %}
```
Para poder utilizar este componente debes hacer render del elemento y pasarle el producto a renderizar, de este modo se puede guardar el producto al momento de hacer el evento click dentro del boton.

