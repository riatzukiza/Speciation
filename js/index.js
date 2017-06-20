(function(a, b, c) {
    /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

    return foo(this);
}).bind(this);


;

;
// "It is about time I moved some of these includes into require statements, one at a time.";
var R = require("ramda");
var {
    create,
    extend,
    mixin,
    cond,
    partiallyApplyAfter
} = require("kit/js/util"), {
    EventEmitter
} = require("events"), {
    Buffer,
    Program,
    Shader,
    Attribute,
    Type,
    Context,
    Uniform
} = require("webgl/lib/webgl/gl"), {
    BlendMode
} = require("webgl/lib/math/color.js");
var {
    ubyte
} = Type;
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
const Interface = {
    symbol: Symbol("Interface"),
    symbols: {},
    types: {}
};
Interface.create = (function Interface$create$() {
    /* Interface.create sib/lib/obj/interface.sibilant:7:0 */

    return create(this)(...arguments);
});
Interface.define = (function Interface$define$(name, obj = {}, shares = (obj.shares || []), ext = (obj.extend || {}), build = obj.build) {
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
                })(extend(ext, mixin([{
                    name,
                    symbol
                }, ...shares], obj)));
            })(Symbol(name));
        }
    }).call(this);
});
const PromiseWriter = {
    symbol: Symbol("PromiseWriter"),
    init(stream = this.stream, promise = Promise.resolve()) {

        this.stream = stream;
        this.promise = promise;
        return this;

    }
};
PromiseWriter.write = (function PromiseWriter$write$(message = this.message, promise = this.promise, stream = this.stream) {
    /* Promise-writer.write sib/index.sibilant:9:8 */

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
        for (var i = (0 - lim); i <= lim; ++(i)) {
            $for = (function() {
                /* sib/meta/macros.sibilant:29:35 */

                return (function() {
                    /* sib/meta/macros.sibilant:27:8 */

                    var $for = null;
                    for (var j = (0 - lim); j <= lim; ++(j)) {
                        $for = (function() {
                            /* sib/meta/macros.sibilant:29:35 */

                            return f(i, j);
                        }).call(this);
                    };
                    return $for;
                }).call(this);
            }).call(this);
        };
        return $for;
    }).call(this);
    return null;
});;
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
const HtmlElement = {
    symbol: Symbol("HtmlElement"),
    get body() {

        return this._body;

    },
    get stream() {

        return create(PromiseWriter)(this._stream);

    },
    get promise() {

        return this._promise;

    },
    init(name = "", attributes = {}, _body = [], _stream = this._stream, _promise = Promise.resolve()) {

        this.name = name;
        this.attributes = attributes;
        this._body = _body;
        this._stream = _stream;
        this._promise = _promise;
        return this;

    }
};
var htmlElement = create(HtmlElement);
var renderElementAttribute = R.curry((value, key, stream) => {

    "given a key and a value, render the attribute string fragment";
    return stream.write((" " + (key + "=" + "'" + value + "' ")));

});
HtmlElement.render = (function HtmlElement$render$(stream = this.stream, name = this.name, attributes = this.attributes, body = this.body) {
    /* Html-element.render sib/index.sibilant:9:8 */

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

        "Function that is to be called for each segment of the stream, calls the render method of the segment\n" + "if it has one, otherwise its just written to the stream";
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

    return "html" ({}, create(HtmlElement)("head" ({}, create(HtmlElement)()), "body" ({}, create(HtmlElement)("h1" ({}, create(HtmlElement)("this is a shitty website!")), "div" ({
        id: "main-container"
    }, create(HtmlElement)("div" ({}, create(HtmlElement)("yes, yes it is.")), "div" ({}, create(HtmlElement)(Date.now())), "div" ({}, create(HtmlElement)("and that was the time.")))))))).render(res);
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
    init(tagName = this.tagName, attributes = this.attributes, _children = [], _parent = this._parent, _node = document.createElement(tagName)) {

        this.tagName = tagName;
        this.attributes = attributes;
        this._children = _children;
        this._parent = _parent;
        this._node = _node;
        return this;

    },
    extend: EventEmitter.prototype,
    get children() {

        return this._children;

    },
    render(_parent = this._parent, attributes = this.attributes, tagName = this.tagName, _node = this._node, children = this.children) {

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
    wrap(_node, _parent) {

        return create(DocumentNode)(_node.tagName, {}, [], _parent, _node);

    },
    append(node = this.node, children = this.children) {

        children.push(node);
        return this;

    },
    prepend(node = this.node, children = this.children) {

        return this.children = [node, children];

    },
    remove(_node = this._node, _parent = this._parent) {

        _node.remove();
        _parent.children.filter((c) => {

            return !(_node === c);

        });
        _parent.emit("remove", _node);
        return this;

    }
});
var DocumentRoot = Interface.define("DocumentRoot", {
    init() {


        return this;

    },
    extend: DocumentNode,
    get _parent() {

        return this;

    },
    tagName: "body",
    _node: document.body,
    _children: []
});
var createDocumentNode = create(DocumentNode);
console.log(document.appendChild);
var {
    Matrix,
    MatrixView,
    Kernel
} = require("kit/sib/matrix"), {
    TreeMap
} = require("kit/sib/data-structures");
var matrix = create(Matrix);
var kernel = create(Kernel);
var matrixView = create(MatrixView);
var treeMap = create(TreeMap);
const StateSpace = {
    symbol: Symbol("StateSpace"),
    init(width = this.width, height = this.height, state = create(Matrix)(height, width, (new Float32Array((height * width)))).dmap((function() {
        /* sib/meta/macros.sibilant:69:62 */

        return 0;
    })), transition = create(Matrix)(height, width, (new Float32Array((height * width)))).dmap((function() {
        /* sib/meta/macros.sibilant:69:62 */

        return 0;
    }))) {

        this.width = width;
        this.height = height;
        this.state = state;
        this.transition = transition;
        return this;

    }
};
StateSpace.resize = (function StateSpace$resize$(w = this.w, h = this.h, c = this.c) {
    /* State-space.resize sib/index.sibilant:9:8 */

    return this.init.call(this, w, h);
});
StateSpace.get = (function StateSpace$get$(x = this.x, y = this.y, state = this.state) {
    /* State-space.get sib/index.sibilant:9:8 */

    return this.getState(x, y, state);
});
StateSpace.getState = (function StateSpace$getState$(x = this.x, y = this.y, state = this.state) {
    /* State-space.get-state sib/index.sibilant:9:8 */

    return state.get(x, y);
});
StateSpace.getTransition = (function StateSpace$getTransition$(x = this.x, y = this.y, transition = this.transition) {
    /* State-space.get-transition sib/index.sibilant:9:8 */

    return transition.get(x, y);
});
StateSpace.set = (function StateSpace$set$(x = this.x, y = this.y, value = this.value, state = this.state) {
    /* State-space.set sib/index.sibilant:9:8 */

    return this.setTransition(x, y, value);
});
StateSpace.setState = (function StateSpace$setState$(x = this.x, y = this.y, value = this.value, state = this.state) {
    /* State-space.set-state sib/index.sibilant:9:8 */

    return state.set(x, y, value);
});
StateSpace.setTransition = (function StateSpace$setTransition$(x = this.x, y = this.y, value = this.value, transition = this.transition) {
    /* State-space.set-transition sib/index.sibilant:9:8 */

    return transition.set(x, y, value);
});
StateSpace.eachState = (function StateSpace$eachState$(f = this.f, state = this.state) {
    /* State-space.each-state sib/index.sibilant:9:8 */

    state.each(f);
    return this;
});
StateSpace.each = (function StateSpace$each$(f = this.f, state = this.state) {
    /* State-space.each sib/index.sibilant:9:8 */

    state.each(f);
    return this;
});
StateSpace.transit = (function StateSpace$transit$(f = this.f, state = this.state, transition = this.transition) {
    /* State-space.transit ../../../../node_modules/kit/inc/core/defs.sibilant:222:8 */

    state.transit(transition, f);
    return this;
});
StateSpace.eachTransition = (function StateSpace$eachTransition$(f = this.f, transition = this.transition) {
    /* State-space.each-transition sib/index.sibilant:9:8 */

    transition.each(f);
    return this;
});
StateSpace.clear = (function StateSpace$clear$(width = this.width, height = this.height) {
    /* State-space.clear sib/index.sibilant:9:8 */

    this.clearTransitions();
    return this.clearStates();
});
StateSpace.clearTransitions = (function StateSpace$clearTransitions$(width = this.width, height = this.height) {
    /* State-space.clear-transitions sib/index.sibilant:9:8 */

    var r = create(Matrix)([], width, height),
        setTransition = () => {

            return 0;

        };
    return this.transition = r.dmap(setTransition);
});
StateSpace.clearStates = (function StateSpace$clearStates$(width = this.width, height = this.height) {
    /* State-space.clear-states sib/index.sibilant:9:8 */

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
    not: fnot,
    pipe: fpipe,
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
        red: 0,
        green: 255,
        blue: 0
    },
    yellow = {
        red: 255,
        green: 255,
        blue: 0
    };
var memoize = (function memoize$(f) {
    /* memoize sib/lib/lib.sibilant:44:0 */

    "create a memoized version of any function. A memoized function will return\n" + "previously calculated results from a cache if the arguments given to it are the same";
    var m = {};
    return cond(R.has, R.prop, (...args) => {

        return f.apply(this, args);

    });
});
var Ticker = Interface.define("Ticker", {
    init(fps = this.fps) {

        this.fps = fps;
        EventEmitter.call(this);
        return this;

    },
    extend: EventEmitter.prototype,
    state: false,
    ticks: 0,
    get rate() {

        return (1000 / this.fps);

    },
    update(previous = this.previous, rate = this.rate) {

        (function() {
            if (this.state) {
                var now = Date.now();
                this.elapsed = (now - previous);
                window.requestAnimationFrame(() => {

                    return this.update();

                });
                return (function() {
                    if (this.elapsed > rate) {
                        ++(this.ticks);
                        this.previous = now;
                        return this.emit("tick", now, this.ticks);
                    }
                }).call(this);
            }
        }).call(this);
        return this;

    },
    start() {

        this.state = true;
        this.previous = Date.now();
        return this.update();

    },
    stop() {

        this.state = false;
        return this;

    }
});
require("webgl/lib/ext/window");
var Color = (new Type.Composite({
    r: ubyte,
    g: ubyte,
    b: ubyte,
    a: ubyte
}));
var Vertex = (new Type.Composite({
    point: Type.Vector3,
    color: Color
}));
Array.prototype.bind = Array.bind = (function Array$bind$(a, f) {
    /* Array.bind sib/system.sibilant:11:8 */

    return a.reduce((r, e, i) => {

        f(e, i).each((x) => {

            return r.push(x);

        });
        return r;

    }, []);
});
var vertShaderString = ("#version 300 es\n" + "in vec3 a_point;\n" + "in vec4 a_color;\n" + "\n" + "out highp vec4 vColor;\n" + "\n" + "uniform vec2  u_Resolution;\n" + "uniform float u_Scale;\n" + "\n" + "vec4 clipspace_coordinate( vec3 xyz, float scale, vec2 res )\n" + "{\n" + "  return vec4( (xyz * vec3(1.0,1.0,1.0) * scale) / (vec3(res,1.0)) * 1.98 - 0.99, 1.0) * vec4( 1.0,-1.0,1.0,1.0 );\n" + "}\n" + "\n" + "void main(void)\n" + "{\n" + "    gl_Position  = clipspace_coordinate( a_point, u_Scale, u_Resolution );\n" + "    gl_PointSize = 4.0;\n" + "    vColor       = a_color;\n" + "}"),
    fragmentShaderString = ("#version 300 es\n" + "precision mediump float;\n" + "\n" + "in  vec4 vColor;\n" + "out vec4 FragColor;\n" + "\n" + "void main(void)\n" + "{\n" + "    FragColor = vColor;\n" + "}");
var System = Interface.define("System", {
    init(limit = this.limit, _type = this._type, _members = _type.Array(limit), _tree = create(BucketedTree)(), symbols = {}, systems = {}, _available = Array.from(_members).map((m, k) => {

        m.id = k;
        return m;

    }), _inUse = []) {

        this.limit = limit;
        this._type = _type;
        this._members = _members;
        this._tree = _tree;
        this.symbols = symbols;
        this.systems = systems;
        this._available = _available;
        this._inUse = _inUse;
        return this;

    },
    symbols: {},
    systems: {},
    clear() {

    },
    remove(keySequence = this.keySequence, _tree = this._tree) {

        return valueOf(_tree.find(keySequence)).find();

    },
    delete(keys = this.keys, _tree = this._tree) {

        return _tree.delete(keys);

    },
    find(keySequence = this.keySequence, _tree = this._tree) {

        return _tree.find(keySequence).value;

    },
    insert(keySequence = this.keySequence, [_available, _inUse, _tree] = [this._available, this._inUse, this._tree]) {

        return this._insert(keySequence, [_available, _inUse, _tree]);

    },
    update() {

        return this._update();

    }
});
var VertexContext = Interface.define("VertexContext", {
    init(_members = this._members, count = this.count, vertexBuffer = (new Buffer(gl.ARRAY_BUFFER, gl.DYNAMIC_DRAW)).bind().data(_members.data).unbind()) {

        this._members = _members;
        this.count = count;
        this.vertexBuffer = vertexBuffer;
        return this;

    },
    uRes: (new Uniform.Vector2("Resolution", window.size())),
    uScale: (new Uniform.Float("Scale", 1)),
    context: (new Context()).makeCurrent().resize(...window.size()).clearColor(0, 0, 0, 1).blend(true).clear(),
    program: (new Program((new Shader(Shader.vertex, vertShaderString)), (new Shader(Shader.fragment, fragmentShaderString)))),
    _render(inUse = this.inUse, context = this.context) {

        return inUse.each((v) => {

            return context.draw(gl.POINTS, v.id, 1);

        });

    },
    enable(program = this.program, uRes = this.uRes, uScale = this.uScale) {

        program.enable();
        uRes.enable();
        uScale.enable();
        return Vertex.enableGlAttributes();

    },
    disable(program = this.program, uRes = this.uRes, uScale = this.uScale) {

        Vertex.disableGlAttributes();
        program.disable();
        uRes.disable();
        return uScale.disable();

    },
    render(inUse = this.inUse, context = this.context, vertexBuffer = this.vertexBuffer, program = this.program, [uRes, uScale] = [this.uRes, this.uScale], count = this.count, _members = this._members) {

        "render each visible dot to the screen";
        vertexBuffer.bind().data(_members.data).unbind();
        context.clear();
        vertexBuffer.bind();
        this.enable();
        this._render(inUse);
        this.disable();
        return vertexBuffer.unbind();

    }
});
var VertexSystem = Interface.define("VertexSystem", {
    init(limit = this.limit, _gl = this._gl, _type = this._type) {

        this.limit = limit;
        this._gl = _gl;
        this._type = _type;
        System.init.call(this, limit, _type);
        _gl.init(this._members, limit);
        return this;

    },
    extend: System,
    _type: Vertex,
    _gl: VertexContext,
    _insert([
        [x, y, z],
        [r, g, b, a]
    ] = [
        [],
        []
    ], [_available, _inUse, _tree] = [this._available, this._inUse, this._tree]) {

        return (function(member) {
            /* sib/meta/macros.sibilant:119:9 */

            console.log("_available", _available, "this._members", this._members, "member", member);
            _tree.set([x, y, z], member);
            member.point.x = x;
            member.point.y = y;
            member.point.z = z;
            member.color.r = r;
            member.color.g = g;
            member.color.b = b;
            member.color.a = a;
            _inUse.push(member);
            return member;
        })(_available.pop());

    },
    _update(_inUse = this._inUse) {

        return this._gl.render(_inUse);

    }
});
var Tree = Interface.define("Tree", {
    init() {


        return this;

    },
    value: null,
    parent: null,
    depth: 0,
    traverseBranches__QUERY: true,
    branch__QUERY(value = this.value) {

        return null === value;

    },
    leaf__QUERY(value = this.value) {

        return !(null === value);

    },
    descend(seq = this.seq, f = this.f, tree = this) {

        return (function() {
            if (0 === seq.length) {
                return tree;
            } else {
                return f(tree, seq);
            }
        }).call(this);

    },
    delete(seq = this.seq) {

    },
    find(seq = this.seq, tree = this) {

        return (function() {
            if (0 === seq.length) {
                return tree;
            } else {
                return tree._find(seq);
            }
        }).call(this);

    },
    has(seq = this.seq, tree = this) {

        return (function() {
            if (tree.find(seq)) {
                return true;
            } else {
                return false;
            }
        }).call(this);

    },
    insert(seq = this.seq, tree = this) {

        return (function() {
            if (0 === seq.length) {
                return tree;
            } else {
                return (function(node) {
                    /* sib/meta/macros.sibilant:119:9 */

                    node.depth = (1 + tree.depth);
                    return node.insert(seq.slice(1));
                })(tree._insert(seq));
            }
        }).call(this);

    },
    set(seq = this.seq, value = this.value, tree = this) {

        return tree.insert(seq).value = value;

    },
    add(key = this.key, tree = this, _children = tree._children) {

        return (_children.get(key) || create(tree)(undefined, tree));

    },
    each(f = this.f, traverseBranches__QUERY = this.traverseBranches__QUERY, leaf__QUERY = this.leaf__QUERY, _children = this._children) {

        var preorderTraverse = (function preorderTraverse$(node, k) {
            /* preorder-traverse sib/lib/collection/tree.sibilant:49:4 */

            f(node, k);
            return node.each(f);
        });
        return (function() {
            if (traverseBranches__QUERY) {
                return _children.each(preorderTraverse, true, leaf__QUERY, _children);
            } else {
                return _children.each((node, k) => {

                    return (function() {
                        if (leaf__QUERY(node)) {
                            return f(node, k);
                        } else {
                            return node.each(f, false, leaf, _children);
                        }
                    }).call(this);

                });
            }
        }).call(this);

    }
});
var TreeMap = Interface.define("TreeMap", {
    init(value = this.value, parent = this.parent, _children = (new Map())) {

        this.value = value;
        this.parent = parent;
        this._children = _children;
        return this;

    },
    extend: Tree,
    delete(seq = this.seq, tree = this) {

        return find();

    },
    _find(seq = this.seq, tree = this, _children = tree._children, node = _children.get(seq[0])) {

        return (function() {
            if (node) {
                return node.find(seq.slice(1));
            } else {
                return false;
            }
        }).call(this);

    },
    _insert(seq = this.seq, _children = this._children, tree = this, node = tree.add(seq[0])) {

        _children.set(seq[0], node);
        return node;

    }
});
var OrderedMap = Interface.define("OrderedMap", {
    init(_members = (new Map()), _keyPointers = (new Map()), _keys = [], _values = []) {

        this._members = _members;
        this._keyPointers = _keyPointers;
        this._keys = _keys;
        this._values = _values;
        return this;

    },
    has(key = this.key, [_members] = [this._members]) {

        return _members.has(key);

    },
    get(key = this.key, [_members, _, _keys] = [this._members, this._, this._keys]) {

        return _members.get(key);

    },
    each(callback = this.callback, _values = this._values) {

        _values.each(callback);
        return this;

    },
    map(callback = this.callback, [_members, _, _keys, _values] = [this._members, this._, this._keys, this._values]) {

        return (function(r) {
            /* sib/meta/macros.sibilant:119:9 */

            _keys.each((k) => {

                return r.set(k, f(_members[k], k, r));

            });
            return r;
        })(create(OrderedMap)());

    },
    delete(key = this.key, [_members, _keyPointers, _keys, _values] = [this._members, this._keyPointers, this._keys, this._values]) {

        var i = _keyPointers[key];
        _members.delete(key);
        _keyPointers.delete(key);
        delete _keys;
        delete i;
        delete _values;
        return delete i;

    },
    push([key, value] = [this.key, this.value], [_members, _keyPointers, _keys, _values] = [this._members, this._keyPointers, this._keys, this._values]) {

        return (function() {
            if (_members.has(key)) {
                return _members.get(key);
            } else {
                return (function(value) {
                    /* sib/meta/macros.sibilant:119:9 */

                    _members.set(key, value);
                    return value;
                })((function() {
                    /* ../../../../node_modules/kit/inc/macros.sibilant:13:25 */

                    _keys.push(key);
                    _keyPointers.set(_values.push(value));
                    return value;
                }).call(this));
            }
        }).call(this);

    },
    pop([_members, _keyPointers, _keys, _values] = [this._members, this._keyPointers, this._keys, this._values]) {

        var key = _keys.pop(),
            value = _values.pop();
        _keyPointers.pop();
        members.delete(key);
        return value;

    },
    shift([_members, _keyPointers, _keys, _values] = [this._members, this._keyPointers, this._keys, this._values]) {

        var key = _keys.shift(),
            value = _values.shift();
        _keyPointers.shift();
        _members.delete(key);
        return value;

    },
    unshift([key, value] = [this.key, this.value], [_members, _keyPointers, _keys, _values] = [this._members, this._keyPointers, this._keys, this._values]) {

        return (function() {
            if (_members.has(key)) {
                return _members.get(key);
            } else {
                return (function(value) {
                    /* sib/meta/macros.sibilant:119:9 */

                    _members.set(key, value);
                    return value;
                })((function() {
                    /* ../../../../node_modules/kit/inc/macros.sibilant:13:25 */

                    _keys.unshift(key);
                    _keyPointers.set(_values.unshift(value));
                    return value;
                }).call(this));
            }
        }).call(this);

    },
    set(key = this.key, value = this.value, [_members, _keyPointers, _keys, _values] = [this._members, this._keyPointers, this._keys, this._values]) {

        return (function() {
            if (_members.has(key)) {
                return (function(i) {
                    /* sib/meta/macros.sibilant:119:9 */

                    _values[i] = value;
                    return _members.set(key, value);
                })(_keyPointers[key]);
            } else {
                _keys.push(key);
                _keyPointers.set(_values.push(value));
                _members.set(key, value);
                return value;
            }
        }).call(this);

    }
});
var search = R.curry((value, array) => {

    return array.find((v) => {

        return v === value;

    });

});
var identity = (function identity$(a) {
    /* identity sib/lib/collection/ordered-bucket-map.sibilant:3:0 */

    return a;
});
var searchIfGiven = (function searchIfGiven$(array, value) {
    /* search-if-given sib/lib/collection/ordered-bucket-map.sibilant:5:0 */

    return conditional(array, () => {

        return typeof value !== "undefined";

    }, search(value), identity);
});
var fprint = (function fprint$($value, ...args) {
    /* fprint sib/lib/collection/ordered-bucket-map.sibilant:12:0 */

    console.log($value, ...args);
    return $value;
});
var OrderedBucketMap = Interface.define("OrderedBucketMap", {
    init(_buckets = create(OrderedMap)()) {

        this._buckets = _buckets;
        return this;

    },
    set(k = this.k, v = this.v, _buckets = this._buckets) {

        console.log("setting", k, v);
        return (function() {
            if (_buckets.has(k)) {
                return fprint(_buckets.get(k), "bucket at", k).push(v);
            } else {
                return _buckets.push([k, [v]]);
            }
        }).call(this);

    },
    get(k = this.k, value = this.value, _buckets = this._buckets) {

        return _buckets.get(k);

    },
    each(f = this.f, _buckets = this._buckets) {

        return _buckets.each(f);

    },
    map(f = this.f, _buckets = this._buckets) {

        return _buckets.map(f);

    },
    delete([k, value] = [this.k, this.value]) {

    }
});
var BucketedTree = Interface.define("BucketedTree", {
    init(value = [], parent = this.parent, _children = create(OrderedMap)()) {

        this.value = value;
        this.parent = parent;
        this._children = _children;
        return this;

    },
    extend: TreeMap
});
var oldEmit = EventEmitter.prototype.emit;
EventEmitter.prototype.emit = (function EventEmitter$prototype$emit$(event, ...args) {
    /* Event-emitter.prototype.emit sib/events.sibilant:3:0 */

    oldEmit.call(this, event, ...args);
    return oldEmit.call(this, "*", event, ...args);
});
var e = (new EventEmitter());
var wrap = DocumentNode.wrap;
var stage = createDocumentNode("div", {
    id: "stage"
}, []);
var container = createDocumentNode("div", {
    id: "container"
}, [stage, VertexSystem._gl.context.canvas]);
createDocumentNode("div", {
    id: "frame"
}, [container]).render(DocumentRoot);
var {
    EventEmitter
} = require("events");
var {
    Layers
} = require("./web-gl-layers.js");
const Location = {
    symbol: Symbol("Location"),
    init(x = this.x, y = this.y, layers = []) {

        this.x = x;
        this.y = y;
        this.layers = layers;
        return this;

    }
};
var Simulation = extend(EventEmitter.prototype, {
    symbol: Symbol("Simulation")
});
mixin({
    init(fps = this.fps, _width = this._width, _scale = this._scale, state = false, layers = (new Layers(document.getElementById("stage"), "gl", _width, _scale)).setBGColor(), coord = matrix(_width, _width).dmap((nil, x, y) => {

        return create(Location)(x, y);

    }), systems = (new Set()), ticks = 0, sim = this) {

        this.fps = fps;
        this._width = _width;
        this._scale = _scale;
        this.state = state;
        this.layers = layers;
        this.coord = coord;
        this.systems = systems;
        this.ticks = ticks;
        this.sim = sim;
        EventEmitter.call(this);
        return this;

    },
    get rate() {

        return (1000 / this.fps);

    },
    get width() {

        return this._width;

    },
    get scale() {

        return this._scale;

    },
    set width(value) {

        return this._width = value;

    }
}, Simulation);
Simulation.start = (function Simulation$start$() {
    /* Simulation.start ../../../../node_modules/kit/inc/core/defs.sibilant:222:8 */

    "start the simulation";
    this.state = true;
    this.previous = Date.now();
    this.tick();
    return this;
});
Simulation.toggle = (function Simulation$toggle$() {
    /* Simulation.toggle ../../../../node_modules/kit/inc/core/defs.sibilant:222:8 */

    "switches the state of the simulation, if its on, turn it off, if its off, turn it on.";
    this.state = !(this.state);
    (function() {
        if (this.state) {
            return this.start();
        }
    }).call(this);
    return this;
});
Simulation.stop = (function Simulation$stop$() {
    /* Simulation.stop ../../../../node_modules/kit/inc/core/defs.sibilant:222:8 */

    "stop the simulation";
    this.state = false;
    return this;
});
Simulation.tick = (function Simulation$tick$(previous = this.previous, rate = this.rate) {
    /* Simulation.tick ../../../../node_modules/kit/inc/core/defs.sibilant:222:8 */

    "Decides when to tick based on specified framerate, and turns the simulation off if it was previously on and the state has since changed.";
    (function() {
        if (this.state) {
            var now = Date.now();
            this.elapsed = (now - previous);
            window.requestAnimationFrame(() => {

                return this.tick();

            });
            return (function() {
                if (this.elapsed > rate) {
                    ++(this.ticks);
                    this.previous = (now - (this.elapsed % rate));
                    return this.emit("tick", now, this.ticks);
                }
            }).call(this);
        }
    }).call(this);
    return this;
});
exports.Simulation = Simulation;
var sim = create(Simulation)(30, 100, 8);
global.sim = sim;
var fields = [];
var stateSpace = create(StateSpace);
var Component = Interface.define("Component", {
    init(x = this.x, y = this.y, neiborhood = moore(x, y, this.field)) {

        this.x = x;
        this.y = y;
        this.neiborhood = neiborhood;
        return this;

    },
    get influences() {

        return this.system.influences.map((s) => {

            return s.field.get(this.x, this.y);

        });

    },
    get value() {

        return this.field.get(this.x, this.y);

    },
    set value(v) {

        return this.field.set(this.x, this.y, v);

    }
});
var FieldSystem = Interface.define("FieldSystem", {
    init(name = this.name, render__QUERY = false, height = this.height, width = this.width, symbol = Symbol(name), field = stateSpace(width, height), components = [], layer = (function() {
        if (render__QUERY) {
            return sim.layers.get();
        } else {
            return (new Set());
        }
    }).call(this), system = this, _Component = extend(this, Component)) {

        this.name = name;
        this.render__QUERY = render__QUERY;
        this.height = height;
        this.width = width;
        this.symbol = symbol;
        this.field = field;
        this.components = components;
        this.layer = layer;
        this.system = system;
        this._Component = _Component;
        systems.push(this);
        return this;

    },
    extend: Matrix,
    get Component() {

        return this._Component;

    },
    doc: "A quantity which has a value over every point of a global space for all locations in space and time.",
    height: sim._width,
    width: sim._width,
    get array() {

        return this.components;

    },
    populate(field = this.field) {

        "for every value influenced by the field, create a point object to represent that value";
        return field.each((v, x, y) => {

            return this.addComponent(x, y, v);

        });

    },
    clear(field = this.field, components = this.components) {

        field.transit((x) => {

            return 0;

        });
        field.update();
        field.transit((x) => {

            return x;

        });
        return field.update();

    },
    addComponent(x = this.x, y = this.y, value = this.value, _Component = this._Component, layer = this.layer, components = this.components) {

        var component = create(_Component)(x, y);
        components.push(component);
        return layer.add(component);

    },
    removeComponent(r = this.r, layer = this.layer, components = this.components) {

        components.filter((c) => {

            return !(r === c);

        });
        return layer.delete(r);

    },
    update(ticks = this.ticks, components = this.components, field = this.field) {

        "update every component of the field.";
        return components.each((c) => {

            return c.update(ticks);

        });

    }
});
var randomizeField = (function randomizeField$(field = this.field, system = this) {
    /* randomize-field sib/index.sibilant:9:8 */

    field.transit((x) => {

        return Math.random();

    });
    field.update();
    field.transit((x) => {

        return x;

    });
    field.update();
    return system.max = 0;
});
FieldSystem.randomize = randomizeField;
var fieldSystem = create(FieldSystem);
var total = (function total$(arr) {
    /* total sib/index.sibilant:74:0 */

    "calculate the total sum of all values in an eachable.";
    var sum = 0;
    arr.each((v) => {

        return sum += v;

    });
    return sum;
});
var displayStats = (function displayStats$(fieldSystem) {
    /* display-stats sib/index.sibilant:83:0 */

    "calculate and log the average and total values for all cells in a system.";
    return (function(b, ...others) {
        /* ../../../../node_modules/kit/inc/console.sibilant:10:8 */

        console.log("average", fieldSystem.name, b, ...others);
        return b;
    })(((function(b, ...others) {
        /* ../../../../node_modules/kit/inc/console.sibilant:10:8 */

        console.log("total", fieldSystem.name, b, ...others);
        return b;
    })(total(fieldSystem.field)) / (100 * 100)));
});
var updateEntities = (function updateEntities$() {
    /* update-entities sib/index.sibilant:93:0 */

    "update the state of every entity. Entity updates may affect fields and other systems.";
    return entities.each((ent) => {

        return ent.update();

    });
});
var updateOnBeatField = (function updateOnBeatField$(currentSystem, ticks) {
    /* update-on-beat-field sib/index.sibilant:104:0 */

    "calculate the values for the system that is said to currently be active. Systems are updated one\n" + "at a time, one per tick,so that updates to each can make changes to each. Values of each system will\n" + "be integrated for the time missing between each of their updates.";
    currentSystem.update(ticks);
    return currentSystem.field.update();
});
var getOnbeat = (function getOnbeat$(ticks) {
    /* get-onbeat sib/index.sibilant:113:0 */

    "return the id of the *onbeat* or major system of the current tick";
    return systems[(ticks % systems.length)].symbol;
});
var refreshFields = (function refreshFields$() {
    /* refresh-fields sib/index.sibilant:117:0 */

    "update the state matricies of every existing field.";
    return systems.each((system) => {

        return system.field.update();

    });
});
var updateDisplay = (function updateDisplay$() {
    /* update-display sib/index.sibilant:121:0 */

    return sim.layers.update().render();
});
var systems = [];
var System = {};
var e = Math.E;
var createInstanceOf = (function createInstanceOf$(type, ...args) {
    /* create-instance-of sib/game/systems.sibilant:6:0 */

    return create(type)(...args);
});
var moore = (function moore$(x, y, field) {
    /* moore sib/game/systems.sibilant:27:0 */

    return create(MatrixView)(field, 3, 3, [(x - 1), (y - 1)]);
});
var countKernel = kernel(3, 3, [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]);
var identity = (function identity$() {
    /* identity sib/game/systems.sibilant:37:0 */

    return matrix(3, 3, [1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
var averageKernel = countKernel.mult((1 / 9));
averageKernel.convolve = Kernel.convolve;
var additiveSmooth = memoize((function(s, a, b) {
    /* sib/game/systems.sibilant:52:30 */

    return ((s + a) / (s + b));
}));
var additiveSmooth = (function additiveSmooth$(s, a, b) {
    /* additive-smooth sib/game/systems.sibilant:54:0 */

    return ((s + a) / (s + b));
});
var _convolve = (function _convolve$(A, B) {
    /* *convolve sib/game/systems.sibilant:57:0 */

    return A.convolve(B);
});
var percentToColor = (function percentToColor$(percentage) {
    /* percent-to-color sib/game/systems.sibilant:60:0 */

    return (percentage * 255);
});
var inverseSquare = (function inverseSquare$(rate, c, pos, {
    x,
    y
}) {
    /* inverse-square sib/game/systems.sibilant:63:0 */

    return (rate / (c + Math.pow(euclidianDistance(x, y, pos.x, pos.y), 2)));
});
var Sun = createInstanceOf(FieldSystem, "Sun");
mixin({
    ySkew: 2.4,
    xSkew: 1.1,
    rate: 100,
    dampening: 100,
    mid: (Sun.width / 2),
    gamma: 0.9,
    max: 0,
    get r() {

        return percentToColor(Math.pow((3 * this.value), this.gamma));

    },
    get g() {

        return percentToColor(Math.pow((2 * this.value), this.gamma));

    },
    get b() {

        return (60 + percentToColor(Math.pow(this.value, this.gamma)));

    },
    get a() {

        return percentToColor(0.2);

    }
}, Sun.Component);
var solarIntensity = (function solarIntensity$(x, y, rate, dampening, mid, xSkew, ySkew) {
    /* solar-intensity sib/game/systems/fields/sun.sibilant:24:0 */

    return inverseSquare(rate, dampening, {
        x: (mid / xSkew),
        y: (mid / ySkew)
    }, {
        x: (x / xSkew),
        y: (y / ySkew)
    });
});
Sun.Component.update = (function Sun$Component$update$(tick = this.tick, x = this.x, y = this.y, rate = this.rate, dampening = this.dampening, ySkew = this.ySkew, xSkew = this.xSkew, mid = this.mid, field = this.field) {
    /* Sun.Component.update sib/index.sibilant:9:8 */

    var value = solarIntensity(x, y, rate, dampening, mid, xSkew, ySkew);
    (function() {
        if (value > Sun.max) {
            console.log("new max sun value");
            return Sun.max = value;
        }
    }).call(this);
    return field.set((tick + x), (y + Math.round((50 * Math.sin((tick / 10000))))), value);
});
console.log(Sun.components.filter((c) => {

    return c.value > 1;

}).map((c) => {

    return [c.x, c.y, c.value];

}));
var Heat = createInstanceOf(FieldSystem, "Heat", true);
mixin({
    gain: 1,
    retention: 0.9,
    loss: 0.1,
    max: 0,
    total: 0,
    influences: [Sun],
    update(ticks = this.ticks, components = this.components, field = this.field) {

        FieldSystem.update(ticks, components, field);
        return this.total = 0;

    }
}, Heat);
mixin({
    init(x = this.x, y = this.y, neiborhood = moore(x, y, this.field)) {

        this.x = x;
        this.y = y;
        this.neiborhood = neiborhood;
        return this;

    },
    gamma: 1,
    get r() {

        return percentToColor(Math.pow((this.value / this.max), this.gamma));

    },
    g: 1,
    b: 1,
    get a() {

        return percentToColor(0.9);

    },
    update(tick = this.tick, x = this.x, y = this.y, influences = this.influences, loss = this.loss, retention = this.retention, gain = this.gain, field = this.field, value = this.value, max = this.max, neiborhood = this.neiborhood) {

        var heat = value;
        var net = netHeat(retention, gain, loss, influences, neiborhood);
        (function() {
            if (!(isFinite(heat))) {
                console.log("heat value failiure", heat);
                throw (new RangeError("heat is is not finite"))
            }
        }).call(this);
        (function() {
            if (!(isFinite(net))) {
                console.log("infinite value detected", {
                    retention,
                    gain,
                    loss,
                    influences,
                    neiborhood,
                    net
                });
                throw (new RangeError("heat is is not finite"))
            }
        }).call(this);
        (function() {
            if (net > this.max) {
                return Heat.max = net;
            }
        }).call(this);
        return field.set(x, y, net);

    }
}, Heat.Component);
var netHeat = (function netHeat$(retention, gain, loss, influences, neiborhood) {
    /* net-heat sib/game/systems/fields/heat.sibilant:67:0 */

    var net = ((retention * gain * summate(influences)) + _convolve(averageKernel, neiborhood));
    return (function() {
        if (net > loss) {
            return (net - loss);
        } else {
            return 0;
        }
    }).call(this);
});
var Light = createInstanceOf(FieldSystem, "Light", true);
mixin({
    influences: [Sun]
}, Light);
mixin({
    gamma: 0.5,
    get r() {

        return percentToColor(Math.pow((3 * this.value), this.gamma));

    },
    get g() {

        return percentToColor(Math.pow((2 * this.value), this.gamma));

    },
    get b() {

        return (60 + percentToColor(Math.pow(this.value, this.gamma)));

    },
    get a() {

        return percentToColor(0.2);

    }
}, Light.Component);
Light.Component.update = (function Light$Component$update$(tick = this.tick, x = this.x, y = this.y, influences = this.influences, gain = this.gain, loss = this.loss, field = this.field, value = this.value, max = this.max, neiborhood = this.neiborhood) {
    /* Light.Component.update sib/index.sibilant:9:8 */

    return field.set(x, y, (1 * summate(influences)));
});
var Water = createInstanceOf(FieldSystem, "Water", true);
mixin({
    influences: [Heat],
    gain: 100,
    max: 0,
    total: 0
}, Water);
mixin({
    init(x = this.x, y = this.y, neiborhood = moore(x, y, this.field)) {

        this.x = x;
        this.y = y;
        this.neiborhood = neiborhood;
        return this;

    },
    gamma: 1,
    get b() {

        return percentToColor(Math.pow((this.value / this.max), this.gamma));

    },
    g: 1,
    r: 1,
    get a() {

        return percentToColor(0.2);

    },
    update(tick = this.tick, x = this.x, y = this.y, field = this.field, value = this.value, neiborhood = this.neiborhood, influences = this.influences) {

        var heat = influences[0];
        var averageWater = _convolve(averageKernel, neiborhood),
            averageHeat = _convolve(averageKernel, Heat.get(x, y).neiborhood);
        // " if the heat here is higher than the average surrounding heat,\n"+"                then this water should move away\n"+"                This means there will be a larger than 1 heat influence.\n"+"\n"+"                if the heat here is less than the average surrounding heat,\n"+"                then the nearby water will be moving here. "// ((1 + averageHeat) / (1 + heat));
        var heatInfluence = additiveSmooth(1, averageHeat, heat);
        var saturation = additiveSmooth(1, averageWater, value);
        var net = (value * saturation * heatInfluence);
        (function() {
            if (net > Water.max) {
                return Water.max = net;
            }
        }).call(this);
        return field.set(x, y, net);

    }
}, Water.Component);
var specificHeat = 4.186;
var dHvap = 2257;
var R_ = 8.3145;
var coriolisKernel = kernel(3, 3, [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]).mult((1 / 9));
console.log(systems);
systems.each((s) => {

    return s.populate();

});
console.log(Water);
var sum = 0;
Water.field.transit((v, x, y) => {

    var r = Math.random();
    return r;

});
Water.field.update();
Water.field.transit((v, x, y) => {

    return v;

});
Water.field.update();
var sum = 0;
Water.field.each((v) => {

    return sum += v;

});
console.log("total water", sum);
var Silt = createInstanceOf(FieldSystem, "Silt", true);
mixin({
    influences: [Water],
    randomize(field = this.field) {

        return randomizeField(field);

    }
}, Silt);
mixin({
    init(x = this.x, y = this.y, neiborhood = moore(x, y, this.field)) {

        this.x = x;
        this.y = y;
        this.neiborhood = neiborhood;
        return this;

    },
    get r() {

        return percentToColor(this.value);

    },
    get g() {

        return percentToColor((0.7 * this.value));

    },
    get b() {

        return percentToColor((0.4 * this.value));

    },
    get a() {

        return percentToColor(0.3);

    },
    update(tick = this.tick, x = this.x, y = this.y, field = this.field, value = this.value, neiborhood = this.neiborhood, influences = this.influences) {

        var water = influences[0];
        var averageSilt = _convolve(averageKernel, neiborhood);
        var averageWater = _convolve(averageKernel, Water.get(x, y).neiborhood);
        var waterInfluence = additiveSmooth(1, averageWater, water),
            saturation = additiveSmooth(1, averageSilt, value);
        var net = (value * saturation * waterInfluence);
        (function() {
            if (net > Silt.max) {
                return Silt.max = net;
            }
        }).call(this);
        return field.set(x, y, net);

    }
}, Silt.Component);
Silt.randomize();
const Collision = {
    symbol: Symbol("Collision")
};
mixin({
    _map: (new Map()),
    has([x, y], _map = this._map) {

        return _map.has(sim.coord.get(x, y));

    },
    set([x, y], entity, _map = this._map) {

        return _map.set(sim.coord.get(x, y), entity);

    },
    get([x, y], _map = this._map) {

        return _map.get(sim.coord.get(x, y));

    },
    move([x, y], entity) {

        return (function() {
            if (!(Collision.has([x, y]))) {
                _map.delete(sim.coord.get(entity.x, entity.y));
                _map.set(sim.coord.get(x, y), entity);
                entity.x = x;
                entity.y = y;
                return this;
            }
        }).call(this);

    },
    delete([x, y], _map = this._map) {

        return _map.delete(sim.coord.get(x, y));

    }
}, Collision);
var lastOf = (function lastOf$(arr) {
    /* last-of sib/game/components.sibilant:15:0 */

    return arr.slice(-1)[0];
});
const Container = {
    symbol: Symbol("Container")
};
mixin({
    max: 100,
    init(entity = this.entity, max = this.max, value = max, delta = {
        positive: 0,
        negative: 0
    }) {

        this.entity = entity;
        this.max = max;
        this.value = value;
        this.delta = delta;
        return this;

    },
    add(v = this.v) {

        return this.delta.positive += v;

    },
    remove(v = this.v) {

        return this.delta.negative += v;

    },
    full__QUERY(value = this.value, max = this.max) {

        return value > max;

    },
    empty__QUERY(value = this.value) {

        return value < 0;

    },
    update(entity = this.entity, max = this.max, value = this.value, delta = this.delta, container = this) {

        (function() {
            if (container.full__QUERY()) {
                return (function(percentFull) {
                    /* sib/meta/macros.sibilant:119:9 */

                    return (function(multiplier) {
                        /* sib/meta/macros.sibilant:119:9 */

                        return (function(newValue) {
                            /* sib/meta/macros.sibilant:119:9 */

                            return container.value = newValue;
                        })(((value + (multiplier * delta.positive)) - delta.negative));
                    })((1 / ((container.value / container.max) - 1)));
                })((container.value / container.max));
            } else if (container.empty__QUERY()) {
                return container.value = 0;
            } else {
                return (function(newValue) {
                    /* sib/meta/macros.sibilant:119:9 */

                    return container.value = newValue;
                })(((value + delta.positive) - delta.negative));
            }
        }).call(this);
        container.delta.positive = 0;
        return container.delta.negative = 0;

    }
}, Container);
const Absorber = {
    symbol: Symbol("Absorber")
};
mixin({
    kernel: kernel(3, 3, [
        [1, 1, 1],
        [1, 4, 1],
        [1, 1, 1]
    ]).mult((1 / 12)),
    cost: 0.00001,
    Field: null,
    Container: null,
    init(entity = this.entity, Field = this.Field, neiborhood = moore(entity.x, entity.y, Field.field)) {

        this.entity = entity;
        this.Field = Field;
        this.neiborhood = neiborhood;
        return this;

    },
    update(entity = this.entity, neiborhood = this.neiborhood, kernel = this.kernel, cost = this.cost, Container = this.Container) {

        return (function(container) {
            /* sib/meta/macros.sibilant:119:9 */

            return (function(current) {
                /* sib/meta/macros.sibilant:119:9 */

                return (function() {
                    if (current < container.max) {
                        return (function(calories, absorbed) {
                            /* sib/meta/macros.sibilant:119:9 */

                            kernel.each((v, x, y) => {

                                return (function(r) {
                                    /* sib/meta/macros.sibilant:119:9 */

                                    return neiborhood.set(x, y, (r > 0) ? r : 0);
                                })((neiborhood.get(x, y) - v));

                            });
                            container.add(absorbed);
                            return calories.remove((absorbed * cost));
                        })(entity[Calories.symbol], kernel.convolve(neiborhood));
                    }
                }).call(this);
            })(container.value);
        })(entity[Container.symbol]);

    }
}, Absorber);
const NaturalHealing = {
    symbol: Symbol("NaturalHealing")
};
mixin({
    rate: 30,
    cost: 1,
    init(entity = this.entity) {

        this.entity = entity;
        return this;

    },
    update(entity = this.entity, rate = this.rate, healing = this) {

        return (function(calories, health, nutriants) {
            /* sib/meta/macros.sibilant:119:9 */

            health.add(rate);
            return (function(gainedHealth) {
                /* sib/meta/macros.sibilant:119:9 */

                calories.remove(gainedHealth);
                return nutriants.remove(gainedHealth);
            })(((rate / 2) * (1 / (nutriants.value / nutriants.max))));
        })(entity[Calories.symbol], entity[Health.symbol], entity[Nutriants.symbol]);

    }
}, NaturalHealing);
var Nutriants = extend(Container, {
    symbol: Symbol("Nutriants")
});
var Hydration = extend(Container, {
    symbol: Symbol("Hydration")
});
var Calories = extend(Container, {
    symbol: Symbol("Calories")
});
mixin({
    max: 1000,
    doc: "Calories are units of potential energy, when calories are used,\n" + "damage will be done to the entity based on how many calories are burned. Hydration\n" + "reduces energy used, vitamins reduce the amount of damage taken per calorie burned",
    update(entity = this.entity, max = this.max, value = this.value, delta = this.delta, calories = this) {

        return (function(hydration, health) {
            /* sib/meta/macros.sibilant:119:9 */

            return (function(burn) {
                /* sib/meta/macros.sibilant:119:9 */

                delta.negative = burn;
                hydration.remove(burn);
                health.remove(burn);
                (function() {
                    if (calories.value < burn) {
                        return health.remove((2 * burn));
                    }
                }).call(this);
                return Container.update.call(calories, entity);
            })((delta.negative / (0.001 + (hydration.value / hydration.max))));
        })(entity[Hydration.symbol], entity[Health.symbol]);

    }
}, Calories);
var Health = extend(Container, {
    symbol: Symbol("Health")
});
mixin({
    doc: "Health represents the amount of damage an entity is capable of taking,\n" + "damage can come from any where,even the entities own body;though digestion. When an entities health reaches 0, it dies.\n" + "Dead entities still exist for a while, until their resources have been completely decayed into the surrounding, either from\n" + "being eaten, or passive movement of gasses and liquids away from a high density source.",
    update(entity = this.entity, health = this) {

        Container.update.call(this, entity);
        return (function() {
            if (health.value <= 0) {
                return entity.event.emit("death", entity);
            }
        }).call(this);

    }
}, Health);
var NutriantAbsorber = extend(Absorber, {
    symbol: Symbol("NutriantAbsorber")
});
mixin({
    Container: Nutriants,
    Field: Silt
}, NutriantAbsorber);
var Photoreceptor = extend(Absorber, {
    symbol: Symbol("Photoreceptor")
});
mixin({
    Container: Calories,
    Field: Light,
    update(entity = this.entity, neiborhood = this.neiborhood, kernel = this.kernel, cost = this.cost, Container = this.Container) {

        return Absorber.update(entity, neiborhood, kernel, cost, Container);

    }
}, Photoreceptor);
var WaterAbsorbtion = extend(Absorber, {
    symbol: Symbol("WaterAbsorbtion")
});
mixin({
    doc: "water decreases the amount of calories burned when performing an action",
    Container: Hydration,
    Field: Water
}, WaterAbsorbtion);
({
    value: 50,
    max: 100
}.value / {
    value: 50,
    max: 100
}.max);
var probProd = (function probProd$(arr) {
    /* prob-prod sib/game/components/mitosis.sibilant:7:0 */

    return arr.reduce((v, comp) => {

        return (v * (comp.value / comp.max));

    }, 1);
});
var reduceUntil = (function reduceUntil$(matrix, cond, f, value) {
    /* reduce-until sib/game/components/mitosis.sibilant:11:0 */

    var break__QUERY = false;
    for (var x = 0; x < matrix.width; ++(x)) {
        if (break__QUERY) {
            break
        };
        for (var y = 0; y < matrix.height; ++(y)) {
            var cell = matrix.get(x, y);;
            value = f(value, cell, x, y, matrix);;
            if (cond(value, cell, x, y, matrix)) {
                break__QUERY = true;;
                break
            }
        }

    };
    return value;
});
var decide = (function decide$(random) {
    /* decide sib/game/components/mitosis.sibilant:27:0 */

    return ([counter]) => {

        return counter >= random;

    };
});
var incrementCounter = (function incrementCounter$(counter$1, p, x, y) {
    /* increment-counter sib/game/components/mitosis.sibilant:29:0 */

    var counter = counter$1[0];

    return [(counter + p), x, y];
});
var selectRandomLocation = (function selectRandomLocation$(matrix) {
    /* select-random-location sib/game/components/mitosis.sibilant:31:0 */

    var total = countKernel.convolve(matrix),
        prob = matrix.map((v) => {

            return (v / total);

        });
    return reduceUntil(prob, decide(Math.random()), incrementCounter, [0, 0, 0]).slice(1);
});
var conditionalProbability = probProd;
const ProbabilitySpace = {
    symbol: Symbol("ProbabilitySpace")
};
mixin({
    init(matrix = this.matrix) {

        this.matrix = matrix;
        return this;

    },
    get total() {

        return countKernel.convolve(this.matrix);

    },
    get prob() {

        return this.matrix.map((v) => {

            return (v / this.total);

        });

    },
    getTotal(matrix = this.matrix) {

        return countKernel.convolve(matrix);

    },
    getProbabilityMatrix(matrix = this.matrix, total = ProbabilitySpace.getTotal(matrix)) {

        return matrix.map((v) => {

            return (v / total);

        });

    },
    joint(probs) {

        return probs.reduce(mult, identity());

    },
    randomLocation(prob = this.prob) {

        return reduceUntil(prob, decide(Math.random()), incrementCounter, [0, 0, 0]).slice(1);

    }
}, ProbabilitySpace);
var find = (function find$(entCoordPart, c) {
    /* find sib/game/components/mitosis.sibilant:63:0 */

    return ((entCoordPart + -1 + (function() {
        if (c <= 0) {
            return (c + 100);
        } else {
            return c;
        }
    }).call(this)) % 100);
});
var localJointProbability = R.curry((entity, prob, field) => {

    return (function(location) {
        /* sib/meta/macros.sibilant:119:9 */

        return prob.mult(location);
    })(field.get(entity.x, entity.y).neiborhood);

});
var mult = (function mult$(a, b) {
    /* mult sib/game/components/mitosis.sibilant:71:0 */

    return a.mult(b);
});
var localJointOf = R.curry((arr, entity) => {

    return arr.reduce(localJointProbability(entity), identity());

});
var randomNeighbor = (function randomNeighbor$(entity, kernels, probabilitySpace) {
    /* random-neighbor sib/game/components/mitosis.sibilant:76:0 */

    return ProbabilitySpace.randomLocation(ProbabilitySpace.getProbabilityMatrix(localJointOf(kernels, entity)));
});
const Mitosis = {
    symbol: Symbol("Mitosis")
};
mixin({
    init(entity = this.entity, probabilitySpace = create(ProbabilitySpace)()) {

        this.entity = entity;
        this.probabilitySpace = probabilitySpace;
        return this;

    },
    divide(entity = this.entity, probabilitySpace = this.probabilitySpace, loc = randomNeighbor(entity, [Water, Light, Silt], probabilitySpace)) {

        "attempt to create a new instance of the entity at a near by location";
        return (function(Health, Hydration, Calories, Nutriants) {
            /* sib/meta/macros.sibilant:119:9 */

            Hydration.remove((Hydration.value / 2));
            Nutriants.remove((Hydration.value / 2));
            Calories.remove((Hydration.value / 2));
            return Algae.spawn(find(entity.x, loc[0]), find(entity.y, loc[1]));
        })(entity[Health.symbol], entity[Hydration.symbol], entity[Calories.symbol], entity[Nutriants.symbol]);

    },
    update(entity = this.entity, probabilitySpace = this.probabilitySpace, divide = this.divide) {

        "choose randomly a cell to divide into, biased against total amount of available resources in all locations around the cell";
        return (function(Health, Hydration, Calories, Nutriants) {
            /* sib/meta/macros.sibilant:119:9 */

            return (function(chanceToDivide, random) {
                /* sib/meta/macros.sibilant:119:9 */

                return (function() {
                    if ((0.5 * chanceToDivide) > random) {
                        return divide(entity, probabilitySpace);
                    }
                }).call(this);
            })(probProd([Health, Hydration, Calories, Nutriants]), Math.random());
        })(entity[Health.symbol], entity[Hydration.symbol], entity[Calories.symbol], entity[Nutriants.symbol]);

    }
}, Mitosis);
const Decaying = {
    symbol: Symbol("Decaying")
};
mixin({
    init(entity = this.entity) {

        this.entity = entity;
        return this;

    },
    update(entity = this.entity, decaying = this.decaying, delta = this.delta) {

        return (function(Hydration, Nutriants) {
            /* sib/meta/macros.sibilant:119:9 */

            return (function() {
                if ((Hydration.value <= 0 && Nutriants.value <= 0)) {
                    return entity.despawn();
                }
            }).call(this);
        })(entity[Hydration.symbol], entity[Nutriants.symbol]);

    }
}, Decaying);
const FieldEmitter = {
    symbol: Symbol("FieldEmitter")
};
mixin({
    kernel: kernel(3, 3, [
        [1, 1, 1],
        [1, 4, 1],
        [1, 1, 1]
    ]).mult((1 / 12)),
    Field: null,
    Container: null,
    init(entity = this.entity, Field = this.Field, neiborhood = moore(entity.x, entity.y, Field.field)) {

        this.entity = entity;
        this.Field = Field;
        this.neiborhood = neiborhood;
        return this;

    },
    update(entity = this.entity, neiborhood = this.neiborhood, kernel = this.kernel, Container = this.Container) {

        return (function(comp) {
            /* sib/meta/macros.sibilant:119:9 */

            return (function(current) {
                /* sib/meta/macros.sibilant:119:9 */

                return (function(emitted) {
                    /* sib/meta/macros.sibilant:119:9 */

                    kernel.each((v, x, y) => {

                        return (function(r) {
                            /* sib/meta/macros.sibilant:119:9 */

                            return neiborhood.set(x, y, (r > 0) ? r : 0);
                        })((neiborhood.get(x, y) + v));

                    });
                    return comp.remove(emitted);
                })(kernel.convolve(neiborhood));
            })(comp.value);
        })(entity[Container.symbol]);

    }
}, FieldEmitter);
var NutriantEmitter = extend(FieldEmitter, {
    symbol: Symbol("NutriantEmitter")
});
mixin({
    Container: Nutriants,
    Field: Silt
}, NutriantEmitter);
var WaterEmitter = extend(FieldEmitter, {
    symbol: Symbol("WaterEmitter")
});
mixin({
    doc: "water decreases the amount of calories burned when performing an action",
    Container: Hydration,
    Field: Water
}, WaterEmitter);
var List = require("../js/list.js"),
    assert = require("assert");
var Group = Interface.define("Group", {
    init(_list = createInstanceOf(List), _members = (new Map())) {

        this._list = _list;
        this._members = _members;
        return this;

    },
    get size() {

        return this._list.length;

    },
    get length() {

        return this._list.length;

    },
    create() {

        "create an empty group instance";
        return create(this)(...arguments);

    },
    of(...items) {

        "create a new group instance with a variable number\n" + "of arguements,regardless of the number or type of arguements.\n" + "See the native `Array.of` static method.";
        var list = List.from(items);
        return create(this)(list);

    },
    from(items = this.items, fn = (a) => {

        return a;

    }) {

        "create a new group instance from an array like, or iterable object.";
        return create(this).apply(this, items.map(fn));

    },
    pop(_list = this._list, _members = this._members) {

        "remove and return the element last in the groups ordering.";
        return (function(item) {
            /* sib/meta/macros.sibilant:119:9 */

            _members.delete(item);
            return item;
        })(_list.pop());

    },
    push(value = this.value) {

        return "Add an element to the end of the groups ordering.";

    },
    each(f = this.f, _list = this._list) {

        "Call the given function on every element of the group, returning the group which is being itterated on";
        _list.each(f);
        return this;

    },
    add(member = this.member, _list = this._list, _members = this._members) {

        "Add an value to the group, unless the group already has that member.";
        return (function() {
            if (!(_members.has(member))) {
                return (function(node) {
                    /* sib/meta/macros.sibilant:119:9 */

                    _members.set(member, node);
                    _list.pushNode(node);
                    return node;
                })(_list.node(member));
            }
        }).call(this);

    },
    has(member = this.member, _members = this._members) {

        "Check if the group has the given member, returning true if yes, and false if no.";
        return _members.has(member);

    },
    remove(member = this.member, _list = this._list, _members = this._members) {

        "Remove a specific member from the group.";
        return (function(node) {
            /* sib/meta/macros.sibilant:119:9 */

            (function() {
                if (node) {
                    _list.removeNode(node);
                    return _members.delete(member);
                }
            }).call(this);
            return node;
        })(_members.get(member));

    }
});
(function(group, testData) {
    /* sib/meta/macros.sibilant:119:9 */

    group.add(testData[0]);
    assert(group._list.length === 1, "length of list was not changed after addition");
    assert(group.has(testData[0]), "method `has` does not accurately detect membership");
    group.remove(testData[0]);
    assert(group._list.length === 0, "length of list was not changed after removal");
    return console.log("all group tests pass.");
})(create(Group)(), (new Array(10)).map((nil, i) => {

    return {
        value: i
    };

}));
var ObjectPool = Interface.define("ObjectPool", {
    init(size = this.size, _interface = null, _array = (function(array) {
        /* sib/meta/macros.sibilant:119:9 */

        (function() {
            /* sib/meta/macros.sibilant:27:8 */

            var $for = null;
            for (var i = 0; i < size; ++(i)) {
                $for = (function() {
                    /* sib/meta/macros.sibilant:29:35 */

                    return array.push((function() {
                        /* sib/object-pool.sibilant:5:46 */

                        return Object.create(_interface);
                    }).call(this));
                }).call(this);
            };
            return $for;
        }).call(this);
        return array;
    })([]), _members = Group.of(..._array), _available = Group.of(..._array), _inUse = Group.create()) {

        this.size = size;
        this._interface = _interface;
        this._array = _array;
        this._members = _members;
        this._available = _available;
        this._inUse = _inUse;
        return this;

    },
    pools: (new Map()),
    get free() {

        return this._available.size;

    },
    get used() {

        return this._inUse.size;

    },
    get total() {

        return this._members.size;

    },
    clear(size = this.size, _interface = this._interface, _array = this._array, _inUse = this._inUse) {

        _inUse.each((o) => {

            return o.clear();

        });
        return this.init(size, _interface, _array);

    },
    aquire(_available = this._available, _members = this._members, _inUse = this._inUse) {

        "remove an object from the collection of available ones,\n" + "adding it to the collection of objects currently in use,\n" + "and return it to the caller.";
        return (function(member) {
            /* sib/meta/macros.sibilant:119:9 */

            _inUse.add(member);
            return member;
        })(_available.pop());

    },
    release(obj = this.obj, _available = this._available, _members = this._members, _inUse = this._inUse) {

        "take an object that is a member of this pool, and remove it\n" + "from the collection of in use objects, and adding it to the collection of\n" + "available ones, for later use";
        _inUse.remove(obj);
        return _available.add(obj);

    }
});
(function(i) {
    /* sib/meta/macros.sibilant:119:9 */

    return (function(pool) {
        /* sib/meta/macros.sibilant:119:9 */

        console.log(pool);
        return console.log("aquired value", pool.aquire());
    })(create(ObjectPool)(1000, {}));
})(0);
var singleton = (function singleton$() {
    /* singleton sib/game/entity-system.sibilant:4:0 */

    "A builder function for instantiating interfaces\n" + "who are to only have one instance, them selves.";
    return this.init();
});
var PooledSystem = Interface.define("PooledSystem", {
    init(limit = this.limit, interface = this.interface, _pool = create(ObjectPool)(limit, interface)) {

        this.limit = limit;
        this.interface = interface;
        this._pool = _pool;
        this.register(interface);
        return this;

    },
    limit: 10000,
    systems: (new Map()),
    clear(_pool = this._pool) {

        _pool._inUse.each((e) => {

            return e.despawn();

        });
        return _pool.clear();

    },
    spawn(...args) {

        "aquire an object from the systems pool, and initialize it.";
        return (function(r) {
            /* sib/meta/macros.sibilant:119:9 */

            r.init(...args);
            return r;
        })(this._pool.aquire());

    },
    despawn(obj) {

        "remove an object from the system, and release it back into the pool.";
        obj.clear();
        return this._pool.release(obj);

    },
    register(interface) {

        "Associate an interface with a system, and add the system\n" + "to the collection of all active systems.";
        interface.system = this;
        return this.systems.set(this, this);

    },
    update() {

        "update every active member of the system";
        return this._pool._inUse.each((member) => {

            return member.update();

        });

    }
});
var entityLayer = sim.layers.get();
var Entity = Interface.define("Entity", {
    init(x = this.x, y = this.y, aspects = this.aspects) {

        this.x = x;
        this.y = y;
        this.aspects = aspects;
        this.event = (new EventEmitter());
        (function() {
            if (!(Collision.has([x, y]))) {
                Collision.set([x, y], this);
                this.layer.add(this);
                this._spawned = true;
                return this.components = aspects.map((T) => {

                    return this[T.symbol] = createInstanceOf(T, this);

                });
            } else {
                this._spawned = true;
                return this.despawn();
            }
        }).call(this);
        return this;

    },
    get aspects() {

        console.trace("aspect gotten", this.aspect);
        return this.aspect;

    },
    set aspects(a) {

        console.trace("setting aspect from", this.aspect, "to", a);
        return this.aspect = a;

    },
    layer: entityLayer,
    spawn() {

        "Aquire an empty entity instance, and initialize it.";
        return this.system.spawn(...arguments);

    },
    clear(entity = this, layer = this.layer) {

        "remove an entity from the system, and clear its component list.";
        Collision.delete([entity.x, entity.y]);
        layer.delete(entity);
        entity.event.removeAllListeners("error");
        entity.event = null;
        entity._spawned = false;
        entity.components = [];
        return entity;

    },
    despawn() {

        "Remove this entity from the system.";
        (function() {
            if (this._spawned) {
                return this.system.despawn(this);
            }
        }).call(this);
        return this;

    },
    update(components = this.components) {

        "update every component of this entity in order of appearance.";
        return components.each((comp) => {

            return comp.update(this);

        });

    }
});
var EntitySystem = Interface.define("EntitySystem", {
    init(limit = this.limit) {

        this.limit = limit;
        PooledSystem.init.call(this, limit, this.interface);
        return this;

    },
    extend: PooledSystem,
    interface: Entity,
    move(entity, [x, y]) {

        "move an entity to the given location, if the location does not collide with any other entities.";
        return Collision.move([x, y], entity);

    }
});
var Algae = Interface.define("Algae", {
    init(x = this.x, y = this.y, components = this.components) {

        this.x = x;
        this.y = y;
        this.components = components;
        Entity.init.call(this, x, y);
        (function() {
            if (this._spawned) {
                this.r = 0;
                this.g = 255;
                this.b = 0;
                this.a = 255;
                this._dead = false;
                return this.event.once("death", (entity) => {

                    return (function() {
                        if (!(entity._dead)) {
                            return (function(Hydration, Calories, Nutriants) {
                                /* sib/meta/macros.sibilant:119:9 */

                                entity._dead = true;
                                entity.r = 128;
                                entity.g = 100;
                                entity.b = 80;
                                entity.a = 255;
                                return entity.components = [Hydration, Nutriants, ...[NutriantEmitter, WaterEmitter, Decaying].map((T) => {

                                    return entity[T.symbol] = createInstanceOf(T, entity);

                                })];
                            })(entity[Hydration.symbol], entity[Calories.symbol], entity[Nutriants.symbol]);
                        }
                    }).call(this);

                }).once("error", (err) => {

                    console.log("error on", "death", "of", "this.event", "given", "entity()");
                    return console.log(err);

                });
            }
        }).call(this);
        return this;

    },
    extend: Entity,
    r: 0,
    g: 255,
    b: 0,
    a: 255,
    clear() {

        this.aspects = Algae.aspects;
        this.event.removeAllListeners("*");
        this.event.removeAllListeners("death");
        return Entity.clear.call(this);

    },
    aspects: [Health, WaterAbsorbtion, Photoreceptor, NutriantAbsorber, Mitosis, Nutriants, Calories, Hydration, NaturalHealing]
});
Algae.system = Interface.define("Algae.system", {
    extend: EntitySystem,
    interface: Algae
}).init();
var bulkSpawnEntity = (function bulkSpawnEntity$(T, args) {
    /* bulk-spawn-entity sib/game/starting-entities.sibilant:2:0 */

    return args.each((a) => {

        return T.spawn(...a);

    });
});
var updateGame = (function updateGame$(ticks) {
    /* update-game sib/game/starting-entities.sibilant:8:0 */

    "Gets called every tick of the game, and for every system of the process,\n" + "we update its state, and recaculate the values of the current major field.";
    (function() {
        if (Algae.system._pool.used === 0) {
            return initializeGame();
        }
    }).call(this);
    var currentSystem = systems[(ticks % systems.length)];
    updateOnBeatField(currentSystem, ticks);
    refreshFields();
    Algae.system.update();
    refreshFields();
    return updateDisplay();
});
var randomizeFields = (function randomizeFields$() {
    /* randomize-fields sib/game/starting-entities.sibilant:45:0 */

    return systems.each((s) => {

        return s.randomize();

    });
});
randomizeFields();
var initializeGame = (function initializeGame$() {
    /* initialize-game sib/game/starting-entities.sibilant:50:0 */

    Algae.system.clear();
    systems.each((s) => {

        return s.randomize();

    });
    return bulkSpawnEntity(Algae, [
        [20, 50],
        [10, 50]
    ]);
});
initializeGame();
systems.each((s) => {

    return s.populate();

});
var laggedTicks = 0;
Ticker.init(10).start().removeAllListeners("tick").on("tick", (now, tick) => {

    (function() {
        if (Ticker.elapsed > (Ticker.rate * 3)) {
            ((laggedTicks) ++);
            console.log("game is lagging", Ticker.elapsed, "is greater than", Ticker.rate, "for", laggedTicks, "ticks");
            return (function() {
                if (laggedTicks > 20) {
                    "resetting from lag";
                    return initializeGame();
                }
            }).call(this);
        } else {
            return laggedTicks = 0;
        }
    }).call(this);
    return updateGame(tick);

});
