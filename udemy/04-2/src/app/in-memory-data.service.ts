import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id:11, name: 'aaaa'},
      { id:12, name: 'bbbb'},
      { id:13, name: 'cccc'},
      { id:14, name: 'dddd'},
      { id:15, name: 'eeee'},
      { id:16, name: 'ffff'},
      { id:17, name: 'gggg'},
      { id:18, name: 'hhhh'},
    ];
    return { members };
  }
}
