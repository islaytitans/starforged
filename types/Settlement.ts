import { Guid } from "guid-typescript";
import Authority from "../enums/Authority";
import Population from "../enums/Population";

interface Settlement {
  id: Guid;
  name?: string;
  location?: string;
  population?: Population;
  authority?: Authority;
  projects?: Array<string>;
}

export default Settlement;
