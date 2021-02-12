import React from 'react';

interface ILocalStorage {
  JsonUser: { URLImgPerson: string; _id: string; strNames: string };
  HookRegisterUserAsync: (FormData: any) => Promise<boolean | null>;
  HookLoginAsync: ({
    strUser,
    strPassword,
  }: {
    strUser: string;
    strPassword: string;
  }) => Promise<boolean | null>;
  HookCloseSessionAsync: () => Promise<void>;
}
const UserLocalStorageContext = React.createContext<ILocalStorage | any>({});

export default UserLocalStorageContext;
