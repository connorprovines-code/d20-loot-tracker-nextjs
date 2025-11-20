import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pathfinder 2e Bulk System Explained: Complete Guide for Players & GMs | D20 Loot Tracker",
  description: "Master Pathfinder 2e's bulk system. Learn how bulk works, calculate encumbrance, manage inventory, and avoid common mistakes. Practical tips for PF2e players and GMs.",
  keywords: ["Pathfinder 2e bulk", "PF2e encumbrance", "Pathfinder bulk calculator", "bulk system guide", "PF2e inventory management", "Pathfinder 2e carrying capacity"],
  openGraph: {
    title: "Pathfinder 2e Bulk System Explained: Complete Guide",
    description: "Master Pathfinder 2e's bulk system with this comprehensive guide. Learn calculations, management strategies, and common pitfalls.",
    type: "article",
  },
};

export default function PF2eBulkGuide() {
  return (
    <article className="prose prose-invert prose-cyan max-w-none">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Pathfinder 2e Bulk System" }
        ]}
        className="mb-8"
      />

      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Understanding Pathfinder 2e's Bulk System: The Complete Guide
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          You're standing in a dragon's hoard, surrounded by treasure. Your GM says, "The pile contains 8,000 gold pieces,
          three suits of full plate armor, and a collection of magic weapons." Someone asks, "Can we carry all this?"
          Everyone looks at their character sheets nervously. Welcome to Pathfinder 2e's bulk system—arguably the best
          encumbrance mechanic in tabletop RPGs, once you understand how it works.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Is Bulk? (And Why Should You Care?)</h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Bulk measures how cumbersome items are to carry—not just their weight, but their size, shape, and general awkwardness.
          A ten-foot pole weighs maybe five pounds, but it's still a pain to haul around, so it counts as 1 Bulk. Meanwhile,
          a bag of 500 gold coins might weigh ten pounds but fits in your pocket, so it's negligible.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Unlike D&D 5e (where most groups ignore encumbrance entirely because tracking pounds is tedious), Pathfinder 2e's
          bulk system is actually <em>usable</em>. It's abstract enough to not slow down play, but specific enough to matter
          tactically. Most PF2e groups actually track it.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Four Types of Bulk</h2>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Every item in Pathfinder 2e falls into one of four categories. Understanding these is the foundation of the system:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-400 mb-3">1. Negligible Bulk (—)</h3>
            <p className="text-gray-300 mb-3">
              Super light stuff that barely matters. Think chalk, individual coins (under 1,000), quills, or spell components.
              These don't count toward your total unless you're carrying "vast numbers" (GM discretion).
            </p>
            <p className="text-sm text-gray-400 italic">
              Rule of thumb: If it weighs less than a few ounces, it's probably negligible.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-400 mb-3">2. Light Bulk (L)</h3>
            <p className="text-gray-300 mb-3">
              Small, manageable items. This is where it gets interesting: <strong className="text-orange-400">10 Light items
              equal 1 Bulk</strong>. You round down, so 9 Light items = 0 Bulk, but that 10th item bumps you to 1 Bulk.
            </p>
            <p className="text-gray-300 mb-3">
              <strong>Examples:</strong> Daggers, potions, scrolls, torches, rope, most consumables.
            </p>
            <p className="text-sm text-gray-400 italic">
              Weight range: Roughly a few ounces to 5 pounds.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-400 mb-3">3. Numbered Bulk (1, 2, 3, 4, 5...)</h3>
            <p className="text-gray-300 mb-3">
              Standard items with real weight. Most weapons and armor fall here. The general guideline is about 5-10 pounds
              per point of Bulk, but size and awkwardness matter more than exact weight.
            </p>
            <p className="text-gray-300 mb-3">
              <strong>Common examples:</strong>
            </p>
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
              <li>Longsword: 1 Bulk</li>
              <li>Greatsword: 2 Bulk</li>
              <li>Chain mail (worn): 2 Bulk</li>
              <li>Full plate (worn): 4 Bulk</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-400 mb-3">4. Special Case: Coins</h3>
            <p className="text-gray-300 mb-3">
              Coins have their own rule: <strong className="text-orange-400">1,000 coins of any type = 1 Bulk</strong>.
              This means 999 gold pieces = 0 Bulk, but 1,000 gp = 1 Bulk. Important: fractions under 1,000 always round down—1,999
              coins is still just 1 Bulk, not 2.
            </p>
            <p className="text-sm text-gray-400 italic">
              Pro tip: Don't track individual coins until you hit four digits. It's not worth the mental overhead.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Much Can You Actually Carry?</h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Your carrying capacity is dead simple: it's based entirely on your Strength modifier, not your Strength score.
          This makes the math way easier than other systems.
        </p>

        <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">The Capacity Formula</h3>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-bold mb-2">Encumbered Threshold = 5 + Strength Modifier</p>
              <p className="text-gray-400 text-sm">
                Carry this much or less and you're fine. One point over and you're encumbered (penalties apply).
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-bold mb-2">Maximum Capacity = 10 + Strength Modifier</p>
              <p className="text-gray-400 text-sm">
                You physically cannot carry more than this. Trying to pick up items that would exceed this fails.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-slate-800/70 rounded-lg p-4">
            <p className="text-white font-semibold mb-3">Quick Reference Examples:</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><strong className="text-orange-400">Str +0:</strong> 5 Bulk normal, 10 Bulk maximum</li>
              <li><strong className="text-orange-400">Str +2:</strong> 7 Bulk normal, 12 Bulk maximum</li>
              <li><strong className="text-orange-400">Str +4:</strong> 9 Bulk normal, 14 Bulk maximum</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Happens When You're Encumbered?</h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Unlike some systems with multiple encumbrance tiers, Pathfinder 2e keeps it simple: you're either fine or encumbered.
          No "heavily encumbered" middle state.
        </p>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-red-400 mb-3">Encumbered Penalties</h3>
          <p className="text-gray-300 mb-4">
            When carrying more than (5 + Str modifier) Bulk, you gain the Encumbered condition:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>Clumsy 1:</strong> -1 penalty to AC, Reflex saves, and Dexterity-based skills (Acrobatics, Stealth, Thievery)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>-10 feet to ALL speeds:</strong> Walking, climbing, swimming, flying—everything slows down</span>
            </li>
          </ul>
          <p className="text-gray-400 text-sm mt-4 italic">
            These penalties stick around until you drop items to get under your threshold. No amount of resting removes
            them while you're still overloaded.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Backpack: Your Best Friend</h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Here's something many new players miss: backpacks aren't just flavor text. They have actual mechanical benefits that
          make them essential for every character.
        </p>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">How Backpacks Work (Post-Errata)</h3>

          <p className="text-gray-300 mb-4">
            A worn backpack can hold up to 4 Bulk of items, but here's the magic: <strong className="text-cyan-400">the
            first 2 Bulk stored doesn't count toward your encumbrance</strong>.
          </p>

          <div className="bg-slate-800/70 rounded-lg p-6 mb-4">
            <p className="text-white font-semibold mb-3">Example:</p>
            <p className="text-gray-300 text-sm mb-2">
              You have Str +2 (7 Bulk capacity). You're carrying:
            </p>
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside mb-3">
              <li>Full plate armor (worn): 4 Bulk</li>
              <li>Longsword: 1 Bulk</li>
              <li>Shield: 1 Bulk</li>
              <li>Backpack with 4 Bulk of adventuring gear: Only 2 Bulk counts (first 2 ignored)</li>
            </ul>
            <p className="text-cyan-400 font-semibold">
              Total: 4 + 1 + 1 + 2 = 8 Bulk... wait, you're encumbered!
            </p>
          </div>

          <p className="text-gray-300 text-sm">
            <strong className="text-orange-400">Important:</strong> The backpack itself has negligible Bulk when worn,
            Light Bulk when carried. Always wear it, never carry it.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Bulk Values You Need to Know</h2>

        <p className="text-gray-300 mb-6 leading-relaxed">
          You don't need to memorize every item's Bulk, but knowing these common ones saves constant rulebook lookups:
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-orange-400 font-semibold">Category</th>
                  <th className="px-6 py-3 text-left text-orange-400 font-semibold">Bulk</th>
                  <th className="px-6 py-3 text-left text-orange-400 font-semibold">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Light Weapons</td>
                  <td className="px-6 py-4 text-gray-300">L</td>
                  <td className="px-6 py-4 text-gray-400">Dagger, shortsword, hand crossbow</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">One-Handed Weapons</td>
                  <td className="px-6 py-4 text-gray-300">1</td>
                  <td className="px-6 py-4 text-gray-400">Longsword, rapier, mace, shortbow</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Two-Handed Weapons</td>
                  <td className="px-6 py-4 text-gray-300">2</td>
                  <td className="px-6 py-4 text-gray-400">Greatsword, longbow, greataxe</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Light Armor (worn)</td>
                  <td className="px-6 py-4 text-gray-300">1</td>
                  <td className="px-6 py-4 text-gray-400">Leather, studded leather</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Medium Armor (worn)</td>
                  <td className="px-6 py-4 text-gray-300">2</td>
                  <td className="px-6 py-4 text-gray-400">Chain mail, breastplate</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Heavy Armor (worn)</td>
                  <td className="px-6 py-4 text-gray-300">3-4</td>
                  <td className="px-6 py-4 text-gray-400">Full plate (4 Bulk when worn)</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Consumables</td>
                  <td className="px-6 py-4 text-gray-300">L</td>
                  <td className="px-6 py-4 text-gray-400">Potions, scrolls, elixirs, most alchemical items</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Adventuring Gear</td>
                  <td className="px-6 py-4 text-gray-300">L</td>
                  <td className="px-6 py-4 text-gray-400">Bedroll, rope, waterskin, week of rations</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 text-white font-medium">Shields</td>
                  <td className="px-6 py-4 text-gray-300">1 (buckler: L)</td>
                  <td className="px-6 py-4 text-gray-400">Most standard shields</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Tricks Nobody Tells You</h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Worn vs. Carried Armor</h3>
            <p className="text-gray-300 mb-3">
              Here's a trap: armor has different Bulk depending on whether you're wearing it or carrying it. The listed
              Bulk assumes it's worn. When you carry armor in your pack (like loot), <strong className="text-orange-400">add
              +1 Bulk</strong> to the listed value.
            </p>
            <p className="text-gray-400 text-sm">
              Example: Chain mail is 2 Bulk when worn, but 3 Bulk when carried. Full plate goes from 4 Bulk (worn) to
              5 Bulk (carried). This is why you don't loot every suit of armor you find—it's too heavy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">The Light Item Threshold Dance</h3>
            <p className="text-gray-300 mb-3">
              Since 10 Light items = 1 Bulk, smart players track toward the thresholds. You have 9 potions? That's 0 Bulk.
              Pick up a 10th and suddenly you're carrying 1 Bulk. This matters when you're close to your encumbrance limit.
            </p>
            <p className="text-gray-400 text-sm">
              Strategy: Group your Light items mentally. "I have 7 potions, 2 scrolls, and 4 torches = 13 Light items = 1 Bulk."
              Makes tracking way easier.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">Dragging Heavy Loot</h3>
            <p className="text-gray-300 mb-3">
              Found a treasure chest that's 8 Bulk and you only have 7 Bulk capacity? You can drag it. When dragging,
              treat the item's Bulk as <strong className="text-orange-400">half</strong> (so 8 becomes 4). The catch:
              you move at about 50 feet per minute (super slow) and it requires both hands.
            </p>
            <p className="text-gray-400 text-sm">
              Practical use: Getting loot out of a dungeon when you can't carry it normally. Also works for unconscious allies.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Mistakes (Don't Make These)</h2>

        <div className="space-y-4 mb-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <h3 className="text-lg font-bold text-red-400 mb-2">✗ "Items in my backpack don't count at all"</h3>
            <p className="text-gray-300 text-sm mb-2">
              WRONG. The backpack gives you a 2 Bulk reduction, not infinite storage. If you put 4 Bulk in your backpack,
              2 Bulk still counts against you.
            </p>
            <p className="text-gray-400 text-xs">
              The backpack doesn't expand your maximum capacity—it just helps you use what you have more efficiently.
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <h3 className="text-lg font-bold text-red-400 mb-2">✗ "11 Light items = 2 Bulk because 11/10 = 1.1"</h3>
            <p className="text-gray-300 text-sm mb-2">
              WRONG. You always round DOWN. 11 Light items = 1 Bulk. Even 19 Light items = 1 Bulk. You need exactly
              20 Light items to reach 2 Bulk.
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <h3 className="text-lg font-bold text-red-400 mb-2">✗ "I'm at 6/7 Bulk capacity, I'm fine"</h3>
            <p className="text-gray-300 text-sm mb-2">
              WRONG. If you have Str +2, your encumbered threshold is 7 Bulk, but that's your MAXIMUM normal capacity.
              You're not encumbered at exactly 7, but you are at 8. However, if your threshold is 5 and you're carrying 6,
              you ARE encumbered.
            </p>
            <p className="text-gray-400 text-xs">
              Know both numbers: your threshold (5 + Str) and your maximum (10 + Str). Stay under the threshold to avoid penalties.
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <h3 className="text-lg font-bold text-red-400 mb-2">✗ Forgetting coins add up</h3>
            <p className="text-gray-300 text-sm">
              5,000 gold pieces = 5 Bulk. That's like carrying five longswords. When the party loots a dragon hoard with
              20,000 gp, that's 20 Bulk total. Someone with Str +3 can only carry 12 Bulk maximum—you can't carry it all alone.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Practical Strategies for Managing Bulk</h2>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Smart Bulk Management</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">1. Invest in Strength Appropriately</h4>
              <p className="text-gray-300 text-sm">
                Even if you're not a melee character, having Str +1 or +2 instead of +0 makes a huge difference. Going
                from 5 Bulk to 7 Bulk capacity is 40% more carrying power. For martials, Strength gives you both damage
                AND inventory space.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">2. Always Use a Backpack</h4>
              <p className="text-gray-300 text-sm">
                Costs 1 silver piece. Saves you 2 Bulk. There is no reason not to have one on every character. Wear it,
                don't carry it.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">3. Distribute Party Loot Wisely</h4>
              <p className="text-gray-300 text-sm mb-2">
                The barbarian with Str +4 can carry 9 Bulk comfortably. The wizard with Str -1 can only carry 4 Bulk.
                Give the heavy stuff to strong characters. Coins, gems, and trade goods should go to whoever has room.
              </p>
              <p className="text-gray-400 text-xs">
                After a big haul, take five minutes to redistribute. "I'll take 3,000 gp, you take 2,000 gp" prevents
                someone from being encumbered while others have free space.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">4. Minimize Weapon Redundancy</h4>
              <p className="text-gray-300 text-sm">
                Carrying six different weapons "just in case" is a fast track to encumbrance. Primary weapon + backup weapon
                is reasonable. Primary + backup + ranged option starts getting heavy. Choose versatile weapons when possible.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">5. Track Light Items in Groups</h4>
              <p className="text-gray-300 text-sm">
                Don't write down "potion 1, potion 2, potion 3..." on your sheet. Write "Healing Potions: 7 (0.7 Bulk)."
                When you hit 10, update it to 1 Bulk. Way less bookkeeping.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-2">6. Leave Non-Essentials at Camp</h4>
              <p className="text-gray-300 text-sm">
                Traveling to a dungeon? Bring combat gear and healing supplies. Leave the week of rations, extra rope,
                and crafting tools at base camp or on your mount. Return after the delve.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Magic Items That Solve Bulk Forever</h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Once your party hits mid-levels, bulk becomes much less of a concern thanks to magic items. These are worth prioritizing:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-3">Bag of Holding (Type I-IV)</h3>
            <p className="text-gray-300 mb-3">
              The gold standard for bulk management. A Type I (level 4) holds 25 Bulk and the bag itself is only 1 Bulk
              regardless of contents. Type II (level 7) holds 50 Bulk. By level 11+ you can get Type III or IV (100-150 Bulk).
            </p>
            <p className="text-gray-400 text-sm">
              <strong className="text-purple-400">Priority:</strong> Get one ASAP. This basically removes bulk as a limiting
              factor for your entire party. Everything goes in the bag.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-3">Handy Haversack</h3>
            <p className="text-gray-300 mb-3">
              Always counts as 1 Bulk no matter what you put in it. Items are magically organized so you can retrieve
              them quickly (no digging through a backpack). Expensive but convenient.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">How This Compares to D&D 5e</h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          If you're coming from D&D 5e, the biggest difference is that Pathfinder 2e's bulk system is actually <em>designed
          to be used</em>. In 5e, most groups say "we don't track encumbrance" because tracking pounds is tedious and slows
          down play. The math is a pain (Str 14 = 210 lbs capacity, longsword weighs 3 lbs, rope weighs 10 lbs...).
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          PF2e's abstraction makes it manageable. You don't need a calculator. You can eyeball it. "I have 1 Bulk of weapons,
          4 Bulk of armor, 1 Bulk in my backpack (after reduction), and 1 Bulk of Light items = 7 Bulk total." Most groups
          actually track it because it's not annoying.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Bulk is one of Pathfinder 2e's best quality-of-life improvements over other systems. It's abstract enough to be
          fast, concrete enough to matter, and actually creates interesting decisions. Do you grab the extra loot or stay
          mobile? Do you wear heavy armor or maintain stealth? Can the party carry this treasure hoard in one trip?
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          The key is understanding the basics (Light vs. numbered Bulk, backpack benefits, your capacity) and not sweating
          the edge cases. Round in your favor, use your backpack, and get a Bag of Holding when you can afford one. After
          a few sessions, it becomes second nature.
        </p>

        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Automate Your Bulk Tracking</h2>
          <p className="text-gray-300 mb-6">
            Tired of manually calculating "7 Light items + 2 Bulk + backpack reduction = ?"
            <strong className="text-orange-400"> D20 Loot Tracker</strong> automatically calculates Bulk for Pathfinder 2e,
            tracks encumbrance, and handles all the math so you can focus on playing.
          </p>
          <Link
            href="https://app.d20-loot-tracker.com/"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Try Automatic Bulk Tracking →
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
