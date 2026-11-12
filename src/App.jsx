import { useEffect, useState } from "react";
import { codeQuestions } from "./data/codes";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(
    codeQuestions[Math.floor(Math.random() * codeQuestions.length)],
  );

  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const [elapsedMilliseconds, setElapsedMilliseconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    if (!timerStarted || isCorrect) return;

    const interval = setInterval(() => {
      setElapsedMilliseconds((prev) => prev + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [timerStarted, isCorrect]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const remainingMilliseconds = milliseconds % 1000;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}.${String(remainingMilliseconds).padStart(3, "0")}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = guess.trim();

    if (!answer || isCorrect) return;

    const correct = answer === currentQuestion.answer;

    setGuesses((prev) => [
      ...prev,
      {
        answer,
        correct,
        time: elapsedMilliseconds,
      },
    ]);

    if (correct) {
      setIsCorrect(true);
    }

    setGuess("");
  };

  const handleOneMore = () => {
    const newQuestion =
      codeQuestions[Math.floor(Math.random() * codeQuestions.length)];

    setCurrentQuestion(newQuestion);
    setGuess("");
    setGuesses([]);
    setIsCorrect(false);
    setElapsedMilliseconds(0);
    setTimerStarted(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-xl font-bold tracking-tight text-white">
            Code<span className="text-gray-500">Guess</span>
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 pt-24 pb-10 md:pt-28">
        {/* Game Layout */}
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Main Challenge */}
          <section className="min-w-0 flex-1">
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
                  className="mr-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-black cursor-pointer transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit ↵
                </button>
              </div>
            </form>

            {/* Success Modal */}
            {isCorrect && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#101010] p-6 shadow-2xl">
                  <div className="mb-5 text-center">
                    <div className="mb-3 text-3xl text-green-400 font-semibold">{currentQuestion.answer}</div>

                    <h2 className="text-lg font-semibold text-white">
                      Correct answer!
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      You found the missing code in
                    </p>

                    <p className="mt-2 font-mono text-2xl font-semibold text-white">
                      {formatTime(elapsedMilliseconds)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleOneMore}
                    className="w-full rounded-lg bg-white px-4 py-3 text-xs font-semibold text-black transition hover:bg-gray-200 cursor-pointer"
                  >
                    One More
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="w-full space-y-5 md:sticky md:top-8 md:w-[260px] md:shrink-0 md:self-start md:pt-[85px]">
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
                  {formatTime(elapsedMilliseconds)}
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
                <div className="max-h-80 divide-y divide-white/5 overflow-y-auto scrollbar-hide">
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
                          {formatTime(item.time)}
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
