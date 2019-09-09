import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  constructor(private http: HTTP, public GlobalService: GlobalServiceService){
  }

  ngOnInit(): void {
    const query  = this.GlobalService.abc();
    console.log(query)
  }
}
