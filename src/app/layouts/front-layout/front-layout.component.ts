import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselComponent, CarouselItem } from "../../components/carousel/carousel.component";
import { CatalogeComponent, Product } from '../../components/cataloge/cataloge.component';
import { MotorcyclePartsServiceComponent } from '../../components/motorcycle-parts-service/motorcycle-parts-service.component';

@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, CatalogeComponent, MotorcyclePartsServiceComponent, FooterComponent, CarouselComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css'
})
export class FrontLayoutComponent {
  slides: CarouselItem[] = [
    {
      imageSrc: 'https://www.yamahamotos.cl/wp-content/uploads/2022/07/r1_negra.jpg',
      imageAlt: 'Casco Hawk Cyclops modelo 1'
    },
    {
      imageSrc: 'https://www.yamahamotos.cl/wp-content/uploads/2024/04/yz_2450fx_1.jpg',
      imageAlt: 'Casco Hawk Cyclops modelo 2'
    },
    {
      imageSrc: 'https://www.yamahamotos.cl/wp-content/uploads/2022/07/r1_azul.jpg',
      imageAlt: 'Casco Hawk Cyclops modelo 3'
    }
  ];
}
