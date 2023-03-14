import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, collection, addDoc, collectionData,doc, updateDoc } from "@angular/fire/firestore";
import { Portfolio } from 'src/app/models/portfolio.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-name-step',
  templateUrl: './create-name-step.component.html',
  styleUrls: ['./create-name-step.component.css']
})
export class CreateNameStepComponent {

  name!:string;
  user!:User;
  portfolio!:Portfolio;
  userName!:string;
  userId!:string;
  portfolioId!:string;
  private sub:any;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
    });

    const collectionInscatce = collection(this.firestore,'users');

    collectionData(collectionInscatce,{idField:'id'}).subscribe((val) => {

      val.forEach(v => {
        if(v['userName'] == this.userName){
          console.log(v);
          this.userId = v['id'];
         // this.user = new User(v['userName'],v['email'],v['password']);
         
          
        }
      });

    });


  }


  onNameSaved(f:any){
    this.portfolio = new Portfolio(this.name,this.userId);
    /* const docInstance = doc(this.firestore , 'users',this.userId);

    const updateData = {
      portfolio: this.user.portfolios
    }

    updateDoc(docInstance,updateData).then(() => {
      window.alert("portfolio name saved");
    }).catch((err) => {
      console.log(err);
    });*/
    const collectionInstance = collection(this.firestore,'portfolios');
      addDoc(collectionInstance, JSON.parse(JSON.stringify(this.portfolio))).then(()=>{
        window.alert("portfolio created succesfuly!");

      }).catch((err) =>{
        console.log(err);
      });


      // getting the portfolio id
      collectionData(collection(this.firestore, 'portfolios'), { idField: 'id'}).subscribe((v)=>{
        v.forEach(e => {
          if(e['userId'] == this.userId){
            if(e['nam'] == this.name){
              this.portfolioId = e['id'];
              
            }
          }
          
        });
    });
  }

  onContinue(){
    
    if(this.name){

      
    
    this.router.navigate(['/create/types',this.userName , this.portfolioId]);
    
  }
  else{
    window.alert("The name is required!");
  }

  }

}
