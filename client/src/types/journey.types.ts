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

export interface journeysListPageProps {
  title: string;
}

export interface journeysState {
  items: Journey[];
  isLoading: boolean;
  error: boolean;
  item: Journey;
}

export interface journeyTableProps {
  journeys: Journey[];
  text: string;
  pending: boolean;
  error: boolean;
}

export interface Data {
  DepartureStationName: string;
  ReturnStationName: string;
  CoveredDistance: number;
  Duration: number;
}

export type Order = "asc" | "desc";

export interface JourneyEnhancedTableProps {
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

export interface JourneyListTableBodyProps {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface JourneySearchBarProps {
  searched: string;
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

export type journeySearchedHeaders = {
  departureStation: string;
  returnStation: string;
  distance: string;
  duration: string;
};
