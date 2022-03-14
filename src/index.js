import express from 'express';
import { dateNow, dateUTC, dateUnix } from './dates.js';

const app = express();

app.use(express.static('public'));

app.get('/api/:date?', (req, res) => {
  let param = req.params.date;
  if (!param) return dateNow(res);

  const regex = /\d+-(\d{1,2})-(\d{1,2})/;
  if (param.match(regex)) return dateUTC(res, param);
  
  dateUnix(res, param);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
});