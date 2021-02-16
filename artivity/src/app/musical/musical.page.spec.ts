import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicalPage } from './musical.page';

describe('MusicalPage', () => {
  let component: MusicalPage;
  let fixture: ComponentFixture<MusicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
