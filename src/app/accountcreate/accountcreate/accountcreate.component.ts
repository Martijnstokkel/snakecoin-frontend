import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/domain/account';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountcreate',
  templateUrl: './accountcreate.component.html',
  styleUrls: ['./accountcreate.component.css']
})
export class AccountcreateComponent implements OnInit {

  account : Account = new Account();
  
  wachtwoordcheck : String;
  wwerror : String;
  succesmes : String;
  constructor(private loginService : LoginService,
    private router : Router) { }

  ngOnInit() {
  }

  versturen() {

    if(this.wachtwoordcheck == this.account.wachtwoord) {
      //this.account.wachtwoord = shajs('sha256').update(this.account.wachtwoord).digest('hex');
    this.loginService.create(this.account).subscribe(
        account  => { console.log(account) },
        error =>  {//this.wwerror = error.message,//console.log(error.message),
          console.log(error.message)
          if (error.message = "Http failure response for http://localhost:8080//aanmelden: 409 OK") {
            this.wwerror = "Dit gebruikersnaam bestaat al in onze database."
        }//} else {
          //  this.router.navigate(['account'] )
          //}
          
        },
        // () => this.router.navigate(['account'] )

    )
  }
    else {
      this.wwerror = "De wachtwoorden komen niet overeen."
    }
    
  }

}