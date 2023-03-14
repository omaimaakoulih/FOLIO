import { Component, Input, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-portfolio-services',
  templateUrl: './portfolio-services.component.html',
  styleUrls: ['./portfolio-services.component.css']
})
export class PortfolioServicesComponent implements OnInit{
  

  @Input()
  portfolioId!:string;

  services:Service[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private firestore:Firestore){}

  ngOnInit(): void {

    const collectionInstance = collection(this.firestore,'services');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId){
        this.services.push(new Service(v['name'],v['description'],v['portfolioId'],v['id']));
        }
      }

      )
      }
    );
    
  }

  

}
