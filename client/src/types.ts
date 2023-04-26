export type Journey = {
  id?: string;
  Departure: Date;
  Return: Date;
  DepartureStationId: number;
  DepartureStationName: string;
  ReturnStationName: string;
  ReturnStationId: number;
  CoveredDistance: number;
  Duration: number;
};

export interface journeysState {
  items: Journey[];
  isLoading: boolean;
  error: boolean;
  item: Journey;
}
