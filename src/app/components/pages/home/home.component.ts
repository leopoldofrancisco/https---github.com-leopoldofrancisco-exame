import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() btnText!: string;
  closeResult!: string;
  url: any = "";

  fotoForm!: FormGroup;

	constructor(private modalService: NgbModal, private router: Router) {}

	openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

  bringFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }



}
