import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-create-projects-step',
  templateUrl: './create-projects-step.component.html',
  styleUrls: ['./create-projects-step.component.css']
})
export class CreateProjectsStepComponent implements OnInit{

  userName!:string;
  userId!:string;
  portfolioId!:string;
  projectTitle!:string;
  description!:string;
  project!:Project;

  projects:Project[] = [];
  private sub:any;

  refresh:boolean = true;

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
        this.portfolioId = param['id2'];

    });


    // services display

    const collectionInstance = collection(this.firestore,'projects');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId && this.refresh){
        this.projects.push(new Project(v['title'],v['description'],v['portfolioId'],v['id']));
        }
      }
      )
      });



  }



  onAddProject(f:any){

    this.refresh = false;
    if(this.description && this.projectTitle){

      this.project = new Project(this.projectTitle,this.description,this.portfolioId);

      const collectionInstance = collection(this.firestore,'projects');
      addDoc(collectionInstance, JSON.parse(JSON.stringify(this.project))).then(()=>{
        window.alert("Project Added succesfuly!");
        window.location.reload();

      }).catch((err) =>{
        console.log(err);
      });

      

    }
    else{
      window.alert("Please fill the Project Name and Description!");
    }

  }

  ondeletetheProject(value:Project){
    this.projects.splice(this.projects.indexOf(value),1);
  }

  onContinue(){
    
    this.router.navigate(['/create/skills',this.userName , this.portfolioId]);
    
  }

}
