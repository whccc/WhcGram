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
export interface IPostUser {
  _id: string;
  URLImagen: string;
  strTitle: string;
  strDescription: string;
  strIdUserPost: {
    URLImgPerson: string;
    strNames: string;
  };
}
