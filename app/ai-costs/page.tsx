import BlogPage from '../../components/BlogPage'

const post = {
  title: "AI is only going to get more expensive, not cheaper",
  author: "Art Freebrey",
  date: "April 19th",
  readTime: "3 min",
  imageUrl: "/claude-cost.png",
  imageAlt: "Displays cost of a Claude Code session",
}

export default function AiCostsPage() {
  return (
    <BlogPage {...post}>
      <p className="text-xl leading-relaxed mb-2">
        Forget the idea that using AI in your dev work is going to be cheap. If you haven't already, it's time to treat AI spending as a core expense, not something to cheap out on. 
      </p>
      <p className="text-xl leading-relaxed mb-6">
        If you think Claude 3.7 Max is "too expensive" you're NGMI.
      </p>

      <h2 className="text-3xl font-bold mt-10 mb-4">Why Your Platform Might Be Holding You Back</h2>
      <p className="mb-4 text-lg">
        You've got to know how to play the game, for platforms like Cursor its in their best interest to <strong>minimize</strong> your token usage to boost their margins on subscriptions. However, on the other hand, the model providers want to have you <strong>maximize</strong> token usage. This fundamental conflict negatively impacts your results.
      </p>
      <p className="mb-4 text-lg">
        While these platforms like Cursor, Windsurf, etc, offer a convenient entry point, they often act as a limiter in order to appeal to the masses price wise. Some models may even feel less optimised in these IDE environments as they thrive when accessed directly with more token hungry and expensive tools like Claude Code / Codex.
      </p>
      <blockquote className="text-lg italic border-l-4 border-purple-500 pl-4 my-6 bg-[#1E1F23] p-4 rounded-lg">
        Note: There's discussion suggesting newer models like Claude 3.7 MAX might change this dynamic by removing token restrictions inside Cursor. See <a href="https://x.com/msfeldstein/status/1912957772431598003" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">this tweet from Michael Feldstein</a>.
      </blockquote>


      <h2 className="text-3xl font-bold mt-10 mb-4">Budgeting for Real AI Performance</h2>
      <p className="mb-4 text-lg">
        Those low-cost, entry-level AI plans (e.g., £30/month)? They often provide insufficient resources for serious development work. While that budget will cover enough calls for most people, those who want higher quality outputs will require <em>much</em> more. Expecting top-tier AI performance from such limited plans is unrealistic, true power requires real investment.
      </p>
      <p className="mb-4 text-lg">
        What's the new normal? I think it's realistic for companies in the near future to plan for <strong>£50+ per developer, per day</strong>.
      </p>
      <p className="mb-4 text-lg font-semibold">
        That annually comes out to <strong>£13,000 a year per developer</strong>.
      </p>
      <p className="mb-4 text-lg">
        While it may seem counter-intuitive to increase every developer's effective cost by this much, the increase in quality of work and amount that can be achieved will improve rapidly since much more can be accomplished with fewer people in a shorter time too.
      </p>

      <h2 className="text-3xl font-bold mt-10 mb-4">The Cost of Cheaping Out</h2>
      <p className="mb-4 text-lg">
        Cheaping out on AI usage forces developers into counter-productive behaviours such as restricting tokens sent by intentionally not including context, using subpar models for complex tasks, and more. The frustration and slowdown cost far more than any perceived savings on tokens.
      </p>
      <p className="mb-4 text-lg">
        These behaviours mean spending more time editing prompts, double-checking outputs, and fixing bugs that they will introduce. You might save small amounts on token usage directly but waste hours of expensive developer time compensating for the model's limitations.
      </p>

      <h2 className="text-3xl font-bold mt-10 mb-4">Culture and Competition</h2>
      <p className="mb-4 text-lg">
        Budgeting is only step one in the new AI race for companies. You also need an AI-first culture: encourage experimentation, share successful prompts and workflows, and integrate AI seamlessly.
      </p>
      <p className="mb-4 text-lg">
        Companies that invest seriously in powerful AI <em>will</em> outpace those that don't. These teams can achieve dramatically more, potentially reshaping team structures. If one AI-powered engineer can do the work of several, do you still need the same management overhead and hierarchy?
      </p>

      <h2 className="text-3xl font-bold mt-10 mb-4">The Future is Expensive</h2>
      <p className="mb-4 text-lg">
        With the rise of more and more "AI app builders," the majority will soon be building their own apps and systems, but making ones of high quality is going to require large investments.
      </p>
      <p className="mb-4 text-lg">
        Soon the costs of using these high-quality models will rise, as seen with high-parameter models like GPT 4.5 and O1 Pro. While these won't become the average person's go-to model any day now, budgeting and utilising high quality models in effective environments will be effective in getting ahead.
      </p>
      <p className="mb-4 text-lg font-semibold">
        Invest now, or risk becoming obsolete.
      </p>
    </BlogPage>
  )
} 