export interface DefaultAPIResponseProps {
  slip: Slip;
}

export interface Slip {
  id: number;
  advice: string;
}

export interface SearchSlipProps extends Slip {
  date: string;
}

export interface SearchMessageProps {
  text: string;
  type: string;
}

export interface SearchAdviceAPIResponseProps {
  message?: SearchMessageProps;
  total_results?: string;
  query?: string;
  slips?: SearchSlipProps[];
}
