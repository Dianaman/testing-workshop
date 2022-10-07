import { Component, Input, OnInit } from '@angular/core';

export enum ARROW_DIRECTIONS {
  UP = 'up',
  RIGHT = 'right',
  DOWN = 'down',
  LEFT = 'left',
  HIDDEN = 'hidden',
}

export class LineValues {
  top: string;
  left: string;
  width: string;
  height: string;
}

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent implements OnInit {
  @Input() public pxTopFrom: number;
  @Input() public pxLeftFrom: number;
  @Input() public pxTopTo: number;
  @Input() public pxLeftTo: number;

  public lineOneValues: LineValues;
  public lineTwoValues: LineValues;
  public lineThreeValues: LineValues;
  public arrowDirection: ARROW_DIRECTIONS = ARROW_DIRECTIONS.HIDDEN;

  public readonly pxReturn: number = 50;

  constructor() { }

  ngOnInit() {
    this.calculateDimensions();
  }

  public calculateDimensions(): void {
    const verticalDiff = this.pxTopTo - this.pxTopFrom;
    const horizontalDiff = this.pxLeftTo - this.pxLeftFrom;

    if (verticalDiff < 0) {
      if (horizontalDiff < 0) { // ARRIBA A LA IZQUIERDA
        this.lineOneValues = {
          top: this.pxTopTo + 'px',
          left: this.pxLeftTo - this.pxReturn + 'px',
          width: this.pxReturn + 'px',
          height: 2 + 'px'
        };
        this.lineTwoValues = {
          top: this.pxTopTo + 'px',
          left: this.pxLeftTo - this.pxReturn + 'px',
          width: 2 + 'px',
          height: verticalDiff * (-1) + 'px',
        };
        this.lineThreeValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftTo - this.pxReturn + 'px',
          width: horizontalDiff * (-1) + this.pxReturn + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.RIGHT;
      } else if (horizontalDiff === 0) { // SÓLO ARRIBA
        this.lineOneValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 0 + 'px',
          height: 2 + 'px'
        };
        this.lineTwoValues = {
          top: this.pxTopTo + 'px',
          left: this.pxLeftTo + 'px',
          width: 2 + 'px',
          height: verticalDiff * (-1) + 'px',
        };
        this.lineThreeValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 0 + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.UP;
      } else { // ARRIBA A LA DERECHA
        this.lineOneValues = {
          top: this.pxTopTo + 'px',
          left: this.pxLeftTo + 'px',
          width: this.pxReturn + 'px',
          height: 2 + 'px',
        };
        this.lineTwoValues = {
          top: this.pxTopTo + 'px',
          left: this.pxLeftTo + this.pxReturn + 'px',
          width: 2 + 'px',
          height: verticalDiff * (-1) + 'px',
        };
        this.lineThreeValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftFrom + 'px',
          width: horizontalDiff + this.pxReturn + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.LEFT;
      }
    } else if (verticalDiff === 0) {
      if (horizontalDiff < 0) { // SÓLO A LA IZQUIERDA
        this.lineOneValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftTo + 'px',
          width: horizontalDiff * (-1) + 'px',
          height: 2 + 'px'
        };
        this.lineTwoValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 2 + 'px',
          height: 0 + 'px',
        };
        this.lineThreeValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 0 + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.LEFT;
      } else if (horizontalDiff === 0) { // MISMO LUGAR
        this.lineOneValues = {
          top: '0px',
          left: '0px',
          width: '0px',
          height: '0px'
        };
        this.lineTwoValues = {
          top: '0px',
          left: '0px',
          width: '0px',
          height: '0px',
        };
        this.lineThreeValues = {
          top: '0px',
          left: '0px',
          width: '0px',
          height: '0px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.HIDDEN;
      } else { // SÓLO A LA DERECHA
        this.lineOneValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftFrom + 'px',
          width: horizontalDiff + 'px',
          height: 2 + 'px'
        };
        this.lineTwoValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 2 + 'px',
          height: 0 + 'px',
        };
        this.lineThreeValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 0 + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.RIGHT;
      }
    } else {
      if (horizontalDiff < 0) { // ABAJO A LA IZQUIERDA
        this.lineOneValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftTo - this.pxReturn + 'px',
          width: horizontalDiff * (-1) + this.pxReturn + 'px',
          height: 2 + 'px'
        };
        this.lineTwoValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftTo - this.pxReturn + 'px',
          width: 2 + 'px',
          height: verticalDiff + 'px',
        };
        this.lineThreeValues = {
          top: this.pxTopTo + 'px',
          left: this.pxLeftTo - this.pxReturn + 'px',
          width: this.pxReturn + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.RIGHT;
      } else if (horizontalDiff === 0) { // SÓLO ABAJO
        this.lineOneValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 0 + 'px',
          height: 2 + 'px'
        };
        this.lineTwoValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftFrom + 'px',
          width: 2 + 'px',
          height: verticalDiff + 'px',
        };
        this.lineThreeValues = {
          top: 0 + 'px',
          left: 0 + 'px',
          width: 0 + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.DOWN;
      } else { // ABAJO A LA DERECHA
        this.lineOneValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftFrom + 'px',
          width: horizontalDiff + this.pxReturn + 'px',
          height: 2 + 'px'
        };
        this.lineTwoValues = {
          top: this.pxTopFrom + 'px',
          left: this.pxLeftTo + this.pxReturn + 'px',
          width: 2 + 'px',
          height: verticalDiff + 'px',
        };
        this.lineThreeValues = {
          top: this.pxTopTo + 'px',
          left: this.pxLeftTo + 'px',
          width: this.pxReturn + 'px',
          height: 2 + 'px'
        }
        this.arrowDirection = ARROW_DIRECTIONS.LEFT;
      }
    }
  }
}
