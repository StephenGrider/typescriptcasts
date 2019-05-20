import fs from 'fs';

const data = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map(
    (row: string): string[] => {
      return row.split(',');
    }
  );

console.log(data);
