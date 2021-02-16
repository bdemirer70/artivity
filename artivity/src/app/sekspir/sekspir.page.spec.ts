import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SekspirPage } from './sekspir.page';

describe('SekspirPage', () => {
  let component: SekspirPage;
  let fixture: ComponentFixture<SekspirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekspirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SekspirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
