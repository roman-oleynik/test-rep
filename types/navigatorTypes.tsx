import { LocationResponse } from "./appDataTypes";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Main: undefined;
  History: undefined;
  Map: undefined;
};

export type MainTabParamList = {
  MainTabScreen: undefined;
};

export type HistoryTabParamList = {
  HistoryTabScreen: undefined;
  ChosenLocationResponse: undefined,
};

export type MapTabParamList = {
  MapTabScreen: undefined;
};
