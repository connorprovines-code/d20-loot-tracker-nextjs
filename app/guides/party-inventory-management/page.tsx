import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Party Inventory Management: Stop Losing Track of Your Stuff | D20 Loot Tracker",
  description: "Tired of forgetting what items your D&D party owns? Learn practical strategies for organizing group inventory without turning game night into spreadsheet hour.",
  keywords: ["D&D party inventory", "group inventory management", "tabletop rpg organization", "shared loot tracking", "campaign inventory tips"],
  openGraph: {
    title: "Party Inventory Management: Stop Losing Track of Your Stuff",
    description: "Tired of forgetting what items your D&D party owns? Learn practical strategies for organizing group inventory.",
    type: "article",
  },
};

export default function PartyInventoryGuide() {
  return (
    <article className="prose prose-invert prose-cyan max-w-none">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Party Inventory Management" }
        ]}
        className="mb-8"
      />

      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Party Inventory Management: Stop Losing Track of Your Stuff
      </h1>

      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        Your DM mentions a magical trap that can only be disabled with silver. Your party stares blankly. Someone asks,
        "Do we have any silver?" Nobody knows. You definitely looted silver candlesticks three sessions ago, but where are they now?
        Who's carrying them? This is a common problem with an easy solution.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Party Inventory Gets Messy</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Let's be honest: D&D sessions move fast. You defeat enemies, loot bodies, explore rooms, and move on to the next encounter.
        Somewhere in that chaos, items get distributed ("I'll take the rope"), forgotten ("wait, who has the rope?"), or lost entirely
        ("I thought YOU had the rope").
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        The problem gets worse as campaigns continue. That mysterious key from session 2? The potion of water breathing from the
        merfolk quest? The letter of introduction to the Duke? Good luck finding those in your notes six months later.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Personal vs. Party Inventory</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        First thing to understand: there's a difference between personal gear and shared party resources. Your fighter's longsword?
        That's personal. The 500 gold pieces the party found in the dragon's hoard? That's shared until you split it.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        The confusion happens when items fall in between. Is the healing potion the cleric bought with personal gold a personal item,
        or does it belong to the party since they'll use it to heal anyone who needs it? Different groups handle this differently,
        and that's fine—just be clear about which system you're using.
      </p>

      <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Three Common Approaches</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">The "Everything Is Personal" Method</h4>
            <p className="text-gray-300 mb-3">
              Every item immediately gets assigned to someone's character sheet. Simple and clear, but can feel stingy when
              the ranger hoards all the healing potions while the wizard is dying.
            </p>
            <p className="text-gray-400 text-sm italic">
              Works best for: Groups that prefer individual accountability and don't share much.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-3">The "Party Pool" Method</h4>
            <p className="text-gray-300 mb-3">
              Everything goes into a shared inventory. One person (usually called the "treasurer" or "quartermaster") tracks
              it all. Anyone can use items as needed. Requires trust but feels more cooperative.
            </p>
            <p className="text-gray-400 text-sm italic">
              Works best for: Tight-knit groups with a dedicated organizer who doesn't mind bookkeeping.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-3">The Hybrid Method (Most Popular)</h4>
            <p className="text-gray-300 mb-3">
              Weapons, armor, and personal gear belong to individuals. Consumables, quest items, and shared gold go in the party pool.
              Offers the best of both worlds but requires clear communication about what's in which category.
            </p>
            <p className="text-gray-400 text-sm italic">
              Works best for: Most groups, especially those new to party inventory management.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Practical Organization Tips</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Assign a Quartermaster (But Make It Easy)</h3>
          <p className="text-gray-300 mb-3">
            One person tracking party inventory makes sense, but don't make it a burden. The quartermaster should have tools that
            make this easy—whether that's a dedicated notebook, a digital doc, or preferably a real-time tracking app where everyone
            can see the inventory without constant check-ins.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Update During Short Rests, Not Mid-Combat</h3>
          <p className="text-gray-300 mb-3">
            Don't slow down gameplay. When you loot something, just note "loot from goblin camp" and move on. During the next short
            rest or downtime, that's when you properly catalogue everything. This keeps momentum going without losing information.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Categorize by Usefulness</h3>
          <p className="text-gray-300 mb-3">
            Not all loot is equal. Group items into categories: "Immediately Useful" (healing potions, ammunition),
            "Situational" (rope, tools, light sources), "Quest Items" (that mysterious amulet), and "Sell Later" (gems, art,
            mundane weapons you don't need). This makes it easier to find what matters when you need it.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Track Who's Physically Carrying What</h3>
          <p className="text-gray-300 mb-6">
            The party owns 50 feet of rope, but where is it? If your DM enforces encumbrance (many don't, but some do), this matters.
            Even if they don't, it's useful to know that the rope is in the barbarian's pack when you're crossing a chasm and the
            barbarian stayed behind in town.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Quest Item Problem</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Quest items are the worst offenders for getting lost. You find a mysterious gemstone in session 5. By session 12, you've
        completely forgotten about it. Then the DM mentions an empty socket in a statue that looks gemstone-shaped, and everyone
        scrambles through notes trying to remember if you still have it.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Solution: Keep quest items in a separate section from regular inventory. Label them with where you found them
        ("gemstone - goblin king's cave"). This context helps later when trying to figure out what something is for. When a quest
        item is finally used or becomes clearly useless, mark it as resolved so you can clear it out.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Inventory Arguments and How to Avoid Them</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">"I Thought You Had It"</h3>
          <p className="text-gray-300 mb-3">
            This happens when nobody explicitly takes ownership of an item. Fix: When you loot something important, immediately
            assign it to someone. "Okay, fighter, you're carrying the healing potions. Wizard, you have the spell scroll."
            Write it down right then.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">"That's Mine, I Found It"</h3>
          <p className="text-gray-300 mb-3">
            Someone wants to claim personal ownership of a particularly nice item. This is why having distribution rules decided
            in Session Zero helps. If your group uses "need before greed," the person who can best use the item gets it. If you
            use "finders keepers," whoever looted it has first claim. Just be consistent.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">"We Have HOW Many Potions?"</h3>
          <p className="text-gray-300 mb-3">
            Consumables multiply quickly if you're not using them. You end up with 15 healing potions spread across four character
            sheets and nobody's sure of the exact count. Consolidate consumables during downtime. Know exactly what you have so you
            actually use them instead of hoarding them for an emergency that never comes.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">When to Clean House</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Every few sessions, do an inventory audit. Go through everything you're carrying and ask: "Are we actually going to use this?"
        That rusty dagger from level 1 when you're now level 7? Sell it or toss it. The 50 feet of rope you've carried for
        10 sessions and never used? Maybe keep that one—rope is always useful eventually.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Use downtime in cities to sell junk, organize what you're keeping, and redistribute items so they make sense. Maybe the
        rogue should carry the thieves' tools instead of the paladin. Maybe split those healing potions more evenly across the party.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Role of Technology</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        Look, you can absolutely track party inventory with pen and paper. People did it for decades. But modern problems deserve
        modern solutions. Digital tools let everyone see the party inventory in real-time. No more asking "do we have X?" because
        everyone can just check. Updates happen instantly. Nobody has to be the dedicated note-taker who can never miss a session.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Tools like <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold">D20 Loot Tracker</Link> are built
        specifically for this. Add an item once, everyone sees it. Use an item, it's immediately updated. Check what the party owns
        from your phone during the session without passing around a notebook. It's not necessary, but it makes life easier.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Good inventory management isn't about being meticulous or turning D&D into spreadsheet simulator. It's about not losing cool
        stuff you worked hard to get. It's about avoiding arguments over who owns what. It's about remembering that silver dagger
        when you need it instead of buying a new one in town.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Find a system that works for your group, use tools that make it easy, and don't stress about perfection. Even rough
        organization is better than chaos.
      </p>

      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Organize Your Party Inventory</h2>
        <p className="text-gray-300 mb-6">
          Stop losing track of loot. Track party inventory in real-time, see who's carrying what,
          and never forget about that quest item again.
        </p>
        <Link
          href="https://app.d20-loot-tracker.com/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Try Free →
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
            <Link href="/guides/gold-distribution-new-dms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              → Gold Distribution for New DMs: Don't Break Your Campaign
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </article>
  );
}
