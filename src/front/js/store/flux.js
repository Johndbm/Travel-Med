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
          const data = await response.json;
          console.log(data);
        } catch (error) {
          console.log(error);
        }
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

      pago: async (
        user_id,
        id_passport,
        payment_method,
        confirmation_number,
        transaction_person,
        image_of_payment,
        image_id
      ) => {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: user_id,
            id_passport: id_passport,
            payment_method: payment_method,
            confirmation_number: confirmation_number,
            transaction_person: transaction_person,
            image_of_payment: image_of_payment,
            image_id: image_id,
          }),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/user`,
            options
          );
          if (!response.ok) {
            alert("Error en el formulario, por favor verifique los datos");
          }
          const data = await response.json;
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

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

        historia: async (
          user_id,
          name,
          edad,
          peso,
          telef,
          correo,
          direccion,
          sexo,
          alt,
          cirugiasAnt,
          alergias,
          obs
        ) => {
          const formulario = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user_id,
              name: name,
              edad: edad,
              peso: peso,
              telef: telef,
              correo: correo,
              direccion: direccion,
              sexo: sexo,
              alt: alt,
              cirugiasAnt: cirugiasAnt,
              alergias: alergias,
              obs: obs,
            }),
          };
          try {
            const response = await fetch(
              "https://3001-johndbm-proyectofinal-dfmd0gmnslt.ws-us86.gitpod.io/api/historia",
              options
            );
            if (!response.ok) {
              alert("Error en el formulario, por favor verifique los datos");
            }
            const data = await response.json;
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
