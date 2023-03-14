import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-portfolio-skoll',
  templateUrl: './portfolio-skoll.component.html',
  styleUrls: ['./portfolio-skoll.component.css']
})
export class PortfolioSkollComponent {

  @Input()
  skill!:Skill;

}
