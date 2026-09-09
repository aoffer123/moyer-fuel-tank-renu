export type Testimonial = {
  slug: string;
  name: string;
  location?: string;
  date: string;
  rating?: 5;
  source?: string;
  excerpt: string;
  body: string[];
};

export const testimonials: Testimonial[] = [
  {
    slug: "james-s",
    name: "James S.",
    date: "Nov 6, 2023",
    rating: 5,
    excerpt:
      "Every time the tanks are shipped back to me they are flawless! They look brand new inside and out!",
    body: [
      `I am the owner of an automotive repair shop and have sent several older "rest bombs" to Moyers. Every time the tanks are shipped back to me they are flawless! They look brand new inside and out! The price is competitive which is great because many of the tanks I sent are no longer available from the OEM.`,
    ],
  },
  {
    slug: "robert-f",
    name: "Robert F.",
    location: "Redwood City, CA",
    date: "Sep 30, 2025",
    rating: 5,
    source: "Google review",
    excerpt:
      "What an amazing job they did. Replaced the bottom of the tank and it looks like a brand new tank.",
    body: [
      `I was given a 1970 Suzuki T125 Stinger motorcycle that had been sitting in an air hanger for 10+ years, whose tank because gas was left in it, had it's whole bottom rotted through, not to mention the tires rotted and rust everywhere.`,
      `So because it required a complete teardown, I started with looking for another tank on motorcycle sites. Couldn't find another tank but received many recommendations to use Moyer's Fuel Tank Renu.`,
      `I called them up, they told me to send them the tank and they'd evaluate it and give me a price to fix. I filled out the online form and sent them the tank.`,
      `They call after receiving it and gave me the price. I gave them the "okay" to go ahead and repair it.`,
      `It took about 3+ weeks for the repair. After fixing it they put a tempt primer on it and sent it back.`,
      `What an amazing job they did. Replaced the bottom of the tank and it looks like a brand new tank. A wonderful job!`,
    ],
  },
  {
    slug: "nick-m",
    name: "Nick M.",
    location: "Westwood, NJ",
    date: "Aug 3, 2018",
    rating: 5,
    source: "Yelp review",
    excerpt:
      "Jim was so accommodating, he did the job, and what a great job he did, complete restoration on the tank.",
    body: [
      `I had business in Pittsburgh and Moyers was near by. I am restoring a 1983 Volkswagen pickup. I could have brought it locally where I live 5hrs. away. I read the previous reviews and felt this was the place.`,
      `I went in and meet Jim, the nicest fellow you could possibly want to meet. I told him I was going to Pittsburgh and coming through here in a few days would it be possible if I could pick it up on my way home, if not you can send it UPS.`,
      `Jim was so accommodating, he did the job, and what a great job he did, complete restoration on the tank. Thanks a million Jim!`,
    ],
  },
  {
    slug: "deja-j",
    name: "Deja J.",
    date: "May 16, 2015",
    rating: 5,
    excerpt:
      "I have taken my cars to Moyers over the last seven years and have never been disappointed.",
    body: [
      `I have taken my cars to Moyers over the last seven years and have never been disappointed. This is a small business and service is always fast and friendly. They do everything they can to keep your car repairs reasonable and are very honest. I don't trust anyone else.`,
    ],
  },
  {
    slug: "pedro-cadenas",
    name: "pedro.j.cadenas",
    date: "Oct 31, 2013",
    rating: 5,
    excerpt:
      "The condition of the tank is like new and I am one very happy, happy, happy, and satisfied customer!",
    body: [
      `I would just like to say, what an outstanding job on my motorcycle gas tank!`,
      `I am the original owner of a 1985 Yamaha FJ-1100. Long story short; got married, had kids, and many years later after having my bike sit in the garage, it was time to get it running again.`,
      `After visiting a number of motorcycle dealership and independent repair shops, they all concluded that my gas tank was trashed and recommended that I just sell or junk the bike. Needless today there were lots of volunteers ready to take it off my hands.`,
      `I searched out on the Web and came across Moyer Fuel Tank Renu, with nothing to lose I filled out the paper work and shipped (FedEX ground) my tank to them. A couple of days later, I received a courtesy phone call from Moyer tell me that the tank had arrived, was given a price quote and expected turnaround time. Wish I could remember the young ladies name; she was very professional and nice.`,
      `Well Christmas came early this year. My tank was shipped back to me before the date promised. The condition of the tank is like new and I am one very happy, happy, happy, and satisfied customer!`,
      `If anyone needs tank repair reach out to Moyer Fuel Tank Renu.`,
    ],
  },
  {
    slug: "gary-w",
    name: "Gary W.",
    date: "Mar 16, 2018",
    source: "AACA forums",
    excerpt: "I had a great experience with Moyers",
    body: [`I had a great experience with Moyers`],
  },
  {
    slug: "raydurr",
    name: "raydurr",
    date: "Mar 16, 2018",
    source: "AACA forums",
    excerpt:
      "The tank fit great and the renu took care of any rust. I am very happy and at the time a lifetime warranty was given.",
    body: [
      `Moyer performed a rebuild of my fuel tank in 2012 for my 1929 Buick. The tank had been unused for decades and the floor of the tank was like swiss cheese. They cut out the affected areas and carefully welded in a new section. The tank fit great and the renu took care of any rust. I am very happy and at the time a lifetime warranty was given.`,
      `Any time trying to revive a car to driver status the fuel tank is one of the first things I take care of. I don't battle rust if I can avoid it and its not worth risking fuel pump or carburetor damage, not to mention the nuisance of a underpowered car. Id do it in a minute if planning on using the car.`,
    ],
  },
];
