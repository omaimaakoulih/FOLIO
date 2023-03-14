import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-portfolio-service',
  templateUrl: './portfolio-service.component.html',
  styleUrls: ['./portfolio-service.component.css']
})
export class PortfolioServiceComponent {

  @Input()
  service!:Service;

}
