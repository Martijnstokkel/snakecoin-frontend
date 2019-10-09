import { Injectable } from '@angular/core';
import { Account } from 'src/app/domain/account';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  account: Account = null;
  activeaccount : Account;
  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Account> {
    console.log(`${environment.Snakeurl}Account`);
    return this.http.get<Account>(`${environment.Snakeurl}Account`);
  }

  public checkLogin(gebruikersnaam: string, wachtwoord: string ): Observable<Account> {
    var account: Account = new Account();
    account.gebruikersnaam = gebruikersnaam;
    account.wachtwoord = wachtwoord;
    console.log(account.gebruikersnaam);
    console.log(account.wachtwoord);
    console.log(`${environment.Snakeurl}aanmelden`);
    return this.http.get<Account>(`${environment.Snakeurl}aanmelden`);
  }
  public create(account: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.Snakeurl}aanmelden`,
        account, this.httpOptions)
  }
}
