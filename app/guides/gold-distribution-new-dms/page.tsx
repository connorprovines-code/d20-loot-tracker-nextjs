import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Distribution for New DMs: Don't Break Your Campaign | D20 Loot Tracker",
  description: "Running your first D&D campaign? Learn how to distribute gold and treasure without making your players too rich or too poor. Practical advice from experienced DMs.",
  keywords: ["new DM tips", "D&D treasure distribution", "how much gold to give players", "DM guide loot", "balancing treasure", "D&D economy"],
  openGraph: {
    title: "Gold Distribution for New DMs: Don't Break Your Campaign",
    description: "Running your first D&D campaign? Learn how to distribute gold and treasure without making your players too rich or too poor.",
    type: "article",
  },
};

export default function GoldDistributionGuide() {
  return (
    <article className="prose prose-invert prose-cyan max-w-none">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Gold Distribution for New DMs" }
        ]}
        className="mb-8"
      />

      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Gold Distribution for New DMs: Don't Break Your Campaign
      </h1>

      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        So you're running your first campaign, and you just realized you have no idea how much gold to give your players.
        Give them too much and they'll buy everything, trivializing challenges. Give them too little and they'll be frustrated,
        unable to afford basic healing potions. Let's talk about finding that sweet spot.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Problem Every New DM Faces</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Here's what usually happens: You're running your first session. The party defeats some goblins. Someone asks,
        "What do we find?" You panic and say, "Uh... 500 gold pieces?" Suddenly your level 1 party can afford plate armor
        and a small army of hirelings.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Or maybe you go the opposite direction. You're worried about balance, so you're super stingy. Three sessions in,
        your level 3 ranger can't afford arrows. Your wizard can't buy spell components. Everyone's frustrated because
        they feel broke despite looting every dungeon.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Both extremes ruin the fun. The good news? This is totally fixable, and you don't need a finance degree to get it right.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Understanding D&D's Economy (The Simple Version)</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Think of it this way: In D&D's economy, 1 gold piece is roughly equivalent to $100 in real-world purchasing power
        for everyday items. A loaf of bread costs 2 copper (about $2). A decent meal at an inn costs 5 silver (about $50).
        A healing potion costs 50 gold (about $5,000). This helps you calibrate what feels reasonable.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        The Player's Handbook has treasure tables based on challenge rating, but honestly? They're more complex than necessary
        for most new DMs. Here's a simpler framework that actually works at the table.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Rule of Thumb That Works</h2>

      <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">General Gold Guidelines by Level</h3>

        <p className="text-gray-300 mb-6">
          These aren't hard rules—they're starting points. Adjust based on your campaign's style and what feels right for your table.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">Levels 1-4: Keep Them Hungry (But Not Starving)</h4>
            <p className="text-gray-300 mb-3">
              Early levels should feel scrappy. Your party is basically broke adventurers hoping to make it big.
              Finding 15-30 gold on a group of bandits feels like a real score. A 100-gold reward for completing
              a quest is genuinely exciting.
            </p>
            <p className="text-gray-400 text-sm italic">
              Rough guideline: Each player should have 100-300 total gold by level 4, including starting equipment value.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-3">Levels 5-10: They're Getting Established</h4>
            <p className="text-gray-300 mb-3">
              Mid-tier adventurers should be able to afford better equipment, magical items from shops (if you allow that),
              and the occasional luxury. They're not rich, but they're not counting coppers anymore. Quest rewards might
              be 500-1,000 gold. Dungeon hauls could net them several hundred gold worth of mixed treasure.
            </p>
            <p className="text-gray-400 text-sm italic">
              Rough guideline: Each player might have accumulated 2,000-8,000 gold worth of treasure by level 10.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-3">Levels 11+: Money Becomes Less Important</h4>
            <p className="text-gray-300 mb-3">
              High-level parties usually have more gold than they know what to do with. At this point, treasure is less about
              gold coins and more about unique magic items, land grants, political favors, or access to rare services.
              Gold still matters, but it's not the primary motivator anymore.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Actually Makes Treasure Feel Rewarding</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Here's something experienced DMs learn: Gold by itself is boring. What makes treasure exciting is <em>variety</em> and
        <em>context</em>. Finding "200 gold" is whatever. Finding "150 gold, a silver ring with a mysterious inscription,
        and a crude map to somewhere called the 'Weeping Caves'" is interesting.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Mix it up. Give them different coin types (those 50 copper pieces add up to 5 silver, which is 0.5 gold—teach them
        the conversion through gameplay). Include gems and art objects, which have the added benefit of needing to be sold
        (creating RP opportunities in town). Throw in consumables like potions that provide immediate value without breaking
        your economy long-term.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Mistakes and How to Avoid Them</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Mistake #1: Making Every Fight Drop Gold</h3>
          <p className="text-gray-300 mb-3">
            Not every encounter needs treasure. Wild animals don't carry gold. Random bandits might only have a few silver
            and some rations. This makes the BIG treasure hauls from completing dungeons feel more significant by contrast.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Mistake #2: Being Too Consistent</h3>
          <p className="text-gray-300 mb-3">
            If every quest gives exactly 100 gold, it feels formulaic. Real treasure is chaotic. Sometimes the dragon hoard
            is massive. Sometimes the "treasure chest" contains a dead goblin and disappointment. Variance creates memorable moments.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Mistake #3: Forgetting About Expenses</h3>
          <p className="text-gray-300 mb-3">
            Make them spend money! Healing potions, ammunition, spell components, room and board, equipment repairs—these are all
            legitimate gold sinks that keep the economy balanced. If your party never buys anything, gold becomes meaningless.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Mistake #4: Never Adjusting</h3>
          <p className="text-gray-300 mb-3">
            Pay attention to your players. Are they struggling to afford basic supplies? Increase treasure slightly. Did they
            just buy a tavern with pocket change? Maybe dial it back a bit next dungeon. This isn't a video game with fixed loot
            tables—you can adjust on the fly.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Secret Weapon: Track What You Give</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Here's pro advice: Keep notes on what treasure you've distributed. After a few sessions, add it up. Does the total feel
        right for their level? This is way easier if you use tools that automatically track this stuff (hint hint,
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold">D20 Loot Tracker</Link> does exactly this).
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        When you can see that your level 3 party has collectively earned 600 gold over six sessions, you can make informed
        decisions. That's either generous or stingy depending on your campaign style—but at least you know the number instead
        of guessing.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">What If You've Already Messed Up?</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Relax. Every DM has made this mistake. You gave them too much gold and now balance is weird? Here are your options:
      </p>

      <p className="text-gray-300 mb-3 leading-relaxed">
        <strong className="text-cyan-400">If they're too rich:</strong> Introduce expensive problems. The town needs rebuilding
        after an attack (10,000 gold). A powerful magic item becomes available but costs a fortune. Create a money sink that
        feels like a meaningful choice, not a punishment.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        <strong className="text-cyan-400">If they're too poor:</strong> Drop a windfall. They find a wealthy merchant's stash.
        A grateful NPC rewards them generously. Don't overthink it—just give them what they need to enjoy the game and move on.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        The beauty of being the DM is you control the economy. It's only "broken" if everyone's having less fun. If your
        players are happy, you're doing fine.
      </p>

      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Track Your Campaign's Economy</h2>
        <p className="text-gray-300 mb-6">
          Stop guessing. See exactly how much treasure you've distributed, what your players are spending,
          and keep your campaign economy balanced without spreadsheets.
        </p>
        <Link
          href="https://app.d20-loot-tracker.com/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Try D20 Loot Tracker Free →
        </Link>
      </div>

      <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/guides/tracking-loot-dnd-beginners" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              → How to Track Loot in D&D: A Beginner's Guide
            </Link>
          </li>
          <li>
            <Link href="/guides/party-inventory-management" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              → Managing Party Inventory: Tips for Organized Groups
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </article>
  );
}
