import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-iframe',
  template: ` <iframe
      [src]="emmbeddedLink | safe"
      title="YouTube video player"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
      loading="lazy"
      modestbranding="1"
    ></iframe>
    <style>
      iframe {
        width: 100%;
        border-radius: 10px;
        border: 0;
      }
    </style>`,
})
export class IframeComponent implements OnInit {
  @Input() link!: string;
  public emmbeddedLink = '';
  constructor(private translate: TranslateService) {}
  ngOnInit() {
    this.emmbeddedLink = this.getEmbbededURL(this.link);
  }
  private getEmbbededURL(link: string): string {
    const translatedLink = this.translate.instant(link) as string;
    const returnLink = translatedLink.replace('/watch?v=', '/embed/');
    return returnLink;
  }
}
