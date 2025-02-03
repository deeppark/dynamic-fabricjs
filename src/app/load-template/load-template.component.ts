import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Canvas } from 'fabric';

@Component({
  selector: 'app-load-template',
  templateUrl: './load-template.component.html',
  styleUrls: ['./load-template.component.css'],
})
export class LoadTemplateComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;
  canvas!: Canvas;

  ngOnInit() {
    this.canvas = new Canvas(this.canvasElement.nativeElement, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff',
    });
  }

  // onFileUpload(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       const json = JSON.parse(e.target.result);
  //       this.canvas.loadFromJSON(json, this.canvas.renderAll.bind(this.canvas));
  //     };

  //     reader.readAsText(file);
  //   }
  // }

  async onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = async (e: any) => {
        try {
          const json = JSON.parse(e.target.result);

          // Load the template JSON with the promise-based API
          await this.canvas.loadFromJSON(json);

          this.canvas.renderAll(); // Ensure the canvas re-renders
          console.log('Template loaded successfully!');
        } catch (error) {
          console.error('Error loading template:', error);
          alert('Invalid template file. Please upload a valid JSON file.');
        }
      };

      reader.readAsText(file);
    }
  }

}
