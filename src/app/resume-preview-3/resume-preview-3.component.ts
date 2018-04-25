import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataStoreService } from '../services/data-store.service';
import { PersonalDetailsDataService } from '../services/personal-details-data.service';
import { EducationDetailsDataService } from '../services/education-details-data.service';
import { SkillsDataService } from '../services/skills-data.service';
import { ExperienceDataService } from '../services/experience-data.service';
import { HobbiesDataService } from '../services/hobbies-data.service';
import { InterestsDataService } from '../services/interests-data.service';
import { CertificatesDataService } from '../services/certificates-data.service';
import { LanguagesDataService } from '../services/languages-data.service';
import { DownloadService } from '../services/download.service';

@Component({
  selector: 'app-resume-preview-3',
  templateUrl: './resume-preview-3.component.html',
  styleUrls: ['./resume-preview-3.component.css']
})
export class ResumePreview3Component implements OnInit {
  links:{activateHobbies,activateInterests,activateCertificates,activateLanguages,activateSummary}
  personalDetails:{name,profession,dob,phoneNo,email,address,image,nametitle,professiontitle,dobtitle,phoneNotitle,emailtitle,addresstitle,imagetitle};
  educationDetails:{schoolName:string,Qualification:string,Marks:string,yearOfPassing:string}[];
  skills:{name:string,details:string}[];
  skillsTitle:{title};
  educationDetailsTitle:{title,schoolnametitle,Qualificationtitle,Markstitle,yearOfPassingtitle};
  experiences:{designation:string,company:string,duration:string,details:string}[];
  experiencesTitle:{title,designationtitle,companytitle,durationtitle,detailstitle};
  hobbies:string[];
  hobbiesTitle:{title};
  interests:string[];
  interestsTitle:{title};
  certificates:string[];
  certificatesTitle:{title};
  languages:string[];
  languageTitle:{title};
  
  constructor(
    private route:Router,
    private dataStore:DataStoreService,
    private personalDetailsData:PersonalDetailsDataService,
    private educationDetailsData:EducationDetailsDataService,
    private skillsData:SkillsDataService,
    private experienceData:ExperienceDataService,
    private hobbiesData:HobbiesDataService,
    private interestsData:InterestsDataService,
    private certificatesData:CertificatesDataService,
    private languagesData:LanguagesDataService,
    private downloadData:DownloadService  
  ) { }

  ngOnInit() {
    this.links=this.dataStore.links;
    this.personalDetails=this.personalDetailsData.personalDetails;
    this.educationDetails=this.educationDetailsData.educationDetails;
    this.educationDetailsTitle=this.educationDetailsData.educationDetailsTitle;
    this.skills=this.skillsData.skills;
    this.skillsTitle=this.skillsData.skillsTitle;
    this.experiences=this.experienceData.experiences;
    this.hobbies=this.hobbiesData.hobbies;
    this.interests=this.interestsData.interests;
    this.certificates=this.certificatesData.certificates;
    this.languages=this.languagesData.languages;
    this.experiencesTitle=this.experienceData.experiencesTitle;
    this.hobbiesTitle=this.hobbiesData.hobbiesTitle;
    this.interestsTitle=this.interestsData.interestsTitle;
    this.certificatesTitle=this.certificatesData.certificatesTitle;
    this.languageTitle=this.languagesData.languageTitle;
  }

  
  downloadPDF(){
    this.downloadData.downloadPDF();
  }

  onBackPage(){
    this.route.navigate(['resumeDetails','4']);
  }

}
