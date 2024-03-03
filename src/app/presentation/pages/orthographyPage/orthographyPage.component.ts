import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessagesComponent, MyMessageComponent, TextMessageBoxComponent, TypingLoaderComponent } from '@components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule, GptMessagesComponent, MyMessageComponent, TypingLoaderComponent, TextMessageBoxComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {}
