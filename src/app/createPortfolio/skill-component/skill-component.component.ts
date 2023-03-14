import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { deleteDoc } from 'firebase/firestore';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit{
  name!:string;
  state!:number;
  skillId!:string;

  @Input()
  skill!:Skill;

  @Output()
  deleting = new EventEmitter<Skill>();


  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}

  ngOnInit(): void {
    this.name = this.skill.name;
    this.state = this.skill.state;
  }

  onModifyState(f:any){

    if(this.skill.skillId){
      const docInstance = doc(this.firestore ,'skills',this.skill.skillId);
  
  
      const updateData = {
       state:this.state
      }
  
      updateDoc(docInstance,updateData).then(() => {
        window.alert("Contact Modified!");
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      });
    }

  }

  deleteSkill(){

    if(this.skill.skillId){

      const docInstance = doc(this.firestore ,'skills',this.skill.skillId);
      deleteDoc(docInstance).then(()=>{
        
       

       this.deleting.emit(this.skill);
      })

    }


  }

}
