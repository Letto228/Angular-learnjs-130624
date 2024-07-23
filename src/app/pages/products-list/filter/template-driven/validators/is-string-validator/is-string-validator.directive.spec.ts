import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IsStringValidatorDirective} from './is-string-validator.directive';
import {IsStringValidatorModule} from './is-string-validator.module';

describe('IsStringValidatorDirective Izolate', () => {
    let directive: IsStringValidatorDirective;

    beforeEach(() => {
        directive = new IsStringValidatorDirective();
    });

    it('string', () => {
        const error = directive.validate(new FormControl('String'));

        expect(error).toBeNull();
    });

    it('number', () => {
        const error = directive.validate(new FormControl('123'));

        expect(error).toEqual({isString: 'Input value is number'});
    });
});

@Component({
    selector: 'app-test',
    template: `
        <input #input appIsStringValidator [ngModel]="search" />
    `,
})
class TestComponent {
    @ViewChild('input', {static: true, read: NgModel})
    model: NgModel | undefined;

    search = 123;
}

describe('IsStringValidatorDirective Test Bed', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [IsStringValidatorModule, FormsModule],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    // it('number', fakeAsync(() => {
    //     fixture.detectChanges();

    //     // tick(100);
    //     flush();

    //     const error = component.model?.errors;

    //     expect(error).toEqual({isString: 'Input value is number'});
    // }));

    it('number', async () => {
        fixture.detectChanges();

        await fixture.whenStable();

        const error = component.model?.errors;

        expect(error).toEqual({isString: 'Input value is number'});
    });
});
