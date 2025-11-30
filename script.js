// --------
// Poem data
// --------

const poems = [
  {
    id: "i-still-remember-that-night",
    title: "i still remember that night",
    meta: "confession | longing",
    firstLine:
      "i still remember that night that even in the darkness i still see ur smile so bright",
    body: `i still remember that night —
that even in the darkness,
i still see ur smile so bright.
i don't know if this is right,
but i know that when im with u it feels so damn right.

im the type of guy that doesn't care about what other people think
but when im with u, i even count my eyes blink.
damn, ur just the girl i've always wanted
but i don't know if i still have it.

i want to love u unconditionally
but i still think of the probability.
that u're too scared to try,
that u have been scarred by life.

i get it, cause i've been there
but all that feeling vanished,
cause im always mesmerized
by ur smile, ur eyes, and ur laugh.
and hoping one day im the reason u do that
and when im with u i just wanna risk it all,
even when i fly or i fall.

i can't help myself when im beside u,
all my baggage just vanished when im talking to u.
u lessen my burdens in ways u won't understand,
i feel warm, fuzzy, and happy when i touch ur hand.
words are nothing, it can't really tell u how i feel,
but i can assure u my feelings are real.

im writing this tonight cause i miss u,
and i think im going insane.
i never felt this way before, but with u
"goddamn" that's all i can say.`,
  },
  {
    id: "dark-moon",
    title: "dark moon",
    meta: "night | tenderness",
    firstLine: "oh, how dark is the moon compared to your light;",
    body: `oh, how dark is the moon
compared to your light;
even the stars fall quiet
beside your beauty so bright.

sailors lose their bearings
reading constellations at night,
for every map in the heavens
still leads back to your light.

i always loved the night
but now i love it more being with you tonight;
every words you speak
feels like space —
a vast world where only
my heart finds it's place.

and somehow, in all that quiet light,
i found you — and i found myself
never thought it'd come to this,
but thank God that it is.`,
  },
  {
    id: "love-is-you-1",
    title: "love is u",
    meta: "love | softness",
    firstLine: "people say love comes in different forms, but i say love is u —",
    body: `people say love comes in different forms,
but i say love is u —
in the way you laugh even when you’re hurting,
in the way you look at me like you're trying not to fall,
in the way you trust me with things you hide from the world.

if love really has a thousand shapes,
then mine always seems to fit your silhouette.`,
  },
  {
    id: "if-loving-you-was-a-mistake",
    title: "if loving you was a mistake",
    meta: "love | almost",
    firstLine: "if loving you was a mistake, then why’s it the only thing i ever got right?",
    body: `if loving you was a mistake,
then why’s it the only thing i ever got right?

maybe it’s the way you look at me when you think i’m not noticing,
or how your voice softens whenever you say my name —
like you’re trying not to let the truth slip out.

i’ve loved people before, but never like this.
never with this mix of fear and certainty,
never with this quiet hope that maybe,
if the world was kinder,
you’d choose me without thinking twice.

i don’t ask for forever.
i don’t even ask for now.
i just want you to know that love —
the kind i feel for you—
doesn’t happen by accident.
it happens because something in you
felt like home,
the moment i got close enough to see you clearly.

and maybe one day,
when your heart stops trembling,
you’ll understand why i stayed.
not because it was easy —
but because even my mistakes
never felt as right
as you.`,
  },
  {
    id: "cant-get-over-you",
    title: "can't get over you",
    meta: "crush | memory",
    firstLine: "your face still lingers, even when i close my eyes at night.",
    body: `your face still lingers,
even when i close my eyes at night.
i reminisce all the small things that you do,
in broad daylight.

i can't get over you,
no matter what i try to do.
you're stuck in my head,
and i'm stuck with you too.

maybe it's because i like you,
or you're someone i want to be with.
i don't need answers now,
but you're a question — 
i love to think about.`,
  },
  {
    id: "simple-touch",
    title: "a simple touch",
    meta: "hands | home",
    firstLine: "i didn't know a simple touch could feel like a confession.",
    body: `i didn't know a simple touch could feel like a confession.
your hand in mine —
mine in yours.

your hand is small —
but it fits in a way that shouldn’t make sense.
i can feel your trust,
in the quiet of that moment.

it's quiet, warm, and steady —
like the universe finally answering a question
i didn’t even know i was asking.
funny how something so small,
can make you want to rewrite your whole life around a person.

maybe holding your hand isn’t a big deal to the world,
but to me?
it feels like coming home.`,
  },
  {
    id: "dinosaurs-and-you",
    title: "dinosaurs & you",
    meta: "healing | survival",
    firstLine: "i’ve always loved dinosaurs — ancient giants that lived loud",
    body: `i’ve always loved dinosaurs —
ancient giants that lived loud
and died louder.
creatures that felt too big for their world,
just like the feelings i try to hide.

but then you came along,
quiet and soft,
and somehow you felt like the missing fossil
my heart had been digging for.

you’re not a meteor —
you’re the sunlight that made the ferns grow back.
the warm earth after the storm.
the proof that even after extinctions,
something beautiful can still rise.

maybe that’s why i like you so much:
you make me believe in survival.
in second chances.
in love that doesn’t crush,
but rebuilds.`,
  },
  {
    id: "love-today",
    title: "love, today",
    meta: "modern love | softness",
    firstLine: "love today feels complicated — the situationships,",
    body: `love today feels complicated —
the situationships,
the love bombing,
the cold replies,
and everything in between.

but beneath all that noise,
love is still simple.
it starts with safety —
with someone who stays
even when you can’t stay with yourself.

love lives in the small things:
the way you fix your hair without thinking,
the way you laugh too hard at my dumb jokes,
the way we learn each other’s habits
like muscle memory.

maybe we’ve been chasing the wrong picture —
thinking love should always be fireworks
when sometimes it’s just the quiet truth
that being with you
feels like breathing easier.

we fell so deep into the 
social media's definition of love —
that we forgot what love really asks for.
not perfection.
not constant happiness.
just trust,
a little softness,
and that kind of safety
that only shows up
when someone finally feels like home.`,
  },
  {
    id: "i-admired-her",
    title: "admiring her",
    meta: "admiration | real love",
    firstLine: "i admired her long before i understood why.",
    body: `i admired her long before i understood why.
not because she was perfect —
but because she wasn’t.

she was soft in the places
the world had tried to harden,
gentle in the moments
life taught her to be tough.

she was just a person —
messy, flawed, beautifully human —
and somehow that made her feel like home.

there was something sacred
in the way she lived quietly,
never asking to be adored,
never trying to be extraordinary,
just existing with a kind of honesty
that made the world around her soften too.

she didn’t know it,
but she was a place i want to return to.
a breath after the storm,
a calm in the middle of all my noise.
a solace —
the kind that doesn’t demand anything
yet gives everything
just by being there.

and maybe that’s the truth about real love:
it isn’t fireworks,
or destiny,
or perfection.

it’s seeing someone exactly as they are,
and choosing to stay —
not because they shine,
but because their light feels familiar.

i admire her in every way —
in the ways she knows,
and in the ways she doesn’t.`,
  },
  {
    id: "her-eyes",
    title: "her eyes",
    meta: "eyes | gravity",
    firstLine:
      "her eyes were the first thing that ever made the world go quiet —",
    body: `her eyes were the first thing
that ever made the world go quiet —
soft and steady,
beautiful in that effortless way
she never tries to be.

i didn’t understand it at first,
but now it feels impossible to miss.
there’s a pull in them,
a gentle gravity
that makes me forget everything else
except the way she’s looking back.

they’re deeper than the ocean’s calm,
warm enough to steady my heartbeat,
and somehow they say
“you’re safe here”
without ever saying a word.

there’s a kind of romance in their silence —
no fireworks,
no noise,
just the quiet certainty
that i could look at them once,
look again,
and never want to turn away.

i think that’s why they stay with me.
because her eyes aren’t just something to admire —
they’re something to return to.
and even years from now,
when time has softened everything else,
i know i’ll remember them
as clearly as the first time
they found me.`,
  },
  {
    id: "blue-skies-bedrock",
    title: "blue skies & bedrock",
    meta: "daydream | future",
    firstLine: "blue skies and bedrock, truth and bullocks.",
    body: `blue skies and bedrock,
truth and bullocks.
random nights feels empty,
when you're not around me.

city lights and night sky,
it's feel so good 
when you kissed me goodbye.
random thoughts in my head,
all vanished when you kiss me instead.

puddles and bubbles,
i hope our home is
full of love and laughter,
with our son or daughter.

i know this is all in my head,
but i hope one day it'll be the end.`,
  },
  {
    id: "i-love-long-quiet-nights",
    title: "i love long quiet nights",
    meta: "longing | admiration",
    firstLine: "i love long quiet nights, but i wish you could tell me goodnight.",
    body: `i love long quiet nights,  
but i wish you could tell me goodnight.  

your small words and actions  
speak loudly in my mind.

every movement of your soul  
brings light to my desolate life.  
your eyes speak truths  
even the deaf could understand.

i admire you in everything you do—  
dancing, combing your hair,  
sitting quietly,  
or simply being beside me.

i realized i didn't like you  
in the ways the others did.  
i never cared about who you were
or what the world thought of you.

what i liked was your soul—  
warm like the sun,  
and i'm icarus, falling happily.

it burns,  
but i'd gladly bear the fire  
if it meant i could stay  
in your gentle light.`,
  },
  {
    id: "tell-me-your-flaws",
    title: "tell me your flaws",
    meta: "acceptance | love",
    firstLine: "tell me your flaws— not the cute ones you joke about,",
    body: `tell me your flaws—

not the cute ones you joke about,

but the ones you think would make someone look away,

the ones you hide because you've always had to be strong.

tell me the worries that sit heavy on your chest,

the mistakes you replay when the world goes quiet,

the things people misunderstood

that made you fold yourself smaller than you really are.

show me the cracks beneath your laughter,

the tremble in your hands

when life gets loud,

the way you turn your face

when you're fighting tears you won't let fall.

i don't want the perfect version of you—

i want the honest one,

the one who feels deeply,

who gives too much,

who loves quietly but fiercely.

the girl who overthinks,

who hides her pain behind a smile,

who forgets her worth

because she's too busy carrying everyone else.

none of that scares me.

none of that pushes me away.

every flaw you fear

is just another place where your light slips through,

another part of you I want to understand,

slowly, patiently, gently.

you're not "too much,"

you're not "hard to handle,"

you're not "difficult to love."

you're human—

raw, brilliant, soft at the center

even when you pretend you're made of stone.

and if you ever choose to trust me

with the pieces you hide,

i'll hold them steady,

not to fix you,

but to learn you.

so tell me your flaws.

not all at once—

just one at a time.

i'll meet you where you are,

every single time.`,
  },
  {
    id: "ive-walked-through-gardens",
    title: "i've walked through gardens",
    meta: "devotion | choice",
    firstLine: "i've walked through gardens so loud with color they almost felt alive,",
    body: `i've walked through gardens

so loud with color they almost felt alive,

rows and rows of perfect blossoms

reaching for anyone who bothered to look.

but beauty gets lonely

when it isn't the one you're searching for.

and somewhere along the way,

i realized I wasn't looking for a garden at all—

just a single tulip,

quiet and sure in its own softness.

strange thing, really —

how one flower can change the meaning

of an entire field.

because every time I pass by a bloom now,

my heart does this little turn,

hoping—

just hoping—

for the shape of you.

and even if the world handed me

an endless meadow of petals,

all bright, all flawless,

it wouldn't matter.

what use is a whole garden

if the one flower I'd choose

is nowhere in it?`,
  },
];

