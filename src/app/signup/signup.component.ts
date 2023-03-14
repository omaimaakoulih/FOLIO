import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { Firestore, collection, addDoc } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  name!:string;
  email!:string;
  password!:string;
  confirm!:string;
  user !:User;
  image!:string;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore, private storage:Storage){}

  signU(f:any){
    if(this.password != this.confirm){
      window.alert("please confirm the password");
    }
    else{

      // put the image : *******************
      
      this.image = "https://firebasestorage.googleapis.com/v0/b/folio-12036.appspot.com/o/%C3%ACmages%2Fprofiles%2Fuser.png?alt=media&token=2d0dfdad-4367-485c-a86f-815264527388";



      //****************************** */

      this.user = new User(this.name,this.email,this.password);
      if(this.image){this.user.image =this.image;}
      

      const collectionInstance = collection(this.firestore,'users');
      addDoc(collectionInstance, JSON.parse(JSON.stringify(this.user))).then(()=>{
        window.alert("Account created succesfuly!");

        this.router.navigate(['/login']);
      }).catch((err) =>{
        console.log(err);
      })
    }
  }

}
