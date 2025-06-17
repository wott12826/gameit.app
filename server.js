const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 5500;

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

// Proxy /play/:game to gameit.app
app.get('/play/:game', async (req, res) => {
  const gameName = req.params.game;
  try {
    const response = await fetch(`https://gameit.app/play/${gameName}`);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(404).send('Game not found');
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

// API routes
app.get('/api/online-users', async (req, res) => {
  try {
    const response = await fetch('https://gameit.app/api/online-users');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching online users:', error);
    res.json({ count: 0 });
  }
});

app.get('/api/games', async (req, res) => {
  try {
    const category = req.query.category;
    const response = await fetch(`https://gameit.app/api/games${category ? `?category=${category}` : ''}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.json([]);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 