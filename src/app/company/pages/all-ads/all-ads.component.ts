import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit{

  ads:any;

  constructor(private companyService: CompanyService, ){}

  getAllAdsByUserId(){
    this.companyService.getAllAdsByUserId().subscribe(res => {
      this.ads = res;
    })
  }

  ngOnInit(){
      this.getAllAdsByUserId();
  }

  updateImg(img){
    return 'data:image/jpeg;base64,' + img;
  }

}
