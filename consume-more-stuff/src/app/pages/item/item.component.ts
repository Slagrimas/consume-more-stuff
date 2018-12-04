import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionServices } from '../../services/session.service';


@Component({
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {


  constructor( private backend: BackendService, private session: SessionServices,) {  
        
    }
  
}