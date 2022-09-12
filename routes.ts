// @ts-nocheck

import express, { Express, Request, Response } from 'express'
import db from './db/conn'

const app: Express = express();
const port = 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/animal', (req: Request, res: Response) => {
    const sophia = db.getDb();

    sophia
      .collection("animals")
      .insertOne({ name: "Luna", age: 4 }, (err, result) => {
        if (err) {
          console.log('error')
          res.status(400).send('No animal')
        } else {
          console.log(`Added a new match with id ${result.insertedId}`);
          res.status(201).send();
        }
      })
});

app.post('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  db.connectToServer();
  console.log(`[server]: Server is running at https://localhost:${port}`);
});