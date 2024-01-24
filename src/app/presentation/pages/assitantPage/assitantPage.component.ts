import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-assitant-page',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './assitantPage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssitantPageComponent { }
