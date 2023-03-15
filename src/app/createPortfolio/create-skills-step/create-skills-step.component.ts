import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-create-skills-step',
  templateUrl: './create-skills-step.component.html',
  styleUrls: ['./create-skills-step.component.css']
})
export class CreateSkillsStepComponent implements OnInit{

  userName!:string;
  userId!:string;
  portfolioId!:string;
  skillName!:string;
  state!:number;
  skill!:Skill;
  refresh:boolean = true;

  skills:Skill[] = [];
  private sub:any;

  data:string[] = [
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
  constructor(private router: Router,private route: ActivatedRoute,private firestore:Firestore){}
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param)=>{
        this.userName = param['id'];
        this.portfolioId = param['id2'];

    });

    let skill!:Skill;
    const collectionInstance = collection(this.firestore,'skills');
    
    
    collectionData(collectionInstance,{idField:'id'}).subscribe((val) =>{
      
      
      val.forEach(v => {
        if(v['portfolioId'] == this.portfolioId && this.refresh){
          skill = new Skill(v['name'],v['state'],v['portfolioId'],v['id']);
          if(!this.skills.some((s) => s.name == skill.name && s.state == skill.state && s.portfolioId== skill.portfolioId && skill.skillId == s.skillId)){
            this.skills.push(skill);
          }
        }
      }

      )
      }
    );
  }

  onAddSkill(f:any){
    this.refresh = false;
    
    if(this.skillName && this.state){

      this.skill = new Skill(this.skillName,this.state,this.portfolioId);

      const collectionInstance = collection(this.firestore,'skills');
      addDoc(collectionInstance, JSON.parse(JSON.stringify(this.skill))).then(()=>{
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

  ondeletetheSkill(value:Skill){
    this.skills.splice(this.skills.indexOf(value),1);
  }

  onContinue(){
    this.router.navigate(['/create/contacts',this.userName , this.portfolioId]);

  }

}


