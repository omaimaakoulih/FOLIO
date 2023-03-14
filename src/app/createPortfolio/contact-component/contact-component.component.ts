import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit{


  name!:string;
  url!:string;
  contactId!:string;

  @Input()
  contact!:Contact;

  @Output()
  deleting = new EventEmitter<Contact>();

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}

  ngOnInit(): void {
    this.name = this.contact.name;
    this.url = this.contact.adress;
  }

  onModifyUrl(f:any){

    if(this.contact.cantactId){
      const docInstance = doc(this.firestore ,'contacts',this.contact.cantactId);
  
  
      const updateData = {
       adress:this.url
      }
  
      updateDoc(docInstance,updateData).then(() => {
        window.alert("Contact Modified!");
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      });
    }

  }

  deleteContact(){

    if(this.contact.cantactId){

      const docInstance = doc(this.firestore ,'contacts',this.contact.cantactId);
      deleteDoc(docInstance).then(()=>{
        
       

      this.deleting.emit(this.contact);
      })

    }
  }



}
