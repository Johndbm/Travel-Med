import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import gerentedama from "../../img/gerentedama.jpg";
import doctor1 from "../../img/doctora2.jpg";
import doctor2 from "../../img/med1.jpg";
import doctor3 from "../../img/doctor3def.jpg";
import doctor4 from "../../img/doctora4def.jpg";
import paciente1 from "../../img/paciente-mujer.jpg";
import paciente4 from "../../img/Paciente-Feliz.jpg";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    <Navbar />
      {/* Carrusel uno */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={doctor1} className="d-block w-100 carrusel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={doctor2} className="d-block  w-100 carrusel" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={doctor3} className="d-block  w-100 carrusel" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={doctor4} className="d-block  w-100 carrusel" alt="..." />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*Sobre nosotros*/}
      <div className="text-center mt-5" id="nosotros">
        <div className=" container-sm d-flex align-items-start containersn ">
          <div>
            <h1>Sobre nosotros</h1>
            <h4 className="px-4">
              Somos una empresa encargada de administrarte todas las facilidades
              necesarias para que puedas realizarte una operacion estetica en
              Venezuela junto a los mejores especialistas del pais. Nunca te
              dejaremos solo en este proceso.
            </h4>
          </div>
          <img className="gerente" src={gerentedama} />
        </div>

        <h1> Te ofrecemos</h1>

        <div
          className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-center"
          id="ofrecemos"
        >
          <div className="card">
            <img
              src="https://cf.bstatic.com/images/hotel/840x460/305/305503894.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hospedaje</h5>
              <p className="card-text">
                Te ofrecemos un excelente sistema de hospedaje con un servicio
                de alimentacion apto para tu tratamiento.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://www.adslzone.net/app/uploads-adslzone.net/2019/07/vuelos.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Vuelos</h5>
              <p className="card-text">
                Contamos con una plataforma donde podras agendar tu vuelo.
              </p>
            </div>
          </div>
        </div>
        {/* Galeria de imagenes */}
        <h2>Nuestros pacientes reciben la mejor atencion</h2>
        <h2>Haz como ellos y cambia tu vida!</h2>
        <div className="d-flex justify-content-center">
          <section>
            <img src={paciente1} />
            <img src="https://static.vecteezy.com/system/resources/previews/011/271/618/non_2x/happy-young-asian-female-patient-trust-hospitalization-free-photo.JPG" />
            <img src="https://blog.familiados.com/wp-content/uploads/2022/03/hombre-hospitalizado.jpg" />
            <img src={paciente4} />
          </section>
        </div>

        {/* segundo carrusel*/}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <h2>Casos exitosos</h2>
          <div className="carousel-inner ">
            <div className="carousel-item active d-flex justify-content-center">
              <img
                src="data:image/jpeg;base64,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"
                className="d-block w-50"
              />
            </div>
            <div className="carousel-item d-flex justify-content-center">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgaGhkcGhoaGhoaHhwcGBoaGhgcHBocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjErJCsxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALwBDAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgcBAAj/xABAEAACAQIEAwUFBgUDAwUBAAABAhEAAwQSITEFQVEGImFxgRMykaGxFEJSwdHwB2JygrKS4fEjM6IVQ1PS4iT/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKBEAAgICAgIBAwQDAAAAAAAAAAECEQMhEjEEQVEFEyIjYZGhFDKB/9oADAMBAAIRAxEAPwC1+2VgbK59F/8AtVL9s05WmPmyj6TQKYK3vkX4eXWvVwyDUIg/tFT/AC+R7j8F79tOlker/wD5qh+2dz7tpP8AyP0ipBB+ER5dfSq2uBULE6RQ/L5Nyj8EG7VYkiQij+xj9TQdztRifxqv9i/mKV43izuco2OkDX61fgOz1+7BYED4VnrthTvpFj9o8STBvH0Cj6Cq24vfbX7Q/wDrI+lMuI9jntoGiesmstibbISpBBoKpewtuPpGn4NxOQyO5ZiZUsxPLaT4/WnOIXOJrm6PBra8Lxme0CJnYk661WOtEpO9jXs/iriO6IZWR3TsCdSfCtCuNJ+4DG5rL8DVluuD95QZHgY/OtQvdGYvlUb/AKAczRASt3GYyE084pdxXFW8yh3CkGJBzQI2PSiblx7syzW0jQD3j0LsNv6Rr41DB8OtqzeMaEDSBPSQdetYx5hrVswUzOd5jujxJ2FFWOHIrM7d52gnUwNIAHhV1u5EQTlO065T+lU4m/z2I+YoNJ9hTa6Kb2ADuEBhTJ66rrFevwDcFu70CKPmZrzhOOzYhU5w58oFaJlY0qjFdDubZg+K8AKy46EADTQ+JPyHOrcNw9H9kwhnyw0EabHvc6193CEnUyOmhB+FQXAomqqA3Mxr8d6Rw+DKQWUBVRrsPlWe4xwtSGdhm2XLE6Zt9qekkARt051QOIp3keQ0T5LPh6Usor2MqMj/AOjK7ZkXJk0jXXwM8qe3eIJaUDdgNRsB/cfoJqPF8QuHRmzCX1A3O3IVzjGcUe40Z2jp/wAUYQb2NKSWkaTi/afUQQwiIEwPpSx8cRqVWTyiSJ8aVW8NPn1NFW8ORy06ir8UTUpDLDcUgwdCPhFVcRwFrEHPnVTHIaH05UE2FckEDTWqHRlWdR0HWg4qjW/Y0w/CWQh1RXBWJ72k/eI5mvr6QcucS0B4UTpyjSdBNU8F4qwOQGJ59Kvx+FKlndu5rtzJ5baVz5INOzV8EHRWVibzBQwIBiZEDMPw6ba0Ezo9xcpcquoc6sYErmJ91dCKqt4sgMpGjbCY20M6a6HSK8s3M2dDKaCcskQDqWEaiKSKd2wS6Gl4kPnN0e7mPdIzZtxEb+Ph1qFpL7yyPaRSTAOhMaZiIOpjrQlwlVAUlwJGcr3ZPMKR0neaJw+McAj/AKg12tgldhsZookyYxz9F8wD+tfNi3j3h46UOixXk1S2X4osbFXJ97n0oDiuJYqBJg78quuuQCY8dKGxaZkJHIEjzopmaQ67IcDVgt1xM6gHl0Nby0w8Kx3DuOWrSrbDSYA01A0qzi3EbpWbThBzaJ+FRlbezoiko6Nq7SIOorFdrOBZ1zoJI3A5ik2G4pcDAm7ec6xERpvpEfGtbw27cZczoQDsWAB9RNB3F2bjyVHLLuHZdwRTPsviSHe3Ehlkea7/AC+lbbimERz3lAzc/GszjuHJZAv2AQUO+bMG1hgR9068uU1eOVMhLE90POGuRcB2EER8KdC8HOvur8J6ms0nEC6q6KD8JB5ivb+P01keBqxCjQXeJTty2HIfzHqaoTFBRuSSdzuSdzSAY8bmPWvvtzH3QTNCwmhXiEAmY10FDX8Sz6A6daAwmHZjLn0H503SyBWMUdj8OExhaWZmW5qx0HhXQc/gPh+tYLs9iQuPyA722b1iCPofWt1mHMR5foRHwoRWhmePmPPT4UO0dfP9dvnVpPQjpUG2OvPfl8eVMAgw8G/X9apvoDIdF9RrV62WiTIU+f5HavmTQQOWm8nxkj6RStBTMP2qfO+QLAA1Jg78hPOgcN2dZVDsgadQJgjz0pnjLS3MdlGqplnnrvWhxxCiB0ocq0VjG9mMHDXc6gIPwjX5084dwgc6ssJrTGxpSKTZZwiiKcHSNqFx/Z5HQ8jFN7T16761Tlom47ORY602HuEEHQ067PcULXAjDMjqQVMEGPCi+2+FBhwNaVdiwGxKAwcoYwY6R+dF042SdqVDjinZkHM9hshMDIdQfBT93ypNhrjWmKOjIAAY11Zdi0+8D13rfYnDvssROx5DmAaC4rgxcsnOgOXYx3hG8HeK52r0NKKaMfj07qusMC8mGY5goBCjWYGxOms1QVVu8UYEyYViANToBNMrmDZESFzKpaY0JRhEHL73M0ruXshg2QeYJZgcp20zUpBxaL4EV5FfZvGvl38/nVDoK3YVECBHLnUnAFfA6bj9xWMSwvB7rCFARAAc0AaRqSSK2uF4Ui4ZUPeOpkmJnkegrO4viUW1UGBpSa7xF7hyAM6gzpO/KYqdORdcUavCX8Mjf9sBgeZzajpOnwps/EUcVinw95wBkVF8T+nOjuGSoysSY5mlaoe79GgdFcaiQDI/KqFwlohkgS5JYdfGOlTS5pU8BhWu3AEEtrryA5knpSr4QHS7EN7AJbJXLImZ6TyoZrSNopPqdPnWw7R9lwxQW72V2EEMuYOwlsxI9waR02rJ43szjLerQV/Eokesaj1ruinxVnBJrk6An4cZkpmn8Jo7hzZBDAz4jlQKWWHvYlV8mA+c1XcvYZNXxBc9A0/SiA0tvGg+6snwip53boB0zD5msqvHcKvu258cn61cnarDKe7hwT1yrpWMP+z1sjiaFhANq53gNSNAB0jTrXRHHh5TFYPss5uYpXMDuOBrGkbA1vO7r/v9SYpYtNBeiEazAB8vkKqbU6+Enb5bGiAViAPIQZ+MfnUWYztHjH1mnMR9mBss+I+uv61FlBMT6ePkJj414/Ug/EkeknT0qjHBgjlXM5TEToQPIUGFbdGYw6EYq8YPvfQAVLHcYw4cqXUkb68/pX11D9muPJDOIkbjSDBrnl+wmpyuYMFh1PnvUVTZ001/w6VhryMJUii12rnHCrRtsGV2jmp0rX2cUxXShpMorasf2BXtwRXP+JX8UWJS8FHSa8wuOxluGZxcWdQDrHPenpNdk22n0Oe2L/8AS9aQ9hbIN93bQhYWZiWMa027QP7WwGXYkGvuy2BKIzFdXeQfAafrWi/xJz7Ne4dWCusTMHfb6ihLVq4XcMwNth3VjYiAfHrVqXWCss5pGhIIYHqBQHCMQ5RjcVwS7EFtNCdJmkYEwPFIUY91iACAdCPI85oFLFlxmKAHpFP3dXJysrr4EEetAX8MZ9+PCY+VI0FUKBbTfIPh0IFeOiDdR8KGztptRWLxr3WBuEGABoqroOQyiKsS2eNbQ/dX4CqrirtCnrp1qN4jMcgbLyzQW5bkAfSqixrGPMTZUjVRHTkOlQNuE7kLG45GpMd9KmVdFIZSMwlZBExpOvL/AGpHHZaM9UN8Nbi3qRAiTPM0MnUUqwjvlys0DWfETOvwFNcMxbRBMbt91fFm5fWpyir0UjJtbDrCsxCqCWJAAG5PStxwrBjDplJBuN75GsdFHlS7gFzDW7Re0/tbxOQtlIKnoqnUL48/lTjD4Y+8+/T9f0q2LFW2Qy5b0izIDrHrzP8AtUxbr12CiSYqkYoRMacup/SuhI52xJx3sXhMTLPbyOf/AHLcK3rpDeornHHP4bYmzLWSL6dFGVx/Yfe/tJ8q7H7fSWIXw518t0HY/KtRlI/NJQqSrAggwQQQQehB2NRbr0rvfaPsvh8WpzoFuR3bigZh0n8Q8D8q432g4Fcwrm3cHirj3XHVfzHKg0MmbHsFi2fEqDtkf6DpXTVPKT6azXJf4aMwxaQT/wBt/oK64jKNSrf29fKpxVKh5Oz5XIUhYA/p19TFSQQJYGDpIA2/pjWvEAYQFYnwO39sV5bUTrr4ag/CnFPbqkGAYJ5ajfqJ+lQe2IhhB6nT5RVpJXQhYOwO31qLYVomDG8jb571giO9bUIyaESYkSPgaymM4S5JARWU9AoHqDpWk43ifZ6ddaUtxEKuYmud90duNXGwC5gGyjMoECB4DyGlPsHggLQHWkmAxXtmJZ4g6IOnjWqUdwQfKilbseWlSMPxHg8sytKye6x1A18TFMMNwqCns2EKIYSO91MDRac2Mapco8Zh8/KmiBQNABR9UTa3Zn3wgUKpE94aUwwloqpUGFMmIkActP0qxcPmcE/dnQcyf2aNvWgTqe7Eb5o9CBWiiWSXoVvbIOokciNPU6TUbtlmBXcEGcsnQ9TvRty0Zn8vzqtkaAAB1EAT/qGtFokmIsHw023DowyARlJYn9D8qYQKIVYJn5Rv61DKOh/fpScTJ0Y9DrV2IvF9dNukVRkr6KcBYrnw+FWYa17RwgHeYwI/Pw50P8a1HZnB5UNwjvNovgvM+v0HjRirYrdIlZ4TbtxAzsN2O0/yjkPnXvEcEHthQcxAkhj3tNyp5gU3K19awuY6Cf1/KquKaFjNp2Y3AdnTJa6cwB7tsSJEbufPkOnpTuzwe5ehZyWx91QAPloPIT6VprGDUHva+HKjwwAgChGCQZTbAuGcLt4dYRRPNjqT1q+9igvrU7rgikWPUvcRASJBzHooPeProPWnSJtsKtubrFz7gOnQkcz4UakcgWPWP3FV4dAYAEIugHWPyo0GiBFSoPwfHWra+r6awSLilPHeD28TaNu4uh2Ybo3JlPX602NVsKATmfY/hj4bH+yfdbb5WGgZYEMP3pXSSevPqD9aHfCqXRz7yZobmAwhh5bfCp3sUloZnJy8oBknoBzqfGinK0FwI2A/mkx8qiUj70jxJHwrDcZ7Vl29lZlT95wQSoG+o0WOes9JqjCLkHtr9x1QbZmLO59fdnkBr1p1BgckdAd1jV/Tb4xQN/i1tCO9JmAF1knlEzNY3H8ehM7tlUyLazyG+Ubu/jsOorIY7jzuCVm2mo0PffqFPLxPLqdqLil2wW30bLtVxNLz91wxQw0ageE8yOcbVl+IK+47w0jX40v4LfCh2f3ngKBsoGungPmTThXkRXNP8ZWduH8o0JrOKdWDqp056+oNaXC8cLrDsyDeFmT4E6UJYbI25U+nznSnmGvoVyh9T0CyeZ1C1ov2PKLXsTY7HqxBRjnGo6074VxRnQGDUX4ciIwRAs6k8yTuSdyaq9stpCx5bDqeQoPb0C6W2a7gqh5hlz9CRoPI86NMgZcw1Ou316VynC8SZpbMQ8mY/e1aDh3ad1gMc48dDH9Q39a6PtNLRxPImzY37PegnTwbN+/KqPZ9Nx0EDzgCqcBxW1dAytDfhMSfI7GjHVddCCPCkaNYOtldc4bXYpET40KbA6ijnA0O/Qf88qi9zXkPAaD4UGg2YHKelesKJYRUZnTfpQCS4bgTddUExuT0Ub1t1wuUAAaCAAK87PcM9iksO+2reHRfSm8VSKpE5Oxf9kOnKjEUKIFTaoNTC9FeaK8a7XrCoFawrIsZpaj5nMHVoSeijvOfpR90wKWW/wDuMN9mjqDuPiop0Bjy24AEbcv9qsL+c0Ctw9Rm8eXkKIR/P4UtBsIzHwr6aoe4w2Qn1FQ+0t/8bVg2E5qixqpL5O6kedSZqxiSPDAwD56isD2y4uC7qGAO2k5UX7x/qOwG/hWs4njFtoXZgo2k7a7VxjimKLuxPu52M8iT05sY+HhS3UikVcRjZxir7kIggkmCznl3fovqTzqGN4qXYM4JCiEQkkDxc/ePWPlSQ3yeceX6718vjT8gcS3GYlnYu7Zm28gNgANgOgoMmTJ1q01Sam2UQSL2VGPNoUeAJ73rTzAXsyqeY0P5Gs3dtlk05NPyplwm/seuh8xUcmzswQfF/wAmsx+DOUiQNJnnRfZ+yI1BL9aWPjnK6wRETziiuHYp0XQiW0np6VoyikLJSvob4zEQcvPb1rNdobuqJ01PmRp+/Gn/AHLam4521nmT0HiaxWPxRuXSx3Yj0k6D4D6VobkhpQvE5P0v7PshU5xzAkdaKLkLmB23HUc/Wq05Cagxifn5V3p0eWw4XJhl0O/nT/hXaa5baGOdDGZTBMeBNZTAGFynlMeU17efK6nkdD+RrSSa2ZWnR1bA8RS/Ps2kncTlMeKD/ijPsp/l/fpXLbF5lIZWKsDII5EfrXS+GYkXrSXCSCyiRPMaH5g1GUKKKVmKCgmrMDbPtE/qn4d78qc4fBownIKLwnDraPmgkRoDrB6/WuSORN7LyxySNBa1FTqm04jQzVk10p2c9UfMaqc1MAnYVS8zRQrZ8K9JqMHpXgVjsDRAVXSOtAFCGzKdYInoCRProKLvYVp0XN5GPjV9hViAuVuatr8DTWADsYVveDx4L3iT1Y7mpqivozo5HUFG+RolkU6FcjjmNP8AkUPdt6gPrPuuNx4HrWs1HrYBR7rsp8yw+dXWnddG7w6r+lQXMO6Tr91uR869W+ZyuIPUUAhczrVLmKgXYc5FU3blAJne3d6MK+3vJv8A1CuZYnh7wGHeEeo9K3fbvEA4ZxOzIY/uFZzDWXKI8d1gNd6hmlKNNHTgipJpmZVSDrVoNaq9w5HGog9RSjF8IdNR3h4UIZ4y10xp4ZR/cVNVQ3q51iqCYM1YmEYW+olW010PKvVlHzJ3lO4GtUY61EMOdQwjqpOZS2nd1Ig+Mb1OUNl8fktJRrro0mF4kuUjr6R6U74NiUfdl11C6SB4+POsk2DzJm1mBPWtB2e4cltspUPdVVZg2bKmcZgoCkAkAiS0iZEaaosfJ0jszTWOKlJVa7RLjvEA75V9y3oP5m5n8vjWfE5jrzn6fkPlTrjN1HcuqhRqWYZu+x95oJO50ERzNKLjhFEDU9evL9+VWhjcds48/kxnBQh0tv8Adhlr3vIAep1qrEv72nLX0NeYe5oT1NWFMxYdav2jh9g+GeHy9aninKsAYP78KADkXJ6Gi7zZnFBPQzWwz7eBppMdfhT7gXaY2bWQn7xO3UCefWax2OsMo9qRAJhdtY026f7V5gCMstuST+X5UrnYVGjqmFveMUyS541nMNio0bemdm+ImvIs9KSHeBbvr/d/iaZ+0rO4TFDOvr9DTFsTXb43+rOHyNSQwt3dTUi3USDS/D3t/OiHu+oroOclacK5H3TqPPnV2eR40GzDc8tqjdukQRtRMEF5PRh86hcIfTZhtQl29mE8xXiYkN72hGxrGCGbMIOjDY1WrBxlbcfuaoe4dwa9uPmhtjzrGLbdyO43LbwqwkEQaoZ1OvMVEPWMTYxpQOLvQKuvXKSYvES2+1YIk7aKPsjtAzF015xnE0u7DYpbgNhgTlBYeRoztm//API+n3k/zG5rMdj8W1m410LmUDKw5kHUx5Uk1ZXG2b3FcGdBK95fmKAy8jWv4TxG3fQPbcMOY5jwIr3GcLS5rGVuo/MVyZPG9xOqOetSMDjuGI4JiD1FZfiXDnt7jTka6HxDh729xpyI2oDE2gyQRI6VKOaeN1IpLHGauJiAue14rXnD8PmYeANP8TwMp37eoOhWqMFhgoZoI1AAP76A/Gu37kZRuJPxsMnmUWiq5b2GupAjzNfcJZ7lxwbkB2YvrqwzEkHr5T50QAA4PST8AT+Ve3uF5DmRGSCJaSwOkljHukztpHnU8cqls9Hz8LnUY/wG8Qw4RihgxGvmJGnWKy925mcRtv6Db4micczEGSdWIHluT5k/veh8DhmcwoJLGBHQbfrXVzs8aWF43xfYSh0Uc6Z4bDszd1STygUTY4H3gXMRHdX8z+lbHC2UVQEUKPD8zzqMvKjHUdsKwN7low57OuXl2Cydhqf0HzpvgOEWkhsuYjm3e+W3ypribJYwJJnQDf4V9xLCXLeGvXmGTKjEToc0QsDcEsR0rkc8mR0v6OjjCEbOdcexpv3gi+6hyz/MT3vhEelWZD91RA0+FLMMoWImdIjU0xfiOTu6LHLQx5nrXo44qKo5JttnRcFwZ3t23zqGZAzAjYkTAPrU24XfBgMpHWT9KdWbogDwFRuXOlQ+xB+g/fn8iaxbuW3l10jQjUUaMYOtXs9VXsIjbjXqNKeMOKpE5Tc3bCcFiZB8/wAqKV+Y26VntbRgNmB66EV8eI+NNddi0aJ8WNqrtYncHY0hGOner0xQNbkbiM30O9VM1C+361W2KHWtZqDfaxUDeoBsWOtUvjBQ5BoafaBUxigKRfaydqIRSdSaZMHQXful9AYHWo4fCKNWNfW1J0FFBIgHU9OVMkBmZ7e64J8qwua3694VzXh+JKEkeE10z+IVwfY3G5zp6d8VyzDkE+YpZdlYdGi4fxEq+e05tv4HQ+BHOt5wftoDCYlch/8AkHunz6VylU1o7DcRIGVu8PGkVovcZKnp/J3L2iOkgq6kbjUGk/E+B93Nb1B3Xp5VgOCcXuWWzWGledtj3T1joa6P2f7RWcSsI0P95DuD4dRSShGapm/LG9MzyKQCCNRyNIsRczSfEn8h8h866F2lwqexe7EMqEyNJIEAepIrnQXSOmnwqEMLhJ2et9PanJy+BdjLxTMQYOUgHoWhZHjBNfcM7RvZtPbQTmEKfwz7x8a9x+FLqQBqRoJjUba9JpenCbw+6PMugH1k+gNXjSI+fGcs3T/Yb2LXtwoELOadJju6x8PnWl4fgUt5Qo1gkk7n9PKkfCLQQoCZMiY/mOU+neFdA4bwUsA7govwY+nL1rnyKcnxj0SzLi0590I0tM7wqljOwE1qeG8GP3zH8o1Pqdh6UWuFVJCKFGm3PxJ50ux/a3DWSVz53H3LesHozbL9fCq4vHUdy2ck8rlqI/TDomiIADvG/qdz61hv4mcdtJhnw6MHuOUVgpnIocMSxH3u7AG+s8qQ9qO2Nx9Hc2xys2jDGdszbgefoKxHEMUxUKwCyc2QfdABjMdyxkk+Q21ro0tIlxa3LsssAzAHeyzHxIn0n5UVbAQRlBO5JJmTvypNavnOGJJM06zeBPjNFMVo6Zh8TKg9QDV+FxUFgTE86z/CsSWtiRt3fht8oo4HMdaEXasWceMmhniHEwDNV/aoqvCWwvOfOiXCmmEEt9yzE0JiWYDQU/uWlPKvFsp+EVqMZEu/U14Lzj7xrWtgrZ+4Ki3DUPKKHENmXGIu/iNeq1w8zWmHDE8akMAo5UOJuRm1tOd2NXphjzJp79kH4atTBrzWiooFi7CWI1+FHqtE+zA5V4zAcqYxG3pzivs5bRRA/F+lTS1Oregq+QKxjK9vLIXBPJ+/b/zFcptwpmdBXWP4guTgn00z2/8AIVzrs3whsVibdtVJBYFz+FFILk+mnmR1pZdlY9HpQgwQQeh0NDDc0+7U3lfG4gqAFW4UEbdwBD81NZ121NKMXB42NTsYhkYOjFWGoIMEUJNWo2lFGNlZ7V38RZ9jcymCpL7EhdQCNtwNfCvFNJeDLCk/v96U3DVKTtn0H06Cjiv5PWbwqaOKiKqdKU9AJwd7Jftsdg6n/Syt+VdA492yw+GlC3tH17iQSP622X6+FcquXDnUT+L/ABNI3Opp4Ps8D6nTyJmu4j2nxGNZgbnsrIAzIhKgAkDvtu3PoDG1Z8YkrorKi9VlmPrpFD28XFo2wCMzAsdIIXVeUzt4b9aHqlWcCnSpFxvKvuDvHd21YzuZ5UBcfWT8ev71o7BYJ7zpbQSzsqDoCxiT4Dc+VaX+JeAt2Gw1i0DltYcAmNSXdpLHqSCf7qzF7MdhrbMwCiTWgt4ZiN1HKNOWlJMA+VgZjl03pvZxWm4plQrsecOxmRoPunfw8a01i4sTMzWPdK+s4x7W2q9OnlXJiyVpnXnw8vyRtM/SvlxVIMLxZW2MGjftQO49RXUpJnC4Ndjf2018t2lIvjrVqXTy18q1gobLcqS3KUjGEbiaut4tG0zZT0OlawUMw9SDUEc3mK9S/RswwWpZqCF6vfb1jBpNeCKE9vXv2gdaxgmalHWgXxXSq/aM3OF5mtZhT/EC8Dg3A179uT/cNBTb+H3B1w2FW42UPdUO7bZUAzKubwGp86z/AG0uD7K0DuhrfrDitZiLLPgEw9tQTcsonePuqUAZo5kCYFCRWPRxrE3ZZ3BnO7tPXMxP50BRN4EAqdwSD5gwaGpUOz2pEbGozUk12+FEA/4asIPH9/rR60JhhCqPAfPX86KU1Bn03jLjjiizLXhY1IVEisdFi7Ejvg9Fc/8Aif1pFdNPOImAx55Qv+phP0pCwLEAU8Oj5/6g/wBWiVlauVKkFA0FMOHYUsw05iqnAbzsBwtLYN9xJHdWNSpKgsxHUggAbxPWsp/FO4GxsqDl9lbGxHNzqCPP4V1Ls3w02UYMO+75j5AKFA8hp5zSn+JHCEu4ZrzrL2QCGG+VmAYHwE5t+VKE4iik7VL2bdD8KKw6blBPLWve/wBD8KKQDX4zBunv23X+pWX6igzX6FxFkMsHY70oxXZnDOwm0NZnQeHhXCls7V5F9o4W9gb7eVQW867P8Zrs+J7GYTX/AKfwMfSKXXew2G9nmBuA67Mp+qmq1KKtMXlCemjl6cRfmVPrVi41twCD1BFMuJ8LtqTEnzj9KVLhU/CKH3GFYYsLTjNwe8uceIE/EVb/AOrIdHst6H8qXtYXpX3sR4/E0fusz8eI1s8aCe47r/K6ll+O4oy32pQ6XLYP8yGfkYNZ9RV/sx0rfdYP8RP2aW1xLCP7t3IejafWrzhydUdHH8rCsgbYI1AoR0CnugD5fSis9+hJeLXTNo6XF3RvhUBdbofhWctYu4vu3HHkxq/hnafEM2VmUjxXXeqKdkMmLiP1vv8AhPwoqzYd9xAqOG4k53C/D/erHxz+A8QNaoiFCrtxhwmDYT3i9vTwzjlWz7Ph1w9gOsEW0EEzBgaHqayvEbCu9i0R3XvWs/Vu9Op863F1ANgBry0+lZlY9HHP4icPFnGPAAW4A+m0tIb5ifWsjXQ/4oIC1onfK/8Aktc8rDHwFXYZMzqOpAqo0Vwz3/7X/wATQfQ8Fckh4h58uXlyq9TQ2Gq1N6ifSw1FBCP1q3xFDGpAxtWKWLuKa5v7P8jSlGyjxNN+I7t5J9Wpbh0BOtUj0fP+c/1mXYa0TW17G8Pz3lMdxO8x5eA9f1rMYdBNdb7KWFTCWyo1fVp5mac4x4GiIWst/EfGvbwN0rpnKoTEwrmG35xI9a0z1nu3VsPgMRm5ZSPMXFIrAOFWbpWQNjv9Ku+2HoKmbYnbl+lVqtbo3Z//2Q=="
                height={420}
                className="d-block w-50"
                alt="..."
              />
            </div>
            <div className="carousel-item d-flex justify-content-center">
              <img
                src="data:image/jpeg;base64,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"
                height={420}
                className="d-block w-50"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="alert alert-info">
          {store.message ||
            "Loading message from the backend (make sure your python backend is running)..."}
        </div>
        <p>
          This boilerplate comes with lots of documentation:{" "}
          <a href="https://start.4geeksacademy.com/starters/react-flask">
            Read documentation
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};
