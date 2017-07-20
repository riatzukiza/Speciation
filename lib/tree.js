console.log("hi");


(function(a, b, c) {
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;


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


(function(a, b, c) {
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;


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
var { 
  Interface
 } = require("./interface");
var Tree = Interface.define("Tree", { 
  init(  ){ 
    
      
      return this;
    
   },
  value:null,
  parent:null,
  depth:0,
  traverseBranches__QUERY:true,
  branch__QUERY( value = this.value ){ 
    
      return null === value;
    
   },
  leaf__QUERY( value = this.value ){ 
    
      return !(null === value);
    
   },
  descend( seq = this.seq,f = this.f,tree = this ){ 
    
      return (function() {
        if (0 === seq.length) {
          return tree;
        } else {
          return f(tree, seq);
        }
      }).call(this);
    
   },
  delete( seq = this.seq ){ 
    
   },
  find( seq = this.seq,tree = this ){ 
    
      return (function() {
        if (0 === seq.length) {
          return tree;
        } else {
          return tree._find(seq);
        }
      }).call(this);
    
   },
  has( seq = this.seq,tree = this ){ 
    
      return (function() {
        if (tree.find(seq)) {
          return true;
        } else {
          return false;
        }
      }).call(this);
    
   },
  insert( seq = this.seq,_insert = this._insert ){ 
    
      return (function() {
        if (0 === seq.length) {
          return this;
        } else {
          return this._insert(seq).insert(seq.slice(1));
        }
      }).call(this);
    
   },
  set( seq = this.seq,value = this.value,tree = this ){ 
    
      return tree.insert(seq).value = value;
    
   },
  add( key = this.key ){ 
    
      return (this._children.get(key) || create(this)(this._children, this));
    
   },
  each( f = this.f,traverseBranches__QUERY = this.traverseBranches__QUERY,_children = this._children ){ 
    
      return (function() {
        if (traverseBranches__QUERY) {
          return _children.each((node, k) => {
          	
            f(node, k);
            return node.each(f, true);
          
          });
        } else {
          return _children.each((node, k) => {
          	
            return (function() {
              if (leaf__QUERY(node)) {
                return f(node, k);
              } else {
                return node.each(f, false);
              }
            }).call(this);
          
          });
        }
      }).call(this);
    
   }
 });
exports.Tree = Tree;
var TreeMap = Interface.define("TreeMap", { 
  init( value = this.value,parent = this.parent,_children = (new Map()) ){ 
    
      this.value = value;this.parent = parent;this._children = _children;
      return this;
    
   },
  extend:Tree,
  delete( seq = this.seq,tree = this ){ 
    
      var node = tree.find(seq),
          rkeys = seq.reverse();
      return rkeys.each((k) => {
      	
        node.parent._children.delete(k);
        return node = node.parent;
      
      });
    
   },
  get _find(  ){ 
    
      return (seq) => {
      	
        var node = this._children.get(seq[0]);
        return (function() {
          if (node) {
            return node.find(seq.slice(1));
          } else {
            return false;
          }
        }).call(this);
      
      };
    
   },
  get _insert(  ){ 
    
      return (seq) => {
      	
        var node = this.add(seq[0]);
        var name = seq[0];
        node.name = name;
        node.seq = seq;
        this._children.set(name, node);
        return node;
      
      };
    
   }
 });
exports.TreeMap = TreeMap;