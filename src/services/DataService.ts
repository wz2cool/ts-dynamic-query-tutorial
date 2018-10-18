import { users } from "./userData";
import { IUser } from "../models/interfaces/IUser";

export class DataService {
  private constructor() {
    // hide constructor
  }

  public static getUsers(): IUser[] {
    return users;
  }
}
