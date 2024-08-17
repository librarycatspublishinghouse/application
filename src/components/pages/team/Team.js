import React, { useRef } from 'react';
import style from './Team.module.css';

import 'font-awesome/css/font-awesome.min.css';

function Team() {

    const mockDescription = "LOREM IPSUN DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX "

    const mockLinks = {
        "twitter": "https://twitter.com/",
        "instagram": "https://www.instagram.com/",
        "linkedin": "https://www.linkedin.com/",
    }

    const [length, setLength] = React.useState("short");
    const [clickHeight, setClickHeight] = React.useState(0);


    const renderTeamMemberItem = ( member,  direction, length ) => {

        const name = member.name
        const position = member.position
        const links = member.links
        const description = member.description
        const thumbnail_image = member.thumbnail_image
        const profile_image = member.profile_image
        const refOpen = member.refOpen
        const refClosed = member.refClosed

        const renderImage = () => {
            return(
                <div className={style.teamMemberItem_image_container} >
                        <img className = {style.teamMember_image} src={profile_image} alt = ""/> 
                    </div>
            )
        }


               
    

        const renderContent = (name, position,links , description, length, refOpen, refClosed) => {
            return(
            <div className={style.teamMemberItem_content_container}>
                {(length === "short") ? (
                    <div className={style.teamMember_content}>
                        <div className={style.teamMemberItem_content_header} onClick = {(e) => handleClick(e,refOpen, refClosed)} ref ={refClosed}>
                            <div className={style.teamMember_name}>
                                {name}
                            </div>
                            <div className={style.teamMember_position}>
                                {position}
                            </div>
                        </div>

                        <div className={style.teamMember_links}>
                        {links.map((link) => {
                            return(
                                <>
                                {(link.type == "twitter") &&  (
                                <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer">
                                    <img  className= {style.link_icon} src={"pictures/twitter.webp"} alt="Twitter"   />
                                </a>
                                )}
                                {(link.type == "instagram") &&  (
                                    <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer"><img  className= {style.link_icon} src={"pictures/insta.webp"} alt="Instagram"/></a>
                                )}
                                {(link.type == "linkedin" ) &&  (
                                    <a className = {style.link} href={link.link}  target="_blank" rel="noopener noreferrer"><img  className= {style.link_icon} src={"pictures/linkedin.webp"} alt="Linkedin"/></a>
                                )}
                                {(link.type == "website" ) &&  (
                                    <a className = {style.link} href={link.link}  target="_blank" rel="noopener noreferrer"><img  className= {style.link_icon} src={"pictures/website.webp"} alt="Linkedin"/></a>
                                )}
                                </>)
                            })}
        
                        </div>
                    </div>
                ) : (
                <div className={style.teamMember_content}>
                    <div className={style.teamMember_name}>
                        {name}
                    </div>
                    <div className={style.row_gap}></div>
                    <div className={style.teamMember_description} onClick = {(e) => handleClick(e,refOpen, refClosed)} ref ={refOpen}>
                        {description}
                    </div>
                    <div className={style.teamMember_links} style = {{display: 'inline-block', justifyItems: 'flex-end'}}>

                    {links.map((link) => {
                        return(
                            <>
                                {(link.type == "twitter") &&  (
                                    <div className={style.teamMember_link} style = {(direction === "right" )?  {justifyContent: "flex-end"}: {}}>
                                        {direction === "right" ? (
                                            <>
                                                <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer" style={{display:"flex", }}>
                                                    <div className={style.teamMember_link_text}>
                                                        Twitter
                                                    </div>
                                    
                                                    <img  className= {style.link_icon} src={"pictures/twitter.webp"} alt="Twitter" style={{marginLeft: "0.5rem"}}/>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                            
                                            <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer" style={{display:"flex"}}>
                                                    <img  className= {style.link_icon} src={"pictures/twitter.webp"} alt="Twitter"/>
                                                
                                                    <div className={style.teamMember_link_text}>
                                                        Twitter
                                                    </div>
                                                </a>
                                            </>
                                        )}
                                        
                                    </div>
                                )}
                                {(link.type == "instagram") &&  (
                                    <div className={style.teamMember_link} style = {(direction === "right" )?  {justifyItems: "flex-end"}: {}} >
                                        {direction === "right" ? (
                                            < >
                                                <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer" style={{display:"flex", }}>

                                                    <div className={style.teamMember_link_text}>
                                                        Instagram
                                                    </div>
                                            
                                                    <img  className= {style.link_icon} src={"pictures/insta.webp"} alt="Instagram" style={{marginLeft: "0.5rem"}}/>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                            
                                            <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer" style={{display:"flex"}}>
                                                    <img  className= {style.link_icon} src={"pictures/insta.webp"} alt="Instagram"/>
                                            
                                                    <div className={style.teamMember_link_text}>
                                                        Instagram
                                                    </div>
                                                </a>
                                            </>
                                        )}
                                        
                                    </div>
                                )}
                                {(link.type == "linkedin" ) &&  (
                                    <div className={style.teamMember_link} style = {(direction === "right" )?  {justifyContent: "flex-end"}: {}}>
                                        {direction === "right" ? (
                                            < >
                                            <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer" style={{display:"flex", }}>
                                                <div className={style.teamMember_link_text}>
                                                    Linkedin
                                                </div>
                        
                                                    <img  className= {style.link_icon} src={"pictures/linkedin.webp"} alt="Linkedin" style={{marginLeft: "0.5rem"}}/>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                            
                                                <a className = {style.link} href={link.link} target="_blank" rel="noopener noreferrer" style={{display:"flex"}}>
                                                    <img  className= {style.link_icon} src={"pictures/linkedin.webp"} alt="Linkedin"/>
                                            
                                                    <div className={style.teamMember_link_text}>
                                                        Linkedin
                                                    </div>
                                                </a>
                                            </>
                                        )}
                                    </div>
                                )}

                                {(link.type == "website" ) &&  (
                                    <div className={style.teamMember_link} style = {(direction === "right" )?  {justifyContent: "flex-end"}: {}}>
                                        {direction === "right" ? (
                                            < >
                                            <a className = {style.link} href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{display:"flex", }}>
                                                <div className={style.teamMember_link_text}>
                                                    Website
                                                </div>
                        
                                                    <img  className= {style.link_icon} src={"pictures/website.webp"} alt="Linkedin" style={{marginLeft: "0.5rem"}}/>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                            
                                                <a className = {style.link} href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{display:"flex"}}>
                                                    <img  className= {style.link_icon} src={"pictures/website.webp"} alt="Linkedin"/>
                                            
                                                    <div className={style.teamMember_link_text}>
                                                        Website
                                                    </div>
                                                </a>
                                            </>
                                        )}
                                    </div>
                                )}
                            </>                                
                        )})}
                    </div>
                </div>
                )}
            </div>
            )
        }
        const handleClick = async (event, refOpen, refClosed) => {
            const divPosition = event.clientY + window.pageYOffset;

            
            let newLength = length

            if (length === "short") {
                await setLength("long");
                requestAnimationFrame(() => {
                window.scrollTo({
                    top: (refOpen.current.getBoundingClientRect().top)+ window.pageYOffset - event.clientY,
                });
            });
                
            } else {
                await setLength("short");
                requestAnimationFrame(() => {
                window.scrollTo({
                    top: (refClosed.current.getBoundingClientRect().top)  + window.pageYOffset - event.clientY,
                });
            });
               
            }

      
        } 

        const renderBookThumbnail = () => {
            if (length === "short") {
                return(
                    <>
                    </>
                )
            }
            else {
                return(

                    <div className={style.book_thumbail_image_container}>
                        <img className = {style.book_thumbail_image} src={thumbnail_image}  />
                    </div>
                )
            }
        }

        return (
            <>
            <div className = {style.team_content} style={(length === "short") ? {gridTemplateColumns: "1fr 1fr"}: (direction === "left") ? {gridTemplateColumns: "7fr 1fr"}: {gridTemplateColumns: "1fr 7fr"}} >
            
            {direction === "right" ? (
                <div className = {style.team_content_space} >
                    {renderBookThumbnail()}
                    
                </div>
            ) : (
            <> </>
            )}

                <div className = {style.team_content_item} style = {length === "short"? {marginBottom: "0.1rem"}: {marginBottom: "6rem"} }>

                    <div className={style.teamMemberItem} style = {direction === "left"? {textAlign: "left", gridTemplateColumns:"auto 3fr"} : {textAlign: "right", gridTemplateColumns:"3fr auto" } }  >

                        {(direction === "left") ? (
                            <>
                                {renderImage()}  
                                {renderContent(name, position, links , description, length, refOpen, refClosed)}
                            </>
                        ) : (     
                            <>
                            {renderContent(name, position, links , description, length, refOpen, refClosed)}
                            {renderImage()}  
                        </>
                        )}
                        
                        
                    
                    </div>
                </div>

            {direction === "left" ? (
                <div className = {style.team_content_space} >
                    {renderBookThumbnail()}
                </div>
            ) : (
            <> </>
            )}
            
            </div>
        </>
        )
    }

    const link = ( type, link ) => {
        return {
            type: type,
            link: link
        }
    }

    const MarcosEchevarria = {
        name: "Marcos Echevarria",
        position: "Founder & CEO",
        links: [
            link("twitter", "https://twitter.com/marcoseche00"),
            link("instagram", "https://www.instagram.com/marcoseche/"),
            link("linkedin", "https://www.linkedin.com/in/marcos-e-76826712b/"),
        ],

        description: "I am a PhD Political Science student at UNC-Chapel Hill. I’m a bit of a book geek, but I also enjoy football, golf, chess, and movies, among other things. I founded Library Cats out of my love for books and a desire to promote the beautiful activities of reading and writing.",
        thumbnail_image: "/pictures/team/book-thumbnails/bomarzo.webp",
        profile_image: `/pictures/team/member-images/marcos.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
        id: "marcos-echevarria",
    }

    const PeterBarret  = {
        name: " Peter Barrett",
        position: "Chief Editor",
        links: [

            link("instagram","https://www.instagram.com/peterbarrett0"),

        ],
        description: "Hi, My name is Peter! I am London-based playwright and founder of Fundamentals Theatre Company. I graduated from the University of Edinburgh in 2021 reading Philosophy and English Literature - during my time there I was co-founder and editor of the student-run Hebenon Literary Journal and produced, directed, and wrote my first play (The Apology) through my theatre company that performed at EdinburghI study Creative Writing in Lancaster University. I am an aspiring poet and editor. I attempt to explore various aspects of humanity, life and the world in my poetry. By doing so, I hope to inspire my readers to view themselves, their lives and the world they live in from a fresh angle. I am also very interested in communicating with other writers and helping them with their works.",
        thumbnail_image: "/pictures/team/book-thumbnails/the-crying-of-lot-49.webp",
        profile_image: `/pictures/team/member-images/peterBarrett.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const AikateriniRoka  = {
        name: "Aikaterini Roka",
        position: "Editor",
        links: [
            link("instagram", "https://www.instagram.com/katerinaroka_/"),
        ],
        description: "A graduate of the English language and literature department at the National and Kapodistrian University of Athens. I'm currently doing a master’s in sociolinguistics at Leiden University. I've worked as a book editor in Amsterdam editing novels and fiction books.",
        thumbnail_image: "/pictures/team/book-thumbnails/wurthering-heights.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const BeatrizdeCastroPerez  = {
        name: "Beatriz de Castro Perez",
        position: "Marketing Strategist",
        links: [
        ],
        description: "I am a final-year Economics and International Relations student at Lancaster University. I am passionate about the study of climate change in both economics and politics. My hobbies are reading, dancing, travelling and learning new languages.",
        thumbnail_image: "/pictures/team/book-thumbnails/normal-people-sally-rooney.webp",
        profile_image:  `/pictures/team/member-images/beatriz.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const ChrisMillis  = {
        name: "Chris Millis",
        position: "Chief Editor",
        links: [
            link("twitter", "https://twitter.com/MillisChris"),
            link("instagram", "https://www.instagram.com/cjmillis/"),
            link("linkedin", "https://www.linkedin.com/in/chris-millis-b8583b229"),
        ],
        description: "I’m a student from South London, currently undertaking an MA in English Literary Studies at Lancaster University in the North-West of England. Taking on this role has been a fantastic privilege helping to promote otherwise unheard voices. As a student looking for a career in publishing/editing, it has also allowed me to develop professional skills that I’m sure will prove invaluable over the coming years. I’ve loved working with the team, and look forward to reading and editing our next project!",
        thumbnail_image: "/pictures/team/book-thumbnails/atonement.webp",
        profile_image: `/pictures/team/member-images/chris.jpg`,
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const CristobalEchevarria  = {
        name: "Cristobal Echevarria",
        position: "Graphic Designer",
        links: [
            link("linkedin", "https://www.linkedin.com/in/cristobal-ech/"),
            link("website", "https://www.cristobalechevarria.com/")
        ],
        description: "I am a final-year Graphic Communication student at Loughborough University with a love for fiction and action novels. I am very passionate about motion graphics, design and music.",
        thumbnail_image: "/pictures/team/book-thumbnails/the-outsiders.webp",
        profile_image: `/pictures/team/member-images/cristobal.png`,
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const LauraMolloy  = {
        name: "Laura Molloy",
        position: "Editor",
        links: [
        ],
        description: "I’m a first-year English Literature student studying in Dublin. I’m one of the editors at Library Cats. My favourite genres are classics, poetry and romance. I love reading, writing and listening to music.",
        thumbnail_image: "/pictures/team/book-thumbnails/northanger-abbey.webp",
        profile_image: `/pictures/team/member-images/laura.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const MayaraZucheli  = {
        name: "Mayara Zucheli",
        position: "Graphic Designer",
        links: [

            link("instagram", "https://www.instagram.com/mayara.zucheli"),

        ],
        description: "I’m Mayara, a graphic designer with a deep love for cats, literature, and traveling. When I’m not busy bringing my artistic visions to life, I enjoy quiet moments curled up with my cats, Dom and Misha, and diving into the pages of a captivating book. Among the many treasures on my bookshelf, 4321 by Paul Auster reigns supreme. With a boundless curiosity and a passion for exploration, I embrace life’s adventures with open arms, always seeking inspiration in the world around me and, of course, in a good book.",
        thumbnail_image: "/pictures/team/book-thumbnails/4321.webp",
        profile_image: `/pictures/team/member-images/mayara.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const NishaPatel  = {
        name: "Nisha Patel",
        position: "Editor",
        links: [
        ],
        description: "She has a solid BA in Creative Writing and English Language. She completed the New Writing Festival at university, where acclaimed poet Abena Essah  mentored  her.  She  was  shortlisted  at  Granta.  Her  work  appears  in  The  Wells  Street Journal. She has been longlisted at Young Poets Network. Her other interests include nature and art. She enjoys drawing as her hobby.",
        thumbnail_image: "/pictures/team/book-thumbnails/a-christmas-carol.webp",
        profile_image:  `/pictures/team/member-images/nisha.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const RebeccaWeigler   = {
        name: "Rebecca Weigler",
        position: "Marketing Strategist",
        links: [
            link("linkedin", "https://www.linkedin.com/in/rebecca-weigler-30307924a"),
        ],
        description: "Hello,  my  name  is  Rebecca!  I  am  currently  studying  in  London  for  my  master's  degree  in Publishing, having recently graduated with a bachelor's degree in English. I love all things to do with books, art, travel and writing. When I am not working, I often read good books or with my Golden Retriever.",
        thumbnail_image: "/pictures/team/book-thumbnails/anne-of-green-gables.webp",
        profile_image:  `/pictures/team/member-images/rebecca.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const SukhpreetChana  = {
        name: "Sukhpreet Chana",
        position: "Editor",
        links: [
        ],
        description: "I am a book enthusiast, with a passion for reading crime, romance and psychological fiction novels. My hobbies and interest consist of writing short fiction novels and reading. I’m currently in the pursuit of expanding my knowledge and skills in the publishing industry/book world.",
        thumbnail_image: "/pictures/team/book-thumbnails/fifty-fifty.webp",
        profile_image:  `/pictures/team/member-images/sukhpreet.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const ZoriNencheva  = {
        name: "Zori Nencheva",
        position: "Editor",
        links: [
            link("linkedin", "http://linkedin.com/in/zori-nencheva"),
        ],
        description: "I’m Zori, a student studying English Literature, Spanish and History. I love to read and write, and being an editor for this project is exactly what I need to facilitate these passions!",
        thumbnail_image: "/pictures/team/book-thumbnails/normal-people-sally-rooney.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const BeatriceFeng  = {
        name: "Beatrice Feng",
        position: "Editor",
        links: [
        ],
        description: "I study Creative Writing in Lancaster University. I am an aspiring poet and editor. I attempt to explore various aspects of humanity, life and the world in my poetry. By doing so, I hope to inspire my readers to view themselves, their lives and the world they live in from a fresh angle. I am also very interested in communicating with other writers and helping them with their works.",
        thumbnail_image: "/pictures/team/book-thumbnails/collected-poems.webp",
        profile_image: `/pictures/team/member-images/beatrice.webp`,
        id: "beatrice-feng",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const KaiScotney  = {
        name: "Kai Scotney",
        position: "Editor",
        links: [
            link("linkedin", "https://www.linkedin.com/in/kai-scotney-323a41158/"),
        ],
        description: "Recently finished an MA in Modern and Contemporary Literature at the University of Manchester. A lover of dogs, indie rock, and Bristol Rovers F.C. A firm believer that there’s a story inside everyone waiting to be told.",
        thumbnail_image: "/pictures/team/book-thumbnails/on-beauty.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        id: "kai-scotney",
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const RajaKhan  = {
        name: "Raja Khan",
        position: "Legal Advisor",
        links: [
        ],
        description: "I would describe myself as a lawyer, entrepreneur and avid reader. In the words of Dolores Cannon, 'when we go someplace, we leave a part of our energy there and we influence more than we can ever imagine.'. Realising this makes me feel optimistic about the change that I can help generate in this world and it is with this in mind, I decided to make a change by joining STW.  I also like to play football, travel and design pottery in my free time",
        thumbnail_image: "/pictures/team/book-thumbnails/the-power-of-positive-thinking.webp",
        profile_image: `/pictures/team/member-images/raja.jpg`,
        id: "kai-scotney",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const IslaMacFarlane  = {
        name: "Isla MacFarlane",
        position: "Editor",
        links: [
            link("linkedin", "https://www.linkedin.com/in/isla-macfarlane-0b042613b/"),
        ],
        description: "I am a recent MSc Psychology graduate at the University of Glasgow. I am fascinated by the intersection between literature, linguistics and psychology. My hobbies include reading, music and film.",
        thumbnail_image: "/pictures/team/book-thumbnails/rebecca.webp",
        profile_image: `/pictures/team/member-images/isla.webp`,
        id: "isla-macfarlane",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const AlfonsoBuhigas  = {
        name: "Alfonso Buhigas",
        position: "Legal Advisor",
        links: [
            link("linkedin", "https://www.linkedin.com/in/alfonso-buhigas-calbacho-95a8b6224"),
        ],
        description: "I consider myself a hard-working, reliable, methodical person whose enthusiasm to learn and read are what make me the perfect teammate. I am an ambitious, open-minded, effective communicator who prefers to work in an organized environment, which permits creativity in order to grow.",
        thumbnail_image: "/pictures/team/book-thumbnails/and-then-there-were-none.webp",
        profile_image: `/pictures/team/member-images/alfonso.webp`,
        id: "alfonso-buihigas",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const VictoriaMarieSmith  = {
        name: "Victoria Marie Smith",
        position: "Editor",
        links: [
            link("linkedin", "www.linkedin.com/in/victoria-marie-smith-539ab8149"),
        ],
        description: "Originally from Hertfordshire, UK, Victoria currently resides in the north of the country in Manchester. Victoria is a keen YA fantasy writer, and her first novel, Your World Shall Be Mine, is forthcoming with publisher L R Price Publications in 2024. Eventually, she plans to make the series a trilogy, but for now she’s just happy hibernating with her cats and playing video games!",

        thumbnail_image: "/pictures/team/book-thumbnails/battle-royale.webp",
        profile_image: `/pictures/team/member-images/victoria.jpg`,
        id: "victoria-marie-smith",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const FionaBanham  = {
        name:  "Fiona Banham",
        position: "Editor",
        links: [
            link("linkedin", "www.linkedin.com/in/fiona-banham-1707891b7"),
        ],
        description: "Originally hailing from Manchester, I am a PhD student in Modern History at the University of St Andrews. I have a passion for reading and editing; books are my escape from the world when things get tough. When not reading, writing, or researching, you will either find me at a gig, running my accidental pet-sitting business, or enduring the trials and tribulations of being a Manchester United supporter.",

        thumbnail_image: "/pictures/team/book-thumbnails/alone-in-berlin.jpg",
        profile_image: `/pictures/team/member-images/fiona.JPG`,
        id: "fiona-banham",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const RebeccaThomas  = {
        name:  "Rebecca Thomas",
        position: "Editor",
        links: [
            link("instagram", "https://www.instagram.com/cheekanzoop"),
            link("linkedin", "https://www.linkedin.com/in/rebecca--thomas"),
        ],
        description: "Rebecca is an English native who has lived in the rainy north west almost all of her life. After graduating from Lancaster University with a BA Hons in Film and Cultural Studies, she has gone on to work as a content editor in jobs up and down the country, including the Liverpool Echo and Imperial War Museum, London. While she still edits as her day job, in her spare time she is a self-published author, gamer and avid film and TV watcher",

        thumbnail_image: "/pictures/team/book-thumbnails/every-day.jpeg",
        profile_image: `/pictures/team/member-images/rebecca-thomas.png`,
        id: "rebecca-thomas",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const MeganEllis  = {
        name:  "Megan Ellis",
        position: "Marketing Assistant",
        links: [
        ],
        description: "I am an MSc Marketing student at Cardiff University with a deep admiration of fantasy and sci-fi worlds! I enjoy exploring these worlds through my long love of video and tabletop games, novels, and performing arts.",

        thumbnail_image: "/pictures/team/book-thumbnails/dune.jpg",
        profile_image: `/pictures/team/member-images/megan.png`,
        id: "megan-ellis",
        refOpen: useRef(),
        refClosed: useRef(),
    }
    
    const MaddieTyler  = {
        name:  "Maddie Tyler",
        position: "Editor",
        links: [
            link("twitter", "https://twitter.com/madelinetylerr"),
            link("linkedin", "https://linkedin.com/in/maddietyler/"),
        ],
        description: "Hailing from the flatlands of East Anglia, I recently completed an MA in Global Literature and Culture from the University of York and currently work in academic publishing in Cambridge. I love reading, writing, and collecting shiny things, all while drinking copious amounts of tea that I’ve forgotten about and accidentally let go cold.",

        thumbnail_image: "/pictures/team/book-thumbnails/the-book-of-goose.jpg",
        profile_image: `/pictures/team/member-images/maddie.png`,
        id: "maddie-tyler",
        refOpen: useRef(),
        refClosed: useRef(),
    }
    
    const AndySalazar = {
        name:  "Andy Salazar",
        position: "Marketing Assistant",
        links: [
            link("instagram", "https://www.instagram.com/andy_slzr/?hl=en-gb"),
            link("linkedin", "https://www.linkedin.com/in/andrea-espinosa-salazar-a96a00207/?originalSubdomain=uk"),
        ],
        description: "My name is Andy and I am a recent graduate from the University of Manchester where I completed a Psychology degree. Fun fact about me: I have lived in 4 different countries (Ecuador, Spain, France and now the UK!)",

        thumbnail_image: "/pictures/team/book-thumbnails/a-room-of-ones-own.jpg",
        profile_image: `/pictures/team/member-images/andy.png`,
        id: "andy-salazar",
        refOpen: useRef(),
        refClosed: useRef(),
    }
    
    const DevoraMoleman = {
        name:  "Devora Moleman",
        position: "Marketing Assistant",
        links: [
            link("linkedin", "https://www.instagram.com/devoradraws/?hl=en"),
        ],
        description: "I am an artist currently working in education. I’m interested in Illustration and literature and how they intersect. I also have a slight obsession with The Sims.",

        thumbnail_image: "/pictures/team/book-thumbnails/northern-lights.jpg",
        profile_image: `/pictures/team/member-images/devora.jpg`,
        id: "devora-moleman",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const SamMorgan = {
        name:  "Sam Morgan",
        position: "Graphic Designer",
        links: [
            link("instagram", "https://www.instagram.com/_samannas/"),
            link("linkedin", "https://www.linkedin.com/in/samannas/"),
        ],
        description: "I’m a freelance creative specializing in graphic design and illustration with a background in digital marketing design. I have a love for books and publishing design, so I’m enthusiastic to work with our authors to materialize their passion projects. My favorite genre is fantasy, but I also love juicy autobiographies and semi-biographical stories.",

        thumbnail_image: "/pictures/team/book-thumbnails/stardust.jpg",
        profile_image: `/pictures/team/member-images/sam.jpg`,
        id: "sam-morgan",
        refOpen: useRef(),
        refClosed: useRef(),
    }

    const HelaJoshi = {
        name:  "Hela Joshi",
        position: "Graphic Designer",
        links: [
            link("instagram", "https://www.instagram.com/hela_joshi/"),
        ],
        description: "Graphic designer with a passion for creating fresh, vibrant designs, that reflect my simple, caring nature. I find joy in life’s simple pleasures, cherishing moments with loved ones and my six adorable fur babies. As a devoted dog mom, my heart is full of love and laughter, which often inspires my work. With a playful spirit and a love for creativity, I strive to bring happiness and beauty into the world through my designs.",

        thumbnail_image:  "/pictures/team/book-thumbnails/the-kite-runner.jpg", 
        profile_image:`/pictures/team/member-images/hela.jpg`,
        id: "hela-joshi",
        refOpen: useRef(),
        refClosed: useRef(),
    }


    const HannahHolmes = {
        name:  "Hannah Holmes",
        position: "Graphic Designer",
        links: [
            link("linkedin", "linkedin.com/in/hannahholmesgraphicdesign"),
        ],
        description: "I am a graphic designer from the North West of England. I am grateful to live in a place near beautiful scenery and nature. Where most people I meet are friendly and there is a strong sense of community. I am a social graphic designer who wants to make a difference in young people’s lives and create a brighter future. Since graduating, I have been working with some great charities and organisations to offer support wherever and whenever I can.",

        thumbnail_image:  "/pictures/team/book-thumbnails/magicians-nephew.jpg", 
        profile_image:`/pictures/team/member-images/hannah.jpg`,
        id: "hannah-holmes",
        refOpen: useRef(),
        refClosed: useRef(),
    }




    const [showFormerMembers, setShowFormerMembers] = React.useState(false)
    const handleClickShowFormerMembers = () => {
        setShowFormerMembers(!showFormerMembers)
    }


    return (
    <div className={style.team}>
        <div className = {style.team_container} >

            <div className = {style.team_title} >
                OUR TEAM
            </div>

        
            {renderTeamMemberItem(MarcosEchevarria, "left", length )} 

            {renderTeamMemberItem(BeatrizdeCastroPerez,"right", length)} 


                            
            {renderTeamMemberItem(ChrisMillis, "left",length )} 


            {renderTeamMemberItem(CristobalEchevarria,"right", length )} 



            {renderTeamMemberItem(MayaraZucheli,"left", length )} 


                            
            {renderTeamMemberItem(NishaPatel,"right",length )}


            
            {renderTeamMemberItem(SukhpreetChana,"left",length )} 
            

           
            {renderTeamMemberItem(BeatriceFeng,"right",length )} 



            {renderTeamMemberItem(RajaKhan,"left",length )} 

            {renderTeamMemberItem(IslaMacFarlane,"right",length )}

            {renderTeamMemberItem(AlfonsoBuhigas,"left", length )}
            
            {renderTeamMemberItem(VictoriaMarieSmith,"right",length )}

            {renderTeamMemberItem(FionaBanham,"left",length )}

            {renderTeamMemberItem(RebeccaThomas,"right",length )}

           
            
            {renderTeamMemberItem(MaddieTyler,"left",length )}

            {renderTeamMemberItem(AndySalazar,"right",length )}

            {renderTeamMemberItem(DevoraMoleman,"left",length )}

            {renderTeamMemberItem(SamMorgan,"right",length )}
            {renderTeamMemberItem(HelaJoshi,"left",length )}
            {renderTeamMemberItem(HannahHolmes,"right",length )}
           
        
            <div className={style.former_members_label} onClick={handleClickShowFormerMembers}>
                SHOW FORMER MEMBERS
            </div>
            {(showFormerMembers) && (
                <div onClick={handleClickShowFormerMembers}>
                    
                    {renderTeamMemberItem(KaiScotney,"left",length )} 
               
                    {renderTeamMemberItem(AikateriniRoka,"right",length )} 
            
                    {renderTeamMemberItem(PeterBarret,"left",length )} 
            
                    {renderTeamMemberItem(ZoriNencheva,"right", length )} 

                    {renderTeamMemberItem(RebeccaWeigler,"left", length )} 

                    {renderTeamMemberItem(LauraMolloy,"right",length )} 
                    {renderTeamMemberItem(MeganEllis,"left",length )}

                </div>
            )}
        </div>

            
           
    
    </div>
    );
}

export default Team;