// --------
// DOM helpers
// --------

const views = {
  home: document.getElementById("homeView"),
  poems: document.getElementById("poemsView"),
  about: document.getElementById("aboutView"),
};

const navButtons = Array.from(document.querySelectorAll(".nav-link"));
const poemsGrid = document.getElementById("poemsGrid");

const poemModal = document.getElementById("poemModal");
const poemModalBackdrop = document.getElementById("poemModalBackdrop");
const poemModalClose = document.getElementById("poemModalClose");
const poemModalTitle = document.getElementById("poemModalTitle");
const poemModalMeta = document.getElementById("poemModalMeta");
const poemModalBody = document.getElementById("poemModalBody");

const randomPoemButton = document.getElementById("randomPoemButton");
const modeToggle = document.getElementById("modeToggle");

// --------
// Navigation
// --------

function activateView(name) {
  Object.entries(views).forEach(([key, section]) => {
    if (key === name) {
      section.classList.add("view--active");
    } else {
      section.classList.remove("view--active");
    }
  });

  navButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.target === name);
  });
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    activateView(target);
  });
});

// --------
// Poems grid
// --------

function renderPoems() {
  poemsGrid.innerHTML = "";
  poems.forEach((poem) => {
    const card = document.createElement("article");
    card.className = "poem-card";
    card.dataset.poemId = poem.id;
    card.innerHTML = `
      <h3 class="poem-card__title">${poem.title}</h3>
      <p class="poem-card__meta">${poem.meta}</p>
      <p class="poem-card__firstline">${poem.firstLine}</p>
    `;
    card.addEventListener("click", () => openPoem(poem.id));
    poemsGrid.appendChild(card);
  });
}

