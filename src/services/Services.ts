import axios, {AxiosRequestConfig} from 'axios';
import {ServiceNameType, ServiceParams} from './ServiceType';

const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://api.adviceslip.com/advice',
  headers: {
    'cache-control': 'no-cache',
  },
});

export interface ServiceConfig<param = object, body = Object>
  extends AxiosRequestConfig {
  params?: param;
  data?: body;
}

export interface RequestDataConfigProps<T extends ServiceNameType>
  extends ServiceConfig<ServiceParams[T]['params'], ServiceParams[T]['body']> {
  onRequestFulfilled: (value: ServiceParams[T]['response']) => any;
  onRequestRejected: (error: any) => any;
  onRequestFinally?: () => any;
}

export const SERVICE_NAME: Record<ServiceNameType, AxiosRequestConfig> = {
  advice: {
    method: 'GET',
  },
  searchAdvice: {
    method: 'GET',
  },
  testingError: {
    method: 'GET',
  },
};

export interface RequestDataProps
  extends Omit<AxiosRequestConfig, 'data' | 'body' | 'params'> {}

export function requestData<T extends ServiceNameType>(
  serviceName: T,
  config?: RequestDataConfigProps<T>,
) {
  AXIOS_INSTANCE.request<ServiceParams[T]['response']>({
    ...SERVICE_NAME[serviceName],
    ...config,
  })
    .then(
      response => {
        if (response.status === 200) {
          if (config?.onRequestFulfilled && response.status) {
            config.onRequestFulfilled(response.data);
          }
          return response;
        } else {
          if (config?.onRequestRejected) {
            config.onRequestRejected(response);
          }
        }
      },
      error => {
        if (config?.onRequestRejected) {
          config.onRequestRejected(error);
        }
        return error;
      },
    )
    .finally(() => config?.onRequestFinally?.());
}
