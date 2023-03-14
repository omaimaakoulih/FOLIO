import { Component } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-colors-step',
  templateUrl: './create-colors-step.component.html',
  styleUrls: ['./create-colors-step.component.css']
})
export class CreateColorsStepComponent {


  userName!:string;
  userId!:string;
  portfolioId!:string;
  portfolioType!:string;
  colors!:string;
  private sub:any;
  updateData:any;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
        this.portfolioId = param['id2'];

    });


    
    
    
  }

  onColorSelected(f:any){

    window.alert(this.colors);
    
    const docInstance = doc(this.firestore , 'portfolios',this.portfolioId);

    switch(this.colors){
      case 'colors1':
        this.updateData = {
        colors: ['#181823', '#537FE7']
        };
        break;
      case 'colors2':
        this.updateData = {
          colors: ['#A7727D', '#EDDBC7']
        };
        break;
      case 'colors3':
        this.updateData = {
          colors: ['#3C6255', '#EAE7B1']
        };
        break;
      case 'colors4':
        this.updateData = {
          colors: ['#000000', '#323232']
        };
        break;
      case 'colors5':
        this.updateData = {
          colors: ['#181D31', '#678983']
        };
        break;
      case 'colors6':
        this.updateData = {
          colors: ['#171010', '#E3DFFD']
        };
        break;
      default:
        this.updateData = {
          colors: ['#181823', '#537FE7']
        }


    }


    updateDoc(docInstance,this.updateData).then(() => {
      window.alert("Portfolio colors selected!");
    }).catch((err) => {
      console.log(err);
    });

  }

  onContinue(){
    
    if(this.colors){
    
    this.router.navigate(['create/descrip',this.userName , this.portfolioId]);
    
  }
  else{
    window.alert("Colors are required!");
  }

  }

}


