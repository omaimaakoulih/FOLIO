import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-portfolio2',
  templateUrl: './portfolio2.component.html',
  styleUrls: ['./portfolio2.component.css']
})
export class Portfolio2Component {

  portfolioId!:string;
  private sub: any;

  type!:string;
  image1!:string;
  image2!:string;
  smallDescr!:string;
  portfolioName!:string;
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
          this.portfolioName = v['nam'];
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

  aboutMe(){
    this.router.navigate(['portfolio2/aboutme',this.portfolioId]);
  }
  mySkills(){
    this.router.navigate(['portfolio2/skills',this.portfolioId]);
  }
  myServices(){
    this.router.navigate(['portfolio2/services',this.portfolioId]);

  }

}
