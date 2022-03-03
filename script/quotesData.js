// api https://zenquotes.io/api/quotes

const quotesData = [
  {
    quote:
      "When you get up in the morning, you have two choices - either to be happy or to be unhappy. Just choose to be happy.",
    author: "Norman Vincent Peale",
    count: "116",
  },
  {
    quote:
      "The most difficult times for many of us are the ones we give ourselves.",
    author: "Pema Chodron",
    count: "71",
  },
  {
    quote:
      "People who bite the hand that feeds them usually lick the boot that kicks them.",
    author: "Eric Hoffer",
    count: "79",
  },
  {
    quote:
      "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree. ",
    author: "Martin Luther",
    count: "94",
  },
  {
    quote:
      "Your best life will not be found in comfort. It will be found in fighting for what you believe in.",
    author: "Maxime Lagace",
    count: "98",
  },
  {
    quote:
      "When you have vision it affects your attitude. Your attitude is optimistic rather than pessimistic. ",
    author: "Charles Swindoll",
    count: "100",
  },
  {
    quote: "Never spend your money before you have earned it.",
    author: "Thomas Jefferson",
    count: "49",
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
    count: "45",
  },
  {
    quote: "Learning never exhausts the mind. ",
    author: "Leonardo da Vinci",
    count: "34",
  },
  {
    quote:
      "It's the job that's never started that takes the longest to finish.",
    author: "J.R.R. Tolkien",
    count: "67",
  },
  {
    quote:
      "Walk with those seeking truth... RUN FROM THOSE WHO THINK THEY'VE FOUND IT.",
    author: "Deepak Chopra",
    count: "75",
  },
  {
    quote:
      "Happiness is not the absence of problems, it's the ability to deal with them.",
    author: "Steve Maraboli",
    count: "77",
  },
  {
    quote:
      "The purpose of life is to contribute in some way to making things better.",
    author: "Robert F. Kennedy",
    count: "73",
  },
  {
    quote: "A crisis is an opportunity riding the dangerous wind.",
    author: "Chinese Proverb",
    count: "53",
  },
  {
    quote:
      "Money is only author tool. It will take you wherever you wish, but it will not replace you as the driver.",
    author: "Ayn Rand",
    count: "100",
  },
  {
    quote:
      "What people say, what people do, and what they say they do are entirely different things. ",
    author: "Margaret Mead",
    count: "90",
  },
  {
    quote: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert F. Kennedy",
    count: "61",
  },
  {
    quote:
      "It is secondary whether we choose belief or defiance. What is precious is that we are always able to choose.",
    author: "Ming-Dao Deng",
    count: "108",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
    count: "52",
  },
  {
    quote: "The only place success comes before work is in the dictionary.",
    author: "Vince Lombardi",
    count: "62",
  },
  {
    quote: "Sadness is but author wall between two gardens.",
    author: "Kahlil Gibran",
    count: "42",
  },
  {
    quote:
      "Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.",
    author: "William Faulkner",
    count: "161",
  },
  {
    quote: "If I can laugh, I can live.",
    author: "Christopher Reeve",
    count: "27",
  },
  {
    quote:
      "Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do.",
    author: "Nelson Mandela",
    count: "123",
  },
  {
    quote: "Discipline yourself, and others won't need to.",
    author: "John Wooden",
    count: "46",
  },
  {
    quote: "We tend to live up to our expectations.",
    author: "Earl Nightingale",
    count: "39",
  },
  {
    quote:
      "Raise your words, not voice. It is rain that grows flowers, not thunder.",
    author: "Rumi",
    count: "72",
  },
  {
    quote: "To become what you are not, behave as you do not.",
    author: "T.S. Eliot",
    count: "49",
  },
  {
    quote: "It is truth that liberates, not your effort to be free.",
    author: "Jiddu Krishnamurti",
    count: "55",
  },
  {
    quote:
      "You cannot always control what goes on outside. But you can always control what goes on inside. ",
    author: "Wayne Dyer",
    count: "96",
  },
  {
    quote: "Act the way you want to be and soon you'll be the way you act.",
    author: "Les Brown",
    count: "62",
  },
  {
    quote:
      "Society is composed of two great classes those who have more dinners than appetite, and those who have more appetite than dinners.",
    author: "Nicolas Chamfort",
    count: "130",
  },
  {
    quote:
      "I think it's very important to have author feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
    author: "Elon Musk",
    count: "146",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    count: "58",
  },
  {
    quote:
      "If you believe you can, you can. If you believe you can't, then, well you can't.",
    author: "Celestine Chua",
    count: "80",
  },
  {
    quote:
      "Give more than you think you can, trusting that you are richer than you think.",
    author: "Jon Kabat-Zinn",
    count: "78",
  },
  {
    quote: "When you're at the end of your rope, tie author knot and hold on.",
    author: "Theodore Roosevelt",
    count: "60",
  },
  {
    quote:
      "Real growth comes through intense, difficult, and challenging situations.",
    author: "Kamal Ravikant",
    count: "73",
  },
  {
    quote: "There is no excuse for not trying.",
    author: "Barack Obama",
    count: "34",
  },
  {
    quote: "Faith means believing the unbelievable.",
    author: "Gilbert Chesterton",
    count: "39",
  },
  {
    quote:
      "Focus on how far you have come in life rather than looking at the accomplishments of others.",
    author: "Lolly Daskal",
    count: "92",
  },
  {
    quote: "Yesterday is but today's memory, tomorrow is today's dream.",
    author: "Kahlil Gibran",
    count: "59",
  },
  {
    quote:
      "The Law of Concentration states that whatever you dwell upon grows. The more you think about something, the more it becomes part of your reality.",
    author: "Brian Tracy",
    count: "145",
  },
  {
    quote: "Laziness may appear attractive, but work gives satisfaction.",
    author: "Anne Frank",
    count: "60",
  },
  {
    quote: "Be strong. Be confident. Be the star of your own life.",
    author: "Estee Lauder",
    count: "54",
  },
  {
    quote:
      "What most people need to learn in life is how to love people and use things instead of using people and loving things.",
    author: "Unknown",
    count: "118",
  },
  {
    quote: "The pursuit of mastery bears gifts. ",
    author: "Gary Keller",
    count: "36",
  },
  {
    quote:
      "Stay away from people who makes you feel like you are wasting their time.",
    author: "Paulo Coelho",
    count: "73",
  },
  {
    quote:
      "It isn't that they can't see the solution. It is that they can't see the problem.",
    author: "Gilbert Chesterton",
    count: "81",
  },
  {
    quote:
      "Our heart is author treasury; if you pour out all its wealth at once, you are bankrupt.",
    author: "Honore de Balzac",
    count: "82",
  },
];

module.exports = {
  quotesData,
};
