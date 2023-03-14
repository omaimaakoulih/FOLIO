import { Portfolio } from "./portfolio.model";
import { Project } from "./project.model";
import { Service } from "./service.model";

export class User{

        firstName!: string;
        lastName!: string;
        address!:string;
        phone!:string;
        country!:string;
        city!:string;
        github!:string;
        facebook!:string;
        instagram!:string;
        linkedIn!:string;
        twitter!:string;
        portfolios!:Portfolio[];
        services!:Service[];
        projects!:Project[];
        image!:string;

    constructor(public userName:string,
        public email:string,
        public password:string,
        ){
            this.firstName="";
            this.lastName = "";
            this.country = "";
            this.address = "";
            this.city = "";
            this.facebook = "";
            this.linkedIn="";
            this.instagram = "";
            this.github = "";
            this.portfolios = [];
            this.services = [];
            this.projects = [];
            this.twitter = "";
            this.phone  = "";
            this.image = "";

        };
    
        /*
    setFname(f:string){
        this.firstName = f;
    }  
    setLname(l:string){
        this.lastName = l;
    }  
    setAdress(addr:string){
        this.address = addr;
    } 
    setPhone(phone:string){
        this.phone = phone;
    }
    setCountry(country:string){
        this.country = country;
    } 
    setCity(city:string){
        this.city = city;
    } 
    setGit(git:string){
        this.github = git;
    } 
    setInsta(insta:string){
        this.instagram = insta;
    } 
    setFacebook(face:string){
        this.facebook = face;
    } 
    setLinkedIn(link:string){
        this.linkedIn = link;
    } 
    setPortfolios(ports:Portfolio[]){
        this.portfolios = ports;
    } 
    
*/

        
}