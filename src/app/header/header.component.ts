import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef;
  message: string;

  constructor(private modalService: BsModalService ) { }

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  confirm(): void {
    this.message = 'Confirmed';
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined';
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
