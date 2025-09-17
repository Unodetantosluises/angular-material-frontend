import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from "../../components/carousel/carousel.component";
import { CatalogeComponent } from '../../components/cataloge/cataloge.component';
import { MotorcyclePartsServiceComponent } from '../../components/motorcycle-parts-service/motorcycle-parts-service.component';
import { UbicationComponent } from '../../components/ubication/ubication.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CatalogeComponent, MotorcyclePartsServiceComponent, UbicationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
