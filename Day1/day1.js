"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fsPromise = require("fs/promises");
function advent() {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var file, number1, number2, reverseString, total, _d, _e, _f, line, i, _i, line_1, char, i, combine, combineNumber, e_1_1;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, fsPromise.open('input.txt', 'r')];
                case 1:
                    file = _g.sent();
                    number1 = "";
                    number2 = "";
                    reverseString = "";
                    total = 0;
                    _g.label = 2;
                case 2:
                    _g.trys.push([2, 7, 8, 13]);
                    _d = true, _e = __asyncValues(file.readLines());
                    _g.label = 3;
                case 3: return [4 /*yield*/, _e.next()];
                case 4:
                    if (!(_f = _g.sent(), _a = _f.done, !_a)) return [3 /*break*/, 6];
                    _c = _f.value;
                    _d = false;
                    line = _c;
                    for (i = 0; i < line.length; i++) {
                        if (Number(line[i])) {
                            number1 = line[i];
                            break;
                        }
                    }
                    for (_i = 0, line_1 = line; _i < line_1.length; _i++) {
                        char = line_1[_i];
                        reverseString = char + reverseString;
                    }
                    for (i = 0; i < reverseString.length; i++) {
                        if (Number(reverseString[i])) {
                            number2 = reverseString[i];
                            break;
                        }
                    }
                    combine = number1 + number2;
                    combineNumber = +combine;
                    total = total + combineNumber;
                    _g.label = 5;
                case 5:
                    _d = true;
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _g.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _g.trys.push([8, , 11, 12]);
                    if (!(!_d && !_a && (_b = _e.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _b.call(_e)];
                case 9:
                    _g.sent();
                    _g.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13:
                    console.log(total);
                    return [2 /*return*/];
            }
        });
    });
}
advent();
