import { CartComponent } from './cart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { By } from '@angular/platform-browser';

const listBook: Book[] = [
    {
        name: '',
        author: '',
        isbn: '',
        price: 15,
        amount: 2
    },
    {
        name: '',
        author: '',
        isbn: '',
        price: 20,
        amount: 1
    },
    {
        name: '',
        author: '',
        isbn: '',
        price: 8,
        amount: 7
    }
];


describe('Cart component', () => {

    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;
    let service: BookService;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [
                CartComponent
            ],
            providers: [
              BookService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach( () => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(BookService);
        spyOn(service, 'getBooksFromCart').and.callFake( () => listBook);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('getTotalPrice returns an amount', () => {
        const totalPrice = component.getTotalPrice(listBook);
        expect(totalPrice).toBeGreaterThan(0);
        expect(totalPrice).not.toBeNull();
        expect(totalPrice).toBe(106);
    });

    it('onInputNumber Change increments correctly', () => {
      const action = "plus";
      const book =   {
        name: '',
        author: '',
        isbn: '',
        price: 15,
        amount: 2
    };

      const spyUpdateAmountBook = spyOn(service, 'updateAmountBook').and.callFake( () => null);
      const spyGetTotalPrice = spyOn(component, 'getTotalPrice').and.callFake(() => null);

      expect(book.amount).toBe(2);

      component.onInputNumberChange(action, book);

      expect(book.amount === 3).toBeTrue();

      expect(spyUpdateAmountBook).toHaveBeenCalled();
      expect(spyGetTotalPrice).toHaveBeenCalled();

    });

    it('onInputNumber Change descrements correctly', () => {
      const action = "minus";
      const book =   {
        name: '',
        author: '',
        isbn: '',
        price: 15,
        amount: 2
    };

      const spyUpdateAmountBook = spyOn(service, 'updateAmountBook').and.callFake( () => null);
      const spyGetTotalPrice = spyOn(component, 'getTotalPrice').and.callFake(() => null);

      expect(book.amount).toBe(2);

      component.onInputNumberChange(action, book);

      expect(book.amount).toBe(1);

      expect(spyUpdateAmountBook).toHaveBeenCalled();
      expect(spyGetTotalPrice).toHaveBeenCalled();

    });

    it('onClearBooks works correctly', () => {
      const spyClearListCartBook = spyOn((component as any), '_clearListCartBook').and.callThrough();
      const spyRemoveBooksFromCart = spyOn(service, 'removeBooksFromCart').and.callFake( () => null);
      component.listCartBook = listBook;
      console.log('before', component.listCartBook.length);
      component.onClearBooks();
      console.log('after',component.listCartBook.length);
      expect(component.listCartBook.length).toBe(0);
      expect(spyClearListCartBook).toHaveBeenCalled();
      expect(spyRemoveBooksFromCart).toHaveBeenCalled();

    });

    it('_clearListCartBook works correctly', () => {

      // esto no es necesario solo la prueba de arriba

      const spyRemoveBoookFromCart = spyOn(service, 'removeBooksFromCart').and.callFake( () => null);
      component.listCartBook = listBook;
      component["_clearListCartBook"]();

      expect(component.listCartBook.length).toBe(0);
      expect(spyRemoveBoookFromCart).toHaveBeenCalled();

    });

    // integration test

    it('the title "The cart is empty" is not displayed when there a list', () => {

      component.listCartBook = listBook;
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement.query(By.css('#titleCartEmpty'));
      expect(debugElement).toBeFalsy();

    });

    it('the title "The cart is empty" is displayed when the list is empty', () => {

      component.listCartBook = [];
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement.query(By.css('#titleCartEmpty'));
      expect(debugElement).toBeTruthy();
      if(debugElement) {
        const element: HTMLElement = debugElement.nativeElement;
        expect(element.innerHTML).toContain("The cart is empty");
      }

    });
});

