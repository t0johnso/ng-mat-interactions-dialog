import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>,
  app:AppComponent,
  appNativeElement: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    appNativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-mat-tester'`, () => {
    expect(app.title).toEqual('Angular Material Interactions Dialog');
  });

  it('should render title in a h1 tag', () => {
    expect(appNativeElement.querySelector('h1').textContent).toContain('Welcome to Angular Material Interactions Dialog!');
  });

  it('alert, prompt, and confirm buttons should exist', () => {
    expect(appNativeElement.querySelector('button[name="alert"]')).toBeTruthy();
    expect(appNativeElement.querySelector('button[name="prompt"]')).toBeTruthy();
    expect(appNativeElement.querySelector('button[name="confirm"]')).toBeTruthy();
  });

});
