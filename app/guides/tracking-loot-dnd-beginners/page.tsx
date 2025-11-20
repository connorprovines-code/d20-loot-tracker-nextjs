import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";
import { Coins, Users, ScrollText, Sword } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Track Loot in D&D: A Beginner's Guide | D20 Loot Tracker",
  description: "New to D&D? Learn the basics of tracking loot, managing party treasure, and avoiding common pitfalls. Simple tips for players and DMs to keep your campaign organized.",
  keywords: ["D&D loot tracking", "beginner D&D tips", "how to track treasure", "D&D party inventory", "new player guide", "D&D gold management"],
  openGraph: {
    title: "How to Track Loot in D&D: A Beginner's Guide",
    description: "New to D&D? Learn the basics of tracking loot, managing party treasure, and avoiding common pitfalls.",
    type: "article",
  },
};

export default function TrackingLootGuide() {
  return (
    <article className="prose prose-invert prose-cyan max-w-none">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Tracking Loot in D&D for Beginners" }
        ]}
        className="mb-8"
      />

      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        How to Track Loot in D&D: A Beginner's Guide
      </h1>

      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        You've just defeated your first goblin. The DM says, "You find 15 gold pieces, a rusty dagger, and a mysterious amulet."
        Your party looks at each other. Who writes this down? Where does it go? Welcome to one of D&D's most common questions:
        <strong className="text-cyan-400"> how do we actually track all this stuff?</strong>
      </p>

      <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <Coins className="w-6 h-6" />
          Why Tracking Loot Matters
        </h2>
        <p className="text-gray-300 mb-0">
          Loot tracking isn't just bookkeeping—it's part of the game's progression. Your gold buys better equipment,
          healing potions save lives, and that mysterious magic item might be the key to defeating the final boss.
          Losing track of your party's resources can mean the difference between success and a total party wipe.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Basics: What You Need to Track</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5" />
            Currency
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            D&D uses five types of coins, each worth different amounts:
          </p>
          <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
            <li><strong className="text-gray-300">Copper (cp):</strong> Basic coins (100 cp = 1 gp)</li>
            <li><strong className="text-gray-300">Silver (sp):</strong> Common currency (10 sp = 1 gp)</li>
            <li><strong className="text-gray-300">Electrum (ep):</strong> Rare coins (2 ep = 1 gp)</li>
            <li><strong className="text-gray-300">Gold (gp):</strong> Standard currency</li>
            <li><strong className="text-gray-300">Platinum (pp):</strong> High value (1 pp = 10 gp)</li>
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <Sword className="w-5 h-5" />
            Items & Equipment
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            Track both regular items and special finds:
          </p>
          <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
            <li>Weapons and armor (especially magic items)</li>
            <li>Consumables (potions, scrolls, ammunition)</li>
            <li>Quest items and plot-relevant objects</li>
            <li>Trade goods and valuable materials</li>
            <li>Miscellaneous treasures (gems, art objects)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Tracking Methods</h2>

      <div className="space-y-6 mb-8">
        <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-white mb-3">1. Paper Character Sheets (Traditional)</h3>
          <p className="text-gray-300 mb-3">
            Most character sheets have an "Equipment" section. This works well for personal items but gets messy
            for party treasure.
          </p>
          <p className="text-sm text-gray-400 mb-2"><strong className="text-green-400">Pros:</strong> No tech needed, tactile experience</p>
          <p className="text-sm text-gray-400"><strong className="text-red-400">Cons:</strong> Eraser smudges, limited space, hard to split loot</p>
        </div>

        <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-white mb-3">2. Shared Notes (Group Ledger)</h3>
          <p className="text-gray-300 mb-3">
            One player keeps a dedicated notebook or digital doc for party treasure. Everyone trusts the "treasurer."
          </p>
          <p className="text-sm text-gray-400 mb-2"><strong className="text-green-400">Pros:</strong> Centralized, clear party pool</p>
          <p className="text-sm text-gray-400"><strong className="text-red-400">Cons:</strong> Single point of failure, treasurer can't miss sessions</p>
        </div>

        <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-white mb-3">3. Digital Tools (Modern Solution)</h3>
          <p className="text-gray-300 mb-3">
            Apps like <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold">D20 Loot Tracker</Link> let
            everyone see inventory in real-time, automatically split gold, and track transaction history.
          </p>
          <p className="text-sm text-gray-400 mb-2"><strong className="text-green-400">Pros:</strong> Real-time sync, automatic calculations, accessible anywhere</p>
          <p className="text-sm text-gray-400"><strong className="text-red-400">Cons:</strong> Requires internet connection</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Best Practices for New Players</h2>

      <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Pro Tips from Experienced Players
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">✓ Decide on a System Early</h4>
            <p className="text-gray-300 text-sm">
              Session Zero is perfect for agreeing how you'll track loot. Don't wait until you're drowning in treasure.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">✓ Track Personal vs. Party Loot Separately</h4>
            <p className="text-gray-300 text-sm">
              Your character's personal sword is different from the party's shared gold pool. Keep them separate
              to avoid confusion and arguments.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">✓ Update Immediately, Not Later</h4>
            <p className="text-gray-300 text-sm">
              Write down loot when you find it, not at session end. You WILL forget that mysterious potion
              the DM mentioned two hours ago.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">✓ Know Your Encumbrance Rules</h4>
            <p className="text-gray-300 text-sm">
              1,000 gold pieces weighs 20 pounds. You can't carry infinite loot. Track weight if your DM enforces
              encumbrance (and ask if they do!).
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">✓ Identify Magic Items Before Distributing</h4>
            <p className="text-gray-300 text-sm">
              That glowing sword might be cursed. Use the Identify spell or pay a sage before deciding who gets it.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Mistakes to Avoid</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
          <h3 className="text-lg font-bold text-red-400 mb-2">✗ "I'll Remember It"</h3>
          <p className="text-gray-300 text-sm">
            No you won't. Write it down immediately. Every experienced player has lost items to "I'll remember."
          </p>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
          <h3 className="text-lg font-bold text-red-400 mb-2">✗ Ignoring Small Coins</h3>
          <p className="text-gray-300 text-sm">
            Those 50 copper pieces seem trivial now, but they add up. 500 cp = 5 gold, enough for several potions.
          </p>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
          <h3 className="text-lg font-bold text-red-400 mb-2">✗ Hoarding Everything "Just in Case"</h3>
          <p className="text-gray-300 text-sm">
            Rusty daggers and wooden clubs have minimal resale value. Loot what's valuable, leave the junk.
          </p>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
          <h3 className="text-lg font-bold text-red-400 mb-2">✗ Fighting Over Loot Distribution</h3>
          <p className="text-gray-300 text-sm">
            Agree on distribution rules as a party. Common methods: need before greed, round-robin picks,
            or selling everything and splitting gold equally.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Quick Reference: Loot Splitting Methods</h2>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-cyan-400 font-semibold">Method</th>
                <th className="px-6 py-3 text-left text-cyan-400 font-semibold">How It Works</th>
                <th className="px-6 py-3 text-left text-cyan-400 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr className="hover:bg-slate-700/30">
                <td className="px-6 py-4 text-white font-medium">Equal Split</td>
                <td className="px-6 py-4 text-gray-300">Divide all gold equally among party members</td>
                <td className="px-6 py-4 text-gray-400">Simple groups, new players</td>
              </tr>
              <tr className="hover:bg-slate-700/30">
                <td className="px-6 py-4 text-white font-medium">Need Before Greed</td>
                <td className="px-6 py-4 text-gray-300">Priority to who can use the item effectively</td>
                <td className="px-6 py-4 text-gray-400">Balanced parties, cooperative groups</td>
              </tr>
              <tr className="hover:bg-slate-700/30">
                <td className="px-6 py-4 text-white font-medium">Round Robin</td>
                <td className="px-6 py-4 text-gray-300">Take turns picking items in rotation</td>
                <td className="px-6 py-4 text-gray-400">Multiple similar items</td>
              </tr>
              <tr className="hover:bg-slate-700/30">
                <td className="px-6 py-4 text-white font-medium">Sell & Split</td>
                <td className="px-6 py-4 text-gray-300">Sell everything, divide gold equally</td>
                <td className="px-6 py-4 text-gray-400">Avoiding item arguments</td>
              </tr>
              <tr className="hover:bg-slate-700/30">
                <td className="px-6 py-4 text-white font-medium">Party Fund</td>
                <td className="px-6 py-4 text-gray-300">Keep communal treasury for group purchases</td>
                <td className="px-6 py-4 text-gray-400">Long campaigns, strategic groups</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Tracking?</h2>
        <p className="text-gray-300 mb-6">
          Try <strong className="text-cyan-400">D20 Loot Tracker</strong> for free—track gold, items, and party inventory
          in real-time. No spreadsheets, no arguments, just smooth looting.
        </p>
        <Link
          href="https://app.d20-loot-tracker.com/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Start Free Campaign →
        </Link>
      </div>

      <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <ScrollText className="w-6 h-6 text-cyan-400" />
          Related Guides
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/guides/gold-distribution-new-dms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              → How to Distribute Gold Fairly: A Guide for New DMs
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
