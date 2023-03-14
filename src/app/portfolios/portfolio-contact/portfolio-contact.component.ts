import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Portfolio } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.css']
})
export class PortfolioContactComponent implements OnInit{

  portfolioId!:string;
  private sub: any;

  portfolio!:Portfolio;
  contacts:Contact[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private firestore:Firestore){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
      
      this.portfolioId = param['id'];

  });


  // get the portfolio;

  const collectionInstance = collection(this.firestore,'portfolios');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['id'] == this.portfolioId){
          this.portfolio = new Portfolio(v['nam'],v['userId'],v['id']);
          this.portfolio.colors = v['colors'];

        }
      }

      )
      }
    );

    const collectionInstance2= collection(this.firestore,'contacts');
    
    
    collectionData(collectionInstance2,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId){
            this.contacts.push(new Contact(v['name'].toLowerCase(),v['adress'],v['portfolioId'], v['id']));
            
          
        }
      }
      

      );
      console.log(this.contacts);
      }
    );
  }

  

  portfolioHome(){
    this.router.navigate(['/portfolio/home',this.portfolioId]);
  }

  portfolioPort(){
    this.router.navigate(['/portfolio/port',this.portfolioId]);
  }

}
