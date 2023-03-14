import { Injectable } from "@angular/core";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { map, Observable, of } from "rxjs";
import { Contact } from "src/app/models/contact.model";
import { Project } from "src/app/models/project.model";
import { Service } from "src/app/models/service.model";
import { Skill } from "src/app/models/skill.model";

@Injectable(
    {providedIn: 'root'}  // c'est pour dire q'il est dans le root
)
export class ModifService{

    collectionInscatce!:any;
    collectiondata!:any;

    services:Service[] = [];
    projects:Project[] = [];
    skills:Skill[] = [];
    contacts:Contact[] = [];
    name2!:string;

    constructor(private firestore:Firestore){
    }

    

    getPortfolioName(id:string) :Observable<string>{

        let namePo = "";
        const collectionInstance = collection(this.firestore,'portfolios');
    
    
      return collectionData(collectionInstance,{idField:'id'}).pipe(
        map((val:any) => {

            val.forEach((v:any) => {
              if(v['id'] == id){
               
                namePo = v['nam'];
              }
             
            });
            console.log(namePo);
            return namePo;
            
          }));
          

    }
    getPortfolioDescription(id:string): Observable<string>{

      let desc = "";
        const collectionInstance = collection(this.firestore,'portfolios');
    
    
      return collectionData(collectionInstance,{idField:'id'}).pipe(
        map((val:any) => {

            val.forEach((v:any) => {
              if(v['id'] == id){
                
                desc =  v['description'];
              }
            });
           return desc;
          }));
        
        

    }

    getSmallDescription(id:string): Observable<string>  {
      let smallDesc = "";
        const collectionInstance = collection(this.firestore,'portfolios');
    
    
      return collectionData(collectionInstance,{idField:'id'}).pipe(
        map((val:any) => {

            val.forEach((v:any) => {
              if(v['id'] == id){
                
                smallDesc =  v['smalldescrip'];
              }
            });
            return smallDesc;
          }));
        
    }
    
    getPortfoliosColors(id:string):Observable<string[]>{
      let tab: string[] = [];
        const collectionInstance = collection(this.firestore,'portfolios');
    
    
      return collectionData(collectionInstance,{idField:'id'}).pipe(
        map((val:any) => {

            val.forEach((v:any) => {
              if(v['id'] == id){
                
                tab =  v['colors'];
              }
            });
            return tab;
          }));
        

    }
    getPortfolioStyle(id:string): Observable<string>{
      let style = "";

      const collectionInstance = collection(this.firestore, 'portfolios');
      return collectionData(collectionInstance, {idField:'id'}).pipe(
        map((val:any) => {
          val.forEach((v:any) => {
            if(v['id'] == id){
              style =  v['style'];
            }
          });
          return style;
        }));
        
    

    }

    getPortfolioServices(id:string): Service[]{

        let service!:Service;
     const collectionInstance = collection(this.firestore,'services');
    
    
      collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == id){
            service = new Service(v['name'],v['description'],v['portfolioId'],v['id'])
            if(!this.services.some((s) => s.name == service.name && s.description == service.description && s.portfolioId== service.portfolioId && service.serviceId == s.serviceId)){
                this.services.push(service);
            }
        }
        }
      )
      });

      return this.services;
    }

    getProjects(id:string): Project[]{
        let project!:Project;
        const collectionInstance = collection(this.firestore,'projects');
    
    
      collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == id){
            project = new Project(v['title'],v['description'],v['portfolioId'],v['id'])
            if(!this.projects.some((s) => s.title == project.title && s.description == project.description && s.portfolioId== project.portfolioId && project.projectId == s.projectId)){
                this.projects.push(project);
            }    
        }
        }
      )
      });

      return this.projects;
    }

    getSkills(id:string): Skill[]{

        let skill:Skill;
        const collectionInstance = collection(this.firestore,'skills');
    
    
      collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == id){
            skill = new Skill(v['name'],v['state'],v['portfolioId'],v['id']);
            if(!this.skills.some((s) => s.name == skill.name && s.state == skill.state && s.portfolioId== skill.portfolioId && skill.skillId == s.skillId)){
                 this.skills.push(skill);
            }     
        }
        }
      )
      });

      return this.skills;
    }

    

    getContacts(id:string):Contact[]{
        let contact!:Contact;
        const collectionInstance = collection(this.firestore,'contacts');
    
    
      collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == id){
            contact = new Contact(v['name'],v['adress'],v['portfolioId'],v['id']);
            if(!this.contacts.some((s) => s.name == contact.name && s.adress == contact.adress && s.portfolioId== contact.portfolioId && contact.cantactId == s.cantactId)){
            this.contacts.push(contact);
            }
        }
        }
      )
      });

      return this.contacts;
    }


}
