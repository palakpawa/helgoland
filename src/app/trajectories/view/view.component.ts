import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SelectionRange } from './../../toolbox/components/display/d-three-graph/d-three-graph.component';
import { TrajectoryModel } from './../model/trajectory-model';
import { TrajectoriesService } from './../services/trajectories.service';
import { TrajectoriesViewPermalink } from './view-permalink';

@Component({
    selector: 'n52-trajectories-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TrajectoriesViewComponent implements OnInit {

    public model: TrajectoryModel;

    public selection: SelectionRange;

    public highlight: number;

    public highlightGeometry: GeoJSON.Point;

    public axisType = 'distance';

    public dotted = false;

    constructor(
        private trajectorySrvc: TrajectoriesService,
        private permalinkSrvc: TrajectoriesViewPermalink
    ) { }

    public ngOnInit() {
        this.permalinkSrvc.validatePeramlink();
        this.model = this.trajectorySrvc.model;
    }

    onSelectionChanged(range: SelectionRange) {
        this.selection = range;
    }

    onChartHighlightChanged(idx: number) {
        this.highlight = idx;
        this.highlightGeometry = this.trajectorySrvc.getPointForIdx(idx);
    }

    onAxisTypeChanged(axisType: string) {
        this.axisType = axisType;
    }

    onDottedChanged(dotted: boolean) {
        this.dotted = dotted;
    }

}
