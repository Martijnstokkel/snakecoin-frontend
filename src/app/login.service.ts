import { Injectable } from '@angular/core';
import { Account } from 'src/app/domain/account';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  account: Account = null;
  activeaccount : Account;
  cookie : CookieService;
  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Account> {
    // console.log(`${environment.Snakeurl}Account`);
    return this.http.get<Account>(`${environment.Snakeurl}Account`);
  }

  public checkLogin(gebruikersnaam: string, wachtwoord: string ): Observable<Account> {
    var account: Account = new Account();
    account.gebruikersnaam = gebruikersnaam;
    account.wachtwoord = wachtwoord;
    // console.log(account.gebruikersnaam);
    // console.log(account.wachtwoord);
    // console.log(`${environment.Snakeurl}aanmelden`);
    return this.http.put<Account>(`${environment.Snakeurl}aanmelden`,account, this.httpOptions);
    
  }
  public create(account: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.Snakeurl}aanmelden`,
        account, this.httpOptions)
  }
  public delete(id: number): Observable<void> {
    // console.log(id)
    return this.http.delete<void>(`${environment.Snakeurl}aanmelden/${id}`);
  }

  public deleteAccount(gebruikersnaam: string, wachtwoord: string ): Observable<Account> {
    var account: Account = new Account();
    account.gebruikersnaam = gebruikersnaam;
    account.wachtwoord = wachtwoord;
    return this.http.put<Account>(`${environment.Snakeurl}aanmelden/${gebruikersnaam}`,account, this.httpOptions);
  }
}
