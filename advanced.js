const si = require('systeminformation');

si.cpu().then(data => console.log(data)).catch(error=> console.log(error));

si.system().then(data => console.log(data)).catch(error => console.error(error));

si.bios().then(data => console.log(data)).catch(error => console.error(error));

si.baseboard().then(data => console.log(data)).catch(error => console.error(error));

si.cpu().then(data => console.log(data)).catch(error => console.error(error));

si.cpuCache().then(data => console.log(data)).catch(error => console.error(error));

si.cpuTemperature().then(data => console.log(data)).catch(error => console.error(error));

si.mem().then(data => console.log(data)).catch(error => console.error(error));

si.battery().then(data => console.log(data)).catch(error => console.error(error));

si.graphics().then(data => console.log(data)).catch(error => console.error(error));

si.currentLoad().then(data => console.log(data)).catch(error => console.error(error));

si.processLoad('mysql,apache2').then(data => console.log(data)).catch(error => console.error(error));

si.inetChecksite('https://yahoo.com').then(data => console.log(data)).catch(error => console.error(error));