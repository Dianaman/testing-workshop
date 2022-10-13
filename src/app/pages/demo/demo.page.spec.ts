import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ConversionService } from 'src/app/services/conversion.service';

import { DemoPage } from './demo.page';

describe('DemoPage', () => {
  let component: DemoPage;
  let fixture: ComponentFixture<DemoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, PipesModule, FormsModule, ReactiveFormsModule],
      providers: [ConversionService]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoPage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe invocar al servicio de conversión en el OnInit', () => {
    let method = spyOn(component, 'loadList').and.callThrough();
    fixture.detectChanges();
    expect(method).toHaveBeenCalled();
  });
});
