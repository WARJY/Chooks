import is from './is.js'

// 以下所有的检测规则：
// 通过则返回true，否则返回tip
const MAP = {
	"empty": function (field, val) {
		let _tip = field + "不能为空"
		if (val === undefined) return _tip
		if (val === "") return _tip
		if (is(val) === String) val = val.replace(/\s+/g, "")
		if (is(val) === NaN) return _tip
		if (is(val) === Array && val.length === 0) return _tip
		if (is(val) === Object && Object.keys(val).length === 0) return _tip
		return true
	},
	"tel": function (field, val) {
		let _tip = "请输入正确的座机号"
		if (!/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(val)) return _tip
		return true
	},
	"phone": function (field, val) {
		let _tip = "请输入正确的手机号"
		if (!/^1\d{10}$/.test(val)) return _tip
		return true
	},
	"email": function (field, val) {
		let _tip = "请输入正确的邮箱地址"
		if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(val)) return _tip
		return true
	},
	"url": function (field, val) {
		let _tip = "请输入正确的url地址"
		if (!/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(val)) return _tip
		return true
	},
	"card": function (field, val) {
		let _tip = "请输入正确的身份证号码"
		if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)) return _tip
		return true
	},
}

//数据验证
const dataValid = function (target, rule) {
	//判空
	if (!target || !rule) return console.error("目标对象或规则缺失")
	let keys_rule = Object.keys(rule)

	//开始
	let result = true
	keys_rule.forEach((key, i) => {
		let currentField = keys_rule[i]
		let currentValue = target[key]
		let currentRule = rule[currentField]

		//格式化规则为数组
		if (is(currentRule) === String) currentRule = [currentRule]
		if (is(currentRule) === Function) currentRule = currentRule.call(this)
		
		let currentRes = []
		currentRule.forEach(r => {
			let ruleResult;
			//字符串规则
			if (is(r) === String) {
				//跳过不存在的规则
				if (!MAP[r]) ruleResult = true
				else ruleResult = MAP[r](currentField, currentValue)
			}

			//数组规则
			if (is(r) === Array) {
				let aFlag = r.some(rr => currentValue === rr)
				if (aFlag === true) ruleResult = true
				else ruleResult = currentField + "不合法"
			}
			currentRes.push(ruleResult)
		})
		let currentResult = getResult(currentRes)
		if(currentResult === true) return
		if(result === true) return result = {
			[currentField]: currentResult
		}
		result[currentField] = currentResult
	})

	return result
}

//通过结果数组获取结果
const getResult = function (arr) {
	let reason = []
	arr.forEach(v => {
		if (v !== true) reason.push(v)
	})
	if (reason.length === 0) return true
	return reason
}

export default dataValid