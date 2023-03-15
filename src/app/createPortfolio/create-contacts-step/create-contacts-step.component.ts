import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-create-contacts-step',
  templateUrl: './create-contacts-step.component.html',
  styleUrls: ['./create-contacts-step.component.css']
})
export class CreateContactsStepComponent implements OnInit{

  userName!:string;
  userId!:string;
  portfolioId!:string;
  contactName!:string;
  url!:string;
  contact!:Contact;

  contacts:Contact[] = [];
  private sub:any;

  resfresh:boolean = true;

  data:string[] = ['Behince','Discord','Dribble','Facebook','Mail','GitHub','Instagram',' Joomla','LinkedIn','Pinterest','Twitch','Twitter','Youtube'];

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
        this.portfolioId = param['id2'];

    });

    let contact!:Contact;

    const collectionInstance = collection(this.firestore,'contacts');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId && this.resfresh){
          contact = new Contact(v['name'],v['adress'],v['portfolioId'],v['id'])
          if(!this.contacts.some((s) => s.name == contact.name && s.adress == contact.adress && s.portfolioId== contact.portfolioId && contact.cantactId == s.cantactId)){
            this.contacts.push(contact);
          }
        }
      }
      )
      });
  }

  onAddContact(f:any){

    this.resfresh = false;
    if(this.contactName && this.url){

      this.contact = new Contact(this.contactName,this.url,this.portfolioId);

      const collectionInstance = collection(this.firestore,'contacts');
      addDoc(collectionInstance, JSON.parse(JSON.stringify(this.contact))).then(()=>{
        window.alert("Contact Added succesfuly!");
        window.location.reload();

      }).catch((err) =>{
        console.log(err);
      });

      

    }
    else{
      window.alert("Please fill the Contact Name and url!");
    }

  }

  ondeletetheContact(value:Contact){
    this.contacts.splice(this.contacts.indexOf(value),1);
  }

  

  onContinue(){

    this.router.navigate(['/create/portfolios',this.userName , this.portfolioId]);

  }


}
