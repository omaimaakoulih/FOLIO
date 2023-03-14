import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData !:Observable<any>;

  email!:string;
  password!:string;
  exist:boolean = false;



  constructor(private firestore:Firestore,private router: Router,private route: ActivatedRoute){}

  onLogin(f:any){
    const collectionInstance = collection(this.firestore,'users');
    
    
    collectionData(collectionInstance).subscribe((val) =>{
      
      
      val.forEach(v => {
        console.log(v);
        console.log(v['email']);
        if(v['email'] == this.email){
          if(v['password'] == this.password){
            this.router.navigate(['/UserHome',v['userName']]);
            
          }
          else{
            window.alert('Invalide password !');
            
          }
        }
      });

    })
    

    /*
    this.userData = collectionData(collectionInstance);
    this.userData.forEach(e=> {
      console.log(e['name']);
      if(e.email == this.email){
        if(e.password == this.password){
          console.log('Logged!');
        }
        else{
          console.log('Invalide password !');
        }
      }
    });

    console.log("Problem?");
    console.log(this.email);
    console.log(this.password);
   */
  }

}
