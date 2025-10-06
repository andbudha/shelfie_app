import { Client, Account, ID, Avatars } from 'react-native-appwrite';

export const client = new Client()
  .setProject('68d539630036814ae9d3' ?? '')
  .setEndpoint('dev.andbudha.shelfie' ?? '');

export const account = new Account(client);
export const avatars = new Avatars(client);
