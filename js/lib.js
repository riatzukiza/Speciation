Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each sib/lib/natives/array.sibilant:1:0 */

  this.forEach(f);
  return this;
});
Array.prototype.bind = (function Array$prototype$bind$(f) {
  /* Array.prototype.bind sib/lib/natives/array.sibilant:4:0 */

  return (function(r) {
    /* sib/meta/macros.sibilant:119:9 */
  
    this.each((a) => {
    	
      return r.push(f(a));
    
    });
    return r;
  })([]);
});
// [ [ 1, 2, 3 ], [ 4, 5, 6 ] ].bind((a) => {
// 	
//   return a;
// 
// });
Map.prototype.each = (function Map$prototype$each$(f) {
  /* Map.prototype.each sib/lib/natives/map.sibilant:1:0 */

  this.forEach(f);
  return this;
});
const Interface={ 
  symbol:Symbol("Interface"),
  symbols:{  },
  types:{  }
 };
Interface.create = (function Interface$create$() {
  /* Interface.create sib/lib/obj/interface.sibilant:7:0 */

  return create(this)(...arguments);
});
Interface.define = (function Interface$define$(name, obj = {  }, shares = (obj.shares || []), ext = (obj.extend || {  }), build = obj.build) {
  /* Interface.define sib/lib/obj/interface.sibilant:10:0 */

  var types = this.types,
      symbols = this.symbols;
  return (function() {
    if (name in symbols) {
      console.log("modifying interface", name);
      return mixin(obj, types[symbols[name]]);
    } else {
      return (function(symbol) {
        /* sib/meta/macros.sibilant:119:9 */
      
        console.log("creating interface", name);
        return (function(m) {
          /* sib/meta/macros.sibilant:119:9 */
        
          symbols[name] = symbol;
          types[symbol] = m;
          (function() {
            if (m.build) {
              console.log("attempting to build interface", build);
              return m.build();
            }
          }).call(this);
          return m;
        })(extend(ext, mixin([ { 
          name,
          symbol
         }, ...shares ], obj)));
      })(Symbol(name));
    }
  }).call(this);
});
const PromiseWriter={ 
  symbol:Symbol("PromiseWriter"),
  init( stream = this.stream,promise = Promise.resolve() ){ 
    
      this.stream = stream;this.promise = promise;
      return this;
    
   }
 };
PromiseWriter.write = (function PromiseWriter$write$(message = this.message, promise = this.promise, stream = this.stream) {
  /* Promise-writer.write sib/index.sibilant:14:8 */

  console.log("writing", message);
  return (function() {
    if (message) {
      return this.promise = promise.then((nil) => {
      	
        return Promise.resolve(message).then((value) => {
        	
          return (new Promise((success, fail) => {
          	
            var resolve = success,
                reject = fail;
            console.log("wrote to stream with promise");
            return stream.write(value, success);
          
          }));
        
        });
      
      });
    }
  }).call(this);
});
var euclidianDistance = (function euclidianDistance$(x, y, a, b) {
  /* euclidian-distance sib/lib/math/geometry.sibilant:1:0 */

  return Math.sqrt((Math.pow((x - a), 2) + Math.pow((y - b), 2)));
});
exports.euclidianDistance = euclidianDistance;
var square = (function square$(dim, f) {
  /* square sib/lib/math/geometry.sibilant:6:0 */

  var lim = Math.round((dim / 2));
  (function() {
    /* sib/meta/macros.sibilant:27:8 */
  
    var $for = null;
    for (var i = (0 - lim);i <= lim;++(i))
    {
    $for = (function() {
      /* sib/meta/macros.sibilant:29:35 */
    
      return (function() {
        /* sib/meta/macros.sibilant:27:8 */
      
        var $for = null;
        for (var j = (0 - lim);j <= lim;++(j))
        {
        $for = (function() {
          /* sib/meta/macros.sibilant:29:35 */
        
          return f(i, j);
        }).call(this);
        }
        ;
        return $for;
      }).call(this);
    }).call(this);
    }
    ;
    return $for;
  }).call(this);
  return null;
});
;
var add = (function add$(a, b) {
  /* add sib/lib/math.sibilant:7:0 */

  return (a + b);
});
var summate = (function summate$(a) {
  /* summate sib/lib/math.sibilant:8:0 */

  return a.reduce(add, 0);
});
var http = require("http"),
    Future = require("./lib/common/async"),
    R = require("ramda");
