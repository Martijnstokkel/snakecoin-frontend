import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hoofdmenu',
  templateUrl: './hoofdmenu.component.html',
  styleUrls: ['./hoofdmenu.component.css']
})
export class HoofdmenuComponent implements OnInit {
  
 loggedin: boolean;
 
  constructor(private route: ActivatedRoute,
    private cookie: CookieService,
    private router: Router) { }

  logout(){
   
    console.log(this.cookie.get('cookie-name'));
    this.cookie.delete('cookie-name');
   
   
   
    console.log(this.cookie.get('cookie-name'));
    this.router.navigate(['aanmelden'])
  }
  ngOnInit() {
    
  }

}
