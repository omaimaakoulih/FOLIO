import { Component, OnInit } from '@angular/core';
import { addDoc, collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Project } from 'src/app/models/project.model';
import { Service } from 'src/app/models/service.model';
import { Skill } from 'src/app/models/skill.model';
import { ModifService } from '../services/modif.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit{

  portfolioId!:string;
  userName!:string;
  name!:string;
  description!:string;
  smallDesc!:string;
  portfolioStyle!:string;
  portfolioColors!:string[];
  colors!:string;
  updateData:any;

  serviceDescription!:string;
  serviceName!:string;

  services:Service[] = [];

  projectTitle!:string;
  prjectDescription!:string;

  projects : Project[] = [];

  skillName!:string;
  state!:number;

  skills:Skill[] = [];

  data1:string[] = [
    "",
    "Graphic design",
    "Writing",
    "Video editing",
    "Photography",
    "Public speaking",
    "Interpersonal communication",
    "Project management",
    "Team leadership",
    "Data analysis",
    "Problem-solving",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
    "Go",
    "React",
    "Angular",
    "Vue.js",
    "Bootstrap",
    "jQuery",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "Ruby on Rails",
    "Laravel",
    "Symfony",
    "Spring",
    "Hibernate",
    "JUnit",
    "JUnit5",
    "Maven",
    "Gradle",
    "Git",
    "GitHub",
    "GitLab",
    "Critical thinking",
    "Time management",
    "Teamwork and collaboration",
    "Customer service",
    "Multilingual skills",
    "Marketing skills",
    "Sales skills",
    "Social media management",
    "Web development",
    "Mobile development",
    "UI/UX design",
    "SEO/SEM optimization",
    "Digital marketing",
    "Content creation",
    "Analyzing data and statistics",
    "Budgeting and financial planning",
    "Event planning and coordination",
    "Negotiation skills",
    "Research skills",
    "Copywriting",
    "Editing and proofreading",
    "Sales copywriting",
    "Copy editing",
    "Branding",
    "Market research",
    "Competitive analysis",
    "Data visualization",
    "Statistical analysis",
    "Machine learning",
    "Artificial intelligence",
    "Cloud computing",
    "Database management",
    "Network administration",
    "Technical writing",
    "Curriculum development",
    "Teaching or training skills",
    "Coaching or mentoring skills",
    "Entrepreneurial skills",
    "Business development",
    "Strategic planning",
    "Public relations",
    "Crisis management",
    "Grant writing",
    "Fundraising",
    "Nonprofit management",
    "Volunteer management",
    "Event management",
    "Hospitality and tourism management",
  ];

  url!:string;
  contactName!:string;

  contacts:Contact[] = [];

  data2:string[] = ['Behince','Discord','Dribble','Facebook','Mail','GitHub','Instagram',' Joomla','LinkedIn','Pinterest','Twitch','Twitter','Youtube'];


  private sub!:any;

  myScriptElement: HTMLScriptElement;
  skill!: Skill;
  service!: Service;
  project!: Project;
  contact!: Contact;

  constructor(private router: Router,private route: ActivatedRoute, private firestore:Firestore, private modifService:ModifService){


      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "../../../assets/js/editPortfolio.js";
      document.body.appendChild(this.myScriptElement);

  }

   ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
      
      this.portfolioId = param['id2'];
      this.userName = param['id'];

   });


     this.modifService.getPortfolioName(this.portfolioId).subscribe((data:string) => {
      this.name = data;
      
    });

    
   
     this.modifService.getPortfolioDescription(this.portfolioId).subscribe((data:string) => {
      this.description = data;
     });
    this.modifService.getSmallDescription(this.portfolioId).subscribe((data:string) => {
      this.smallDesc = data;
    });

    this.modifService.getPortfolioStyle(this.portfolioId).subscribe((data:string) => {
      this.portfolioStyle = data;
    })

   this.modifService.getPortfoliosColors(this.portfolioId).subscribe((data:string[]) => {

    this.portfolioColors = data;

    if(this.portfolioColors[0] == '#181823' && this.portfolioColors[1] == '#537FE7'){
      this.colors = 'colors1';

    }
    else if(this.portfolioColors[0] == '#A7727D' && this.portfolioColors[1] == '#EDDBC7'){
      this.colors = 'colors2';
    }
    else if(this.portfolioColors[0] == '#3C6255' && this.portfolioColors[1] == '#EAE7B1'){
      this.colors = 'colors3';
    }
    else if(this.portfolioColors[0] == '#000000' && this.portfolioColors[1] == '#323232'){
      this.colors = 'colors4';
    }
    else if(this.portfolioColors[0] == '#181D31' && this.portfolioColors[1] == '#678983'){
      this.colors = 'colors5';
    }
    else{
      this.colors = 'colors6';
    }
   });
    
    

    this.services = this.modifService.getPortfolioServices(this.portfolioId);
    this.projects = this.modifService.getProjects(this.portfolioId);
    this.skills = this.modifService.getSkills(this.portfolioId);
    this.contacts = this.modifService.getContacts(this.portfolioId);

}

