import useLocalStorage from "@rehooks/local-storage";
import { useEffect } from "react";

import { TOKEN } from "utils/storage.constants";

const useInterceptor = (axiosInstance) => {
  const token = useLocalStorage(TOKEN);

  useEffect(() => {
    const interceptorId = axiosInstance.interceptors.request.use(
      (config) =>
        // do some stuff here in your interceptor. access your store to check state etc.
        config
    );
    return () => {
      axiosInstance.interceptors.request.eject(interceptorId);
    };
  }, []);
};

export default useInterceptor;
