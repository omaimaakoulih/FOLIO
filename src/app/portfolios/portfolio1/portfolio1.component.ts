import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import UIkit from 'uikit';



@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.css']
})
export class Portfolio1Component implements OnInit{

  portfolioId!:string;
  private sub: any;

  type!:string;
  image1!:string;
  image2!:string;
  smallDescr!:string;
  contacts:Contact[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private firestore:Firestore){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
      
      this.portfolioId = param['id'];

  });

  const collectionInstance = collection(this.firestore,'portfolios');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['id'] == this.portfolioId){
          this.type = v['type'];
          this.image1 = "../../../assets/templates/" + this.type + "/photo1.jpg";
          this.smallDescr = v['smalldescrip'];
        }
      }

      );

      
      }
    );

    const collectionInstance2= collection(this.firestore,'contacts');
    
    
    collectionData(collectionInstance2,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId){
            this.contacts.push(new Contact(v['name'].toLowerCase(),v['adress'],v['portfolioId'], v['id']));
            
          
        }
      }
      

      );
      console.log(this.contacts);
      }
    );
    
     
     

  }

  

  portfolioPort(){
    this.router.navigate(['/portfolio/port',this.portfolioId]);
  }

  portfolioContact(){
    this.router.navigate(['/portfolio/contact',this.portfolioId]);
  }
}
