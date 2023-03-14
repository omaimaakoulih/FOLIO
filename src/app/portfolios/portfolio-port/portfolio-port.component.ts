import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio-port',
  templateUrl: './portfolio-port.component.html',
  styleUrls: ['./portfolio-port.component.css']
})
export class PortfolioPortComponent implements OnInit{

  portfolioId!:string;
  private sub: any;

  portfolio!:Portfolio;

  image2!:string;
  type!:string;
  description!:string;

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
          this.type= v['type'];
          this.image2 = "../../../assets/templates/" + this.type + "/photo2.jpg";
          this.description = v['description'];

        }
      }

      )
      }
    );

    
    
  }

  

  portfolioHome(){
    this.router.navigate(['/portfolio/home',this.portfolioId]);
  }

  portfolioContact(){
    this.router.navigate(['/portfolio/contact',this.portfolioId]);
  }
}
