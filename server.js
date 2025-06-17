const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 5500;
const games = require('./games.json');

// Add CSP headers
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; " +
    "script-src * 'unsafe-inline' 'unsafe-eval' blob:; " +
    "style-src * 'unsafe-inline'; " +
    "img-src * data: blob:; " +
    "font-src * data:; " +
    "connect-src *;"
  );
  next();
});

// Set proper MIME types
app.use((req, res, next) => {
  if (req.path.endsWith('.css')) {
    res.type('text/css');
  } else if (req.path.endsWith('.woff2')) {
    res.type('font/woff2');
  } else if (req.path.endsWith('.woff')) {
    res.type('font/woff');
  } else if (req.path.endsWith('.ttf')) {
    res.type('font/ttf');
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Redirect / to /index.htm if index.htm exists
app.get('/', (req, res, next) => {
  const fs = require('fs');
  const indexPath = path.join(__dirname, 'index.htm');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    next();
  }
});

// Redirect /tokens to tokens.html if it exists
app.get('/tokens', (req, res, next) => {
  const fs = require('fs');
  const tokensPath = path.join(__dirname, 'tokens.html');
  if (fs.existsSync(tokensPath)) {
    res.sendFile(tokensPath);
  } else {
    next();
  }
});

// Redirect /my-games to my-games.html if it exists
app.get('/my-games', (req, res, next) => {
  const fs = require('fs');
  const myGamesPath = path.join(__dirname, 'my-games.html');
  if (fs.existsSync(myGamesPath)) {
    res.sendFile(myGamesPath);
  } else {
    next();
  }
});

// Serve local play games if file exists, otherwise proxy to original site
app.get('/play/:game', async (req, res, next) => {
  const fs = require('fs');
  const localGamePath = path.join(__dirname, 'play', `${req.params.game}.html`);
  if (fs.existsSync(localGamePath)) {
    res.sendFile(localGamePath);
  } else {
    try {
      const response = await fetch(`https://gameit.app/play/${req.params.game}`);
      const html = await response.text();
      res.send(html);
    } catch (error) {
      res.status(404).send('Game not found');
    }
  }
});

// Proxy Next.js static files
app.get('/_next/*', async (req, res) => {
  const url = `https://gameit.app${req.originalUrl}`;
  try {
    const response = await fetch(url);
    res.set('Content-Type', response.headers.get('content-type'));
    response.body.pipe(res);
  } catch {
    res.status(404).send('Not found');
  }
});

// Proxy css2 with explicit Content-Type
app.get('/css2', async (req, res) => {
  const url = `https://gameit.app${req.originalUrl}`;
  try {
    const response = await fetch(url);
    res.set('Content-Type', 'text/css');
    response.body.pipe(res);
  } catch {
    res.status(404).send('Not found');
  }
});

// Proxy fonts with explicit Content-Type
app.get('/fonts/:font', async (req, res) => {
  const url = `https://gameit.app${req.originalUrl}`;
  try {
    const response = await fetch(url);
    const fontName = req.params.font;
    if (fontName.endsWith('.woff2')) {
      res.set('Content-Type', 'font/woff2');
    } else if (fontName.endsWith('.woff')) {
      res.set('Content-Type', 'font/woff');
    } else if (fontName.endsWith('.ttf')) {
      res.set('Content-Type', 'font/ttf');
    }
    response.body.pipe(res);
  } catch {
    res.status(404).send('Not found');
  }
});

// Local games API with sort, filter, search
app.get('/api/games', (req, res) => {
  let result = [...games];
  const { sort, filter, search } = req.query;

  // Фильтрация
  if (filter === 'featured') {
    result = result.filter(game => game.featured);
  }
  if (filter === 'freshly_minted') {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    result = result.filter(game => new Date(game.createdAt) > weekAgo);
  }

  // Поиск
  if (search) {
    result = result.filter(game => game.title.toLowerCase().includes(search.toLowerCase()));
  }

  // Сортировка
  if (sort === 'newest') {
    result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  if (sort === 'featured_at') {
    result = result.sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));
  }

  res.json(result);
});

// Universal API proxy for all /api/* requests
app.use('/api', async (req, res) => {
  const url = `https://gameit.app${req.originalUrl}`;
  try {
    const response = await fetch(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'transfer-encoding') {
        res.setHeader(key, value);
      }
    });
    response.body.pipe(res);
  } catch {
    res.status(502).send('API proxy error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 