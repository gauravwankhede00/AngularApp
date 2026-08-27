import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from '../../core/model/user';

@Directive({
  selector: '[appHasPermission]',
  standalone: true
})
export class HasPermission implements OnInit {
  constructor( private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input('appHasPermission') user: User  | null = null;  
   

  private getCurrentUserRole(): string {
    return this.user?.role || 'user';
  }

  ngOnInit(): void {
    const currentUserRole = this.getCurrentUserRole();
    if (currentUserRole === 'owner') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
