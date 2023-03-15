import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-create-services-step',
  templateUrl: './create-services-step.component.html',
  styleUrls: ['./create-services-step.component.css']
})
export class CreateServicesStepComponent implements OnInit{

  userName!:string;
  userId!:string;
  portfolioId!:string;
  serviceName!:string;
  description!:string;
  service!:Service;

  services:Service[] = [];
  private sub:any;

  refresh:boolean = true;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
        this.portfolioId = param['id2'];

    });


    let service!:Service;

    const collectionInstance = collection(this.firestore,'services');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId && this.refresh){
          service = new Service(v['name'],v['description'],v['portfolioId'],v['id']);
          if(!this.services.some((s) => s.name == service.name && s.description == service.description && s.portfolioId== service.portfolioId && service.serviceId == s.serviceId)){
            this.services.push(service);
          }
          
        }
        }
      )
      });



  }


  onAddService(f:any){

    this.refresh = false;
    if(this.description && this.serviceName){

      this.service = new Service(this.serviceName,this.description,this.portfolioId);

      const collectionInstance = collection(this.firestore,'services');
      addDoc(collectionInstance, JSON.parse(JSON.stringify(this.service))).then(()=>{
        window.alert("Service Added succesfuly!");
        window.location.reload();

      }).catch((err) =>{
        console.log(err);
      });

      

    }
    else{
      window.alert("Please fill the Service Name and Description!");
    }

  }

  ondeletetheService(value:Service){
    this.services.splice(this.services.indexOf(value),1);
  }


  onContinue(){
    
    
    
    this.router.navigate(['/create/projects',this.userName , this.portfolioId]);
    
  }
  


}
