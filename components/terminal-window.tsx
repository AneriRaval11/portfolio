export function TerminalWindow() {
  return (
    <div className="terminal-window">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
      </div>

      <div className="space-y-3 font-mono text-[0.75rem] text-zinc-200 sm:text-sm">
        <div className="terminal-line">
          <span className="text-sky-300">$</span>
          <span className="ml-3">whoami</span>
        </div>
        <div className="terminal-line text-zinc-50">aneri raval</div>

        <div className="terminal-line">
          <span className="text-sky-300">$</span>
          <span className="ml-3">focus</span>
        </div>
        <div className="terminal-line text-zinc-100">applied ai</div>
        <div className="terminal-line text-zinc-100">backend engineering</div>
        <div className="terminal-line text-zinc-100">research</div>

        <div className="terminal-line">
          <span className="text-sky-300">$</span>
          <span className="ml-3">approach</span>
        </div>
        <div className="terminal-line text-zinc-100">
          explore → build → share
        </div>
        <div className="terminal-line mt-4 text-sky-300">
          <span className="inline-block h-3 w-2 animate-pulse bg-sky-300 align-middle" />
        </div>
      </div>
    </div>
  );
}
