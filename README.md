Project for the unit test course

# BookListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# angular-karma-jasmine-test-101





Unit test – integration test- e2e

Service – simular

Just test only that method or function

Clase – metodo

TDD – 

Todo esta definido – codigo y prueba, tdd(dificil, cambie poco)

Muchos cambios(clientes no sabe o pide cambios , mejoras) – codigo y unit test final, no tal al final

Code Coverage – ha sido probado – testeado  - lineas etc , clase , etc.   80% arriba. No merece la pena o no podemos probar… 60 a 80 %

Time consuming 

Si usamos apis- no probar porque ya estan probados

Test unitario  cosas utiles

Probar bien, no solo llenar covertura

Jasmine – javascript. – angular default

KARMA – EJECUTAR NAVEGADOR el jasmine  EN COMANDO – probar diferentes browsers

Coverage folder- you can open the browser index.html
Statement, branches(if and else), functions and lines

-	Agreagr en angular.json en test code coverage true – esto es para el default

ng test 
ng test --no-watch   – se ejecuta sin navegador – mas rapido

Ng test --no-watch   --code-coverage – sin navegador pero genera code coverage reporte

Navegador es para depurar
Code coverage y browser – lo hace mas lento

En package json en scripts puede crear tu propio commando
Para ejecutarlo le pones 
npm run test. -> esto es ng test 


npm install – instalar toda las dependencias necesarias

usa json.server como backend mockeado en json


no importar providers uno por uno, importar el modulo pero el de testing.
No necesitamos hacerlo realmente.   HttpClientTestingModule

Poner servicio en el providers

spyOn - estar atento y saber que el metodo dentro del metod ha sido llamado
unit test - un metodo no debe llamar otro metodo o servicio
3 formas - 
2 formas no tan correctas - 
- ponemos sacar serivicio apartir del component(solamente para servicio public) X. 
     si el servicio es privado -  const service = (component as any)._bookService;    esto ya no trae el metodo del servicio
esto estropeo el tipado
    const service = component["_bookService"];   , este si trae el metodo porque todavia no hace el casting

la mas correcta

Certificate of completion - Angular: Unit test with Jasmine and Karma

const service = fixture.debugElement.injector.get(BookService);   //sacarlo desde el testbed fixture
- se puede declarar global

let service: BookService;
- beforeEach - 
service = fixture.debugElement.injector.get(BookService);

 const spy1 = spyOn(service, 'updateAmountBook').and.callFake( () => null);
      
component.onInputNumberChange(action, book);

expect(spyUpdateAmountBook).toHaveBeenCalled();


Los unit tests no se lanzan en orden - 

- para probar metodos privados, tienes que probar el metodo publico que usa ese metedo privado

para espiar metodo privado -> casting to any el component
const spyClearListCartBook = spyOn((component as any), '_clearListCartBook');

- subscription unit test use of of rxjs

- mock of service - cuando se usan en muchas partes se recomienda hacerlo

const bookServiceMock = {
  getBooks: () => of(listBook)
};


  providers: [
       {
          provide: BookService, useValue:bookServiceMock
        }      ],

- servicio mock para dependencias externa, o servicios que causen mucho problema puedes mockearlo

2 tipos - spyOn or mock the service

fdescribe y fit  - ejecuta solo eso
xdescribe y xfit - anula solo eso, para despues

beforEach,beforeAll - after too

depurar en karma - con google chrome web browser or console log
o poner en el codigo

debugger;
component.getBooks();

usa chrome web con f12

testing pipe - mock


todo los mock se llaman igual pero al final le pone Mock.  bookServiceMock y ReduceTextPipeMock.


-el unit test de los servicios, se mockean

- prueba de integracion - son las iteracciones que se ven en el browser los cambios
