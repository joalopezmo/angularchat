import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessagesComponent, MyMessageComponent, TypingLoaderComponent } from '@components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule, GptMessagesComponent, MyMessageComponent, TypingLoaderComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {}
