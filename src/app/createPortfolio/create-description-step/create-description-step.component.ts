import { Component } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-description-step',
  templateUrl: './create-description-step.component.html',
  styleUrls: ['./create-description-step.component.css']
})
export class CreateDescriptionStepComponent {

  userName!:string;
  userId!:string;
  portfolioId!:string;
  description!:string;
  smallDesc!:string;
  private sub:any;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
        this.portfolioId = param['id2'];

    });

  }

  onDescriptionSave(f:any){
    
    
      const docInstance = doc(this.firestore , 'portfolios',this.portfolioId);
 
      if(this.description && this.router){
      const updateData = {
        description:this.description,
        smalldescrip:this.smallDesc
        
      }

      updateDoc(docInstance,updateData).then(() => {
        window.alert("Portfolio Descriptions saved!");
      }).catch((err) => {
        console.log(err);
      });
    }
    else{
      window.alert("Please fill all the fields!");
    }


  }

  onContinue(){
    
    if(this.description && this.smallDesc){
    
      this.router.navigate(['/create/services',this.userName , this.portfolioId]);
    
    }
  else{
    window.alert("Descriptions are required!");
  }

  }

}
