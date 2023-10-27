import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  closeResult!: string;

	constructor(private modalService: NgbModal) {}

	openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}



}
