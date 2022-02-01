import Authority from "../enums/Authority";
import Population from "../enums/Population";

interface Settlement {
  id: number;
  name: string;
  location: string;
  population: Population;
  authority: Authority;
  projects: Array<string>;
}

export default Settlement;
