import { Role } from './roles.model';

export class UserDetails {
    public userId: Number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public mobileNumber: string;
    public isEnabled: boolean;
    public emailId: string;
    public departmentId: any;
    public departmentName: string;
    public stateId: any;
    public stateName: string;
    public districtId: any;
    public districtName: string;
    public cityId: any;
    public cityName: string;
    public createdDate: Date;
    public userLevel: any;
    public userRoles: Role[];
    public rolesVO: Role[];
    public roles: number[];
}
