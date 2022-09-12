import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  eLanguages,
  ResourceCategory,
} from '../enrichment-mat/enrichment-resources/shared.model';
import { LanguageService } from '../services/language.service';
import { Articles } from './enrichment-resources/articles';
import { Lectures } from './enrichment-resources/lectures';
type Animation = null | 'fade-in' | 'fade-out';

interface Category {
  categoryId: number;
  categoryName: string;
}
interface Item {
  title: string;
  descp: string;
  link: string;
  thumbnail?: string;
  isHeOnly?: boolean;
}
export interface Resource {
  categoryId: number;
  categoryName: string;
  items: Array<Item>;
}
@Component({
  selector: 'app-enrichment-mat',
  templateUrl: './enrichment-mat.component.html',
  styleUrls: ['./enrichment-mat.component.scss'],
})
export class EnrichmentMatComponent implements OnInit {
  public categoriesList: Array<Category> = [
    {
      categoryId: 0,
      categoryName: 'INFO_PAGE.INFO_CATEGORIES.SEE_ALL',
    },
  ];
  public selectedCategory = this.categoriesList[0];
  public filterdResources: Array<Resource> = [];
  public allResources: Array<Resource> = [];
  public isExpandedDropdown = false;
  public animation: Animation = null;
  get name(): string | null {
    return sessionStorage.getItem('token');
  }
  @ViewChild('toggleButton') public toggleButton!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(e: Event): void {
    if (!this.toggleButton.nativeElement.contains(e.target))
      this.isExpandedDropdown = false;
  }
  get resourceCategory() {
    return ResourceCategory;
  }
  constructor(
    private languageService: LanguageService,
    private translate: TranslateService,
    private router: Router
  ) {}
  get language(): eLanguages {
    return this.languageService.getLanguage();
  }
  ngOnInit() {
    const allResources = this.getAllResources();
    this.categoriesList = this.categoriesList.concat(
      this.getCategoryList(allResources)
    );
    this.allResources = allResources;
    this.filterdResources = [...allResources];
  }
  public categoryClick(category: Category): void {
    if (category !== this.selectedCategory) {
      this.selectedCategory = category;
      this.animation = 'fade-out';
      setTimeout(() => {
        this.filterResources(category);
        this.animation = 'fade-in';
      }, 200);
    }
  }
  public clickOnItem(item: Item): void {
    window.open(this.translate.instant(item.link), '_blank');
  }
  private filterResources(selectedCategory: Category): void {
    if (selectedCategory.categoryId === 0) {
      this.filterdResources = [...this.allResources];
    } else {
      this.filterdResources = this.allResources.filter(
        (resource) => resource.categoryId === selectedCategory.categoryId
      );
    }
  }
  public toggleDropdown(): void {
    this.isExpandedDropdown = !this.isExpandedDropdown;
  }
  private getAllResources(): Array<Resource> {
    const allResources: Array<Resource> = [];
    allResources.push(Articles, Lectures);
    let allResourcesFilterd = allResources;
    if (this.language === eLanguages.ENGLISH)
      allResourcesFilterd = this.filterInitResources(allResources);
    return allResourcesFilterd;
  }
  private getCategoryList(allResources: Array<any>): Array<Category> {
    const categoryList: Array<Category> = [];
    allResources.forEach((resource) => {
      categoryList.push({
        categoryId: resource.categoryId,
        categoryName: resource.categoryName,
      });
    });
    return categoryList;
  }
  private filterInitResources(allResources: Resource[]): Resource[] {
    const filterdResource: any = [];
    allResources.forEach((resource) => {
      filterdResource.push(
        resource.items.filter((item) => item.isHeOnly !== true)
      );
    });
    for (let i = 0; i < allResources.length; i++) {
      allResources[i].items = filterdResource[i];
    }
    return allResources;
  }
  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
