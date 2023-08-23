import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Role, User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private user = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user.asObservable();

  readonly isAdmin$ = this.user$?.pipe(map((user) => user?.isAdmin));

  hasAnyRole(role: Role[]): Observable<boolean> {
    return this.user$.pipe(
      map((user) => {
        return (
          (user as User)?.roles?.filter((eachRole) => {
            return role?.includes(eachRole);
          })?.length > 0
        );
      })
    );
  }

  add(user: User) {
    this.user.next(user);
  }
}
