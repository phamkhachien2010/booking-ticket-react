import { baseService } from "./baseService";

export class PhimService extends baseService{
    constructor(){
        super();
    }

    getAllPhim = ()=>{
        return this.get('phim/get-all-phim')
    }
}

export const phimService = new PhimService()