import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessagesComponent } from '../../components/chat-bubbles/gpt-messages/gpt-messages.component';
import { MyMessageComponent } from '../../components/chat-bubbles/myMessage/myMessage.component';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule, GptMessagesComponent, MyMessageComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {}
