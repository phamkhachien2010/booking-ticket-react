import {baseService} from './baseService'

export class HeThongRapService extends baseService {
    constructor() {
        super();
    }

    getAllHeThongRap =()=>{
        return this.get('heThongRap/get-all-heThongRap')
    }

    getAllCumRap = ()=>{
        return this.get('cum-rap/get-all-cum-rap')
    }

    getAllRap = ()=>{
        return this.get('rap/get-all-rap')
    }
}

export const heThongRapService = new HeThongRapService()