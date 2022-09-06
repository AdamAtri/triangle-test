import { EventData, Page } from '@nativescript/core'
import { TriangleModel } from './main-view-model'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new TriangleModel()
  const g = global as any;
  g.page = page;
  g.model = page.bindingContext;
}