import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo PWA with Angular';

  constructor(
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    if ( this.swUpdate.isEnabled ) {
      this.swUpdate.available.subscribe(
        () => {
          if ( confirm('New Version Available. Load new version?') ) {
            window.location.reload();
          }
        }
      );
    }
  }

}
