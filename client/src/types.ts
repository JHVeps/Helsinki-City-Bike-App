export type Journey = {
  id: string;
  Departure: string; // Store as ISO string
  Return: string; // Store as ISO string
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
