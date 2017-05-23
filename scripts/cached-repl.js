var R = require("ramda"),
    Path = require("path");
var curry = R.curry;


(function(a, b, c) {
  /* ../../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;
var R = require("ramda");


var fmap = R.curry((f, a) => {
	
  return a.map(f);

});
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? ../../../../../node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow ../../../../../node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of ../../../../../node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});


(function(a, b, c) {
  /* ../../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;
var R = require("ramda");
var R = require("ramda"),
    child_process = require("child_process");
var worker = (function worker$(p, f, done) {
  /* worker ../../../../../node_modules/kit/inc/shell.sibilant:10:0 */

  return Promise.resolve(f()).then(done, done);
});
var thenAlways = (function thenAlways$(p, f) {
  /* then-always ../../../../../node_modules/kit/inc/shell.sibilant:13:0 */

  return p.then((result) => {
  	
    return f(result);
  
  }, (err) => {
  	
    return f();
  
  });
});
var either = (function either$(f, g, v) {
  /* either ../../../../../node_modules/kit/inc/shell.sibilant:18:0 */

  return (function() {
    if (v) {
      return f(v);
    } else {
      return g(v);
    }
  }).call(this);
});
var handleExec = (function handleExec$(s, f, e, stdout, stderr) {
  /* handle-exec ../../../../../node_modules/kit/inc/shell.sibilant:21:0 */

  
});
var exec = (function exec$(c, args) {
  /* exec ../../../../../node_modules/kit/inc/core/function-expressions.sibilant:25:8 */

  return (new Promise((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return child_process.exec(c, args, (e, stdout, stderr) => {
    	
      (function() {
        if (stderr.length > 0) {
          return console.log("stderr", stderr.toString());
        }
      }).call(this);
      return (function() {
        if (e) {
          return fail(e);
        } else {
          return success(stdout.toString());
        }
      }).call(this);
    
    });
  
  }));
});
// thenAlways(thenAlways(thenAlways(thenAlways(exec([ "git", "branch", [ compileBranch ].join("") ].join(" ")), (result) => {
// 	
//   return exec([ "git", "checkout", [ compileBranch ].join("") ].join(" "));
// 
// }), (result) => {
// 	
//   return exec([ "git", "add", "." ].join(" "));
// 
// }), (result) => {
// 	
//   return exec([ "git", "commit", "-m", ("compiled " + path) ].join(" "));
// 
// }), (result) => {
// 	
//   return exec([ "git", "checkout", [ branchName ].join("") ].join(" "));
// 
// });
var sibilant = require("sibilant");
sibilant.dir = "./sib/";
var spawn = (require("child_process")).spawn,
    readline = require("readline"),
    fs = require("fs");
Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each cached-repl.sibilant:21:0 */

  this.forEach(f);
  return this;
});
var openDepth = 0,
    closeDepth = 0;
var handleInclude = (function handleInclude$(socket, firstCall) {
  /* handle-include cached-repl.sibilant:31:0 */

  return firstCall.contents.slice(1).each((e) => {
  	
    var path = resolveIncludedFilePath(eval(e.token)),
        prevSibPath = sibilant.dir;
    sibilant.dir = Path.dirname(path);
    var f = fs.readFileSync(path, "utf8");
    console.log("including", eval(e.token), "from", path);
    handleLine(socket, f);
    return sibilant.dir = prevSibPath;
  
  });
});
var compile = (function compile$(socket = this.socket, form = (function() {
  if (_forms.has(lispFragment)) {
    return _forms.get(lispFragment);
  } else {
    return (function(value) {
      /* ../../../../../node_modules/kit/inc/macros.sibilant:165:9 */
    
      _forms.set(lispFragment, value);
      return value;
    })((function() {
      /* ../../../../../node_modules/kit/inc/macros.sibilant:13:25 */
    
      console.log(";;first time encountering form");
      return sibilant(lispFragment);
    }).call(this));
  }
}).call(this)) {
  /* compile ../../../../../node_modules/kit/inc/core/function-expressions.sibilant:32:8 */

  ++(i);
  console.log("count", i);
  console.log(lispFragment);
  console.log(form.js);
  lispFragment = "";
  var firstCall = (function() {
    try {
      return form.ast.contents[0];
    } catch (e) {
      return ;
    }
  }).call(this);
  var firstCallName = (function() {
    try {
      return firstCall.contents[0].token;
    } catch (e) {
      return undefined;
    }
  }).call(this);
  return (function() {
    if (firstCallName === "include") {
      return handleInclude(socket, firstCall);
    } else {
      return socket.write((form.js + "\n"));
    }
  }).call(this);
});
var electronProcess = spawn("npm", [ "start" ], { stdio: [ null, null, null, "ipc" ] }),
    rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}),
    rlReady = false;
electronProcess.on("exit", process.exit);
electronProcess.stdout.pipe(process.stdout);
electronProcess.stderr.pipe(process.stderr);
var net = require("net");
var lispFragment = "";
var _forms = (new Map());
var i = 0;
var resolveIncludedFilePath = (function resolveIncludedFilePath$(file) {
  /* resolve-included-file-path cached-repl.sibilant:104:0 */

  (function() {
    if (!(file.match((new RegExp("\\.(sibilant|son)$", undefined))))) {
      return file = (file + ".sibilant");
    }
  }).call(this);
  (function() {
    if (file.match((new RegExp("^\\.\\.?/", undefined)))) {
      return file = Path.resolve(sibilant.dir, file);
    }
  }).call(this);
  return (function() {
    try {
      return require.resolve(file);
    } catch (e) {
      throw (new Error(("Failed to resolve file for inclusion in secondary compiler: " + file)))
    }
  }).call(this);
});
var accumulateLisp = curry((function(socket, msg) {
  /* ../../../../../node_modules/kit/inc/macros.sibilant:153:26 */

  lispFragment += (msg + "\n");
  msg.split("").forEach((char) => {
  	
    return (function() {
      if (char === "(") {
        return ++(openDepth);
      } else if (char === ")") {
        return ++(closeDepth);
      }
    }).call(this);
  
  });
  return (function() {
    if (openDepth === closeDepth) {
      return compile(socket);
    }
  }).call(this);
}));
var handleLine = curry((function(socket, data) {
  /* ../../../../../node_modules/kit/inc/macros.sibilant:153:26 */

  return (data + "\n").toString().split("\n").forEach(accumulateLisp(socket));
}));
var startReadline = (function startReadline$(socket) {
  /* start-readline cached-repl.sibilant:137:0 */

  console.log("client connected to repl");
  rl.resume();
  socket.pipe(process.stdout);
  socket.on("close", () => {
  	
    console.log("readline closed");
    rl.removeAllListeners("line");
    return rl.pause();
  
  }).once("error", (err) => {
  	
    console.log("error on", "close", "of", "socket", "given", "null");
    return console.log(err);
  
  });
  socket.on("data", handleLine(socket));
  return rl.on("line", handleLine(socket));
});
var readlineServer = net.createServer(startReadline).listen(8120);
(function() {
  if (!(rlReady)) {
    rlReady = true;
    return console.log("readline done loading");
  }
}).call(this);