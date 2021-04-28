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
