import { PromptService } from './core/prompt/prompt.service'
class App {
  async run() {
    const res = await new PromptService().input<number>('Число', 'number')
    return res
  }
}

const app = new App()
console.log('🚀 ~ file: App.ts ~ line 10 ~ app.run()', app.run())
