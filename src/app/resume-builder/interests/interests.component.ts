import { Component, OnInit } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { InterestsDataService } from '../../services/interests-data.service';
import { Router,ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  templateId:number;
   options: Object;
   interests:string[];
   id:number;
   froalaId:number=0; 

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private interestsService:InterestsDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.interests=this.interestsService.interests;
    this.id=this.interestsService.interestId;
  }

  onAddDetails(){
    this.interestsService.onAddInterests();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(){
    if(this.id>=1){
      this.interestsService.onRemoveInterests();
      this.id--;
    }
    if(this.froalaId>0){
      this.froalaId--;
    }
  }

  onUpdateButton(buttonId){
    this.froalaId=buttonId.id;
  }
  onPreview(){
    this.router.navigate([this.templateId])
  }
ngOnDestroy(){
  this.interestsService.onSetInterests(this.interests)
  this.interestsService.onSetInterestsId(this.id)
}

}
