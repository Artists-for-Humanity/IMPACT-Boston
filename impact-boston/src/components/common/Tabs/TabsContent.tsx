type ContentBlock =
  | {
      element: "paragraph";
      context: string;
    }
  | {
      element: "bullet point";
      context: string[];
    }
  | {
      element: "underlined";
      context: string;
    }
  | { element: "emphasize"; phrase: string; context: string };

type content = {
  heading: string;
  content: ContentBlock[];
};

const TabsContent = ({ heading, content }: content) => {
  return (
    <section>
      <h2 id="heading" className="h2 pb-[64px]">
        {heading}
      </h2>
      <div className="p2">
        {content.map((block, index) => {
          if (block.element === "paragraph") {
            return (
              <>
                <p key={index}>{block.context}</p> <br />
              </>
            );
          }

          if (block.element === "bullet point") {
            return (
              <>
                <ul key={index} className="list-disc pl-5">
                  {block.context.map((script, index) => (
                    <li id="content" key={index}>
                      {script}
                    </li>
                  ))}
                </ul>
                <br />
              </>
            );
          }

          if (block.element === "underlined") {
            return (
              <>
                <p key={index}>
                  <u>{block.context}</u>
                </p>
                <br />
              </>
            );
          }
          if (block.element === "emphasize") {
            return (
              <>
                <div id="highlight">
                  <p className="p1">
                    <b className="p1-bold">{block.phrase}</b>{" "}
                    {block.context}{" "}
                  </p>
                </div>
                <br />
              </>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default TabsContent;
