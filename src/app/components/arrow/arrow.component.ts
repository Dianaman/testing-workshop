import { Component, Input } from '@angular/core';

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

export class TextValues {
  top: string;
  left: string;
  minWidth: string;
  minHeight: string;
  textAlign: string;
}

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent {
  private _pxTopFrom: number;
  @Input() set pxTopFrom(px: number) {
    this._pxTopFrom = px;
    this.calculateDimensions();
  } get pxTopFrom(): number {
    return this._pxTopFrom;
  }

  private _pxLeftFrom: number;
  @Input() set pxLeftFrom(px: number) {
    this._pxLeftFrom = px;
    this.calculateDimensions();
  } get pxLeftFrom(): number {
    return this._pxLeftFrom;
  }

  private _pxTopTo: number;
  @Input() set pxTopTo(px: number) {
    this._pxTopTo = px;
    this.calculateDimensions();
  } get pxTopTo(): number {
    return this._pxTopTo;
  }

  private _pxLeftTo: number;
  @Input() set pxLeftTo(px: number) {
    this._pxLeftTo = px;
    this.calculateDimensions();
  } get pxLeftTo(): number {
    return this._pxLeftTo;
  }

  @Input() public texto: string;

  public lineOneValues: LineValues;
  public lineTwoValues: LineValues;
  public lineThreeValues: LineValues;
  public arrowDirection: ARROW_DIRECTIONS = ARROW_DIRECTIONS.HIDDEN;
  public textValues: TextValues;

  public readonly pxReturn: number = 50;

  constructor() { }

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
        this.textValues = {
          top: this.lineOneValues.top,
          left: this.lineOneValues.left,
          minWidth: this.lineThreeValues.width,
          minHeight: this.lineTwoValues.height,
          textAlign: 'left'
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
        this.textValues = {
          top: this.lineTwoValues.top,
          left: this.lineTwoValues.left,
          minWidth: '100px',
          minHeight: this.lineTwoValues.height,
          textAlign: 'left'
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
        this.textValues = {
          top: this.lineOneValues.top,
          left: this.lineThreeValues.left,
          minWidth: this.lineThreeValues.width,
          minHeight: this.lineTwoValues.height,
          textAlign: 'right'
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
        this.textValues = {
          top: this.lineOneValues.top,
          left: this.lineOneValues.left,
          minWidth: this.lineOneValues.width,
          minHeight: '20px',
          textAlign: 'center'
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
        this.textValues = {
          top: this.lineOneValues.top,
          left: this.lineOneValues.left,
          minWidth: this.lineOneValues.width,
          minHeight: this.lineTwoValues.height,
          textAlign: 'center'
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
        this.textValues = {
          top: this.lineOneValues.top,
          left: this.lineOneValues.left,
          minWidth: this.lineOneValues.width,
          minHeight: '20px',
          textAlign: 'center'
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
        this.textValues = {
          top: this.lineTwoValues.top,
          left: this.lineTwoValues.left,
          minWidth: this.lineOneValues.width,
          minHeight: this.lineTwoValues.height,
          textAlign: 'left'
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
        this.textValues = {
          top: this.lineTwoValues.top,
          left: this.lineTwoValues.left,
          minWidth: '100px',
          minHeight: this.lineTwoValues.height,
          textAlign: 'left'
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
        this.textValues = {
          top: this.lineOneValues.top,
          left: this.lineOneValues.left,
          minWidth: this.lineOneValues.width,
          minHeight: this.lineTwoValues.height,
          textAlign: 'right'
        }
        this.arrowDirection = ARROW_DIRECTIONS.LEFT;
      }
    }
  }
}
