import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  GptMessagesComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TextMessageBoxFileComponent,
  TextMessageEvent,
  TypingLoaderComponent,
} from '@components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    GptMessagesComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {
  handleMessage(prompt: string) {
    console.log(prompt);
  }
  handleMessageWithFile(event: TextMessageEvent) {
    console.log({ prompt });
  }
}