var writeElementAttribute = (function writeElementAttribute$(value, key) {
  /* write-element-attribute sib/lib/html/element.sibilant:16:0 */

  return Promise.resolve(value).then((value) => {
  	
    return stream.write((key + "=" + "'" + value + "' "));
  
  });
});
const HtmlElement={ 
  symbol:Symbol("HtmlElement"),
  get body(  ){ 
    
      return this._body;
    
   },
  get stream(  ){ 
    
      return create(PromiseWriter)(this._stream);
    
   },
  get promise(  ){ 
    
      return this._promise;
    
   },
  init( name = "",attributes = {  },_body = [],_stream = this._stream,_promise = Promise.resolve() ){ 
    
      this.name = name;this.attributes = attributes;this._body = _body;this._stream = _stream;this._promise = _promise;
      return this;
    
   }
 };
var htmlElement = create(HtmlElement);
var renderElementAttribute = R.curry((value, key, stream) => {
	
  "given a key and a value, render the attribute string fragment";
  return stream.write((" " + (key + "=" + "'" + value + "' ")));

});
HtmlElement.render = (function HtmlElement$render$(stream = this.stream, name = this.name, attributes = this.attributes, body = this.body) {
  /* Html-element.render sib/index.sibilant:14:8 */

  "Write an html document fragment to a stream, and its content. Content can be a string, promise, or a renderable. ";
  return (function(renderElementAttribute, renderChildSegment, endOpeningTag, renderOpeningTag, renderClosingTag) {
    /* sib/meta/macros.sibilant:119:9 */
  
    return (function(renderAttributes, renderChildren) {
      /* sib/meta/macros.sibilant:119:9 */
    
      renderOpeningTag();
      renderAttributes();
      endOpeningTag();
      renderChildren();
      return renderClosingTag();
    })(() => {
    	
      return Object.keys(attributes).map((k) => {
      	
        return renderElementAttribute(attributes[k], k);
      
      });
    
    }, () => {
    	
      return body.map((element) => {
      	
        return renderChildSegment(element);
      
      });
    
    });
  })((value, key) => {
  	
    "given a key and a value, render the attribute string fragment associated to the given stream";
    return stream.write((" " + key + "=" + "'" + value + "' "));
  
  }, (segment) => {
  	
    "Function that is to be called for each segment of the stream, calls the render method of the segment\n"+"if it has one, otherwise its just written to the stream";
    return (function() {
      if (segment.render) {
        return segment.render(stream);
      } else {
        return stream.write(("" + segment));
      }
    }).call(this);
  
  }, () => {
  	
    "insert the end of an opening html tag.";
    return stream.write(">");
  
  }, () => {
  	
    return stream.write(("<" + name));
  
  }, () => {
  	
    return stream.write(("</" + name + ">"));
  
  });
});
Array.prototype.each = (function Array$prototype$each$(f) {
  /* Array.prototype.each sib/lib/html/element.sibilant:83:0 */

  this.forEach(f);
  return this;
});
var renderTestDocument = (function renderTestDocument$(res) {
  /* render-test-document sib/lib/html/element.sibilant:122:0 */

  return "html"({  }, create(HtmlElement)("head"({  }, create(HtmlElement)()), "body"({  }, create(HtmlElement)("h1"({  }, create(HtmlElement)("this is a shitty website!")), "div"({ id: "main-container" }, create(HtmlElement)("div"({  }, create(HtmlElement)("yes, yes it is.")), "div"({  }, create(HtmlElement)(Date.now())), "div"({  }, create(HtmlElement)("and that was the time.")))))))).render(res);
});
var renderChildren = R.curry((_parent, c, i, a) => {
	
  return (function() {
    if (typeof c === "undefined") {
      return null;
    } else if (c.render) {
      return c.render(_parent);
    } else if ((c && "object" === typeof c && "Array" === c.constructor.name)) {
      return c.each(renderChildren(_parent));
    } else if (typeof c === "string") {
      return _parent._node.appendChild(document.createTextNode(c));
    } else if (typeof c === "number") {
      return _parent._node.appendChild(document.createTextNode(("" + c)));
    } else if (typeof c === "function") {
      return renderChildren(_parent, c(_parent));
    } else if ((c instanceof Element)) {
      return (function(node) {
        /* sib/meta/macros.sibilant:119:9 */
      
        a[i] = node;
        return renderChildren(_parent, node, i, a);
      })(DocumentNode.wrap(c, _parent._node));
    } else {
      return _parent._node.appendChild(c);
    }
  }).call(this);

});
var DocumentNode = Interface.define("DocumentNode", { 
  init( tagName = this.tagName,attributes = this.attributes,_children = [],_parent = this._parent,_node = document.createElement(tagName) ){ 
    
      this.tagName = tagName;this.attributes = attributes;this._children = _children;this._parent = _parent;this._node = _node;
      return this;
    
   },
  extend:EventEmitter.prototype,
  get children(  ){ 
    
      return this._children;
    
   },
  render( _parent = this._parent,attributes = this.attributes,tagName = this.tagName,_node = this._node,children = this.children ){ 
    
      _node.innerHTML = "";
      this._parent = _parent;
      _parent._node.appendChild(_node);
      attributes.each((a, k) => {
      	
        return _node[k] = a;
      
      });
      children.each(renderChildren(this));
      this.emit("render");
      return this;
    
   },
  wrap( _node,_parent ){ 
    
      return create(DocumentNode)(_node.tagName, {  }, [], _parent, _node);
    
   },
  append( node = this.node,children = this.children ){ 
    
      children.push(node);
      return this;
    
   },
  prepend( node = this.node,children = this.children ){ 
    
      return this.children = [ node, children ];
    
   },
  remove( _node = this._node,_parent = this._parent ){ 
    
      _node.remove();
      _parent.children.filter((c) => {
      	
        return !(_node === c);
      
      });
      _parent.emit("remove", _node);
      return this;
    
   }
 });
