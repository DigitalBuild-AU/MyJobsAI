const https = require('https');
const fs = require('fs');
const { debugLog } = require('../utils/debugLogger');

function startSecureServer(app, PORT) {
  const sslOptions = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH)
  };
  https.createServer(sslOptions, app).listen(PORT, () => {
    debugLog(`Server is running on port ${PORT}`);
  }).on('error', (err) => {
    debugLog(`Server start-up error: ${err}, Stack: ${err.stack}`, true);
  });
}

module.exports = startSecureServer;

module.exports = { startSecureServer };
