import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>{{ title }}</h1><p>{{ description }} is cool </p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hello srvup 2!';
  

  ngOnInit() {
      
  }
  ngOnDestroy(){
     
  }
}