
(function(a, b, c) {
    /* ../../../../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

    return foo(this);
}).bind(this);


;
var R = require("ramda");


var fmap = R.curry((f, a) => {

    return a.map(f);

});
var is = {
    string(v) {

        return typeof v === "string";

    }
};
is.empty__QUERY = (function is$empty__QUERY$(value) {
    /* is.empty? ../../../../../../../node_modules/kit/inc/core/fp.sibilant:12:0 */

    return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
    /* athrow ../../../../../../../node_modules/kit/inc/core/fp.sibilant:14:0 */

    return () => {

        return (new errType(message));

    };
});
var getValueOf = (function getValueOf$(o) {
    /* get-value-of ../../../../../../../node_modules/kit/inc/core/fp.sibilant:17:0 */

    return o.getValue();
});
var sibilant = require("sibilant"),
    net = require("net"),
    vm = require("vm");


global._sibilant = sibilant;
global.module = module;
global.require = require;
global.exports = exports;

var i = 0;

var readlineSocket = net.connect(8120, "localhost",() => {

    console.log("connected to repl");
    readlineSocket.write("(include \"./index.sibilant\")");
    return readlineSocket.on("data", (data) => {

        return vm.runInThisContext(data,("kit:" + i++));

    });

}).on("close", (function(b, ...others) {
    /* ../../../../../../../node_modules/kit/inc/console.sibilant:10:8 */

    console.log("connection closed to repl", b, ...others);
    return b;
}));
