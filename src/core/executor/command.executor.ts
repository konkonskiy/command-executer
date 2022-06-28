import { ICommandExec } from './command.types'
import { ChildProcessWithoutNullStreams } from 'child_process'
import { IStreamLogger } from './../handlers/stream-logger.interface'

/* Template Method */

abstract class CommandExecutor<Input> {
  constructor(private logger: IStreamLogger) {}

  public async execute() {
    const input = await this.prompt()
    const command = this.bild(input)
    const stream = this.spawn(command)
    this.processStream(stream, this.logger)
  }

  protected abstract prompt(): Promise<Input>
  protected abstract bild(input: Input): ICommandExec
  protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams
  protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void
}
