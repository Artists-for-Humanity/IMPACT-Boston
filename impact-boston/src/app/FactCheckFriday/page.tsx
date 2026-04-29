import ContentTriple from '@/components/Content/Triple';

export default function FactCheckFriday() {
    return (
            <ContentTriple
              title="Fact Check Fridays"
              subtitle="A specific image of crime and how to avoid it lives in a lot of our imaginations. The messages we get about violence can be based on the most viral horror stories, not the strongest evidence. This series gives quality information about some of the most misunderstood issues. You’ll learn the history of misinformation as well as practical actions you can take to make yourself and your communities safer."
              cards={[
                {
                  bgClass: 'bg-complementary-light',
                  content: [
                    { type: "title", value: "June 5th Human Trafficking", line2: "Scenarios" },
                    { type: "description", value: "Human trafficking is more common — and harder to recognize — than most people realize. Jean Bruggeman brings decades of frontline expertise to this conversation, helping organizations understand what trafficking actually looks like, how to identify it in the communities they serve, and how to respond in ways that protect and support survivors. An essential session for anyone working in human services, healthcare, education, or advocacy." },
                  ],
                },
                {
                  bgClass: "bg-primary-light",
                  content: [
                    { type: "title", value: "De-escalation Skills" },
                    { type: "description", value: "The \"stranger danger\" message has shaped how generations of Americans think about safety — but the research tells a more complicated story. This session examines where that narrative came from, what it gets wrong, and how fear-based safety messaging can cause real harm, particularly for communities already over-policed. Paul Renfro and Shameka Gregory bring both historical perspective and lived expertise to reimagine what community safety can look like." },
                  ],
                },
                // {
                //   bgClass: "bg-secondary-light",
                //   content: [
                //     { type: "title", value: "Rebuilding Safety and Confidence" },
                //     { type: "description", value: "IMPACT - formerly known as \"Model Mugging\" - helps survivors heal from trauma, retrain their bodies and nervous systems, and regain safety and control." },
                //   ],
                // },
              ]}
            />
    )
}
