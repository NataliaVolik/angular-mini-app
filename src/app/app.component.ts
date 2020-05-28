import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-mini-app';

  configApp = {
    header : {
      title : 'Angular Mini App',
      btn_1 : 'First',
      btn_2 : 'Second',
      btn_3 : 'Three',
      btn_4 : 'Four',
      btn_5 : 'Five',
      btn_6 : 'Six',
      btn_7 : 'Seven'
    },
    content : {
       title_1 : 'Books',
       title_2 : 'News',
       title_3 : 'Info',
       subtitle_3 : 'Result',
        slide : 'Slide me!',
       title_4 : 'Content',
       title_5 : 'Tab',
       list_stroke_1 : 'Item 1',
       list_stroke_2 : 'Item 2',
       list_stroke_3 : 'Item 3',
       list_stroke_4 : 'Item 4',
       list_stroke_5 : 'Item 5',
       list_stroke_6 : 'Item 6',
      card : {
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        button_like: 'LIKE',
        button_share: 'SHARE'
      },
      badge : {
        text_badge : 'Text with a badge',
        btn_badge : 'Button with a badge on the left',
        action : 'Action',
        icon_badge : 'Icon with a badge',
        home : 'home',
        example_badge : 'Example with a home icon with overlaid badge showing the number 15'
      }
    },
    sidebar : {
      btn_1 : 'Books',
      btn_2 : 'News',
      btn_3 : 'Info',
      btn_4 : 'Content',
      btn_5 : 'Tab',
      btn_6 : 'Tour',
      btn_7 : 'Game',
      btn_8 : 'World'
    },
    footer : {
      text_1 : 'Angular mini app',
      text_2 : 'Current Version: 1.0.0',
      text_3 : 'Lorem ipsum dolor sit.',
      text_4 : 'Powered by Google ©2010-2020.'
    }
  }
}
