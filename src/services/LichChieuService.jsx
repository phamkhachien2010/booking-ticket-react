import { baseService } from "./baseService";

export class LichChieuService extends baseService{
    constructor(){
        super();
    }

    getAllLichChieu = ()=>{
        return this.get('lich-chieu/lay-lich-chieu')
    }
}

export const lichChieuService = new LichChieuService()