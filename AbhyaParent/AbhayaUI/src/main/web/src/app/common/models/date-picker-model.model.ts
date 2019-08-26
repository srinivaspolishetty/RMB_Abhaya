export class DatePickerModel {
    minDate?: string;
    maxDate?: string;
    newDate?: string;
    rangeInputFormat?: String = "DD-MM-YYYY";
    bsRangeValue?: any[];
    dateInputFormat?: string = "dd-MM-yyyy";
    adaptivePosition?: Boolean;
    disabledDates?: any[];
    daysDisabled?: Number[];
    customTodayClass?: String;
    showWeekNumbers?: Boolean = false;
    containerClass?: String = "theme-blue";
    placement?: String = "top";
    outsideClick?: Boolean;
    triggers?: String;
    isOpen?: String;
    buttonName?: String;
    buttonRequired?: Boolean
}
