const dateNow = (res) => {
  const date = new Date();

  return res.json({
    "unix": date.getTime(),
    "utc": date.toUTCString()
  });
};

const dateUTC = (res, param) => {
  const date = new Date(param);
  const unix = Date.parse(date);

  return res.json({
    "unix": unix,
    "utc": date.toUTCString()
  });
};

const dateUnix = (res, param) => {
  if (param.match(/^\d+$/)) param = parseInt(param);

  const newDate = new Date(param);
  const unix = newDate.getTime();

  return res.json({
    "unix": unix,
    "utc": newDate.toUTCString()
  });
};

export { dateNow, dateUTC, dateUnix };