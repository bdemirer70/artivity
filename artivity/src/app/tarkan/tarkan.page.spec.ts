import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarkanPage } from './tarkan.page';

describe('TarkanPage', () => {
  let component: TarkanPage;
  let fixture: ComponentFixture<TarkanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarkanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarkanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
