import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { TddPage } from './tdd.page';

describe('TddPage', () => {
  let component: TddPage;
  let fixture: ComponentFixture<TddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TddPage ],
      imports: [
        IonicModule.forRoot(),
        ComponentsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
