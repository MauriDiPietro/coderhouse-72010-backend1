const mostrarLista1 = (array) => {
  if (Array.isArray(array)) {
    if (array.length === 0) return "Lista vacía";
    const elementos = [];
    for (const item of array) {
      elementos.push(item);
    }
    return { elementos, longitud: array.length };
  }
  return "No es un array";
};

/* ------------------------------------ - ----------------------------------- */

const mostrarLista2 = (array) => {
  if (Array.isArray(array)) {
    if (array.length === 0) return "Lista vacía";
    return { elementos: array.map((x) => x), longitud: array.length };
  }
  return "No es un array";
};

/* ------------------------------------ - ----------------------------------- */

const mostrarLista3 = (array) => {
    if (!Array.isArray(array)) return "No es un array";
    if (array.length === 0) return "Lista vacía";
    return { elementos: array.map((x) => x), longitud: array.length };
}

/* ------------------------------------ - ----------------------------------- */

const mostrarLista4 = (array) => {
    if (!Array.isArray(array)) return "No es un array";
    switch (array.length) {
        case 0:
            return 'Lista vacía'
            break;
        default:
            return { elementos: array.map((x) => x), longitud: array.length };
            break;
    }
}

console.log(mostrarLista4([1,2,3,4,5]));
