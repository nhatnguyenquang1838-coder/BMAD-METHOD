const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');

const script = path.join(__dirname, '..', 'tools', 'power-help.js');
const data = JSON.parse(execFileSync(process.execPath, [script, '--json'], { encoding: 'utf8' }));
assert.equal(data.id, 'bmad');
assert.ok(data.when.length > 0);
assert.ok(data.offline.includes('does not'));
assert.match(execFileSync(process.execPath, [script, '--help'], { encoding: 'utf8' }), /BMAD Method/);
const cli = path.join(__dirname, '..', 'tools', 'installer', 'bmad-cli.js');
assert.match(execFileSync(process.execPath, [cli, '--help'], { encoding: 'utf8' }), /BMAD Core CLI/);
