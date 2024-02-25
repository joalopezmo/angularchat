import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-gpt-messages',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './gpt-messages.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptMessagesComponent { 
    @Input({required: true}) text!: string;
}
