import { IStreamLogger } from './../../core/handlers/stream-logger.interface'

export class ConsoleLogger implements IStreamLogger {
  private static instance: ConsoleLogger

  private constructor() {}

  log(...args: any[]): void {
    console.log(`Вывод ${args} `)
  }
  error(...args: any[]): void {
    console.error(`Ошибка ${args} `)
  }
  end(): void {
    console.error(`Завершено`)
  }

  public get(): ConsoleLogger {
    if (!ConsoleLogger.instance) {
      ConsoleLogger.instance = new ConsoleLogger()
    }
    return ConsoleLogger.instance
  }
}
