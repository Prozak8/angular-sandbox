import { 
  Directive, 
  OnInit, 
  HostBinding, 
  ElementRef, 
  HostListener, 
  Renderer2,
  Input} from '@angular/core';

@Directive({
  selector: '[imageOnOff]'
})
export class DirectiveTrainingDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('imageOnOff') highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.nativeElement, 'background-color', 'blue', false, false);
    this.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = 'transparent';
  }
}
