const divPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir un nro por 0");
    resolve(a / b);
  });
};

const divAsync = async (a, b) => {
  try {
    return await divPromise(a, b);
  } catch (error) {
    console.log(error);
  }
};

const test = async () => {
  console.log(await divAsync(10, 0));
};

// test()

/* ------------------------------------ - ----------------------------------- */

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (!error) resolve("Datos recibidos");
      reject("ERROR");
    }, 2000);
  });
};

const obtenerDatos = async () => {
  try {
    console.log(await getData());
  } catch (error) {
    console.log(error);
  }
};

// obtenerDatos();

// const main = async () =>{
//     console.log('iniciando descarga...');
//     await obtenerDatos()
//     console.log('descarga completada...');
// }

/* ------------------------------------ - ----------------------------------- */

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    email: "juan@mail.com",
  },
  {
    id: 2,
    nombre: "Pedro",
    email: "pedro@mail.com",
  },
  {
    id: 3,
    nombre: "Maria",
    email: "maria@mail.com",
  },
];

const obtenerUsuarios = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) resolve(usuarios);
      else reject("error al obtener usuarios");
    }, 5000);
  });
};

const ejecutar = async () => {
  try {
    const usuarios = await obtenerUsuarios();
    console.log(usuarios);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finalizó el proceso");
  }
};

// console.log('se esta procesando algo............');
// console.log('se esta procesando otra cosa............');
// ejecutar()
// console.log('se esta procesando otra cosa 2............');
// console.log('se esta procesando algo 3............');

/* ------------------------------------ - ----------------------------------- */

const descargarArchivo = (nombre, tiempo) => {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando descarga de ${nombre}`);
    setTimeout(() => {
      resolve(console.log(`${nombre} descargado`));
    }, tiempo);
  });
};

const descargarArchivosConPromesas = () => {
  const archivos = [
    { nombre: "Archivo1.txt", tiempo: 3000 },
    { nombre: "Archivo2.txt", tiempo: 4000 },
    { nombre: "Archivo3.txt", tiempo: 1000 },
  ];

  const promesas = archivos.map((archivo) => {
    descargarArchivo(archivo.nombre, archivo.tiempo);
  });

  Promise.all(promesas)
    .then((resultados) => {
      resultados.forEach((resultado) => console.log(resultado));
    })
    .catch((error) => console.log(error));
};

// descargarArchivosConPromesas();

/* ------------------------------------ - ----------------------------------- */

const descargarArchivosConAsyncAwait = async () => {
  try {
    const archivos = [
      { nombre: "Archivo1.txt", tiempo: 3000 },
      { nombre: "Archivo2.txt", tiempo: 4000 },
      { nombre: "Archivo3.txt", tiempo: 1000 },
    ];

    for (const archivo of archivos) {
      console.log(await descargarArchivo(archivo.nombre, archivo.tiempo));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("descargas completadas!");
  }
};

// descargarArchivosConAsyncAwait()

/* ------------------------------------ - ----------------------------------- */

const getApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
};

// getApi()

/* ------------------------------------ - ----------------------------------- */

const obtenerInfo = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok)
      throw new Error("Error al obtener informacion del usuario"); //{ message, stack, name }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const obtenerInfoDelUsuario = async () => {
  console.log("iniciando solicitud....");
  try {
    console.log(await obtenerInfo("MauriDiPietro"));
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finalizó la solicitud");
  }
};

obtenerInfoDelUsuario()
