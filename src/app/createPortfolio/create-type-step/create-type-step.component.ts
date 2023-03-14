import { Component } from '@angular/core';
import { collection, collectionData, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/models/portfolio.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-type-step',
  templateUrl: './create-type-step.component.html',
  styleUrls: ['./create-type-step.component.css']
})
export class CreateTypeStepComponent {

  
  
  
  userName!:string;
  userId!:string;
  portfolioId!:string;
  portfolioType!:string;
  private sub:any;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
        this.portfolioId = param['id2'];

    });


    // get the portfolio:
    
    
  }

  onSelectType(f:any){

    // select the portfolio type:

    
   
    const docInstance = doc(this.firestore , 'portfolios',this.portfolioId);


    const updateData = {
      type:this.portfolioType
    }

    updateDoc(docInstance,updateData).then(() => {
      window.alert("Portfolio Type selected!");
    }).catch((err) => {
      console.log(err);
    });


  }

  onContinue(){
    
    if(this.portfolioType){
    
    this.router.navigate(['create/style',this.userName , this.portfolioId]);
    
  }
  else{
    window.alert("The Type is required!");
  }

  }

}
