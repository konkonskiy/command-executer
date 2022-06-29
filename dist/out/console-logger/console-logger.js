"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    constructor() { }
    log(...args) {
        console.log(`Вывод ${args} `);
    }
    error(...args) {
        console.error(`Ошибка ${args} `);
    }
    end() {
        console.error(`Завершено`);
    }
    static get() {
        if (!ConsoleLogger.instance) {
            ConsoleLogger.instance = new ConsoleLogger();
        }
        return ConsoleLogger.instance;
    }
}
exports.ConsoleLogger = ConsoleLogger;
