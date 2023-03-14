import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/models/portfolio.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-step1',
  templateUrl: './create-step1.component.html',
  styleUrls: ['./create-step1.component.css']
})
export class CreateStep1Component implements OnInit{

  userName!:string;
  userId!:string;
  private sub:any;

  constructor(private router: Router,private route: ActivatedRoute, private firestore:Firestore){}
  
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
  onContinue(){
    
    
    this.router.navigate(['/create/name', this.userName]);
  }


}
