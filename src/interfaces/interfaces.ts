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
export interface IUser {
  _id: string;
  URLImgPerson: string;
  strNames: string;
}
export interface IDataRoom {
  _id: string;
  ArrayMessages: [
    {
      _idSendingUser: string;
      Message: string;
    }
  ];
  strType: string;
  ArrayMembers: Array<any>;
}

export interface IDataInitialRoom {
  _idRoom: string;
  strType: string;
  _idSendingUser: string;
  ArrayMembers: Array<{
    IdUser: string;
  }>;
  Message?: string;
}
