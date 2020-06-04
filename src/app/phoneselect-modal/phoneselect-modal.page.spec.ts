import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhoneselectModalPage } from './phoneselect-modal.page';

describe('PhoneselectModalPage', () => {
  let component: PhoneselectModalPage;
  let fixture: ComponentFixture<PhoneselectModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneselectModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneselectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
