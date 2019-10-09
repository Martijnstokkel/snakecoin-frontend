import { Component, OnInit } from '@angular/core';
import {Account} from 'src/app/domain/account';
import { LoginService } from 'src/app/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
    private router: Router) { }
  ngOnInit() {
  }
  goedmelding : String;
  foutmelding : String;
  actief : boolean = false;
  ingelogd : boolean = false;
  versturen(aanmelden: NgForm) {
    if(this.ingelogd === false){
    if(this.actief === false){
    
   
    this.loginService.checkLogin(this.account.gebruikersnaam, this.account.wachtwoord).subscribe(
      account  => { 
        this.loginService.activeaccount = account; 
        console.log(account);
        this.actief = true;
        this.ingelogd = true;
        console.log(this.actief);
        this.ingelogdeAccount = this.account.gebruikersnaam;
        this.goedmelding = "U bent ingelogd, Welkom " + this.account.gebruikersnaam
        this.router.navigate(['snake'])
      },
      error => {console.log(error.message);
       this.foutmelding = "Het gebruikersnaam is niet bekend of het wacthwoord is verkeed."},
      // () => this.router.navigate(['home'] )
    )
  }
  
}
else if(this.ingelogd === true && this.account.gebruikersnaam == this.ingelogdeAccount){

console.log(this.account.id)
  delete(this.goedmelding);
  this.foutinlog = "U bent al ingelogd als: " + this.account.gebruikersnaam
  
}else {
  delete(this.foutinlog);
  console.log(this.account.id)
  this.foutmelding = "U kunt niet inloggen met een ander account zolang u ingelogd bent!"
}
  }
}
