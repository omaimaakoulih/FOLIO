import { Component, Input, OnInit } from '@angular/core';
import { deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.css']
})
export class PortfolioComponentComponent implements OnInit{

  @Input()
  portfolio!:Portfolio;

  @Input()
  userName!:string;


  constructor(private firestore:Firestore, private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    
  }

  onEdit(){
    this.router.navigate(['/editPortflio',this.userName , this.portfolio.portfolioId]);


  }
  onReview(){
    if(this.portfolio.style == "type1"){
    const result =this.router.serializeUrl(this.router.createUrlTree(['/portfolio/home',this.portfolio.portfolioId]));
     window.open(result,'_blank');
    }
    else{
      const result =this.router.serializeUrl(this.router.createUrlTree(['/portfolio2/home',this.portfolio.portfolioId]));
     window.open(result,'_blank');
    }
  }

  onDelete(){

    if(this.portfolio.portfolioId){

      const docInstance = doc(this.firestore ,'portfolios',this.portfolio.portfolioId);
      deleteDoc(docInstance).then(()=>{
        
        window.location.reload();
      })
    
  }


}


}
