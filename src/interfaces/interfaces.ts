export interface ITheme {
  dark: boolean;
}

export interface ITabMenu {
  key: string;
  label: string;
  icon: string;
  screen: JSX.Element;
  barColor: string;
  pressColor: string;
}
