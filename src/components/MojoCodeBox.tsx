import type { ReactNode } from "react";

export interface MojoCodeBoxProps {
  header?: string;
  code: string;
  highlightLines?: number[];
  footer?: string;
}

function highlightMojoLine(line: string): ReactNode {
  if (!line.trim()) return " ";

  const commentIndex = line.indexOf("//");
  if (commentIndex !== -1) {
    const codePart = line.slice(0, commentIndex);
    const commentPart = line.slice(commentIndex);
    return (
      <>
        {highlightMojoLine(codePart)}
        <span style={{ color: "#71717a", fontStyle: "italic" }}>{commentPart}</span>
      </>
    );
  }

  const tokenRegex =
    /(@[a-zA-Z_]\w*)|(\b(?:fn|def|var|let|alias|struct|trait|return|if|elif|else|for|in|while|borrowed|inout|owned|raises|from|import)\b)|(\b(?:Int|UInt|Float32|Float64|Bool|String|DType|UnsafePointer|DTypePointer|SIMD|Scalar|LayoutTensor)\b)|(\b\d+(?:\.\d+)?\b)|("[^"]*")|(\b[a-zA-Z_]\w*(?=[([]))|([->:]+|[()[\]{},=+\-*/])/g;

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
        <span key={matchStart} style={{ color: "#34d399", fontWeight: 600 }}>
          {decorator}
        </span>,
      );
    } else if (keyword) {
      elements.push(
        <span key={matchStart} style={{ color: "#facc15", fontWeight: 700 }}>
          {keyword}
        </span>,
      );
    } else if (type) {
      elements.push(
        <span key={matchStart} style={{ color: "#7dd3fc", fontWeight: 500 }}>
          {type}
        </span>,
      );
    } else if (number) {
      elements.push(
        <span key={matchStart} style={{ color: "#d8b4fe" }}>
          {number}
        </span>,
      );
    } else if (stringLit) {
      elements.push(
        <span key={matchStart} style={{ color: "#6ee7b7" }}>
          {stringLit}
        </span>,
      );
    } else if (funcCall) {
      elements.push(
        <span key={matchStart} style={{ color: "#fde047" }}>
          {funcCall}
        </span>,
      );
    } else if (symbol) {
      elements.push(
        <span key={matchStart} style={{ color: "#a1a1aa" }}>
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
  const lines = code.trim().split("\n");

  return (
    <div className="mfqc-codebox">
      {header && (
        <div className="mfqc-codebox-header">
          <span className="mfqc-codebox-title">{header}</span>
        </div>
      )}

      <pre className="mfqc-codebox-pre">
        <code style={{ padding: 0, background: "transparent" }}>
          {lines.map((line, idx) => {
            const lineNum = idx + 1;
            const isHighlighted = highlightLines.includes(lineNum);

            return (
              <div
                key={lineNum}
                className={`mfqc-codebox-line${isHighlighted ? " highlighted" : ""}`}
              >
                <span className={`mfqc-codebox-linenum${isHighlighted ? " highlighted" : ""}`}>
                  {lineNum}
                </span>
                <span style={{ flex: 1, whiteSpace: "pre", color: "#e4e4e7" }}>
                  {highlightMojoLine(line)}
                </span>
              </div>
            );
          })}
        </code>
      </pre>

      {footer && <div className="mfqc-codebox-footer">{footer}</div>}
    </div>
  );
}
