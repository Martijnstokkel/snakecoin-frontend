import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';
import {Account} from 'src/app/domain/account';
import { HighscoresService } from '../highscores.service';
import { Highscore } from '../domain/highscore';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  account: Account = new Account();
  highscores: Highscore[];
  constructor(private router: Router,
    private cookie: CookieService,
    private loginservice: LoginService,
    private highscoreService: HighscoresService) { }

  ngOnInit() {
    if(!this.cookie.check('cookie-name')){
      this.router.navigate(['aanmelden']);
     
    }
    console.log("help")
    this.HighscoresResults(this.cookie.get('cookie-name'));
  }
  goedmelding : String;
  foutmelding : String;
  versturen2(userpage: NgForm){
    console.log("jaja")
    
    if(this.account.gebruikersnaam.length > 6 && this.account.gebruikersnaam.length < 15){
      this.loginservice.deleteAccount(this.account.gebruikersnaam, this.account.wachtwoord).subscribe( account  => { 
        console.log("jajaja")
        this.cookie.deleteAll();
        this.router.navigate(['aanmelden']);
      
      },
      error => {
        console.log(error.message);
        
        delete this.goedmelding;
        this.foutmelding = "Invalid username or password"},)
     
    }
  }
  versturen(userpage: NgForm){
    // console.log(this.cookie.get('cookie-id'))
    this.account.id = +this.cookie.get('cookie-id')
    // console.log(this.account.id)
    this.loginservice.delete(this.account.id).subscribe(account =>{
      // console.log(this.cookie.get('cookie-id'))
      
      this.cookie.deleteAll();
      this.router.navigate(['aanmelden']);
    })
  }
  HighscoresResults(gebruikersnaam : String){
    console.log("werkt dit?")
    this.highscoreService.returnHighscores(this.cookie.get('cookie-name')).subscribe(
      (data: Highscore[]) => {this.highscores = data.filter(highscores => highscores.gebruikersnaam.includes(this.cookie.get('cookie-name'))).sort((a,b) => { return b.highscore.valueOf() - a.highscore.valueOf();}),
      console.log(this.highscores)
      // console.log(+this.highscores[1].highscore.toFixed())
      if(this.highscores.length < 5){
        if(this.highscores[0] === undefined){
          console.log("kom ik hier?")
          
        }else{
      for(var i = 0; i < this.highscores.length; i++){
        console.log("kom ik hier?")
        this.highscores[i].highscore = +this.highscores[i].highscore.toFixed();
      }
      }
    }else{
      for(var i = 0; i < 5; i++){
        console.log("kom ik hier?")
        this.highscores[i].highscore = + this.highscores[i].highscore.toFixed();
      }
    }
      

    },
      fout => console.log(fout),
    )
  }
}
