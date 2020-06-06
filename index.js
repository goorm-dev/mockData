const _ = require('lodash');

const allTypeData = ['', null, 0, undefined, false, new Date(), [], 2, () => {}, 'str'];
const falselyList = allTypeData.filter(v => !v);
const notStringList = allTypeData.filter(v => !_.isString(v));
const notObjectList = allTypeData.filter(v => !_.isObject(v));
const notArrayList = allTypeData.filter(v => !_.isArray(v));
const notIntList = allTypeData.filter(v => !_.isSafeInteger(v));
const notDateList = allTypeData.filter(v => !_.isDate(v));
const notBoolList = allTypeData.filter(v => !_.isBoolean(v));
const notObjectAndStringList = allTypeData.filter(
	v => _.isString(v) && !_.isObject(v)
);
const notIntArrayList = [...notArrayList, ...notIntList.map(v => Array.from(3).fill(v))];
const notStringsList = [
	...notStringList.filter(v => !_.isArray(v)),
	...notStringList.map(v => Array.from({ length: 3 }).fill(v))
];
const notObjectArrayList = [...notObjectList.map(v => Array.from({ length: 3 }).fill(v))];

module.exports = {
	allTypeData,
	falselyList,
	notStringList,
	notObjectList,
	notArrayList,
	notIntList,
	notDateList,
	notBoolList,
	notObjectAndStringList,
	notIntArrayList,
	notStringsList,
	notObjectArrayList
};