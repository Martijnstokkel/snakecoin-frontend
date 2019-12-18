import { Component} from '@angular/core';
import { BestScoreManager } from './app.storage.service';
import { CONTROLS, COLORS, BOARD_SIZE, GAME_MODES } from './app.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // host: {
  //   '(document:keydown)': 'handleKeyboardEvents($event)'
  // }
})


export class AppComponent{
  constructor(private route: ActivatedRoute,
    private cookie: CookieService,
    private router: Router,
    private bestScoreService: BestScoreManager) { }
    
  
    
}


window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);