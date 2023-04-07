import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public body: string;
  public editorOptions: Object;


  constructor() {

    this.body = '';
    this.editorOptions = {
      anchor_bottom:                false, 
      anchor_top:                   false,
      autoresize_bottom_margin:     10,
      autoresize_min_height:        40,
      branding:                     false, 
      language:                     'en', 
      inline:                       true,
      fixed_toolbar_container:      ".tiny-mce-toolbar",
      menubar:                      false, 
      statusbar:                    false, 
      default_link_target:          '_blank', 
      link_assume_external_targets: true, 
      target_list:                  false, 
      link_title:                   false,
      skin_url:                     'assets/tinymce/skins/lightgray',
      plugins:                      'autoresize link lists',
      toolbar:                      'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist indent outdent | link unlink'
    };
  }
}
