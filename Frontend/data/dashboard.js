// ============================================================================
// Mock data + mock generation helpers for the StoryForge AI dashboard.
//
// This file is frontend-only. Nothing here talks to a real backend — it exists
// so the dashboard can be fully demoed today and swapped for real API calls
// later without touching component code.
// ============================================================================

export const MOOD_OPTIONS = ["Hopeful", "Dark", "Mysterious", "Emotional", "Adventurous", "Whimsical", "Suspenseful"];

export const GENRE_OPTIONS = ["Fantasy", "Sci-Fi", "Mystery", "Horror", "Romance", "Thriller", "Adventure", "Historical", "Comedy"];

export const TONE_OPTIONS = ["Epic", "Dark", "Lighthearted", "Emotional", "Cinematic", "Suspenseful", "Philosophical"];

export const THEME_OPTIONS = [
  "Hero's Journey",
  "Lost Civilization",
  "Forbidden Magic",
  "Time Travel",
  "Survival",
  "Coming of Age",
  "Revenge",
  "Discovery",
];

// ----------------------------------------------------------------------------
// Reusable prose templates.
//
// Rather than hand-writing a full unique story for every history item (lots of
// duplicated content for little benefit in a mock), a handful of templates are
// shared across items and across freshly "generated" stories, picked by genre.
// ----------------------------------------------------------------------------

const TEMPLATE_FANTASY = [
  "The wind moved through the ancient towers of Aetheria the way it always had before an ending — low, deliberate, almost mournful. Sera stood at the edge of the highest parapet and watched the last color drain from the sky, the way parchment loses its ink when left too long in the sun. Somewhere below, the city was already lighting its lanterns against a dark that no lantern had ever been meant to hold back.",
  "She had grown up being told that the light above the Sunspire had always been there, a low golden ember fixed in the sky since before any living memory. Grandmothers swore their grandmothers had navigated by it. Sailors still carved its shape into the prows of their ships. And now, for the first time in the telling of any story anyone could remember, it was going out.",
  "\"You feel it too,\" said Kestrel, dropping onto the parapet beside her without a sound, the way he always arrived — as though the world simply rearranged itself slightly to include him. His eyes, storm-gray and too old for the rest of his face, were fixed on the same fading point in the sky. \"The old wardens are saying it's the seal breaking. Three hundred years, and it chooses now.\"",
  "Sera didn't answer right away. She was thinking of the stories her mother used to tell about the first wardens, who had bound the light to the sky not to illuminate the kingdom but to imprison something far older and far less kind beneath it. A ward, not a gift. If the light failed, it wasn't darkness that would arrive. It was whatever the darkness had been keeping out.",
  "\"Then we go to the Sunspire,\" she said finally, and the decision felt less like bravery and more like inevitability, the way a stone feels nothing as it falls. \"Someone has to relight it, and every warden who could is already dead or too afraid to try.\"",
  "Kestrel didn't argue, which she had learned over the years was his particular way of agreeing with everything that mattered. Instead he simply rose, offered her a hand she didn't need, and together they began the long descent from the tower into a city that did not yet know it was about to be asked to believe in something impossible again.",
  "By the time they reached the lower gates, word had already spread the way fear always spreads faster than fact — in whispers, in half-truths, in the particular silence of markets that had quietly decided to close early. An old woman pressed a bundle of dried lightroot into Sera's hands without a word, the kind of blessing that asks for nothing in return except that you not waste it.",
  "The road to the Sunspire climbed through country that had not seen a warden's torch in generations, switchback after switchback cut into a mountain that seemed, in the dying light, to be holding its breath. Sera did not know yet what waited at the top, or whether three hundred years of a promise could really be kept by two people who had never been trained to keep it. But the light was still burning, faint and stubborn, and as long as it was, so was she.",
];

