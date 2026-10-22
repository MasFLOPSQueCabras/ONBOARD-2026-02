import { useMemo, type ReactNode } from "react";

export interface MojoCodeBoxProps {
  header?: string;
  code: string;
  highlightLines?: number[];
  footer?: string;
}

const TOKEN_SOURCE =
  /(@[a-zA-Z_]\w*)|(\b(?:fn|def|var|let|alias|struct|trait|return|if|elif|else|for|in|while|borrowed|inout|owned|raises|from|import)\b)|(\b(?:Int|UInt|Float32|Float64|Bool|String|DType|UnsafePointer|DTypePointer|SIMD|Scalar|LayoutTensor)\b)|(\b\d+(?:\.\d+)?\b)|("[^"]*")|(\b[a-zA-Z_]\w*(?=[([]))|([->:]+|[()[\]{},=+\-*/])/
    .source;

function highlightMojoLine(line: string): ReactNode {
  if (!line) return " ";
  if (!line.trim()) return line;

  const commentIndex = line.indexOf("//");
  if (commentIndex !== -1) {
    const codePart = line.slice(0, commentIndex);
    const commentPart = line.slice(commentIndex);
    return (
      <>
        {highlightMojoLine(codePart)}
        <span className="text-zinc-400 italic">{commentPart}</span>
      </>
    );
  }

  const tokenRegex = new RegExp(TOKEN_SOURCE, "g");
  const elements: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    const matchStart = match.index;
    if (matchStart > lastIndex) {
      elements.push(line.slice(lastIndex, matchStart));
    }

    const [full, decorator, keyword, type, number, stringLit, funcCall, symbol] = match;

    if (decorator) {
      elements.push(
        <span key={matchStart} className="font-semibold text-emerald-400">
          {decorator}
        </span>,
      );
    } else if (keyword) {
      elements.push(
        <span key={matchStart} className="font-bold text-yellow-400">
          {keyword}
        </span>,
      );
    } else if (type) {
      elements.push(
        <span key={matchStart} className="font-medium text-sky-300">
          {type}
        </span>,
      );
    } else if (number) {
      elements.push(
        <span key={matchStart} className="text-purple-300">
          {number}
        </span>,
      );
    } else if (stringLit) {
      elements.push(
        <span key={matchStart} className="text-emerald-300">
          {stringLit}
        </span>,
      );
    } else if (funcCall) {
      elements.push(
        <span key={matchStart} className="text-yellow-300">
          {funcCall}
        </span>,
      );
    } else if (symbol) {
      elements.push(
        <span key={matchStart} className="text-zinc-400">
          {symbol}
        </span>,
      );
    }

    lastIndex = matchStart + full.length;
  }

  if (lastIndex < line.length) {
    elements.push(line.slice(lastIndex));
  }

  return elements;
}

export function MojoCodeBox({ header, code, highlightLines = [], footer }: MojoCodeBoxProps) {
  const renderedLines = useMemo(() => {
    const highlightSet = new Set(highlightLines);
    return code
      .trim()
      .split("\n")
      .map((line, idx) => {
        const lineNum = idx + 1;
        return {
          lineNum,
          isHighlighted: highlightSet.has(lineNum),
          tokens: highlightMojoLine(line),
        };
      });
  }, [code, highlightLines]);

  return (
    <div className="box-border rounded-2xl border border-white/12 bg-[#0a0a0c]/60 p-4 backdrop-blur-[2px] md:px-8 md:py-6">
      {header && (
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 md:mb-4 md:pb-3.5">
          <span className="font-mono text-[11.5px] font-semibold tracking-[0.08em] text-yellow-400 md:text-[16px]">
            {header}
          </span>
        </div>
      )}

      <pre className="m-0! overflow-x-hidden bg-transparent! p-0! font-mono! text-[10.8px]! leading-[1.52]! shadow-none! md:text-[18.5px]! md:leading-[1.6]!">
        <code className="bg-transparent p-0">
          {renderedLines.map(({ lineNum, isHighlighted, tokens }) => (
            <div
              key={lineNum}
              className={`flex items-start gap-2 rounded px-1.5 py-0.5 md:gap-6 md:px-3.5 md:py-1 ${
                isHighlighted ? "bg-yellow-400/15" : "bg-transparent"
              }`}
            >
              <span
                className={`w-4 shrink-0 pt-0.5 text-right text-[10px] select-none md:w-7 md:text-[15px] ${
                  isHighlighted ? "font-bold text-yellow-400" : "font-normal text-zinc-600"
                }`}
              >
                {lineNum}
              </span>
              <span className="flex-1 whitespace-pre text-zinc-200">{tokens}</span>
            </div>
          ))}
        </code>
      </pre>

      {footer && (
        <div className="mt-2.5 border-t border-white/15 pt-2.5 font-mono text-[11px] text-zinc-400 md:mt-5 md:pt-4 md:text-base">
          {footer}
        </div>
      )}
    </div>
  );
}
