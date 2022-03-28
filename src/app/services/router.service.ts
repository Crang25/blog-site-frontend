import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdUrlRegExp, ParamsUrlRegExp } from '../app.data';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private previousUrl: string;
  private currentUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  getPreviousUrl() {
    return this.previousUrl;
  }

  includes(name: string): boolean {
    return this.clearUrl.includes(name);
  }

  get clearUrl(): string {
    return this.router.url
      .replace(ParamsUrlRegExp, '')
      .replace(IdUrlRegExp, '');
  }

  hasQueryParam(name: string): boolean {
    return this.activatedRoute.snapshot.queryParamMap.has(name);
  }

  getQueryIntParam(name: string): number | null {
    return parseInt(
      <string>this.activatedRoute.snapshot.queryParamMap.get(name),
      10
    );
  }

  getQueryBoolParam(name: string): boolean {
    return this.activatedRoute.snapshot.queryParamMap.get(name) === 'true';
  }

  getQueryParam(name: string): string | null {
    return this.activatedRoute.snapshot.queryParamMap.get(name);
  }

  getIntParam(name: string): number {
    const route: ActivatedRoute = this.getActiveRoute();

    return parseInt(route.snapshot.paramMap.get(name), 10);
  }

  getParam(name: string): string {
    const route: ActivatedRoute = this.getActiveRoute();

    return route.snapshot.paramMap.get(name);
  }

  private getActiveRoute(): ActivatedRoute {
    let findRoute: ActivatedRoute = this.activatedRoute;
    while (findRoute.firstChild) {
      findRoute = findRoute.firstChild;
    }

    return findRoute;
  }
}
