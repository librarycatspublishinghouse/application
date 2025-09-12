
const getImagePath = (path: string): string => {
  return `${process.env.PUBLIC_URL}${path}`;
};

export interface IAuthor {
    id: string;
    firstName: string;
    otherNames: string;
    info: string;
    image: string;
}

export const authorData: IAuthor[] = [
    {
        id: "636107754837a84f9da92a2b",
        firstName: "Edgar",
        otherNames: "Backhouse",
        info: "Edgar Backhouse is a prose writer from Luton, United Kingdom. With a background in film production and scriptwriting, his work unsurprisingly takes its form through imagistic inspiration. Edgar brings together his own experience and his empathetic curiosity in his creative process. Edgar’s charm comes from a wonderful ability not to take himself too seriously, and his intuitive and open approach to his own writing.",
        image: getImagePath("/pictures/author/thumbnails/Edgar.webp"),
    },
    {
        id: "6361092f4837a84f9da92a2d",
        firstName: "Maria",
        otherNames: "Gulina",
        info: "Maria Gulina is a writer, editor, collagist, journalist, and photographer from Minsk, Belarus. Over the last ten years, she has worked with independent media and environmental NGOs developing programs around education in sustainability and protecting cultural heritage. Maria is primarily a non-fiction writer who uses her writing to not only shine a light on the uniqueness of subjectivity and the beauty of the quotidian, but to authorise her own voice as a woman.",
        image: getImagePath("/pictures/author/thumbnails/MariaGulina.webp"),
    },
    {
        id: "636109674837a84f9da92a2e",
        firstName: "Colm",
        otherNames: "O’Shea",
        info: "Colm O’Shea is a prolific short-fiction writer and novelist from Dublin, Ireland. His oeuvre draws from a variety of media to forge a distinct style of writing; his work can be identified by his character-driven narratives and a focus on transporting the written word into images. He has an authority when speaking about his process that correlates with his productiveness and vision as a writer.",
        image: getImagePath("/pictures/author/thumbnails/ColmOShea.webp"),
    },
    {
        id: "636109ab4837a84f9da92a2f",
        firstName: "Karina",
        otherNames: "Dwipayana",
        info: "Karina Dwipayana is a writer, translator, and visual artist from Jakarta, Indonesia. Over the last three years, she has forged a distinctive style of writing that threads elements of Western realism with Indonesian folklore. Flickering and blending familial love and liminal horror, Karina’s work structures and frames a unique understanding of the supernatural. In conversation, Karina is perceptive, unassuming, and profoundly articulate. Her aim is to diversify the literary culture in Indonesia.",
        image: getImagePath("/pictures/author/thumbnails/KarinaDwipayana.webp"),
    },
    {
        id: "66656848c823c04078783be7",
        firstName: "Rachel",
        otherNames: "Deléglise",
        info: "Rachel Deléglise is a 28-year-old writer from Montpellier, France. She felt the need and pleasure to write from a very early age and has carried on ever since. Her main artistic activities are translation and poetry. Rachel’s poetry focuses on themes such as time, loss and discovery, human connections, mental health, existential matters, nature, and one’s place in the world. Her poems speak to every human being, with the intent of showing that coping with one’s vulnerability and strength, one’s share of darkness and light, is a universal quest.",
        image: getImagePath("/pictures/author/thumbnails/RachelDeleglise.webp"),
    },
    {
        id: "66656848c823c04078783be8",
        firstName: "Joseph",
        otherNames: "Blythe",
        info: "Joseph Blythe is from the north of England. He has short stories and poems present or forthcoming from Stand, Pennine Platform, Ink, Sweat and Tears, Grist Books, London Grip, SwimPress, Allegro Poetry and more. From 2022-2024, he served as an editor at Grist Books. He is currently working on a novel about the fallibility of memory. He holds an undergraduate degree in English Literature with Creative Writing and a Master’s in Creative Writing. He tweets, Instagrams, and Blueskys @wooperark.",
        image: getImagePath("/pictures/author/thumbnails/JosephBlythe.png"),
    },
    {
        id: "66656848c823c04078783be9",
        firstName: "Matthew",
        otherNames: "Ethan Gurteen",
        info: "Matthew Ethan Gurteen (M.E.G.) is a writer from the north of England. They studied their PhD in English Literature at the University of Huddersfield. Their horror short stories have been published in several anthologies and online blogs.",
        image: getImagePath("/pictures/author/thumbnails/MathewEthanGurteen.png"),
    },


]

