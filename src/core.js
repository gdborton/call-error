// This is a hack around external usage to force a manual bundle split.
const handleBarsRuntime = require('/Users/gary_borton/code/call-error/node_modules/handlebars/runtime.js');
const requiredModules = {
  'handlebars/runtime': handleBarsRuntime,
}

window.require = function(key) {
  return requiredModules[key];
}

require.ensure([], () => {
  require('./handlebars_templates/async.hbs');
});
