//Stations related types

import { journeysState } from "./journey.types";

export type Station = {
  id?: string; //MongoDB generated id
  FID: number;
  ID: number;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad?: string;
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

export interface stationTableProps {
  stations: stationsState;
  text: string;
}

export interface Data {
  Nimi: string;
  Osoite: string;
  Kaupunki: string;
}

export type Order = "asc" | "desc";

export interface StationEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  stations: any;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const stationsListHeadCells: readonly HeadCell[] = [
  {
    id: "Nimi",
    numeric: false,
    disablePadding: false,
    label: "Station",
  },
  {
    id: "Osoite",
    numeric: false,
    disablePadding: false,
    label: "Address",
  },
  {
    id: "Kaupunki",
    numeric: false,
    disablePadding: false,
    label: "City",
  },
];

export interface MapProps {
  lat: number;
  lng: number;
}

export interface InfoBoardProps {
  journeys: journeysState;
  stationData: Station;
  title: string;
}

export interface StationCount {
  station: string;
  count: number;
}
