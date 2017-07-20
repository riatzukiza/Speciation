

(function(a, b, c) {
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

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
  /* is.empty? ../../../../node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow ../../../../node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of ../../../../node_modules/kit/inc/core/fp.sibilant:17:0 */

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
var _paths = (new Map());
var tokenized = (function tokenized$(p) {
  /* tokenized src/relationship.sibilant:7:0 */

  return (function() {
    if (_paths.has(p)) {
      return _paths.get(p);
    } else {
      return (function(value) {
        /* ../../../../node_modules/kit/inc/macros.sibilant:162:9 */
      
        _paths.set(p, value);
        return value;
      })((function() {
        /* ../../../../node_modules/kit/inc/macros.sibilant:13:25 */
      
        return p.split("/");
      }).call(this));
    }
  }).call(this);
});
var Relationship = Interface.define("Relationship", { 
  init( _T = [],_t = create(TreeMap)() ){ 
    
      this._T = _T;this._t = _t;
      return this;
    
   },
  doc:"used when there are more than one tree with a similar structure\n"+"that you want to access simultaneously.",
  specify(  ){ 
    
      return create(Relationship)();
    
   },
  add( p = this.p,_T = this._T,_t = this._t ){ 
    
      "Add a relationship to the tree. When a relationship is\n"+"made in this data structure, it means that the underlying tree\n"+"structures are expected to share this structural feature.";
      return this._p = Promise.resolve(this._p).then((nil) => {
      	
        return Future.Array.mapAll(($fpipe) => {
        	
          return $fpipe.find(p);
        
        }, _T).then((nodes) => {
        	
          return _t.set(p, nodes);
        
        });
      
      });
    
   },
  find( p = this.p,_t = this._t ){ 
    
      "locate a relationship in the diagram";
      return this._p = Promise.resolve(this._p).then((nil) => {
      	
        return _t.find(p);
      
      });
    
   },
  each( f = this.f,_a = this._a ){ 
    
   }
 });
exports.Relationship = Relationship;