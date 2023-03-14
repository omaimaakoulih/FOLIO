import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-servic-componenet',
  templateUrl: './servic-componenet.component.html',
  styleUrls: ['./servic-componenet.component.css']
})
export class ServicComponenetComponent implements OnInit{


  @Input()
  service!:Service;
  
  fmodif!:FormGroup;
  
  @Output() 
  deleting = new EventEmitter<Service>();


  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}

 
  ngOnInit(): void {
    this.fmodif = new FormGroup({

      name: new FormControl(this.service.name),
      description: new FormControl(this.service.description)
      
    });
    
  }

  onModityService(){
   
    if(this.service.serviceId){
      
    const docInstance = doc(this.firestore , 'services',this.service.serviceId);


    const updateData = {
     name:this.fmodif.get('name')?.value,
     description:this.fmodif.get('description')?.value
    }

    updateDoc(docInstance,updateData).then(() => {
      window.alert("Service Modified!");
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    });
  }


  }

  deleteService(){

    if(this.service.serviceId){

      const docInstance = doc(this.firestore ,'services',this.service.serviceId);
      deleteDoc(docInstance).then(()=>{
        
       

      this.deleting.emit(this.service);
      })

    }


  }


}
