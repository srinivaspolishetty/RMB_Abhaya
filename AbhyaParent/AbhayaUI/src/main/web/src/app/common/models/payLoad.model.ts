import { PageModel } from './page.model';

export class Payload {
    public key: string;
    public payload: string;
    public description: string;
    public commandType: string;
    public imeiNumber: string;
    public page: PageModel;
    public content: any;
}