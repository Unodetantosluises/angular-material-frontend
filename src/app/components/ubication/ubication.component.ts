import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ubication',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './ubication.component.html',
  styleUrl: './ubication.component.css'
})
export class UbicationComponent implements OnInit {
  contactInfo = {
    address: 'Jesús Urueta 28, Moderna, Benito Juárez, 03510 Ciudad de México, CDMX',
    phone: '+52 55 1644 6413',
    email: 'contacto@neriamotos.com',
    days: 'Lunes a Sábado',
    hours: '9:00 AM - 6:00 PM'
  };

  googleMapsUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      const unsafeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.428451303638!2d-99.13355999999999!3d19.393885400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff0c0715bd29%3A0xe7687f04d529976b!2sNERIA%20MOTOS!5e0!3m2!1ses-419!2smx!4v1757882629557!5m2!1ses-419!2smx";
      this.googleMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }
}
