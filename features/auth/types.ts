import firebase from "firebase/app";

// export type User = firebase.User | null;
export type User = {
  email: string | null | undefined;
} | null;
