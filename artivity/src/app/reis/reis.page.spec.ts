import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReisPage } from './reis.page';

describe('ReisPage', () => {
  let component: ReisPage;
  let fixture: ComponentFixture<ReisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
