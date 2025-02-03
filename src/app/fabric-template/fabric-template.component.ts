import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Canvas, Textbox, Image } from 'fabric';

@Component({
  selector: 'app-fabric-template',
  templateUrl: './fabric-template.component.html',
  styleUrls: ['./fabric-template.component.css'],
})
export class FabricTemplateComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;
  canvas!: Canvas;

  ngOnInit() {
    this.canvas = new Canvas(this.canvasElement.nativeElement, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff',
    });

    // Load a sample template or empty canvas
    this.loadTemplate();
  }

  async loadTemplate() {
    const sampleTemplate = {
      background: '#f5f5f5',
      backgroundImage: '../../assets/birthday-background.png', // Path to the background image
      textObjects: [
        { text: 'Editable Text', fontSize: 30, left: 50, top: 50, fontFamily: 'Arial' },
        { text: 'Editable Text', fontSize: 30, left: 50, top: 100, fontFamily: 'Arial' },
      ],
    };

    this.canvas.backgroundColor = sampleTemplate.background;
    // this.canvas.backgroundImage = new FabricImage(sampleTemplate.backgroundImage);
    this.canvas.renderAll.bind(this.canvas);

    // Load background image
    if (sampleTemplate.backgroundImage) {
      const img = await Image.fromURL(sampleTemplate.backgroundImage);
      img.scaleToWidth(this.canvas.width!); // Scale image to fit canvas
      img.scaleToHeight(this.canvas.height!);
      this.canvas.backgroundImage  = img;
      this.canvas.renderAll.bind(this.canvas);
    }

    sampleTemplate.textObjects.forEach((obj: any) => {
      const text = new Textbox(obj.text, {
        left: obj.left,
        top: obj.top,
        fontSize: obj.fontSize,
        fontFamily: obj.fontFamily,
        editable: true,
      });
      this.canvas.add(text);
    });
  }

  saveTemplateToFile() {
    const canvasJSON = this.canvas.toJSON(); // Get the canvas JSON

    // Convert JSON to Blob and create a downloadable file
    const blob = new Blob([JSON.stringify(canvasJSON)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'template.json';
    link.click();
  }

  
}