// --------
// Modal
// --------

function openPoem(id) {
  const poem = poems.find((p) => p.id === id);
  if (!poem) return;

  poemModalTitle.textContent = poem.title;
  poemModalMeta.textContent = poem.meta;
  poemModalBody.textContent = poem.body;

  poemModal.classList.add("is-open");
  poemModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePoemModal() {
  poemModal.classList.remove("is-open");
  poemModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

poemModalClose.addEventListener("click", closePoemModal);
poemModalBackdrop.addEventListener("click", closePoemModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && poemModal.classList.contains("is-open")) {
    closePoemModal();
  }
});

// --------
// Random poem
// --------

function openRandomPoem() {
  if (!poems.length) return;
  const randomIndex = Math.floor(Math.random() * poems.length);
  activateView("poems");
  openPoem(poems[randomIndex].id);
}

randomPoemButton.addEventListener("click", openRandomPoem);

// --------
// Warm night mode
// --------

const THEME_KEY = "sonder-theme";

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "night") {
      document.body.classList.add("theme-night");
    }
  } catch {
    // ignore
  }
}

function toggleTheme() {
  const isNight = document.body.classList.toggle("theme-night");
  try {
    localStorage.setItem(THEME_KEY, isNight ? "night" : "day");
  } catch {
    // ignore
  }
}

modeToggle.addEventListener("click", toggleTheme);

// --------
// Init
// --------

document.addEventListener("DOMContentLoaded", () => {
  applyStoredTheme();
  renderPoems();
});