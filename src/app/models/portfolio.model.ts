import { Project } from "./project.model";
import { Service } from "./service.model";

export class Portfolio{
    
    
    
     type!:string;
     style!:string;
     colors!:string[];
     description!:string;
     smalldescrip!:string;
     services!:Service[];
     projects!:Project[];
     
    constructor( public nam:string, public userId:string, public portfolioId?:string
    ){
        
        this.type = "";
        this.style = "";
        this.colors = [];
        this.description = "";
        this.smalldescrip = "";
        this.services = [];
        this.projects = [];
    }
}