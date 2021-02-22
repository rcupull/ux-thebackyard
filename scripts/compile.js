const { exec } = require('child_process');


const handleDisplayOut = (err, stdout, stderr) => {
    console.log('stdout',stdout);
    console.log('stderr',stderr);
} 

exec('rimraf build')
exec('cross-env NODE_ENV=production babel src/components --presets @babel/preset-env,@babel/preset-react --ignore **/*.stories.js --out-dir build',handleDisplayOut);
  