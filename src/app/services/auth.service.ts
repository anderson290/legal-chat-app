import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.url;

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) :Observable<boolean> | boolean{
    if (JSON.parse(localStorage.getItem('user'))) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }

  checkLogin(form) {
    this.http.post<any>(`${this.url}conversation/authenticate`, form).subscribe(res => {

      if (res.status == 404) {
        console.log('ERRO');
      } else {
        
        localStorage.setItem('user', JSON.stringify(res));

        console.log(res);
        if(res.data.level == 2){


          this.route.navigate(['tabs']);
        }
      }
    });
  }

  decodeToken(token) {
    let params = {
      token: token
    }
    return this.http.post<any>(`${this.url}conversation/decode-token`, params);
  }

}
