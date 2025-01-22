const fs = require("node:fs");

const path = "./pruebacb.txt";

if (fs.existsSync(path)) {
  fs.readFile(path, "utf-8", (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      fs.appendFile(path, " segundo texto", (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("informacion agregada con exito");
          fs.readFile(path, "utf-8", (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log(info);
            }
          });
        }
      });
    }
  });
} else {
  fs.writeFile(path, "primer texto", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("archivo creado con exito");
    }
  });
}
