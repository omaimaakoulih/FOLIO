import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Firestore, collection, addDoc, collectionData,doc, updateDoc } from "@angular/fire/firestore";
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { User } from '../models/user.model';
import { finalize, from, map, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  
  useName!:string;
  private sub:any;
  user!:User;
  userId!:string;

  firstName!: string;
  lastName!: string;
  address!:string;
  phone!:string;
  country!:string;
  city!:string;
  newPassword!:string;
  confPassword!:string;
  image!:string;

  // firebase Storage

  selectedFile!:File;
  downloadUrl!:string;


  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore, private storage:Storage){}
  
  
  ngOnInit(): void {
      this.sub = this.route.params.subscribe((param)=>{
        this.useName = param['id'];
    });

    const collectionInscatce = collection(this.firestore,'users');

    collectionData(collectionInscatce,{idField:'id'}).subscribe((val) => {

      val.forEach(v => {
        if(v['userName'] == this.useName){
          console.log(v);
          this.user = new User(v['userName'],v['email'],v['password']);
          this.firstName = v['firstName'];
          this.lastName = v['lastName'];
          this.address = v['address'];
          this.city = v['city'];
          this.country = v['country'];
          this.phone = v['phone'];
          this.image = v['image'];
          this.userId = v['id'];
        }
      });

    });


  }

  onSelectImage(event: any){
    this.selectedFile = event.target.files[0];
    
  }

  onChange(f:any){

    const docInstance = doc(this.firestore , 'users',this.userId);


    
    if(this.selectedFile){
    const storageRef = ref(this.storage,`ìmages/profiles/${this.selectedFile.name}`);
    const uploadTask = from(uploadBytes(storageRef,this.selectedFile));
    

       uploadTask.pipe(
      
        switchMap((result) => from(getDownloadURL(result.ref))),
        tap((url) => {
           this.downloadUrl = url;
           

           updateDoc(docInstance,{image: this.downloadUrl}).then(() => {
            console.log(this.downloadUrl);
           }).catch((err) => {
             console.log(err);
           });
        })
        ).subscribe();
      }
        


    
    const updateData = {
      email: this.user.email,
      password: this.user.password,
      userName: this.user.userName,
      id:this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phone: this.phone,
      country: this.country,
      city: this.city
    }

    updateDoc(docInstance,updateData).then(() => {
      window.alert("user modified!");
    }).catch((err) => {
      console.log(err);
    });


  }
  oncheckPassword(f:any){
    if(this.newPassword !="" && this.confPassword!=""){
      if(this.newPassword != this.confPassword){
        window.alert("please confirm the password!");
      }
      else{
        this.user.password = this.newPassword;
        window.alert("Password Modified!");

      }
    }
    
  }

  onPortfoliosClick(){
    this.router.navigate(['/UserHome', this.useName]);
  }

}
