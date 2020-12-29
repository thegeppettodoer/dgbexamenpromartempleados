const firebase = require("firebase");

module.exports = {
  getName: () => {
    return "Jim";
  },

  fecha: "12.01.1982",

  login: async (email, password) => {
    try {
      console.log(">Login", email, password);
      return await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((e) => {
          console.log("l>ogin> e>", e.user.displayName);
          return {
            error: 0,
            token: e.user.refreshToken,
            username: e.user.displayName,
            email: e.user.email,
            uid: e.user.uid,
          };
        });
      // firebase.auth().onAuthStateChanged((e) => {
      //     console.log("onAuthStateChanged:", e);
      //   });
    } catch (e) {
      console.log(">login>error>", e);
      return { error: -1, message: "Error el login" };
    }
  },

  register: async (email, username, name, password) => {
    try {
      var a1 = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          user.user
            .updateProfile({
              displayName: username,
            })
            .then(function () {});
        });

      var a2 = await firebase
        .database()
        .ref("/usuarios/" + username)
        .set({
          avatar: "",
          email: email,
          fisico: [],
          historialCompras: [],
          name: name,
          pago: [],
          tipoUsuario: "Creador/Normal cambiado auto",
          username: username,
        });
      //   console.log(">register.", a1);

      return { email, username };
    } catch (e) {
      console.log("Register>Error>", e);
      return { error: -1, message: "Error al register " + e.code };
    }
  },

  empleados: async (
    id,
    employee_name,
    employee_salary,
    employee_age,
    profile_image,
    username
  ) => {
    try {
      var a2 = await firebase
        .database()
        .ref("/empleados/" + id)
        .set({
          id: id,
          employee_name: employee_name,
          employee_salary: employee_salary,
          employee_age: employee_age,
          profile_image: profile_image,
          username: username,
        });
      return {
        error: 0,
        id: id,
        employee_name: employee_name,
        username: username,
      };
    } catch (e) {
      console.log("Empleados>Error>", e);
      return { error: -1, message: "Error al Empleados " + e.code };
    }
  },
};
