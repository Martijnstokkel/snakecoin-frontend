import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Highscore } from './domain/highscore';

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Highscore[]> {
    console.log(`${environment.Snakeurl}highscore`);
    return this.http.get<Highscore[]>(`${environment.Snakeurl}highscore`);
  }
  
public spelen(){
  console.log("werkt dit wel of niet?")
  return this.http.post(`${environment.Snakeurl}highscore/starten`,this.httpOptions);
}

  public create(highscore: Highscore): Observable<Highscore> {
    return this.http.post<Highscore>(`${environment.Snakeurl}highscore`,
        highscore, this.httpOptions)
  }

  public returnHighscores(gebruikersnaam: String): Observable<Highscore[]>{
    console.log(gebruikersnaam)
    return this.http.get<Highscore[]>(`${environment.Snakeurl}highscore`,)
  }
}
