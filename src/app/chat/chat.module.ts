import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { NgChatModule } from 'ng-chat';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChatModule
  ]
})
export class ChatModule { }
