import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditorModule } from '@tinymce/tinymce-angular';

import { TestComponent } from './test.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditorModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestComponent
      }
    ])
  ],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {}
