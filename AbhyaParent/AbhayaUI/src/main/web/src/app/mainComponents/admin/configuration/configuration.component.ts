import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../../common/services/toaster.service';
import { CommonsService } from "../../../common/services/commonserviceapi";
import { Config } from "../../../common/models/config.model";
import { PaginationModel } from "../../../common/models/pagination.model";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass']
})
export class ConfigurationComponent implements OnInit {
  configName: string;
  configValue: string;
  configData: Config;
  systemPropertiesId: number;
  editConfig: boolean = false;

  constructor(private toasterService: ToasterService, private commonApi: CommonsService) {
  }

  ngOnInit() {
    this.getAllConfigData();
  }

  editConfigDetails(config) {
    this.configName = config.propertyName;
    this.configValue = config.propertyValue;
    this.systemPropertiesId = config.systemPropertiesId;
    console.log(config);
  }
  getAllConfigData() {
    this.commonApi.getConfigData()
      .subscribe((data: PaginationModel) => {
        this.configData = data.content;
        console.log(this.configData);
      })
  }



  executeConfig(configForm) {
    const data = {
      propertyName: this.configName,
      propertyValue: this.configValue,
      systemPropertiesId: this.systemPropertiesId
    }
    console.log(configForm);
    this.commonApi.saveConfig(JSON.stringify(data))
      .subscribe((data: any) => {
        (data.message === 'Success') ? this.toasterService.showSuccess('bottom-right', 'Successfully Executed') :
          (data.message === 'Already Existed') ? this.toasterService.showWarning('bottom-right', 'Command was already Sent Waiting for Response.') :
            this.toasterService.showError('bottom-right', '' + data.message);
            configForm.resetForm();
        this.configName = '';
        this.configValue = '';
        this.systemPropertiesId = null;
        this.getAllConfigData();
      }, error => {
        console.log('error', error);
      });


  }


}