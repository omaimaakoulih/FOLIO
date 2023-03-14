import { Component, Input, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-portfolio-skolls',
  templateUrl: './portfolio-skolls.component.html',
  styleUrls: ['./portfolio-skolls.component.css']
})
export class PortfolioSkollsComponent implements OnInit{

  @Input()
  portfolioId!:string;

  skills:Skill[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private firestore:Firestore){}

  ngOnInit(): void {

    const collectionInstance = collection(this.firestore,'skills');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId){
        this.skills.push(new Skill(v['name'],v['state'],v['portfolioId'],v['id']));
        }
      }

      )
      }
    );
    
  }
}
