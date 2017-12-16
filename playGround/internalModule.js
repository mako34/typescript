//internal modules
var Acme;
(function (Acme) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            var Tracker = /** @class */ (function () {
                function Tracker() {
                    this.count = 0;
                }
                Tracker.prototype.start = function () {
                    //arrow function
                    // window.onmouseover = e => {
                    //     this.count++;
                    //     console.log(this.count);
                    // };
                    console.log("ss9");
                };
                return Tracker;
            }());
            Utils.Tracker = Tracker;
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = Acme.Core || (Acme.Core = {}));
})(Acme || (Acme = {}));
(function (Acme) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            Utils.greeting = "hello";
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = Acme.Core || (Acme.Core = {}));
})(Acme || (Acme = {}));
var ACU = Acme.Core.Utils;
var t = new ACU.Tracker();
var ds = ACU.greeting;
console.log(ds);
t.start();
