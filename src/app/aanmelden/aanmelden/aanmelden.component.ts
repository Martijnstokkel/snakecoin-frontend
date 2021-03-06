import { Component, OnInit } from '@angular/core';
import {Account} from 'src/app/domain/account';
import { LoginService } from 'src/app/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BestScoreManager } from 'src/app/app.storage.service';

@Component({
  selector: 'app-aanmelden',
  templateUrl: './aanmelden.component.html',
  styleUrls: ['./aanmelden.component.css']
})
export class AanmeldenComponent implements OnInit {
  account: Account = new Account();
  ingelogdeAccount : string;
  foutinlog : string;

  constructor(private route: ActivatedRoute,
    private loginService: LoginService,
    private cookie: CookieService,
    private router: Router,
    private bestScoreService: BestScoreManager) { }
  ngOnInit() {
  }
  goedmelding : String;
  foutmelding : String;
 
  
  logout(){
   
    // console.log(this.cookie.get('cookie-name'));
    this.cookie.delete('cookie-name');
   
   this.bestScoreService.clear();
    
    // console.log(this.cookie.get('cookie-name'));
    this.router.navigate(['aanmelden'])
  }

  versturen(aanmelden: NgForm) {
    if(this.account.gebruikersnaam.length > 6 && this.account.gebruikersnaam.length < 15){
    if(!this.cookie.check('cookie-name')){
  
     
    
   
    this.loginService.checkLogin(this.account.gebruikersnaam, this.account.wachtwoord).subscribe(
      account  => { 
        delete this.foutmelding;
        this.loginService.activeaccount = account; 
        // console.log(this.loginService.activeaccount.id)
        this.cookie.set('cookie-id', this.loginService.activeaccount.id.toString())
        // console.log(this.cookie.get('cookie-id'));
        this.ingelogdeAccount = this.account.gebruikersnaam;
        this.goedmelding = "U bent ingelogd, Welkom " + this.account.gebruikersnaam
        
        this.cookie.set('cookie-name', this.loginService.activeaccount.gebruikersnaam);
        // console.log(this.cookie.get('cookie-name'));
     
        this.router.navigate(['snake']);
      },
      error => {
        console.log("help")
        console.log(error.message);
        delete this.foutinlog;
        delete this.goedmelding;
        this.foutmelding = "Invalid username or password"},
 
    )
  }else{
    
    this.account.gebruikersnaam = this.cookie.get('cookie-name');
   
    delete this.foutinlog;
    delete this.goedmelding;
    this.foutinlog = "U bent al ingelogd als: " + this.cookie.get('cookie-name')
  }
}else{
  this.foutmelding = "Invalid username or password"
}
}

  }

