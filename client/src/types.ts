//Journeys related types
export type Journey = {
  id: string; //MongoDB generated id
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

export interface journeyTableProps {
  journeys: journeysState;
}

export interface Data {
  DepartureStationName: string;
  ReturnStationName: string;
  CoveredDistance: number;
  Duration: number;
}

export type Order = "asc" | "desc";

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  journeys: any;
}

export interface TableBodyHomeProps {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
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

//Stations related types

export type Station = {
  id: string; //MongoDB generated id
  FID: number;
  ID: number;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: number;
  x: number;
  y: number;
};

export interface stationsState {
  items: Station[];
  isLoading: boolean;
  error: boolean;
  item: Station;
}
