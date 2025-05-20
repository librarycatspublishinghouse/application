interface Link {
  type: 'twitter' | 'instagram' | 'linkedin' | 'website';
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  links: Link[];
  description: string;
  thumbnailImage: string;
  profileImage: string;
  isFormerMember?: boolean;
}

const createLink = (type: Link['type'], link: string): Link => ({
  type,
  link,
});

export const teamMembers: TeamMember[] = [
  {
    id: 'marcos-echevarria',
    name: 'Marcos Echevarria',
    position: 'Founder & CEO',
    links: [
      createLink('instagram', 'https://www.instagram.com/marcoseche/'),
      createLink('linkedin', 'https://www.linkedin.com/in/marcos-e-76826712b/'),
    ],
    description: 'I am a PhD Political Science student at UNC-Chapel Hill. I\'m a bit of a book geek, but I also enjoy football, golf, chess, and movies, among other things. I founded Library Cats out of my love for books and a desire to promote the beautiful activities of reading and writing.',
    thumbnailImage: '/pictures/team/book-thumbnails/bomarzo.webp',
    profileImage: '/pictures/team/member-images/marcos.webp',
  },///
  {
    id: 'peter-barrett',
    name: 'Peter Barrett',
    position: 'Chief Editor',
    links: [
        createLink('instagram', 'https://www.instagram.com/peterbarrett0'),
    ],
    description: 'Hi, My name is Peter! I am London-based playwright and founder of Fundamentals Theatre Company. I graduated from the University of Edinburgh in 2021 reading Philosophy and English Literature - during my time there I was co-founder and editor of the student-run Hebenon Literary Journal and produced, directed, and wrote my first play (The Apology) through my theatre company that performed at EdinburghI study Creative Writing in Lancaster University. I am an aspiring poet and editor. I attempt to explore various aspects of humanity, life and the world in my poetry. By doing so, I hope to inspire my readers to view themselves, their lives and the world they live in from a fresh angle. I am also very interested in communicating with other writers and helping them with their works.',
    thumbnailImage: '/pictures/team/book-thumbnails/the-crying-of-lot-49.webp',
    profileImage: '/pictures/team/member-images/peterBarrett.webp',
    isFormerMember: true,
  },
  {
    id: 'aikaterini-roka',
    name: 'Aikaterini Roka',
    position: 'Editor',
    links: [
        createLink('instagram', 'https://www.instagram.com/katerinaroka_/'),
    ],
    description: 'A graduate of the English language and literature department at the National and Kapodistrian University of Athens. I\'m currently doing a master’s in sociolinguistics at Leiden University. I\'ve worked as a book editor in Amsterdam editing novels and fiction books.',
    thumbnailImage: '/pictures/team/book-thumbnails/wurthering-heights.webp',
    profileImage: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
    isFormerMember: true,
  },
  {
    id: 'beatriz-de-castro-perez',
    name: 'Beatriz de Castro Perez',
    position: 'Marketing Strategist',
    links: [],
    description: 'I am a final-year Economics and International Relations student at Lancaster University. I am passionate about the study of climate change in both economics and politics. My hobbies are reading, dancing, travelling and learning new languages.',
    thumbnailImage: '/pictures/team/book-thumbnails/normal-people-sally-rooney.webp',
    profileImage: `/pictures/team/member-images/beatriz.webp`,
  },///
  {
    id: 'chris-millis',
    name: 'Chris Millis',
    position: 'Chief Editor',
    links: [
        createLink('twitter', 'https://twitter.com/MillisChris'),
        createLink('instagram', 'https://www.instagram.com/cjmillis/'),
        createLink('linkedin', 'https://www.linkedin.com/in/chris-millis-b8583b229'),
    ],
    description: 'I\'m a student from South London, currently undertaking an MA in English Literary Studies at Lancaster University in the North-West of England. Taking on this role has been a fantastic privilege helping to promote otherwise unheard voices. As a student looking for a career in publishing/editing, it has also allowed me to develop professional skills that I\'m sure will prove invaluable over the coming years. I\'ve loved working with the team, and look forward to reading and editing our next project!',
    thumbnailImage: '/pictures/team/book-thumbnails/atonement.webp',
    profileImage: `/pictures/team/member-images/chris.jpg`,
  },///
  {
    id: 'cristobal-echevarria',
    name: 'Cristobal Echevarria',
    position: 'Graphic Designer',
    links: [
        createLink('linkedin', 'https://www.linkedin.com/in/cristobal-ech/'),
        createLink('website', 'https://www.cristobalechevarria.com/')
    ],
    description: 'I am a final-year Graphic Communication student at Loughborough University with a love for fiction and action novels. I am very passionate about motion graphics, design and music.',
    thumbnailImage: '/pictures/team/book-thumbnails/the-outsiders.webp',
    profileImage: `/pictures/team/member-images/cristobal.png`,
  }, ///
  {
    id: 'laura-molloy',
    name: 'Laura Molloy',
    position: 'Editor',
    links: [],
    description: 'I’m a first-year English Literature student studying in Dublin. I’m one of the editors at Library Cats. My favourite genres are classics, poetry and romance. I love reading, writing and listening to music.',
    thumbnailImage: '/pictures/team/book-thumbnails/northanger-abbey.webp',
    profileImage: `/pictures/team/member-images/laura.webp`,
    isFormerMember: true,
  },
  {
    id: 'mayara-zucheli',
    name: 'Mayara Zucheli',
    position: 'Graphic Designer',
    links: [
        createLink('instagram', 'https://www.instagram.com/mayara.zucheli'),
    ],
    description: 'I’m Mayara, a graphic designer with a deep love for cats, literature, and traveling. When I’m not busy bringing my artistic visions to life, I enjoy quiet moments curled up with my cats, Dom and Misha, and diving into the pages of a captivating book. Among the many treasures on my bookshelf, 4321 by Paul Auster reigns supreme. With a boundless curiosity and a passion for exploration, I embrace life’s adventures with open arms, always seeking inspiration in the world around me and, of course, in a good book.',
    thumbnailImage: '/pictures/team/book-thumbnails/4321.webp',
    profileImage: `/pictures/team/member-images/mayara.webp`,
  }, ///
  {
    id: 'nisha-patel',
    name: 'Nisha Patel',
    position: 'Editor',
    links: [],
    description: "She has a solid BA in Creative Writing and English Language. She completed the New Writing Festival at university, where acclaimed poet Abena Essah  mentored  her.  She  was  shortlisted  at  Granta.  Her  work  appears  in  The  Wells  Street  Journal. She has been longlisted at Young Poets Network. Her other interests include nature and art. She enjoys drawing as her hobby.",
    thumbnailImage: '/pictures/team/book-thumbnails/a-christmas-carol.webp',
    profileImage: `/pictures/team/member-images/nisha.webp`,
  },///
  {
    id: 'rebecca-weigler',
    name: 'Rebecca Weigler',
    position: 'Marketing Strategist',
    links: [
        createLink('linkedin', 'https://www.linkedin.com/in/rebecca-weigler-30307924a'),
    ],
    description: "Hello,  my  name  is  Rebecca!  I  am  currently  studying  in  London  for  my  master's  degree  in Publishing, having recently graduated with a bachelor's degree in English. I love all things to do with books, art, travel and writing. When I am not working, I often read good books or with my Golden Retriever.",
    thumbnailImage: '/pictures/team/book-thumbnails/anne-of-green-gables.webp',
    profileImage: `/pictures/team/member-images/rebecca.webp`,
    isFormerMember: true,
  },
  {
    id: 'sukhpreet-chana',
    name: 'Sukhpreet Chana',
    position: 'Editor',
    links: [],
    description: "I am a book enthusiast, with a passion for reading crime, romance and psychological fiction novels. My hobbies and interest consist of writing short fiction novels and reading. I’m currently in the pursuit of expanding my knowledge and skills in the publishing industry/book world.",
    thumbnailImage: '/pictures/team/book-thumbnails/fifty-fifty.webp',
    profileImage: `/pictures/team/member-images/sukhpreet.webp`,
  }, ///
  {
    id: 'zori-nencheva',
    name: 'Zori Nencheva',
    position: 'Editor',
    links: [
        createLink('linkedin', 'http://linkedin.com/in/zori-nencheva'),
    ],
    description: "I’m Zori, a student studying English Literature, Spanish and History. I love to read and write, and being an editor for this project is exactly what I need to facilitate these passions!",  
    thumbnailImage: '/pictures/team/book-thumbnails/normal-people-sally-rooney.webp',
    profileImage: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
    isFormerMember: true,
  },
  {
    id: 'beatrice-feng',
    name: 'Beatrice Feng',
    position: 'Editor',
    links: [],
    description: "I study Creative Writing in Lancaster University. I am an aspiring poet and editor. I attempt to explore various aspects of humanity, life and the world in my poetry. By doing so, I hope to inspire my readers to view themselves, their lives and the world they live in from a fresh angle. I am also very interested in communicating with other writers and helping them with their works.",
    thumbnailImage: '/pictures/team/book-thumbnails/collected-poems.webp',
    profileImage: `/pictures/team/member-images/beatrice.webp`,
  }, ///
  {
    id: 'kai-scotney',
    name: 'Kai Scotney',
    position: 'Editor',
    links: [
        createLink('linkedin', 'https://www.linkedin.com/in/kai-scotney-323a41158/'),
    ],
    description: "Recently finished an MA in Modern and Contemporary Literature at the University of Manchester. A lover of dogs, indie rock, and Bristol Rovers F.C. A firm believer that there’s a story inside everyone waiting to be told.",
    thumbnailImage: '/pictures/team/book-thumbnails/on-beauty.webp',
    profileImage: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
    isFormerMember: true,
  },
  {
    id: 'raja-khan',
    name: 'Raja Khan',
    position: 'Legal Advisor',
    links: [],
    description: "I would describe myself as a lawyer, entrepreneur and avid reader. In the words of Dolores Cannon, 'when we go someplace, we leave a part of our energy there and we influence more than we can ever imagine.'. Realising this makes me feel optimistic about the change that I can help generate in this world and it is with this in mind, I decided to make a change by joining STW. I also like to play football, travel and design pottery in my free time",
    thumbnailImage: '/pictures/team/book-thumbnails/the-power-of-positive-thinking.webp',
    profileImage: `/pictures/team/member-images/raja.jpg`,
  }, ///
  {
    id: 'isla-macfarlane',
    name: 'Isla MacFarlane',
    position: 'Editor',
    links: [
        createLink('linkedin', 'https://www.linkedin.com/in/isla-macfarlane-0b042613b/'),
    ],
    description: "I am a recent MSc Psychology graduate at the University of Glasgow. I am fascinated by the intersection between literature, linguistics and psychology. My hobbies include reading, music and film.",
    thumbnailImage: "/pictures/team/book-thumbnails/rebecca.webp",
    profileImage: `/pictures/team/member-images/isla.webp`,
  },
  {
    id: 'alfonso-buhigas',
    name: 'Alfonso Buhigas',
    position: 'Legal Advisor',
    links: [
        createLink('linkedin', 'https://www.linkedin.com/in/alfonso-buhigas-calbacho-95a8b6224'),
    ],
    description: "I consider myself a hard-working, reliable, methodical person whose enthusiasm to learn and read are what make me the perfect teammate. I am an ambitious, open-minded, effective communicator who prefers to work in an organized environment, which permits creativity in order to grow.",
    thumbnailImage: "/pictures/team/book-thumbnails/and-then-there-were-none.webp",
    profileImage: `/pictures/team/member-images/alfonso.webp`,
  },
  {
    id: 'victoria-marie-smith',
    name: 'Victoria Marie Smith',
    position: 'Editor',
    links: [
        createLink("linkedin", "www.linkedin.com/in/victoria-marie-smith-539ab8149"),
    ],
    description: "Originally from Hertfordshire, UK, Victoria currently resides in the north of the country in Manchester. Victoria is a keen YA fantasy writer, and her first novel, Your World Shall Be Mine, is forthcoming with publisher L R Price Publications in 2024. Eventually, she plans to make the series a trilogy, but for now she’s just happy hibernating with her cats and playing video games!",
    thumbnailImage: "/pictures/team/book-thumbnails/battle-royale.webp",
    profileImage: `/pictures/team/member-images/victoria.jpg`,
  },
  {
    id: 'fiona-banham',
    name: 'Fiona Banham',
    position: 'Editor',
    links: [
        createLink("linkedin", "www.linkedin.com/in/fiona-banham-1707891b7"),
    ],
    description: "Originally hailing from Manchester, I am a PhD student in Modern History at the University of St Andrews. I have a passion for reading and editing; books are my escape from the world when things get tough. When not reading, writing, or researching, you will either find me at a gig, running my accidental pet-sitting business, or enduring the trials and tribulations of being a Manchester United supporter.",
    thumbnailImage: "/pictures/team/book-thumbnails/alone-in-berlin.jpg",
    profileImage: `/pictures/team/member-images/fiona.JPG`,
  },
  {
    id: 'rebecca-thomas',
    name: 'Rebecca Thomas',
    position: 'Editor',
    links: [
        createLink("instagram", "https://www.instagram.com/cheekanzoop"),   
        createLink("linkedin", "https://www.linkedin.com/in/rebecca--thomas"),
    ],
    description: "Rebecca is an English native who has lived in the rainy north west almost all of her life. After graduating from Lancaster University with a BA Hons in Film and Cultural Studies, she has gone on to work as a content editor in jobs up and down the country, including the Liverpool Echo and Imperial War Museum, London. While she still edits as her day job, in her spare time she is a self-published author, gamer and avid film and TV watcher",
    thumbnailImage: "/pictures/team/book-thumbnails/every-day.jpeg",
    profileImage: `/pictures/team/member-images/rebecca-thomas.png`,
    isFormerMember: true,
  },
  {
    id: 'megan-ellis',
    name: 'Megan Ellis',
    position: 'Marketing Assistant',
    links: [], 
    description: "I am an MSc Marketing student at Cardiff University with a deep admiration of fantasy and sci-fi worlds! I enjoy exploring these worlds through my long love of video and tabletop games, novels, and performing arts.",
    thumbnailImage: "/pictures/team/book-thumbnails/dune.jpg",
    profileImage: `/pictures/team/member-images/megan.png`,
    isFormerMember: true,
  },
  {
    id: 'maddie-tyler',
    name: 'Maddie Tyler',
    position: 'Editor',
    links: [
        createLink("twitter", "https://twitter.com/madelinetylerr"),
        createLink("linkedin", "https://linkedin.com/in/maddietyler/"),
    ],
    description: "Hailing from the flatlands of East Anglia, I recently completed an MA in Global Literature and Culture from the University of York and currently work in academic publishing in Cambridge. I love reading, writing, and collecting shiny things, all while drinking copious amounts of tea that I’ve forgotten about and accidentally let go cold.",
    thumbnailImage: "/pictures/team/book-thumbnails/the-book-of-goose.jpg",
    profileImage: `/pictures/team/member-images/maddie.png`,
  },
  {
    id: 'andy-salazar',
    name: 'Andy Salazar',
    position: 'Marketing Assistant',
    links: [
        createLink("instagram", "https://www.instagram.com/andy_slzr/?hl=en-gb"),
        createLink("linkedin", "https://www.linkedin.com/in/andrea-espinosa-salazar-a96a00207/?originalSubdomain=uk"),
    ],
    description: "My name is Andy and I am a recent graduate from the University of Manchester where I completed a Psychology degree. Fun fact about me: I have lived in 4 different countries (Ecuador, Spain, France and now the UK!)",
    thumbnailImage: "/pictures/team/book-thumbnails/a-room-of-ones-own.jpg",
    profileImage: `/pictures/team/member-images/andy.png`,
    isFormerMember: true,
  },
  {
    id: 'devora-moleman',
    name: 'Devora Moleman',
    position: 'Marketing Assistant',
    links: [
        createLink("linkedin", "https://www.instagram.com/devoradraws/?hl=en"),
    ],
    description: "I am an artist currently working in education. I’m interested in Illustration and literature and how they intersect. I also have a slight obsession with The Sims.",
    thumbnailImage: "/pictures/team/book-thumbnails/northern-lights.jpg",
    profileImage: `/pictures/team/member-images/devora.jpg`,
  },
  {
    id: 'sam-morgan',
    name: 'Sam Morgan',
    position: 'Graphic Designer',
    links: [
        createLink("instagram", "https://www.instagram.com/_samannas/"),
        createLink("linkedin", "https://www.linkedin.com/in/samannas/"),
    ],
    description: "I’m a freelance creative specializing in graphic design and illustration with a background in digital marketing design. I have a love for books and publishing design, so I’m enthusiastic to work with our authors to materialize their passion projects. My favorite genre is fantasy, but I also love juicy autobiographies and semi-biographical stories.",
    thumbnailImage: "/pictures/team/book-thumbnails/stardust.jpg",
    profileImage: `/pictures/team/member-images/sam.jpg`,
  },
  {
    id: 'hela-joshi',
    name: 'Hela Joshi',
    position: 'Graphic Designer',
    links: [
        createLink("instagram", "https://www.instagram.com/hela_joshi/"),
    ],
    description: "Graphic designer with a passion for creating fresh, vibrant designs, that reflect my simple, caring nature. I find joy in life’s simple pleasures, cherishing moments with loved ones and my six adorable fur babies. As a devoted dog mom, my heart is full of love and laughter, which often inspires my work. With a playful spirit and a love for creativity, I strive to bring happiness and beauty into the world through my designs.",
    thumbnailImage: "/pictures/team/book-thumbnails/the-kite-runner.jpg",
    profileImage: `/pictures/team/member-images/hela.jpg`,
    isFormerMember: true,
  },
  {
    id: 'hannah-holmes',
    name: 'Hannah Holmes',
    position: 'Graphic Designer',
    links: [
        createLink("linkedin", "linkedin.com/in/hannahholmesgraphicdesign"),
    ], 
    description: "I am a graphic designer from the North West of England. I am grateful to live in a place near beautiful scenery and nature. Where most people I meet are friendly and there is a strong sense of community. I am a social graphic designer who wants to make a difference in young people’s lives and create a brighter future. Since graduating, I have been working with some great charities and organisations to offer support wherever and whenever I can.",
    thumbnailImage: "/pictures/team/book-thumbnails/magicians-nephew.jpg",
    profileImage: `/pictures/team/member-images/hannah.jpg`,
  },
    {
    id: 'harriet-solomon',
    name: 'Harriet Solomon',
    position: 'Editor',
    links: [
        createLink("instagram", "https://www.instagram.com/harriet_solomon/?hl=en-gb"),
        createLink("linkedin", "https://uk.linkedin.com/in/harriet-solomon-04207b185"),
    ],
    description: "Harriet is a PhD candidate in International History at the London School of Economics and Political Science. Her PhD explores the representation of Islam and Islamist organisations in British and American media since 1979. Beyond her studies, Harriet is Managing Editor of the Cold War History Journal and Features Writer for the Kleio Historical Journal. Outside of academia, she works in editing and publishing at Bradt Guides, the world’s largest independent travel publishing house. When she isn’t writing (or reading...or editing...) Harriet can be found on the hunt for bargain flights and the best Chinese food in London.",
    thumbnailImage: "/pictures/team/book-thumbnails/kitchen-confidential.jpg",
    profileImage: `/pictures/team/member-images/harriet.jpeg`,
    isFormerMember: true,
  },
  {
    id: 'beth-stears',
    name: 'Beth Stears',
    position: 'Direction',
    links: [
        createLink("linkedin", "https://www.linkedin.com/in/beth-stears-766a8123b"),
    ],
    description: "Being in my third year of an English Language and Literature degree , I have developed a great appreciation for the use of language and how literature complements education. This particular role relates very well to what I am studying and gives me valuable experience. Apart from reading books, I’m usually watching horror films or play video games .",
    thumbnailImage: "/pictures/team/book-thumbnails/dracula.webp",
    profileImage: `/pictures/team/member-images/beth.jpg`,
  },
  {
    id: 'sophia-voukelatos',
    name: 'Sophia Voukelatos',
    position: 'Direction',
    links: [
        createLink("linkedin", "https://www.linkedin.com/in/sophia-voukelatos-124b7b285?trk=contact-info"),
        createLink("instagram", "https://www.instagram.com/sophiavouk/"),
    ],
    description: "I’m a Master of Publishing and Communications student at the University of Melbourne, in Australia. I am an avid reader of fiction and non-fiction, who also loves travelling, art, fashion and history",
    thumbnailImage: "/pictures/team/book-thumbnails/a-gentleman-in-moscow.jpg",
    profileImage: `/pictures/team/member-images/sophia.jpeg`,
  },
  {
    id: 'alessandra-cappuccio',
    name: 'Alessandra Cappuccio',
    position: 'Direction',
    links: [
        createLink("linkedin", "https://www.linkedin.com/in/alessandra-cappuccio-01ab4921a/"),
        createLink("instagram", "https://www.instagram.com/alessandra.cappuccio/"),
    ],
    description: "I’m a recent graduate of the LLB European Law programme at Maastricht University. I’m an avid reader with a deep love for classics and a growing curiosity for the publishing world. I’m outgoing and adventurous, always eager to take on challenges. I love exploring new things, whether it’s through travelling, cooking or reading a good book.",
    thumbnailImage: "/pictures/team/book-thumbnails/the-unbearable-lightness-of-being.jpg",
    profileImage: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
  },
  {
    id: 'olivia-dean',
    name: 'Olivia Dean',
    position: 'Marketing Assistant',
    links: [
        createLink("linkedin", "https://www.linkedin.com/in/olivia-g-dean/"),
    ],
    description: "Olivia is a writer, reader, and an editor of fantasy fiction. She is originally from England but moved to the States when she was 10. She’s lived on both coasts, but has spent more of her time on the East Coast, having attended the University of Maryland where she received her BA in Cinema and Media Studies in 2023. Since working on her first novel throughout college (and being obsessed with the TV show “Younger” in high school), Olivia has been drawn to the world of publishing and is currently pursuing opportunities within the industry.",
    thumbnailImage: "/pictures/team/book-thumbnails/gormenghast.jpg",
    profileImage: `/pictures/team/member-images/olivia.jpg`,
  },
  
]
  

export const currentTeamMembers = teamMembers.filter(member => !member.isFormerMember);
export const formerTeamMembers = teamMembers.filter(member => member.isFormerMember); 