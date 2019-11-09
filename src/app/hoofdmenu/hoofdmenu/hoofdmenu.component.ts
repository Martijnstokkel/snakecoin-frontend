import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { BestScoreManager } from 'src/app/app.storage.service';

@Component({
  selector: 'app-hoofdmenu',
  templateUrl: './hoofdmenu.component.html',
  styleUrls: ['./hoofdmenu.component.css']
})
export class HoofdmenuComponent implements OnInit {
  
 loggedin: boolean;
 
  constructor(private route: ActivatedRoute,
    private cookie: CookieService,
    private router: Router,
    private bestScoreService: BestScoreManager) { }

  logout(){
   
    // console.log(this.cookie.get('cookie-name'));
    this.cookie.delete('cookie-name');
   
   this.bestScoreService.clear();
    
    // console.log(this.cookie.get('cookie-name'));
    this.router.navigate(['aanmelden'])
  }
  ngOnInit() {
    
  }

}
