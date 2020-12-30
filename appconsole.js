//Configurar puerto primero
const puerto = process.env.PORT || 4000;

// process.stdin.setEncoding('utf8');
const fetch = require("cross-fetch");

console.log('[Para salir presione en miniscula: "q"]');
console.log('[Para ver todos los empleado,escribir en miniscula: "ver"]');

async function fechData(url = "", metodo = "", data = null) {
  try {
    // console.log(">fechData>0>", url, metodo, data);
    const options = {
      method: metodo,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    const optionsB = {
      method: metodo,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    };
    // Content-Type: application/x-www-form-urlencoded
    // console.log("object", data);
    if (data) {
      //   console.log(">fechData>yes body", data);

      const res = await fetch(url, optionsB).then((res) => {
        // console.log(">fechData>yes body", res.status);

        if (res.status >= 400) {
          throw new Error("Respueta del servidor errada");
        }
        const datos = res.json();
        // console.log(">fechData>return B>", datos);
        return datos;
      });
      return res;
    } else {
      const res = await fetch(url, options).then((res) => {
        // console.log(">fechData>no body", res.status);
        if (res.status >= 400) {
          throw new Error("Respueta del servidor errada");
        }
        const datos = res.json();
        //console.log(">fechData>", datos);
        return datos;
      });
      return res;
    }
  } catch (err) {
    console.error(">Error fechData>return >", err);
  }

  // parses JSON response into native JavaScript objects
}

//Solicitar id
process.stdout.write("Ingresar Id de empleado:");
process.stdin.on("data", function (data) {
  var data1 = data.toString(); //process.stdin.read(); //data.toString().trim;
  var i = String(data);
  if (i == "q\n") {
    console.log("Bye!!!");
    process.exit();
  }
  if (i == "ver\n") {
    fechData(`http://localhost:${puerto}/empleados `, "GET").then((data) => {
      if (data) {
        console.log("Mostrando todos los empleados: ", JSON.stringify(data.resultado.empleados, null, 2));
      }
    });
  }
  if (i !== "q\n" && i !== "ver\n") {
    process.stdout.write("Datos del empleado con id: " + data1 + " \n");

    //obtener desde dummy empleados: http://dummy.restapiexample.com/api/v1/employees
    fechData("http://dummy.restapiexample.com/api/v1/employees", "GET").then(
      (data) => {
        if (data) {
          // console.log(">fechData> resultado >", data.data); // JSON data parsed by `data.json()` call

          if (Array.isArray(data.data)) {
            // const encontrado = data.data.find((e) => {e.id.toString() ==  data1; console.log('object.',e.id); }) ;
            const encontrado = data.data.find(
              (element) =>
                element.id.toString().trim() == data1.toString().trim()
            );
            if (!encontrado) {
              console.log("Aviso no se encontro el Id:" + data1);
            } else {
              // console.log(">fechData> resultado >" + data1, encontrado);
              fechData(
                `http://localhost:${puerto}/empleados `,
                "POST",
                //   encontrado
                `id=${encontrado.id}&employee_name=${encontrado.employee_name}&employee_salary=${encontrado.employee_salary}&employee_age=${encontrado.employee_age}&profile_image=${encontrado.profile_image}`
              ).then((res) => {
                if (res) {
                  console.log(
                    "Agregando empleado:",
                    encontrado.employee_name,
                    res
                  );
                }
              });
            }
          }
        }
      }
    );
  }
});
