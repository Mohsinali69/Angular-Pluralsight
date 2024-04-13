import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { starComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailGuard } from './product-detail.guard';
//import { ToastrModule } from 'ngx-toastr';
import 'tslib';
@NgModule({
  declarations: [ProductDetailsComponent,
    ProductListComponent,
    starComponent,
    ConvertToSpacesPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{path: 'products',component: ProductListComponent},
    {path: 'product/:id',
    canActivate:[ProductDetailGuard] ,
    component: ProductDetailsComponent}])
    
  ]
})
export class ProductModule { }
