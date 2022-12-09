import axios from "axios";
import useMainStore from "@/stores/modules/main";
import { baseURL, TIMEOUT } from "./config";
const mainStore = useMainStore();
class HYRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT,
    });
  }

  request(config) {
    mainStore.isLoading = true;
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log("request err:", err);
          reject(err);
        })
        .finally(() => {
          mainStore.isLoading = false;
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new HYRequest(baseURL);
