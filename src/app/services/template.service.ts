import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  // Simulate fetching templates from a database
  getTemplates() {
    return [
      {
        id: 1,
        background: '#f5f5f5',
        textObjects: [
          {
            text: 'You are Invited!',
            fontSize: 30,
            left: 50,
            top: 50,
            fontFamily: 'Arial',
          },
          {
            text: 'Event Name',
            fontSize: 24,
            left: 50,
            top: 100,
            fontFamily: 'Verdana',
          },
        ],
      },
    ];
  }
}
