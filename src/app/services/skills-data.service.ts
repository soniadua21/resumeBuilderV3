import { Injectable } from '@angular/core';

@Injectable()
export class SkillsDataService {

  constructor() { }
  skillsTitle:{title}={title:'Skills'}
  skills:{name:string,details:string}[]=[{name:'Name',details:'Details'}];
  skillId:number=0;

  onSetSkillDetails(skills){
    this.skills=skills;
  }
  onAddSkillDetails(){
    this.skills.push({
      name:'Name',details:'Details'
    })
  }
  onRemoveSkillDetails(id){
    this.skills.splice(id,1);
  }

  onSetSkillId(id){
    this.skillId=id;
  }

}
