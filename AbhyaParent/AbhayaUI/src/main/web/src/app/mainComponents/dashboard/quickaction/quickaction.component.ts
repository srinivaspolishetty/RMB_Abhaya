import { Component, OnInit } from '@angular/core';
import { TripServiceApi } from '../../../common/services/tripserviceapi';
import { PaginationModel } from "../../../common/models/pagination.model";
import { PanicAlert } from "../../../common/models/panic.model";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quickaction',
  templateUrl: './quickaction.component.html',
  styleUrls: ['./quickaction.component.sass']
})
export class QuickactionComponent implements OnInit {

  panicData: Array<PanicAlert>;
  isDataExists: Boolean = false;

  constructor(private tripserviceApi: TripServiceApi,
    private router: Router) { }

  ngOnInit() {
  }

  tripMapView(tripDetails) {
    this.router.navigate(['/trip/triptracking'],
      {
        queryParams: { tripId: tripDetails.tripId },
        queryParamsHandling: 'merge'
      })
  }

  getPanicData(searchDate: string, districtId: string, cityId: string, rtoId : string) {
    this.tripserviceApi.getPanicDetails(0, 100, searchDate, '', '', false, districtId, cityId, rtoId)
      .subscribe((_data: PaginationModel) => {
        this.panicData = _data.content;
        this.isDataExists = (this.panicData.length > 0);
      });
  }

}
