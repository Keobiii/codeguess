import { useEffect, useState } from "react";
import { codeQuestions } from "./data/codes";

function App() {
  const [currentQuestion] = useState(
    codeQuestions[Math.floor(Math.random() * codeQuestions.length)],
  );

  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    if (!timerStarted || isCorrect) return;

    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStarted, isCorrect]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = guess.trim();

    if (!answer || isCorrect) return;

    const correct =
      answer.toLowerCase() === currentQuestion.answer.toLowerCase();

    setGuesses((prev) => [
      ...prev,
      {
        answer,
        correct,
      },
    ]);

    if (correct) {
      setIsCorrect(true);
    }

    setGuess("");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight">CodeGuess</h1>
          <p className="mt-1 text-sm text-gray-500">
            Test your programming knowledge, one challenge at a time.
          </p>
        </header>

        {/* Game Layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_260px]">
          {/* Main Challenge */}
          <section>
            {/* Question */}
            <div className="mb-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
                Find the missing code
              </p>

              <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
                {currentQuestion.question}
              </h1>
            </div>

            {/* Code Editor */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101010]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-green-500/70" />
                </div>

                <span className="text-xs text-gray-500">javascript</span>
              </div>

              <div className="flex min-h-40 items-start gap-5 p-6">
                <span className="select-none text-sm text-gray-700">01</span>

                <pre className="overflow-x-auto text-sm leading-8 text-gray-300">
                  <code>{currentQuestion.code}</code>
                </pre>
              </div>
            </div>

            {/* Answer Input */}
            <form onSubmit={handleSubmit} className="mt-7">
              <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-gray-500">
                Your answer
              </label>

              <div
                className={`flex items-center rounded-xl border bg-[#101010] transition-all ${
                  isCorrect
                    ? "border-green-500/30"
                    : "border-white/10 focus-within:border-white/30"
                }`}
              >
                <input
                  type="text"
                  placeholder="Type the missing code..."
                  value={guess}
                  onChange={(e) => {
                    setGuess(e.target.value);
                    setTimerStarted(true);
                  }}
                  disabled={isCorrect}
                  autoComplete="off"
                  autoFocus
                  className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-gray-600"
                />

                <button
                  type="submit"
                  disabled={isCorrect || !guess.trim()}
                  className="mr-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit ↵
                </button>
              </div>
            </form>

            {/* Success Message */}
            {isCorrect && (
              <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-4">
                <span className="text-green-400">✓</span>
                <div>
                  <p className="text-sm font-medium text-green-400">
                    Correct answer!
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    You found the missing code in {formatTime(elapsedSeconds)}.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="space-y-5 md:sticky md:top-8 md:self-start md:pt-[85px]">
            {/* Stopwatch */}
            <div className="rounded-xl border border-white/10 bg-[#101010] p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                  Time elapsed
                </span>

                <span
                  className={`h-2 w-2 rounded-full ${
                    isCorrect
                      ? "bg-green-400"
                      : timerStarted
                        ? "animate-pulse bg-green-400"
                        : "bg-gray-600"
                  }`}
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-500">◷</span>
                <span className="font-mono text-3xl font-semibold tracking-tight tabular-nums">
                  {formatTime(elapsedSeconds)}
                </span>
              </div>

              <p className="mt-3 text-xs text-gray-600">
                {isCorrect
                  ? "Time completed"
                  : timerStarted
                    ? "Timer running"
                    : "Waiting for your first answer"}
              </p>
            </div>

            {/* Guess History */}
            <div className="rounded-xl border border-white/10 bg-[#101010] p-5">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-sm font-semibold">Guess history</h3>

                <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-500">
                  {guesses.length}
                </span>
              </div>

              {guesses.length === 0 ? (
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-600">No attempts yet.</p>
                </div>
              ) : (
                <div className="max-h-80 divide-y divide-white/5 overflow-y-auto">
                  {guesses
                    .slice()
                    .reverse()
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-3 py-4"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="text-xs text-gray-600">
                            {String(guesses.length - index).padStart(2, "0")}
                          </span>

                          <code
                            className={`truncate text-xs ${
                              item.correct
                                ? "font-semibold text-green-400"
                                : "text-gray-400"
                            }`}
                          >
                            {item.answer}
                          </code>
                        </div>

                        <span
                          className={`shrink-0 text-xs ${
                            item.correct ? "text-green-400" : "text-gray-600"
                          }`}
                        >
                          {item.correct ? "✓" : "×"}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
