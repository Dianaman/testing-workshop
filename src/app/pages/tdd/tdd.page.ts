import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DiamondComponent } from 'src/app/components/diamond/diamond.component';
import { Rects } from 'src/app/models/rects';

@Component({
  selector: 'app-tdd',
  templateUrl: './tdd.page.html',
  styleUrls: ['./tdd.page.scss'],
})
export class TddPage implements AfterViewInit {
  @ViewChild('escribirTest') public escribirTestDiv: ElementRef;
  public escribirTestRects: Rects;

  @ViewChild('probarFalla') public probarFallaDiv: ElementRef;
  public probarFallaRects: Rects;

  @ViewChild('desarrollarCodigo') public desarrollarCodigoDiv: ElementRef;
  public desarrollarCodigoRects: Rects;

  @ViewChild('probarExito') public probarExitoDiv: ElementRef;
  public probarExitoRects: Rects;

  @ViewChild('refactorizar') public refactorizarDiv: ElementRef;
  public refactorizarRects: Rects;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.dimensionesCargadas = false;
    this.initRects();
  }

  public dimensionesCargadas: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.initRects();
  }

  public initRects(): void {
    setTimeout(() => {
      if (this.escribirTestDiv) this.escribirTestRects = new Rects(this.escribirTestDiv);
      if (this.probarFallaDiv) this.probarFallaRects = new Rects(this.probarFallaDiv);
      if (this.desarrollarCodigoDiv) this.desarrollarCodigoRects = new Rects(this.desarrollarCodigoDiv);
      if (this.probarExitoDiv) this.probarExitoRects = new Rects(this.probarExitoDiv);
      if (this.refactorizarDiv) this.refactorizarRects = new Rects(this.refactorizarDiv);

      this.dimensionesCargadas = true;
    }, 1000);    
  }

}