const TEMPLATE_SCIFI = [
  "The ice beneath Station Halcyon groaned the way it always did in the hour before a subsurface tide, a sound Dr. Imogen Reyes had stopped finding unsettling roughly four months into her posting on Europa. What she had not stopped finding unsettling was the signal — a slow, patterned pulse rising from three kilometers beneath the ice shelf, in a frequency range no probe had ever transmitted on.",
  "\"Run it again,\" she said, and Wren, the station's junior systems officer, didn't argue, though his hands had gone very still over the console. The pulse repeated exactly as it had the last eleven times: seven beats, a pause, three beats, a longer pause, and then silence for exactly forty-one minutes before it began again.",
  "It had been three days since the drone swarm first picked up the anomaly in the sub-ice ocean, a structure too geometric to be a formation of any mineral Halcyon's databases recognized, and too old — by the ice-core dating — to have arrived there anytime in the last hundred thousand years. Command back on Earth had gone quiet in the specific way command goes quiet when a discovery is too large to know what to do with yet.",
  "Reyes floated to the observation dome and looked out at the frozen plain, Jupiter hanging enormous and marbled in the black above it, close enough that she sometimes forgot it wasn't simply part of the sky. Somewhere beneath her boots, whatever was sending that signal had been waiting, patiently, for longer than her species had known how to ask questions.",
  "\"The pattern isn't random,\" Wren said quietly, joining her at the dome. \"It's not even really a signal in the way we think of signals. Command thinks it might be closer to a heartbeat. Something that's been counting time down there since before there was anyone up here to count it with.\"",
  "There was a particular kind of fear that came with being the first to know something, Reyes thought — not the fear of the unknown itself, but the fear of being responsible for how everyone after you would understand it. She thought of every first-contact scenario she'd studied in training, and how none of them had prepared her for how quiet it would actually be.",
  "\"Prep the descent module,\" she said finally. \"If something down there has been waiting a hundred thousand years for someone to answer back, I'm not going to be the one who makes it wait any longer.\" Behind her, the ice groaned again, and this time it almost sounded like a reply.",
];

const TEMPLATE_MYSTERY = [
  "The city of Vessara had been underwater for eleven years before anyone thought to ask why the church bells still rang. Detective Priya Okonkwo heard them now, faint and metallic, drifting up through forty feet of black water as her dive lantern swept across a doorway that shouldn't have still had a door.",
  "She had taken the case because no one else would. A string of disappearances, all diving enthusiasts, all vanishing near the same flooded district, all last seen following lights that witnesses on the surface swore they'd never lit. The department had filed it under diving accidents and moved on. Okonkwo had not been able to.",
  "The doorway led into what had once been a chapel, its pews still bolted to a floor now carpeted in silt, its stained glass somehow, impossibly, unbroken after over a decade below the surface. And at the front of the room, where an altar should have been, something was glowing — a soft, patient blue light with no visible source, the exact color witnesses had described.",
  "Her lantern beam caught movement at the edge of her vision, and she turned fast, heart hammering against the pressure of the water, to find nothing there but a ripple in the silt, as though something had only just left. On the altar, carved into stone that predated the flooding by centuries, was a set of names. She recognized three of them from the missing-persons file in her bag.",
  "The blue light pulsed once, slow, almost like breathing, and Okonkwo understood with sudden, cold clarity that she was not looking at the cause of the disappearances. She was looking at an invitation, one that had been extended eleven times already and accepted eleven times, and the only reason she was still able to think clearly enough to be afraid was that no one had asked her yet.",
  "She backed toward the doorway, lantern still raised, refusing to look away from the light even as every instinct told her to run. Somewhere above, muffled by forty feet of drowned city, the bells were still ringing — and for the first time, she found herself wondering who, exactly, was ringing them.",
];

