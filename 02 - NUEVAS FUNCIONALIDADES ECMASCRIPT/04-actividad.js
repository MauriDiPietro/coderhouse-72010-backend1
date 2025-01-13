const ventas = [
    {
      manzanas: 3,
      peras: 2,
      carne: 1,
      jugos: 5,
      dulces: 2,
    },
    {
      manzanas: 1,
      sandias: 1,
      huevos: 6,
      jugos: 1,
      panes: 4,
    },
  ];

  const productos = [];

  let total = 0;

  for (const obj of ventas) {
    const keys = Object.keys(obj);  //productos
    console.log(keys); //[ 'manzanas', 'peras', 'carne', 'jugos', 'dulces' ]
                       //[ 'manzanas', 'sandias', 'huevos', 'jugos', 'panes' ] 
    const values = Object.values(obj);  //cantidades [ 3, 2, 1, 5, 2 ]
                                                    //[ 1, 1, 6, 1, 4 ]
    console.log(values);
    
    /* ------------------------------------ - ----------------------------------- */
    for (const prod of keys) {
        if(!productos.includes(prod)){
            productos.push(prod)
        }
    }
    /* ------------------------------------ - ----------------------------------- */
    for (const cant of values) {
        total += cant
    }
  }

  console.log(productos);
  console.log('total',total);
  
  