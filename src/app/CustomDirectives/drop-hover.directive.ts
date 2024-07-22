import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropHover]'
})
export class DropHoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }



}