var DocumentRoot = Interface.define("DocumentRoot", { 
  init(  ){ 
    
      
      return this;
    
   },
  extend:DocumentNode,
  get _parent(  ){ 
    
      return this;
    
   },
  tagName:"body",
  _node:document.body,
  _children:[]
 });
var createDocumentNode = create(DocumentNode);
console.log(document.appendChild);
var { 
  Matrix,
  MatrixView,
  Kernel
 } = require("kit/sib/matrix"),
    { 
  TreeMap
 } = require("kit/sib/data-structures");
var matrix = create(Matrix);
var kernel = create(Kernel);
var matrixView = create(MatrixView);
var treeMap = create(TreeMap);
const StateSpace={ 
  symbol:Symbol("StateSpace"),
  init( width = this.width,height = this.height,state = create(Matrix)(height, width, (new Float32Array((height * width)))).dmap((function() {
    /* sib/meta/macros.sibilant:69:62 */
  
    return 0;
  })),transition = create(Matrix)(height, width, (new Float32Array((height * width)))).dmap((function() {
    /* sib/meta/macros.sibilant:69:62 */
  
    return 0;
  })) ){ 
    
      this.width = width;this.height = height;this.state = state;this.transition = transition;
      return this;
    
   }
 };
StateSpace.resize = (function StateSpace$resize$(w = this.w, h = this.h, c = this.c) {
  /* State-space.resize sib/index.sibilant:14:8 */

  return this.init.call(this, w, h);
});
StateSpace.get = (function StateSpace$get$(x = this.x, y = this.y, state = this.state) {
  /* State-space.get sib/index.sibilant:14:8 */

  return this.getState(x, y, state);
});
StateSpace.getState = (function StateSpace$getState$(x = this.x, y = this.y, state = this.state) {
  /* State-space.get-state sib/index.sibilant:14:8 */

  return state.get(x, y);
});
StateSpace.getTransition = (function StateSpace$getTransition$(x = this.x, y = this.y, transition = this.transition) {
  /* State-space.get-transition sib/index.sibilant:14:8 */

  return transition.get(x, y);
});
StateSpace.set = (function StateSpace$set$(x = this.x, y = this.y, value = this.value, state = this.state) {
  /* State-space.set sib/index.sibilant:14:8 */

  return this.setTransition(x, y, value);
});
StateSpace.setState = (function StateSpace$setState$(x = this.x, y = this.y, value = this.value, state = this.state) {
  /* State-space.set-state sib/index.sibilant:14:8 */

  return state.set(x, y, value);
});
StateSpace.setTransition = (function StateSpace$setTransition$(x = this.x, y = this.y, value = this.value, transition = this.transition) {
  /* State-space.set-transition sib/index.sibilant:14:8 */

  return transition.set(x, y, value);
});
StateSpace.eachState = (function StateSpace$eachState$(f = this.f, state = this.state) {
  /* State-space.each-state sib/index.sibilant:14:8 */

  state.each(f);
  return this;
});
StateSpace.each = (function StateSpace$each$(f = this.f, state = this.state) {
  /* State-space.each sib/index.sibilant:14:8 */

  state.each(f);
  return this;
});
StateSpace.transit = (function StateSpace$transit$(f = this.f, state = this.state, transition = this.transition) {
  /* State-space.transit ../../../../node_modules/kit/inc/core/defs.sibilant:222:8 */

  state.transit(transition, f);
  return this;
});
StateSpace.eachTransition = (function StateSpace$eachTransition$(f = this.f, transition = this.transition) {
  /* State-space.each-transition sib/index.sibilant:14:8 */

  transition.each(f);
  return this;
});
StateSpace.clear = (function StateSpace$clear$(width = this.width, height = this.height) {
  /* State-space.clear sib/index.sibilant:14:8 */

  this.clearTransitions();
  return this.clearStates();
});
StateSpace.clearTransitions = (function StateSpace$clearTransitions$(width = this.width, height = this.height) {
  /* State-space.clear-transitions sib/index.sibilant:14:8 */

  var r = create(Matrix)([], width, height),
      setTransition = () => {
  	
    return 0;
  
  };
  return this.transition = r.dmap(setTransition);
});
StateSpace.clearStates = (function StateSpace$clearStates$(width = this.width, height = this.height) {
  /* State-space.clear-states sib/index.sibilant:14:8 */

  var r = create(Matrix)([], width, height),
      setState = () => {
  	
    return 0;
  
  };
  return this.state = r.dmap(setState);
});
StateSpace.update = (function StateSpace$update$(f = this.f, state = this.state, transition = this.transition) {
  /* State-space.update ../../../../node_modules/kit/inc/core/defs.sibilant:222:8 */

  this.state = transition;
  this.transition = state;
  return this;
});
exports.StateSpace = StateSpace;
var setValue = R.curry((value, entity) => {
	
  return entity.value = value;

});
var curry = R.curry;
var { 
  not:fnot,
  pipe:fpipe,
  equals
 } = R;
Object.prototype.each = (function Object$prototype$each$(f) {
  /* Object.prototype.each sib/lib/lib.sibilant:34:0 */

  return Object.keys(this).each((k) => {
  	
    return f(this[k], k);
  
  });
});
global.create = create;
global.extend = extend;
global.mixin = mixin;
var green = { 
  red:0,
  green:255,
  blue:0
 },
    yellow = { 
  red:255,
  green:255,
  blue:0
 };
var memoize = (function memoize$(f) {
  /* memoize sib/lib/lib.sibilant:44:0 */

  "create a memoized version of any function. A memoized function will return\n"+"previously calculated results from a cache if the arguments given to it are the same";
  var m = {  };
  return cond(R.has, R.prop, (...args) => {
  	
    return f.apply(this, args);
  
  });
});