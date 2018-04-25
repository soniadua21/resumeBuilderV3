import { Injectable } from '@angular/core';

@Injectable()
export class EducationDetailsDataService {

  constructor() { }
  educationDetailsTitle:{title,schoolnametitle,Qualificationtitle,Markstitle,yearOfPassingtitle}=
  {  title:'Education',
    schoolnametitle:'School/College',
    Qualificationtitle:'Qualification',
    Markstitle:'Marks',
    yearOfPassingtitle:'Year of Passing'

  }
  educationDetails:{schoolName:string,Qualification:string,Marks:string,yearOfPassing:string}[]=[{schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks',yearOfPassing:'year'}];
  educationId:number=0;

  onSetEducationDetails(educationDetails){
    this.educationDetails=educationDetails;
  }
  onAddEducationDetails(){
    this.educationDetails.push({
      schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks',yearOfPassing:'year'
    })
  }
  onRemoveEducationDetails(id){
    this.educationDetails.splice(id,1);
  }

  onSetEducationId(id){
    this.educationId=id;
  }

}
