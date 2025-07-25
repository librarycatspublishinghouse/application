export interface IBook { 
     id: string,
     title: string,
     authorID: string,
     desc: string,
     thumbnailLink: string,
     downloadLink: string,
     format: "PDF",
     downloads: number,
     isbn: string,
     language: "English",
     originalLanguage: "English",
     noPages: number,
     price: number,
     publicationDate: string
}

export const Books: IBook[] = [
    {
        id: "63610b054837a84f9da92a32",
        title: "Contemporary Subjects",
        authorID: "",
        desc: "Strange journeys to deliver undisclosed packages through 'non-descript names of far-off hamlets no one wants,' war diaries, oppressive loneliness and abhorrence for other people, or the depths of intergenerational trauma, all form part of what are indeed contemporary subjects. Take part in this collection of short stories and explore these themes through the prose of our newly published writers.",
        thumbnailLink: "/pictures/books/publications/thumbnails/contemporaruSubjectsCover.webp",
        downloadLink: "/pictures/books/publications/PDF/ContemporarySubjects.pdf",
        format: "PDF",
        downloads: 398,
        isbn: "978-1-7392047-0-9",
        language: "English",
        originalLanguage: "English",
        noPages: 88,
        price: 0,
        publicationDate: "01/11/2022"
    },

    {
        id: "666dc06643d014c4f98a7bdd",
        title: "Blue Moon",
        authorID: "",
        desc: "Blue Moon, a debut collection of poetry by Rachel Deléglise, delves deep into the heart and mind to explore the ever-pertinent themes of identity, change, loss, and love in all forms. Spanning time and geography, from London Bridge to the Caribbean, the poems return repeatedly to metaphors of nature, interwoven with human sentiments and experiences to emphasise how inseparable we are from the natural world around us. Masterfully conveying the nuances of the highs and lows of life, Deléglise exposes the universal nature of our seemingly lonely struggles with existential questions about our place in the world. In doing so, her words drive home the need to not only embrace, but also to share all the imperfect, contradictory elements of ourselves that ultimately come to define what it means to be human.",
        thumbnailLink: "/pictures/books/publications/thumbnails/blueMoon.webp",
        downloadLink: "/pictures/books/publications/PDF/BlueMoon.pdf",
        format: "PDF",
        downloads: 95,
        isbn: "",
        language: "English",
        originalLanguage: "English",
        noPages: 55,
        price: 0,
        publicationDate: "15/06/2024"
    },

    {
        id: "6863bf112abb9acc36677988",
        title: "Ebbs & Flows",
        authorID: "",
        desc: "How can a single tree come to shape the very rhythms of someone’s daily life? Or an unassuming pub harbour the explosive emotions of a lost love story?",
        thumbnailLink: "/pictures/books/publications/thumbnails/ebbsAndFlows.webp",
        downloadLink: "/pictures/books/publications/PDF/ebbsAndFlows.pdf",
        format: "PDF",
        downloads: 53,
        isbn: "",
        language: "English",
        originalLanguage: "English",
        noPages: 123,
        price: 0,
        publicationDate: "01/07/2025"
    },

]