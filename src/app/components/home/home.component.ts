import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormComponent } from '../form/form.component';
import { BenefitComponent } from '../benefit/benefit.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    FormComponent,
    BenefitComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
