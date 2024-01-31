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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodoStatus = exports.saveTodo = exports.fetchAllTodos = void 0;
const todo_1 = __importDefault(require("../../models/todo"));
const fetchAllTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todo_1.default.find();
    return todos;
});
exports.fetchAllTodos = fetchAllTodos;
const saveTodo = (todoData) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = new todo_1.default(Object.assign(Object.assign({}, todoData), { isCompleted: false }));
    const newItem = yield todo.save();
    return newItem;
});
exports.saveTodo = saveTodo;
const updateTodoStatus = (_id, isCompleted) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield todo_1.default.findByIdAndUpdate({ _id }, {
        isCompleted,
    }, {
        new: true,
    });
    return updatedItem;
});
exports.updateTodoStatus = updateTodoStatus;
const deleteTodo = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield todo_1.default.findByIdAndDelete(_id);
    return deletedItem;
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=index.js.map