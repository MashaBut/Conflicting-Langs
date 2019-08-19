"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message_base_1 = require("./message-base");
var MessageNewRoom = /** @class */ (function (_super) {
    __extends(MessageNewRoom, _super);
    function MessageNewRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageNewRoom;
}(message_base_1.MessageBase));
exports.MessageNewRoom = MessageNewRoom;
