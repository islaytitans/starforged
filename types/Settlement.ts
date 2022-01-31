interface Settlement {
  name: string;
  location: string;
  population: Population;
  authority: Authority;
  projects: Array<string>;
}

export default Settlement;
