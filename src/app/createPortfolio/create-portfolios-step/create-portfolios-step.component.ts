import { Component, OnInit } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-portfolios-step',
  templateUrl: './create-portfolios-step.component.html',
  styleUrls: ['./create-portfolios-step.component.css']
})
export class CreatePortfoliosStepComponent implements OnInit{


  portfoliochoose!:string;
  private sub: any;
  userName!: string;
  portfolioId!:string;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
      this.userName = param['id'];
      this.portfolioId = param['id2'];

  });
  }

  onSelectType(f:any){



    const docInstance = doc(this.firestore , 'portfolios',this.portfolioId);
 
      if(this.portfoliochoose){
      const updateData = {
        style: this.portfoliochoose
        
      }

      updateDoc(docInstance,updateData).then(() => {
        window.alert("Portfolio Style Selected!");
      }).catch((err) => {
        console.log(err);
      });
    }
    else{
      window.alert("Please choose a style!");
    }


  }

  reviewType1(){
    const result =this.router.serializeUrl(this.router.createUrlTree(['/portfolio/home',this.portfolioId]));
     window.open(result,'_blank');
    

  }

  reviewType2(){
    const result =this.router.serializeUrl(this.router.createUrlTree(['/portfolio2/home',this.portfolioId]));
    window.open(result,'_blank');
  }

  onFinish(){
    this.router.navigate(['/UserHome', this.userName]);
   
  }

}
