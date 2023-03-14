import { Component, Output } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio2-skills-services',
  templateUrl: './portfolio2-skills-services.component.html',
  styleUrls: ['./portfolio2-skills-services.component.css']
})
export class Portfolio2SkillsServicesComponent {

  portfolioId!:string;
  private sub: any;
  portfolio!:Portfolio;
  
  type!:string;
  
  constructor(private router: Router,private route: ActivatedRoute, private firestore:Firestore){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
      
      this.portfolioId = param['id'];
      

  });

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


}

aboutMe(){
  this.router.navigate(['portfolio2/aboutme',this.portfolioId]);
}
home(){
  this.router.navigate(['portfolio2/home',this.portfolioId]);
}
myServices(){
  this.router.navigate(['portfolio2/services',this.portfolioId]);

}

}
