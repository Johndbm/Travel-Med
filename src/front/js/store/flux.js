const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: sessionStorage.getItem("token") || null,

      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      register: async (
        name,
        lastname,
        email,
        password,
        country,
        city,
        state
      ) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            country: country,
            city: city,
            state: state,
          }),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/user`,
            options
          );
          if (!response.ok) {
            alert("Error en el registro de usuario");
          }
          const data = await response.json();
          console.log(data);
          if (response.ok) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      login: async (email, password) => {
        const store = getStore();

        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/token`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          if (!response.ok) {
            return false;
          }
          const data = await response.json();
          setStore({ token: data.access_token });
          sessionStorage.setItem("token", data.access_token);
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      logout: async () => {
        setStore({ token: null });
        sessionStorage.removeItem("token");
      },

      login: async (email, password) => {
        // console.log(email, password);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/token`,
            options
          );
          if (!response.ok) {
            return false;
          }
          const data = await response.json();
          setStore({ token: data.access_token });
          sessionStorage.setItem("token", data.access_token);
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      logout: async () => {
        setStore({ token: null });
        sessionStorage.removeItem("token");
      },

      // pago: async (data) => {
      //   const store = getStore();
      //   try {
      //     const response = await fetch(`${process.env.BACKEND_URL}/api/pago`, {
      //       method: "POST",
      //       mode: "no-cors",
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Bearer ${store.token}`,
      //       },
      //       body: data,
      //     });
      //     const data = await response.json();
      //     console.log(data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      // exampleFunction: () => {
      //   getActions().changeColor(0, "green");
      // },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
      },

      historia: async (
        name,
        edad,
        peso,
        telef,
        correo,
        paisRes,
        direccion,
        sexo,
        alt,
        cirugiasAnt,
        especif,
        alergias,
        especify,
        obs
      ) => {
        const formulario = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            edad: edad,
            peso: peso,
            telef: telef,
            correo: correo,
            paisRes: paisRes,
            direccion: direccion,
            sexo: sexo,
            alt: alt,
            cirugiasAnt: cirugiasAnt,
            especif: especif,
            alergias: alergias,
            especify: especify,
            obs: obs,
          }),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/historia`,
            formulario
          );
          if (!response.ok) {
            alert("Error en el formulario, por favor verifique los datos");
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");

        //reset the global store
        setStore({ demo: demo });
      },
      //     },
      //   };
      // };

      // prueba: async () => {
      //   const store = getStore();

      //   try {
      //     const response = await fetch(
      //       `${process.env.BACKEND_URL}/api/prueba`,
      //       {
      //         method: "GET",
      //         headers: {
      //           "Content-Type": "application/json",
      //           Authorization: `Bearer ${store.token}`,
      //         },
      //  })},

      registerPago: async (data) => {
        const store = getStore();
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/pago`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
            body: data,
          });

          if (response.ok) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log(error);
        }
      },

      registerHistoria: async (data) => {
        console.log(data);
        const store = getStore();
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/historia`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${store.token}`,
              },
              body: JSON.stringify(data),
            }
          );

          if (response.ok) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
