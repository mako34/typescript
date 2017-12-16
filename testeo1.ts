//testeo

function process(x: {a:number, b:string}){
 return x.a;
}

function makeAcc(){
    var sum = 0;
    return {
        clear : function(){sum =0;},
        add: function(value:number){sum += value;},
        result:function(){return sum;}
    };
}

var a = makeAcc();
a.add(5);

//
window.onmousemove = function(e){e.clientX;}

//

class Tracker {
    count = 0;
    start() {
        window.onmouseover = function(e){
            
        }
        // window.onmouseover = function (e) {
        //     this.coun
        //     console.log(this.count);
        // };
    }
}