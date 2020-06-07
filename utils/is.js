const MAP = {
	"[object Undefined]":undefined,
	"[object Null]":null,
	"[object Object]":Object,
	"[object Array]":Array,
	"[object String]":String,
	"[object Number]":Number,
	"[object Boolean]":Boolean,
	"[object Function]":Function,
	"[object Date]":Date,
	"[object JSON]":JSON
}

const is = function(obj){
	if(!obj === obj) return NaN
	return MAP[Object.prototype.toString.call(obj)]
}

export default is