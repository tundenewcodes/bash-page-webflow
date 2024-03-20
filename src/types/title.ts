import { ReactNode } from 'react';


export enum HeaderType {
  h1 = "h1",
  h2 = "h2",
}

export type ITitle = {
  textColor: string;
  text: string;
  style?: {};
  cName?: string;
  type: HeaderType;
  children?: ReactNode
}