import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { ConceptosPage } from './conceptos.page';

describe('ConceptosPage', () => {
  let component: ConceptosPage;
  let fixture: ComponentFixture<ConceptosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptosPage ],
      imports: [
        IonicModule.forRoot(),
        SwiperModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
