import { QueryClient } from 'react-query';

const QueryClientSetup = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false
      },
      mutations: {
        // onSuccess: ({ message, type, data }: any) => {
        //   if (message && type) {
        //     toastNotification(message, type);
        //   }
        //   return data;
        // },
        // onError: ({ response }: any) => {
        //   if (response?.data?.message) {
        //     toastNotification(response.data.message, response.data?.type || 'error');
        //   }
        // }
      }
    }
  });

export default QueryClientSetup;