const TEMPLATE_DARK = [
  "The crown had not been worn in four hundred years, and the vault beneath Emberfall Keep had been sealed for nearly as long, but Roderin Vale had never been a man who let old warnings outweigh older debts. He descended the last of the stairs with a torch in one hand and his grandfather's ledger in the other, the names of everyone who had died protecting this secret written in a hand steadier than his own.",
  "The stories all agreed on one point, however much they disagreed on everything else: the Crown of Eternal Night did not grant power so much as it collected on power already spent, and every ruler who had ever worn it had paid a price that history had been careful never to record in detail.",
  "The vault door was colder than the stone around it, frost blooming across iron that should have rusted to nothing centuries ago. Roderin pressed his palm flat against it anyway, feeling the old wards recognize his blood the way a lock recognizes the shape of its key, and for one suspended moment he understood exactly why his grandfather had spent his whole life warning him never to come here.",
  "He opened it anyway. Grief did that to a person — made the unthinkable feel, briefly, like the only reasonable choice left. His sister was dying by inches in a city that could not save her, and every physician, every priest, every desperate remedy had failed in turn. The crown, the old texts insisted, could still command what death itself would not refuse.",
  "Inside, the crown sat on a plinth of black glass, and it was not dust-covered the way four centuries should have left it. It looked, if anything, freshly made, as though it had simply been waiting — patient in the specific way that only very old, very hungry things know how to be patient.",
  "\"I only need one night,\" Roderin said aloud, to no one, to the dark, to whatever still listened inside that vault. The crown did not answer in words. It simply grew warm in a way that metal should not, and somewhere far above, in a tower room he had left an hour ago, his sister opened her eyes for the first time in six days.",
];

const TEMPLATE_ROMANCE = [
  "The rooftop garden hadn't existed the last time Wren had stood in this city, but then again, neither had most of the skyline — Halden Station's second tower still had scaffolding lights blinking along its spine, and the old transit rail had been replaced by something that moved through the air in near silence. Only the stars above it all looked exactly the way she remembered.",
  "\"You came back,\" Iman said, and there was no accusation in it, only the quiet astonishment of someone who had genuinely stopped expecting to be right about anything hopeful. Seven years was a long time to keep a rooftop garden alive on the promise of a maybe.",
  "\"I told you I would,\" Wren said, though she understood, standing there, exactly how little that had been worth to either of them at the time. Promises made at spaceports rarely survived the distances they were made across. Hers, apparently, had.",
  "They stood for a while without speaking, the city's new lights pooling gold and violet across the garden's old stone paths, and Wren found herself cataloguing every small way the last seven years had changed him — the gray now threaded through his hair, the new scar along one hand, the way he still, after everything, tilted his head the exact same way when he was deciding whether to say something.",
  "\"The stars remember,\" Iman said finally, echoing something she'd told him once, half as a joke, the night before she left. \"That's what you said. That no matter how far you went, the same sky would still be here when you came back under it.\"",
  "\"I didn't think you'd actually remember that,\" Wren admitted, and for the first time in seven years, laughed the way she used to — easily, without the practiced caution she'd learned to carry between the stars. Above them, the same old constellations turned slowly, patient as they had always been, as if they had known this particular ending all along.",
];

const GENRE_TEMPLATE_MAP = {
  fantasy: TEMPLATE_FANTASY,
  "sci-fi": TEMPLATE_SCIFI,
  scifi: TEMPLATE_SCIFI,
  mystery: TEMPLATE_MYSTERY,
  horror: TEMPLATE_DARK,
  thriller: TEMPLATE_MYSTERY,
  romance: TEMPLATE_ROMANCE,
  adventure: TEMPLATE_FANTASY,
  historical: TEMPLATE_DARK,
  comedy: TEMPLATE_ROMANCE,
};

function templateForGenre(genre) {
  const key = (genre || "").trim().toLowerCase();
  return GENRE_TEMPLATE_MAP[key] || TEMPLATE_FANTASY;
}

// ----------------------------------------------------------------------------
// Story history — extended with enough fields to actually render in the
// StoryReader, not just display a title in the sidebar.
// ----------------------------------------------------------------------------

