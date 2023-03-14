import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio2-port',
  templateUrl: './portfolio2-port.component.html',
  styleUrls: ['./portfolio2-port.component.css']
})
export class Portfolio2PortComponent implements OnInit{
  portfolioId!:string;
  private sub: any;
  portfolio!:Portfolio;
  description!:string;
  type!:string;
  image2!:string;
  
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
          this.type= v['type'];
          this.image2 = "../../../assets/templates/" + this.type + "/photo2.jpg";
          this.description = v['description'];
          
          

        }
      }

      )
      }
    );


}
home(){
  this.router.navigate(['portfolio2/home',this.portfolioId]);

}
mySkills(){
  this.router.navigate(['portfolio2/skills',this.portfolioId]);
}
myServices(){
  this.router.navigate(['portfolio2/services',this.portfolioId]);

}

}
