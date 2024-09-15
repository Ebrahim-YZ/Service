import { Component } from '@angular/core';
import { ServicePro } from '../servicepro/servicepro.component';


@Component({
  selector: 'app-user2',
  standalone: true,
  imports: [],
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.css'
})
export class User2Component {
  CallService() {
    const getservice = new ServicePro();
    getservice.onServiceProAc();

  }

}
