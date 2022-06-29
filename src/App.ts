import { ConsoleLogger } from './out/console-logger/console-logger'
import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor'
class App {
  async run() {
    new FfmpegExecutor(ConsoleLogger.get()).execute()
  }
}

const app = new App()
app.run()
