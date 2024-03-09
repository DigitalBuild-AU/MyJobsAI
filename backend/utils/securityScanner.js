const { exec } = require('child_process');
const { debugLog } = require('./debugLogger');

const runSecurityScan = () => {
  exec('npm audit', (error, stdout, stderr) => {
    if (error) {
      debugLog('Security scan completed with errors', error);
      return;
    }
    if (stderr) {
      debugLog('Security scan stderr', new Error(stderr));
      return;
    }
    debugLog(`Security scan results:\n${stdout}`);
  });
};

module.exports = { runSecurityScan };
