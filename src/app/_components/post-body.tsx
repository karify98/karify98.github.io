import markdownStyles from "./markdown-styles.module.css";
import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
