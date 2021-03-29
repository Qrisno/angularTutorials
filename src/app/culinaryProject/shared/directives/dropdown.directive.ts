import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  clicked = false;
  @HostBinding('class') className!: string;
  @HostListener('click') onClick(): void {
    this.clicked = !this.clicked;
    this.clicked ? this.className = 'open' : this.className = '';
  }
  constructor() { }

}
