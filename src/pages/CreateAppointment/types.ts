export * from '../Dashboard/types';

export type RouteParams = {
  providerId: string;
};

export type ProviderContainerProps = {
  selected: boolean;
};

export type ProviderNameProps = {
  selected: boolean;
};

export type AvailabilityItem = {
  hour: number;
  available: boolean;
};

export type HourProps = {
  available: boolean;
  selected: boolean;
};

export type HourTextProps = {
  selected: boolean;
};
