//internal modules
module Acme.Core.Utils {
    export class Tracker {
        count = 0;
        start() {
            //arrow function
            // window.onmouseover = e => {
            //     this.count++;
            //     console.log(this.count);
            // };
            console.log("ss9");
            
        }
    }
}
module Acme.Core.Utils{
    export var greeting = "hello"
}
import ACU = Acme.Core.Utils;
var t = new ACU.Tracker();
var ds = ACU.greeting;
console.log(ds);

t.start();