export const STORY_HISTORY = [
  {
    id: "h1",
    title: "The Last Light of Aetheria",
    time: "2 hours ago",
    icon: "book",
    tint: "blue",
    genre: "Fantasy",
    mood: "Hopeful",
    tone: "Epic",
    theme: "Hero's Journey",
    chapter: "Chapter I",
    chapterTitle: "The Last Light",
    content: TEMPLATE_FANTASY,
  },
  {
    id: "h2",
    title: "Whispers of the Drowned City",
    time: "Yesterday",
    icon: "waves",
    tint: "blue",
    genre: "Mystery",
    mood: "Mysterious",
    tone: "Cinematic",
    theme: "Lost Civilization",
    chapter: "Chapter III",
    chapterTitle: "The Drowned Bells",
    content: TEMPLATE_MYSTERY,
  },
  {
    id: "h3",
    title: "Chronicles of Emberfall",
    time: "2 days ago",
    icon: "flame",
    tint: "amber",
    genre: "Fantasy",
    mood: "Adventurous",
    tone: "Epic",
    theme: "Survival",
    chapter: "Chapter I",
    chapterTitle: "The Last Light",
    content: TEMPLATE_FANTASY,
  },
  {
    id: "h4",
    title: "Beyond the Silver Horizon",
    time: "3 days ago",
    icon: "mountain",
    tint: "blue",
    genre: "Sci-Fi",
    mood: "Adventurous",
    tone: "Cinematic",
    theme: "Discovery",
    chapter: "Chapter II",
    chapterTitle: "The Signal Beneath the Ice",
    content: TEMPLATE_SCIFI,
  },
  {
    id: "h5",
    title: "Echoes of the Forgotten Realms",
    time: "5 days ago",
    icon: "rings",
    tint: "purple",
    genre: "Mystery",
    mood: "Mysterious",
    tone: "Philosophical",
    theme: "Lost Civilization",
    chapter: "Chapter III",
    chapterTitle: "The Drowned Bells",
    content: TEMPLATE_MYSTERY,
  },
  {
    id: "h6",
    title: "The Crown of Eternal Night",
    time: "1 week ago",
    icon: "crown",
    tint: "pink",
    genre: "Horror",
    mood: "Dark",
    tone: "Epic",
    theme: "Forbidden Magic",
    chapter: "Chapter I",
    chapterTitle: "The Vault Beneath Emberfall",
    content: TEMPLATE_DARK,
  },
];

// ----------------------------------------------------------------------------
// Mock story generation.
//
// Builds a full story object from a submitted prompt configuration. This is
// the ONLY place that should change when real generation is wired up.
// ----------------------------------------------------------------------------

const ICONS_BY_GENRE = {
  fantasy: "book",
  "sci-fi": "mountain",
  scifi: "mountain",
  mystery: "rings",
  horror: "crown",
  thriller: "rings",
  romance: "waves",
  adventure: "flame",
  historical: "crown",
  comedy: "waves",
};

const TINTS = ["blue", "purple", "amber", "pink"];

function craftTitle({ prompt, genre, theme }) {
  const cleaned = (prompt || "").trim();
  if (cleaned.length > 0) {
    const words = cleaned.split(/\s+/).slice(0, 6).join(" ");
    const capitalized = words.charAt(0).toUpperCase() + words.slice(1);
    return capitalized.replace(/[.?!,;:]+$/, "");
  }
  if (theme) return `A Tale of ${theme}`;
  if (genre) return `An Untitled ${genre} Story`;
  return "An Untitled Story";
}

// TODO: Replace mock generation with a FastAPI request:
//   POST /stories/generate  { prompt, mood, genre, tone, theme }
//   → FastAPI → Celery → Redis → Gemini → MongoDB → generated story
// This function is the single seam to swap out once that endpoint exists.
export function buildMockStory({ prompt, mood, genre, tone, theme }) {
  const content = templateForGenre(genre);
  const icon = ICONS_BY_GENRE[(genre || "").toLowerCase()] || "book";
  const tint = TINTS[Math.floor(Math.random() * TINTS.length)];

  return {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `s-${Date.now()}`,
    title: craftTitle({ prompt, genre, theme }),
    time: "Just now",
    icon,
    tint,
    genre: genre || "Fantasy",
    mood: mood || "Hopeful",
    tone: tone || "Cinematic",
    theme: theme || "Discovery",
    chapter: "Chapter I",
    chapterTitle: "The Beginning",
    prompt,
    content,
  };
}
