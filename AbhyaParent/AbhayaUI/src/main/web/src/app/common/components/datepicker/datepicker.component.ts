import { Component, OnInit, Input, Output, EventEmitter,Directive, forwardRef, HostBinding } from '@angular/core';
import { DatePickerModel } from '../../models/date-picker-model.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { createForbiddenNameValidator } from '../../directives/app-forbidden-name.directive';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    },
    { 
      provide: NG_VALIDATORS, 
      useExisting: forwardRef(() => DatepickerComponent), 
      multi: true 
    },DatePipe
  ]
})
export class DatepickerComponent implements ControlValueAccessor {
  @Input() datePickerModel:DatePickerModel;
  public mainModel = new DatePickerModel();
  testdate: string;
  changedValue: string;
  constructor(public datepipe: DatePipe) {}
  value: string = '';
  minDate: Date;
  maxDate: Date;
  validateFn = createForbiddenNameValidator('tom');
  onChange = (value: string) => {};
  onTouched = () => {};

  validate(c: any) {
    return this.validateFn(c);
  }

  valueChanged(value: string) {
    this.changedValue = value.toString(); 
    if(this.changedValue.length !== 10){
      this.writeValue(this.datepipe.transform(value,this.datePickerModel.dateInputFormat));
    } else {
      this.value = value;
    }
  }

  writeValue(value:string = ''): void {
   if(value !== null && (value.indexOf('-') > -1)){
      this.value = value;
      this.onChange(this.value);
    }
  }
  
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit() {
    this.datePickerModel = {...this.mainModel,...this.datePickerModel};
    //for mindate and mixdate
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - parseInt(this.datePickerModel.minDate));
    this.maxDate.setDate(this.maxDate.getDate() + parseInt(this.datePickerModel.maxDate));
  }
}
