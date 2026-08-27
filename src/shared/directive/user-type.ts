import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUserType]',
  standalone: true
})
export class UserType {
  constructor(private el: ElementRef) { }
  @Input('user')
  set user(value: any) {
    if (value && value.userType) {
      this.el.nativeElement.innerHTML = `Welcome ${value.userType} User!`;
    }
  }
}
