import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';
import {Account} from 'src/app/domain/account';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  account: Account = new Account();
  melding : string;
  constructor(private router: Router,
    private cookie: CookieService,
    private loginservice: LoginService) { }

  ngOnInit() {
    if(!this.cookie.check('cookie-name')){
      this.router.navigate(['aanmelden']);
    }
  }
  goedmelding : String;
  foutmelding : String;

  versturen(userpage: NgForm){
    console.log(this.cookie.get('cookie-id'))
    this.account.id = +this.cookie.get('cookie-id')
    console.log(this.account.id)
    this.loginservice.delete(this.account.id).subscribe(account =>{
      console.log(this.cookie.get('cookie-id'))
      this.melding = "Uw account is gedelete"
      this.cookie.deleteAll();
      this.router.navigate(['aanmelden']);
    })
  }

}
