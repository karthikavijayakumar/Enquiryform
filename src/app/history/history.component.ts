import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/services.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  enquiries:{ name: string, phonenumber: string, email: string, message: string}[]=[

    // {name:"",phonenumber:"",email:"",message:""}

  ];

  constructor(private EnquiryService:EnquiryService) { 

    this.enquiries=EnquiryService.getEnquiries();

  }
  ngOnInit(): void {
  }



}