onNameEdit(f:any){

  

}

onDescriptionEdit(f:any){
  const docInstance = doc(this.firestore , 'portfolios',this.portfolioId);
 
      if(this.description && this.smallDesc && this.router){
      const updateData = {
        description:this.description,
        smalldescrip:this.smallDesc
        
      }

      updateDoc(docInstance,updateData).then(() => {
        window.alert("Portfolio Descriptions saved!");
      }).catch((err) => {
        console.log(err);
      });
    }
    else{
      window.alert("Please fill all the fields!");
    }

}

onColorSelected(f:any){


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

onAddService(f:any){

  if(this.description && this.serviceName){

    this.service = new Service(this.serviceName,this.description,this.portfolioId);

    const collectionInstance = collection(this.firestore,'services');
    addDoc(collectionInstance, JSON.parse(JSON.stringify(this.service))).then(()=>{
      window.alert("Service Added succesfuly!");
      this.description = "";
      this.serviceName = "";
      

    }).catch((err) =>{
      console.log(err);
    });

    

  }
  else{
    window.alert("Please fill the Service Name and Description!");
  }


}

onAddProject(f:any){

  if(this.prjectDescription && this.projectTitle){

    this.project = new Project(this.projectTitle,this.prjectDescription,this.portfolioId);

    const collectionInstance = collection(this.firestore,'projects');
    addDoc(collectionInstance, JSON.parse(JSON.stringify(this.project))).then(()=>{
      window.alert("Project Added succesfuly!");
      this.projectTitle = "";
      this.prjectDescription = "";
      

    }).catch((err) =>{
      console.log(err);
    });

    

  }
  else{
    window.alert("Please fill the Project Name and Description!");
  }

}

onAddSkill(f:any){

  if(this.skillName && this.state){

    this.skill = new Skill(this.skillName,this.state,this.portfolioId);

    const collectionInstance = collection(this.firestore,'skills');
    addDoc(collectionInstance, JSON.parse(JSON.stringify(this.skill))).then(()=>{
      window.alert("Contact Added succesfuly!");
      this.skillName = "";
      this.state = 0;
      

    }).catch((err) =>{
      console.log(err);
    });

  }
  else{
    window.alert("Please fill the Contact Name and url!");
  }

}

onAddContact(f:any){

  if(this.contactName && this.url){

    this.contact = new Contact(this.contactName,this.url,this.portfolioId);

    const collectionInstance = collection(this.firestore,'contacts');
    addDoc(collectionInstance, JSON.parse(JSON.stringify(this.contact))).then(()=>{
      window.alert("Contact Added succesfuly!");
    
      this.contactName  ="";
      this.url = "";

    }).catch((err) =>{
      console.log(err);
    });

    

  }
  else{
    window.alert("Please fill the Contact Name and url!");
  }

}

ondeletetheSkill(value:Skill){
  
  
  
  this.skills.splice(this.skills.indexOf(value),1);
  
  
}

ondeletetheService(value:Service){

  this.services.splice(this.services.indexOf(value),1);
}

ondeletetheProject(value:Project){
  this.projects.splice(this.projects.indexOf(value),1);
}

ondeletetheContact(value:Contact){
  this.contacts.splice(this.contacts.indexOf(value),1);
}

onReview(){
  if(this.portfolioStyle == "style1"){
  const result =this.router.serializeUrl(this.router.createUrlTree(['/portfolio/home',this.portfolioId]));
   window.open(result,'_blank');
  }
  else{
    const result =this.router.serializeUrl(this.router.createUrlTree(['/portfolio2/home',this.portfolioId]));
   window.open(result,'_blank');
  }
}

onPortfoliosClick(){
  this.router.navigate(['/UserHome', this.userName]);

}
}
