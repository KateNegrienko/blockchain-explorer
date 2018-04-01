import { NgModule } from '@angular/core';

import { TransformDatePipe } from './localized-date.pipe';

const PIPES = [
    TransformDatePipe
];

@NgModule({
    imports: [],
    declarations: [...PIPES],
    providers: [],
    exports: [...PIPES]
})
export class DatePipesModule {}
