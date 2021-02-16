import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BalePage } from './bale.page';

describe('BalePage', () => {
  let component: BalePage;
  let fixture: ComponentFixture<BalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
