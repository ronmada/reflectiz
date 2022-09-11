import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: ` <img [src]="thumbnail" alt="thumbnail" />
    <style>
      img {
        border-radius: 10px;
        cursor: url(assets/images/cursors/LinkSelect.cur), pointer !important;
      }
    </style>`,
})
export class ImageComponent {
  @Input() thumbnail!: string;
}
