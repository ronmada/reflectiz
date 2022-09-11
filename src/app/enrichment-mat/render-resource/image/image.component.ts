import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: ` <img [src]="thumbnail" alt="thumbnail" />
    <style>
      img {
        border-radius: 10px;
      }
    </style>`,
})
export class ImageComponent {
  @Input() thumbnail!: string;
}
