import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrowComponent, ARROW_DIRECTIONS } from './arrow.component';

describe('ArrowComponent', () => {
  let component: ArrowComponent;
  let fixture: ComponentFixture<ArrowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('up', () => {
    component.pxLeftFrom = 50;
    component.pxLeftTo = 50;
    component.pxTopFrom = 200;
    component.pxTopTo = 100;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('100px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('50px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('100px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('50px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('100px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('100px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('left');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.UP);
  });

  it('up right', () => {
    component.pxLeftFrom = 50;
    component.pxLeftTo = 100;
    component.pxTopFrom = 100;
    component.pxTopTo = 200;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('50px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('100px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('150px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('100px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('200px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('100px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('50px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('50px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('100px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('100px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('right');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.LEFT);
  });

  it('right', () => {
    component.pxLeftFrom = 50;
    component.pxLeftTo = 200;
    component.pxTopFrom = 100;
    component.pxTopTo = 100;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('50px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('150px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('0px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('50px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('150px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('20px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('center');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.RIGHT);
  });

  it('right down', () => {
    component.pxLeftFrom = 50;
    component.pxLeftTo = 200;
    component.pxTopFrom = 100;
    component.pxTopTo =200;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('50px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('200px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('100px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('250px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('100px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('200px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('200px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('50px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('50px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('200px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('100px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('right');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.LEFT);
  });

  it('down', () => {
    component.pxLeftFrom = 50;
    component.pxLeftTo = 50;
    component.pxTopFrom = 100;
    component.pxTopTo = 200;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('100px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('50px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('100px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('50px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('100px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('100px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('left');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.DOWN);
  });

  it('down left', () => {
    component.pxLeftFrom = 100;
    component.pxLeftTo = 50;
    component.pxTopFrom = 100;
    component.pxTopTo = 200;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('100px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('100px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('200px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('50px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('0px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('100px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('100px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('left');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.RIGHT);
  });

  it('left', () => {
    component.pxLeftFrom = 200;
    component.pxLeftTo = 50;
    component.pxTopFrom = 100;
    component.pxTopTo = 100;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('50px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('150px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('0px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('50px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('150px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('20px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('center');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.LEFT);
  });

  it('left up', () => {
    component.pxLeftFrom = 200;
    component.pxLeftTo = 50;
    component.pxTopFrom = 200;
    component.pxTopTo = 100;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('100px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('50px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('2px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('100px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('2px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('100px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('200px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('200px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('2px');

    expect(component.textValues.top).withContext('Top texto').toEqual('100px');
    expect(component.textValues.left).withContext('Left texto').toEqual('0px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('200px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('100px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('left');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.RIGHT);
  });

  it('no arrow', () => {
    component.pxLeftFrom = 0;
    component.pxLeftTo = 0;
    component.pxTopFrom = 0;
    component.pxTopTo = 0;

    component.calculateDimensions();

    expect(component.lineOneValues.top).withContext('Top flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.left).withContext('Left flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.width).withContext('Width flecha horizontal inicio').toEqual('0px');
    expect(component.lineOneValues.height).withContext('Height flecha horizontal inicio').toEqual('0px');

    expect(component.lineTwoValues.top).withContext('Top flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.left).withContext('Left flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.width).withContext('Width flecha vertical media').toEqual('0px');
    expect(component.lineTwoValues.height).withContext('Height flecha vertical media').toEqual('0px');

    expect(component.lineThreeValues.top).withContext('Top flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.left).withContext('Left flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.width).withContext('Width flecha horizontal fin').toEqual('0px');
    expect(component.lineThreeValues.height).withContext('Height flecha horizontal fin').toEqual('0px');

    expect(component.textValues.top).withContext('Top texto').toEqual('0px');
    expect(component.textValues.left).withContext('Left texto').toEqual('0px');
    expect(component.textValues.minWidth).withContext('Min width texto').toEqual('0px');
    expect(component.textValues.minHeight).withContext('Min height texto').toEqual('0px');
    expect(component.textValues.textAlign).withContext('Alineación texto').toEqual('center');

    expect(component.arrowDirection).withContext('Punta de flecha').toEqual(ARROW_DIRECTIONS.HIDDEN);
  });
});
