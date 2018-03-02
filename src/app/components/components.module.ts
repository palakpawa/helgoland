import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import {
  HelgolandMapViewModule,
  HelgolandModificationModule,
  HelgolandPermalinkModule,
  HelgolandSelectorModule,
  HelgolandTimeModule,
  HelgolandPipesModule,
} from 'helgoland-toolbox';
import { ClipboardModule } from 'ngx-clipboard';

import { CustomListSelectorComponent } from './custom-list-selector/custom-list-selector.component';
import {
  CustomTimespanShiftSelectorComponent,
} from './custom-timespan-shift-selector/custom-timespan-shift-selector.component';
import { LocalSelectorImplComponent } from './local-selector/local-selector.component';
import { ModalGeometryViewerComponent } from './modal-geometry-viewer/modal-geometry-viewer.component';
import { ModalOptionsEditorComponent } from './modal-options-editor/modal-options-editor.component';
import { ModalTimeseriesTimespanComponent } from './modal-timeseries-timespan/modal-timeseries-timespan.component';
import { PermalinkButtonComponent } from './permalink/permalink-button/permalink-button.component';
import { InMailComponent } from './permalink/in-mail/in-mail.component';
import { InNewWindowComponent } from './permalink/in-new-window/in-new-window.component';
import { ToClipboardComponent } from './permalink/to-clipboard/to-clipboard.component';
import { TimespanSelectorComponent } from './timespan-selector/timespan-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbAccordionModule,
    HelgolandMapViewModule,
    HelgolandTimeModule,
    HelgolandPermalinkModule,
    HelgolandPipesModule,
    HelgolandSelectorModule,
    HelgolandModificationModule,
    ClipboardModule,
    TranslateModule.forChild()
  ],
  declarations: [
    LocalSelectorImplComponent,
    ModalOptionsEditorComponent,
    ModalGeometryViewerComponent,
    ModalTimeseriesTimespanComponent,
    PermalinkButtonComponent,
    TimespanSelectorComponent,
    CustomListSelectorComponent,
    CustomTimespanShiftSelectorComponent,
    InMailComponent,
    InNewWindowComponent,
    ToClipboardComponent
  ],
  entryComponents: [
    LocalSelectorImplComponent,
    ModalOptionsEditorComponent,
    ModalGeometryViewerComponent,
    ModalTimeseriesTimespanComponent
  ],
  exports: [
    LocalSelectorImplComponent,
    PermalinkButtonComponent,
    CustomListSelectorComponent,
    CustomTimespanShiftSelectorComponent
  ]
})
export class ComponentsModule { }
