import { Injectable } from '@angular/core';

@Injectable()
export class CertificatesDataService {

  constructor() { }
  certificatesTitle:{title}={
    title:'Certificates'
  }
  certificates:string[]=['Certificate'];
  certificateId:number=0;

  onSetCertificates(certificates){
    this.certificates=certificates;
  }

  onAddCertificates(){
    this.certificates.push('Certificate');
  }

  onRemoveCertificates(id){
    this.certificates.splice(id,1);
  }

  onSetCertificatesId(id){
    this.certificateId=id;
  }

}
