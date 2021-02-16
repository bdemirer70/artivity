import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BalleyPage } from './balley.page';

describe('BalleyPage', () => {
  let component: BalleyPage;
  let fixture: ComponentFixture<BalleyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalleyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BalleyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
