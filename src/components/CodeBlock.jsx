// CodeBlock.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
