import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheatrePage } from './theatre.page';

describe('TheatrePage', () => {
  let component: TheatrePage;
  let fixture: ComponentFixture<TheatrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheatrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
