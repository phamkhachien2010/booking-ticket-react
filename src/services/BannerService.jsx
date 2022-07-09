import { baseService } from "./baseService";

export class BannerService extends baseService {
  constructor() {
    super();
  }

  getAllBanner = () => {
    return this.get("banners/get-all-banner");
  };
}

export const bannerService = new BannerService();
