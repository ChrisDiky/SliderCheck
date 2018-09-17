import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-slider-code',
  templateUrl: './slider-code.component.html',
  styleUrls: ['./slider-code.component.css'],
})
export class SliderCodeComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvasImage: ElementRef;
  @ViewChild('slider') canvasSlider: ElementRef;
  @ViewChild('square') square: ElementRef;
  @ViewChild('#sliderContainer') sliderContainer: ElementRef;
  src: string;
  imgWidth: number;
  imgHeight: number;
  mouseDown = false;

  originX = 0;
  originY = 0;
  trail = [];

  x: number;
  y: number;
  r = 12;
  w = 50;
  blockMarginLeft = '-300px';
  squareMarginLeft = '0';
  constructor() { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.imgHeight = 200;
    this.imgWidth = 300;
    this.blockLocation();
  }

  ngAfterViewInit() {
    this.drawBlock();
  }

  getRandomImg() {
    return 'https://picsum.photos/300/200/?image=' + this.getRandomNumberByRange(0, 400);
  }

  getRandomNumberByRange(start, end) {
    return Math.round(Math.random() * (end - start) + start);
  }

  drawBlock() {
    this.src = this.getRandomImg();
    const width = this.imgWidth;
    const height = this.imgHeight;
    const block = this.canvasSlider.nativeElement;
    const slider_x = this.x;
    const slider_y = this.y;
    const slider_w = this.w;
    const slider_r = this.r;
    const img = this.imgFromPath(this.src);

    const canvasContext: CanvasRenderingContext2D = this.canvasImage.nativeElement.getContext('2d');
    const blockContext: CanvasRenderingContext2D = this.canvasSlider.nativeElement.getContext('2d');

    block.width = width;

    img.onload = function () {
        canvasContext.drawImage(img, 0, 0, width, height);
        blockContext.drawImage(img, 0, 0, width, height);

        const blockWidth = 80;
        const _y = slider_y - slider_r * 2 + 2; // 滑块实际的y坐标
        const ImageData = blockContext.getImageData(slider_x, _y, blockWidth, blockWidth);
        block.width = slider_w + slider_r * 2;
        blockContext.putImageData(ImageData, 0, _y);
    };
    this.draw(canvasContext, 'fill');
    this.draw(blockContext, 'clip');

  }

  imgFromPath(path) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = path;
    return img;
  }

  blockLocation() {
    this.x = Math.random() * 150 + 80;
    this.y = Math.random() * 120 + 20;
  }

  draw(ctx: any, type: string) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.w / 2 - 6.62, this.y);
    ctx.arc(this.x + this.w / 2, this.y - this.r + 2, this.r, 0.68 * Math.PI, 2.32 * Math.PI) ;
    ctx.lineTo(this.x + this.w / 2 + 6.62, this.y);
    ctx.lineTo(this.x + this.w, this.y);
    ctx.lineTo(this.x + this.w, this.y + this.w / 2 - 6.62);
    ctx.arc(this.x + this.w + this.r - 2, this.y + this.w / 2, this.r, 1.18 * Math.PI, 2.86 * Math.PI);
    ctx.lineTo(this.x + this.w, this.y + this.w / 2 + 6.62);
    ctx.lineTo(this.x + this.w, this.y + this.w);
    ctx.lineTo(this.x, this.y + this.w);
    ctx.lineTo(this.x, this.y + this.w - this.r / 2);
    ctx.arc(this.x, this.y + this.w / 2, this.r,  0.5 * Math.PI, -0.5 * Math.PI, true);
    ctx.lineTo(this.x, this.y + this.r / 2);
    ctx.lineTo(this.x, this.y);
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.strokeStyle = 'rgba(100, 100, 100, 0.7)';
    ctx.stroke();

    if (type === 'clip') {
      ctx.clip();
      ctx.globalCompositeOperation = 'overlay';
    }
    if (type === 'fill') {
      ctx.fill();
      ctx.globalCompositeOperation = 'overlay';
    }
  }

  sliderMouseDown(e) {
    this.originX = e.x;
    this.originY = e.y;
    this.mouseDown = true;
  }

  sliderMouseMove(e) {
    if (!this.mouseDown) {
      return;
    }
    /*鼠标移动的事件*/
    const  movex = e.x - this.originX;
    const  moveY = e.y - this.originY;
    if (movex < 0 || movex + 38 >= this.imgWidth) { return false; }
    this.squareMarginLeft = movex + 'px';
    const blockLeft = -300 + movex / 260 * 224;
    this.blockMarginLeft = blockLeft + 'px';

    this.trail.push(moveY);
  }

  sliderMouseUp(e) {
    this.mouseDown = false;

    if (e.x === this.originX) {
      return;
    }
    const {spliced, TuringTest} = this.verify();
    if (spliced) {
      if (TuringTest) {
        // this.sliderContainer.nativeElement.addClass('');
        console.log('验证成功');
        setTimeout(() => {
          this.reset();
        }, 1000);
      } else {
        // this.sliderContainer.nativeElement.addClass('');
        console.log('验证失败');
        // this.text.nativeElement.innerHTML = '再试一次';
      }
    } else {
      // this.sliderContainer.nativeElement.addClass('slider_Fail');
      console.log(' 校验验证失败');
      setTimeout(() => {
        this.reset();
      }, 1000);
    }

  }

  verify() {
    const  arr = this.trail;
    const  average = arr.reduce(this.sum) / arr.length;
    const  deviations = arr.map(x => x - average);
    const  stddev = Math.sqrt(deviations.map(this.doubleSquare).reduce(this.sum)) / arr.length;
    const  left = parseInt(this.blockMarginLeft, 0) + 300;
    return {
        spliced: Math.abs(left - this.x) < 10,
        TuringTest: average !== stddev,
    };
  }

  sum(x, y) {
    return x + y;
  }

  doubleSquare(x) {
    return x * x;
  }

  reset() {
    const imgCtx: CanvasRenderingContext2D = this.canvasImage.nativeElement.getContext('2d');
    const blockCtx: CanvasRenderingContext2D = this.canvasSlider.nativeElement.getContext('2d');
    imgCtx.clearRect(0, 0, this.imgWidth, this.imgHeight);
    blockCtx.clearRect(0, 0, this.imgWidth, this.imgHeight);
    this.blockLocation();
    this.drawBlock();
    this.blockMarginLeft = -300 + 'px';
    this.squareMarginLeft = 0 + 'px';
  }
}

