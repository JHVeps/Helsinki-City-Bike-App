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

export interface Data {
  DepartureStationName: string;
  ReturnStationName: string;
  CoveredDistance: number;
  Duration: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "DepartureStationName",
    numeric: false,
    disablePadding: false,
    label: "Departure Station",
  },
  {
    id: "ReturnStationName",
    numeric: false,
    disablePadding: false,
    label: "Return Station",
  },
  {
    id: "CoveredDistance",
    numeric: true,
    disablePadding: false,
    label: "Distance traveled (km)",
  },
  {
    id: "Duration",
    numeric: true,
    disablePadding: false,
    label: "Travel time (min)",
  },
];
