import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-componenet',
  templateUrl: './project-componenet.component.html',
  styleUrls: ['./project-componenet.component.css']
})
export class ProjectComponenetComponent implements OnInit{

  title!:string;
  description!:string;
  projectId!:string;

  @Input() 
  project!:Project;
  projects: any;

  @Output()
  deleting = new EventEmitter<Project>();

  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.title = this.project.title;
    this.description = this.project.description;
  }


  onModifyProject(f:any){
    if(this.project.projectId){
      const docInstance = doc(this.firestore , 'projects',this.project.projectId);
  
  
      const updateData = {
       title:this.title,
       description:this.description
      }
  
      updateDoc(docInstance,updateData).then(() => {
        window.alert("project Modified!");
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      });
    }



  }

  deleteProject(){

    if(this.project.projectId){

      const docInstance = doc(this.firestore ,'projects',this.project.projectId);
      deleteDoc(docInstance).then(()=>{
        
       

      this.deleting.emit(this.project);
      })

    }
  }




}
