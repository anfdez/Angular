
# Portfolio con Angular

En este proyecto se ha desarrollado un Portfolio con Angular. En el cual se han utilizado otros lenguajes como TypeScript, HTML, CSS y JavaScript. 


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

### Contacto

En el componente about, hemos alojado la página  de contacto en el cual se dan varias opciones, a gusto del reclutador o cliente:

- Email
- Número de teléfono
- Formulario de contacto, en el cual puede dejar sus datos y un mensaje. 

### Proyectos

En el componente projects, hemos alojado la página de proyectos. Aquí se visualizan mediante cards de Bootstrap, los distintos proyectos desarrollados, que más adelante se irán incorporando a esta página. 

## Configuración de las Rutas

Vamos a explicar de forma simple, como se han configurado las rutas de los componentes, para que una vez tengamos todos los componentes(páginas) preparadas, puedas navegar entre ellas mediante el navbar. Lo primero que debemos hacer es diriginos al nivel de `app/`, en el vamos a crear un nuevo archivo llamado `app.routes.ts`. Una vez hemos estos pasos, debemos hacer lo siguiente:

#### 1. Importamos las rutas

        import { AppRoutingModule } from "./app-routing.module";
        import { RouterModule, Routes } from '@angular/router';
        import { HomeComponent } from "./components/home/home.component";
        import { AboutComponent } from "./components/about/about.component";
        import { ProjectsComponent } from "./components/projects/projects.component";

Aqui configuramos el sistema de enrutamiento de la app. Importamos los módulos necesarios para definir rutas `(RouterModule y Routes)` y especificamos los tres componentes: `HomeComponent, AboutComponent y ProjectsComponent.` Además, el `AppRoutingModule` contiene la definición de esas rutas y se encarga de integrarlas en la aplicación principal.

#### 2.  Definición de las rutas

        const APP_ROUTES: Routes = [
            { path: 'home', component: HomeComponent},
            { path: 'about', component: AboutComponent},
            { path: 'projects', component: ProjectsComponent},
            { path: '**', pathMatch: 'full', redirectTo:'home'}
        ]

Aquí definimos el sistema de rutas.. Se crean tres rutas principales: `home, about y projects`, que cargan sus respectivos componentes cuando se navega a esas direcciones. Además, incluye una ruta comodín (**) que captura cualquier URL no definida y redirige automáticamente a la página de inicio (home). 

#### 3. Exportamos

            export const app_routing = RouterModule.forRoot(APP_ROUTES)

Ahora exportamos la constante `app_routing`, que configura el enrutamiento principal de la aplicación. Utilizamos el método RouterModule.forRoot(APP_ROUTES) para indicar que estas rutas son las principales (a diferencia de rutas secundarias o "hijas"). Esto permite que la aplicación maneje la navegación entre las diferentes vistas definidas en APP_ROUTES. Al exportarla, se puede importar fácilmente en el módulo principal para activar el sistema de rutas.

#### 4. Comprobación en AppModule.ts

Ahora, en el archivo AppModule, debemos añadir un `import`nuevo, si no se han realizado automáticamente:

                        import { app_routing } from './app.routes';

Con este `import`, impeortamos la constante `app_routing` desde el archivo `app.routes.ts.` En Angular, esta constante suele contener la configuración de las rutas de la aplicación, que se define con el método `RouterModule.forRoot()` (como vimos antes). Al importar `app_routing`, estamos trayendo la configuración de las rutas definidas en el archivo `app.routes.ts` para poder usarlas en el módulo principal, normalmente en app.module.ts. Esto permite que las rutas de la aplicación se gestionen correctamente y se vinculen a las vistas correspondientes.

También, más abajo, en `imports`, debemos añadir las lineas de AppRoutingModule y app_routing:

        imports: [
            BrowserModule,
            AppRoutingModule,
            app_routing
        ],



## Authors

- [@anfdez](https://www.github.com/anfdez)


## FAQ

Aquí añadimos tres posibles errores que pueden ocurrir a la hora de trabajar con Angular:

####  ¿Por qué mi Navbar no funciona correctamente con las rutas definidas?

Puede ser que no hayas agregado correctamente las rutas en el archivo app-routing.module.ts o que falte la directiva `<router-outlet>` en el componente principal (generalmente app.component.html). Asegúrate de que en el archivo `app.component.html` esté presente `<router-outlet></router-outlet>` para que las rutas se rendericen correctamente. Además, revisa que las rutas en el Navbar estén usando el routerLink correcto, como `<a routerLink="/home">Home</a>.`

#### ¿Por qué no se visualizan las imágenes en mi aplicación?

Si tienes las imágenes en la carpeta `Public`, asegúrate de que las rutas sean correctas y estén bien referenciadas en tu `HTML o CSS`. En Angular, los archivos estáticos generalmente se sirven desde la carpeta `src/assets`, pero si estás utilizando la carpeta `Public`, asegúrate de que la configuración de tu servidor esté sirviendo correctamente esa carpeta. Puedes intentar hacer referencia a las imágenes con una ruta como `/Public/images/my-image.jpg`. Verifica también los permisos de acceso y asegúrate de que el navegador no esté bloqueando las solicitudes de imágenes.

#### ¿Por qué mi aplicación Angular no carga o muestra errores al arrancar en el AppModule?

Esto podría deberse a un error en la configuración de los módulos en el archivo `app.module.ts.` Asegúrate de que todos los módulos necesarios estén importados correctamente, como `BrowserModule` para aplicaciones web, y que el `bRouterModule` esté configurado con las rutas adecuadas si estás utilizando enrutamiento. También verifica que el componente principal `AppComponent` esté declarado y exportado correctamente. Si hay algún error en los imports o declaraciones, la aplicación no podrá arrancar correctamente.
