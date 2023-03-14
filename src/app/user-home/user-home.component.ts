import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  userName!:string;
  userId!:string;
  private sub:any;

  portfolios:Portfolio[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private firestore: Firestore){}
  
  ngOnInit(): void {

    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
    });

    // get the user Id:

    const collectionInstance1 = collection(this.firestore,'users');
    
    
    collectionData(collectionInstance1,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['userName'] == this.userName){
          this.userId = v['id'];
          console.log("if statement ");
          console.log(v['userName']);
          
        }
        
      }
      );

      //------------------------
      const collectionInstance = collection(this.firestore,'portfolios');
      
      if(this.userId){
      collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
        
        val.forEach(v => {
          if(v['userId'] == this.userId){
            this.portfolios.push(new Portfolio(v['nam'],v['userId'],v['id']));
            
          }
          
        }
        );
        });
      }

      });
      

  }

  onProfileClick(){

    this.router.navigate(['/profile', this.userName]);
  }
  
  onCreate(){
    this.router.navigate(['/create/step1', this.userName]);
  }

}
