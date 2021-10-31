// let baseObject:{
// 	width:number,
// 	length:number
// 	calcSize();
// }

//  baseObject = { 
// 	width: 0, 
// 	length: 0 ,
// 	calcSize: function () {
//         return this.width * this.length;
//     }
// }; 

// let rectangle: typeof baseObject = Object.create(baseObject); 

// rectangle.width = 5; 
// rectangle.length = 2; 
// console.log(rectangle.calcSize()); // 10

let baseObject:{
	width:number,
	length:number
	calcSize():number;
}

 baseObject = { 
	width: 0, 
	length: 0, 
	calcSize : function() { 
		return this.width * this.length; 
	}
}; 
let rectangle: typeof baseObject = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 


console.log(rectangle)
console.log(rectangle.calcSize()); // 10