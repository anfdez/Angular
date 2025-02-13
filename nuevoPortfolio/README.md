
# Portfolio con Angular

EEEE



## Authors

- [@anfdez](https://www.github.com/anfdez)


## Instalación de Angular

Instalación de Angular CLI

        npm install -g @angular/cli

Para verificar que se instaló correctamente, ejecuta:

        ng version
    
## Creación del proyecto

Para crear el proyecto se ha utilizado el siguiente comando:

        ng new nuevPortfolio --standalone false

Para crear componentes tenemos dos opciónes, primero su versión normal, segundo su versión corta:

        ng generate component home
        ng g c home

Esto generará una carpeta con los siguientes archivos dentro de src/app:

        home.component.ts
        home.component.html
        home.component.css
        home.component.spec.ts

Para crear los componentes dentro de una carpeta específica:

        ng g c components/share/navbar

Aquí hemos creado además una carpeta llamada "share", es decir, el navbar está presente en todas las páginas. 

Para comprobar que todo se ha realizado correctamente, desde la cmd introducimos el siguiente comando:

        ng serve
        ng serve -o


## Estructura del proyecto

El proyecto contiene tres partes: 

* home
* about (contacto)
* projects (proyectos)

### Home

Página principal en la cual podemos observar los siguientes aspectos: 
-  Sobre mí
-  Software Skills
-  Idiomas
-  Formación
-  Experiencia laboral

