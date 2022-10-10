import { ElementRef } from "@angular/core";

export class Rects {
    bottom: number;
    top: number;
    left: number;
    right: number;
    centerHeight: number;
    centerWidth: number;
  
    constructor(el: ElementRef) {
      this.manualConstruct(el);
    }

    manualConstruct(el: ElementRef) {
      this.bottom = this.getBottom(el);
      this.top = this.getTop(el);
      this.left = this.getLeft(el);
      this.right = this.getRight(el);
      this.centerHeight = this.getHeighCenter(el);
      this.centerWidth = this.getWidthCenter(el);
    }
    
    getBottom(el: ElementRef): number {
      return el?.nativeElement?.offsetTop + el?.nativeElement?.offsetHeight;
    }
  
    getTop(el: ElementRef): number {
      return +el?.nativeElement?.offsetTop;
    }
  
    getHeighCenter(el: ElementRef): number {
      return el?.nativeElement?.offsetTop + (el?.nativeElement?.offsetHeight / 2);
    }
  
    getRight(el: ElementRef): number {
      return el?.nativeElement?.offsetLeft + el?.nativeElement?.offsetWidth;
    }
  
    getLeft(el: ElementRef): number {
      return +el?.nativeElement?.offsetLeft;
    }

    getWidthCenter(el: ElementRef): number {
      return el?.nativeElement?.offsetLeft + (el?.nativeElement?.offsetWidth / 2);
    }
  
  }
  