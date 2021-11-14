class Subject{

    constructor(){
        this.observer ={};
      }
        on(event , fn){
            if(this.observer[event]){
                this.observer[event].push(fn);
            }else{
                this.observer[event] = [fn];
            }
        }
        emit(event, message){
            if(this.observer[event]){
                for(let i = 0; i < this.observer[event].length;i++){
                    let temp = this.observer[event]
                    temp[i](message);
            }
        }
 
}
}
const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445