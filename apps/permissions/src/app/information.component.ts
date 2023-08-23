import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserStore } from './user.store';
import { HasRoleDirective } from './has-role.directive';
import { Roles } from './enums/roles';
import RoleOptions = Roles;

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, HasRoleDirective],
  template: `
    <h2 class="mt-10 text-xl">Information Panel</h2>
    <!-- admin can see everything -->
    <div *hasRoleIsAdmin="true">visible only for super admin</div>
    <div *hasRoles="[Roles.Manager]">visible if manager</div>
    <div *hasRoles="[Roles.Manager, Roles.Reader]">
      visible if manager and/or reader
    </div>
    <div *hasRoles="[Roles.Manager, Roles.Writer]">
      visible if manager and/or writer
    </div>
    <div *hasRoles="[Roles.Client]">visible if client</div>
    <div>visible for everyone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  Roles = RoleOptions;
  user$ = this.userStore.user$;
  constructor(private userStore: UserStore) {}
}
