import {
  DefaultAPIResponseProps,
  SearchAdviceAPIResponseProps,
} from '@src/types';

export interface ServiceParams {
  advice: RequestProps<{
    response: DefaultAPIResponseProps;
  }>;
  searchAdvice: RequestProps<{
    response: SearchAdviceAPIResponseProps;
  }>;
  testingError: RequestProps<{}>;
}

export interface RequestProps<T extends RequestPropsTemplate = {}> {
  params?: T['params'];
  body?: T['body'];
  response: T['response'];
}

export interface RequestPropsTemplate {
  params?: object;
  body?: object;
  response?: object;
}

export type ServiceNameType = keyof ServiceParams;
