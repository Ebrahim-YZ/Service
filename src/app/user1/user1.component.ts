import { Component } from '@angular/core';
import { ServicePro } from '../servicepro/servicepro.component';

@Component({
  selector: 'app-user1',
  standalone: true,
  imports: [],
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component {
  CallService() {
    const getservice = new ServicePro();
    getservice.onServiceProAc();

  }
}
