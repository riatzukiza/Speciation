

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
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
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var sibilant = require("sibilant"),
    repl = require("repl"),
    chokidar = require("chokidar"),
    { 
  FileSystem
 } = require("./file-system");
var { 
  EventEmitter
 } = require("events");
Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each eval.sibilant:12:0 */

  this.forEach(f);
  return this;
});
var SourceMap = (function(lib, src, _cache, changed, members, event) {
  /* node_modules/kit/inc/macros.sibilant:162:9 */

  return { 
    state:Promise.all([ src, lib ]),
    get event(  ){ 
      
        return event;
      
     },
    update( [ srcf, libf ] ){ 
      
        return this.state = this.state.then((state) => {
        	
          return srcf.string.then((s) => {
          	
            var r = sibilant(s).js;
            libf.string = r;
            return event.emit("update", [ srcf, libf ]);
          
          });
        
        });
      
     },
    add( p ){ 
      
        return this.state = this.state.then((state) => {
        	
          return Promise.all([ src.find((p + ".sibilant")), lib.find((p + ".js")) ]).then(([ src_, l ]) => {
          	
            var r = [ src_, l ];
            chokidar.watch(src_.path).on("change", () => {
            	
              console.log("file changed");
              return this.update(r);
            
            });
            return event.emit("load", r);
          
          });
        
        });
      
     },
    find( p ){ 
      
        return (function() {
          if (_cache.has(p)) {
            return _cache.get(p);
          } else {
            return (function(value) {
              /* node_modules/kit/inc/macros.sibilant:162:9 */
            
              _cache.set(p, value);
              return value;
            })((function() {
              /* node_modules/kit/inc/macros.sibilant:13:25 */
            
              return this.add(p);
            }).call(this));
          }
        }).call(this);
      
     },
    load( ...p ){ 
      
        return Promise.all(p.map((function() {
          /* eval.sibilant:59:44 */
        
          return this.find(arguments[0]);
        })));
      
     }
   };
})(create(FileSystem)("./lib"), create(FileSystem)("./src"), (new Map()), [], [], (new EventEmitter()));
exports.SourceMap = SourceMap;