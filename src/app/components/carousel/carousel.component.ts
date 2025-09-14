import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: CarouselItem[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed = 3000;

  currentIndex = signal(0);
  private intervalId?: number;

  ngOnInit(): void {
      if(this.autoPlay) {
        this.startAutoPlay();
      }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, this.autoPlaySpeed);
  }

  stopAutoPlay(): void {
    if(this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    const nextIndex = this.currentIndex() + 1;
    const newIndex = nextIndex < this.slides.length ? nextIndex : 0;
    this.currentIndex.set(newIndex);
  }

  previousSlide(): void {
    const previousIndex = this.currentIndex() -1;
    const newIndex = previousIndex >= 0 ? previousIndex : this.slides.length - 1;
    this.currentIndex.set(newIndex);
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
  }
}
