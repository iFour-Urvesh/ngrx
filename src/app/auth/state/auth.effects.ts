import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store/app.state';
import {
  setErorMessage,
  setLoadingSpinner,
} from 'src/app/store/Shared/shared.actions';
import { loginStart, loginSuccess, signupStart, signupSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErorMessage({ message: '' }));
            const user = this.authService.formatUser(data);
            return loginSuccess({ user });
          }),
          catchError((errResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResponse.error.error.message
            );
            return of(setErorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  signup$ = createEffect(() => {
    return this.action$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signup(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErorMessage({ message: '' }));
            const user = this.authService.formatUser(data);
            return signupSuccess({user})
          }),
          catchError((errResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResponse.error.error.message
            );
            return of(setErorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(...[loginSuccess, signupSuccess]),
        tap((action) => {
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );
}
