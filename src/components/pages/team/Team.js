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

    const renderTeamMemberItem = (name, position,links,  description, thumbnail_image, profile_image, direction, length, refOpen, refClosed ) => {
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
                    <>
                    <div className={style.teamMemberItem_content_header} onClick = {() => handleClick(refOpen, refClosed)} ref ={refClosed}>
                        <div className={style.teamMember_name}>
                            {name}
                        </div>
                        <div className={style.teamMember_position}>
                            {position}
                        </div>
                    </div>

                    <div className={style.teamMember_links}>
                        {(links.twitter) &&  (
                        <a className = {style.link} href={links.twitter} target="_blank" rel="noopener noreferrer">
                            <img  className= {style.link_icon} src={"pictures/twitter.webp"} alt="Twitter"   />
                        </a>
                        )}
                        {(links.instagram) &&  (
                            <a className = {style.link}  href={links.instagram} target="_blank" rel="noopener noreferrer"><img  className= {style.link_icon} src={"pictures/insta.webp"} alt="Instagram"/></a>
                        )}
                        {(links.linkedin) &&  (
                            <a className = {style.link} href={links.linkedin} target="_blank" rel="noopener noreferrer"><img  className= {style.link_icon} src={"pictures/linkedin.webp"} alt="Linkedin"/></a>
                        )}
     
                    </div>
                    </>
                ) : (
                <>
                    <div className={style.teamMember_description} onClick = {() => handleClick(refOpen, refClosed)} ref ={refOpen}>
                        {description}
                    </div>
                    <div className={style.teamMember_links} style = {{display: 'inline-block', justifyItems: 'flex-end'}}>


                        {(links.twitter) &&  (
                            <div className={style.teamMember_link} style = {(direction === "right" )?  {justifyContent: "flex-end"}: {}}>
                                {direction === "right" ? (
                                    <>
                                        <a className = {style.link} href={links.twitter} target="_blank" rel="noopener noreferrer" style={{display:"flex", }}>
                                            <div className={style.teamMember_link_text}>
                                                Twitter
                                            </div>
                            
                                            <img  className= {style.link_icon} src={"pictures/twitter.webp"} alt="Twitter" style={{marginLeft: "0.5rem"}}/>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                       
                                       <a className = {style.link} href={links.twitter} target="_blank" rel="noopener noreferrer" style={{display:"flex"}}>
                                            <img  className= {style.link_icon} src={"pictures/twitter.webp"} alt="Twitter"/>
                                        
                                            <div className={style.teamMember_link_text}>
                                                Twitter
                                            </div>
                                        </a>
                                    </>
                                )}
                                
                            </div>
                        )}
                        {(links.instagram) &&  (
                            <div className={style.teamMember_link} style = {(direction === "right" )?  {justifyItems: "flex-end"}: {}} >
                                {direction === "right" ? (
                                    < >
                                        <a className = {style.link} href={links.instagram} target="_blank" rel="noopener noreferrer" style={{display:"flex", }}>

                                            <div className={style.teamMember_link_text}>
                                                Instagram
                                            </div>
                                    
                                            <img  className= {style.link_icon} src={"pictures/insta.webp"} alt="Instagram" style={{marginLeft: "0.5rem"}}/>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                       
                                       <a className = {style.link} href={links.instagram} target="_blank" rel="noopener noreferrer" style={{display:"flex"}}>
                                            <img  className= {style.link_icon} src={"pictures/insta.webp"} alt="Instagram"/>
                                      
                                            <div className={style.teamMember_link_text}>
                                                Instagram
                                            </div>
                                        </a>
                                    </>
                                )}
                                
                            </div>
                        )}
                        {(links.linkedin) &&  (
                            <div className={style.teamMember_link} style = {(direction === "right" )?  {justifyContent: "flex-end"}: {}}>
                                 {direction === "right" ? (
                                    < >
                                    <a className = {style.link} href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{display:"flex", }}>
                                        <div className={style.teamMember_link_text}>
                                            Linkedin
                                        </div>
                  
                                            <img  className= {style.link_icon} src={"pictures/linkedin.webp"} alt="Linkedin" style={{marginLeft: "0.5rem"}}/>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                       
                                        <a className = {style.link} href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{display:"flex"}}>
                                            <img  className= {style.link_icon} src={"pictures/linkedin.webp"} alt="Linkedin"/>
                                       
                                            <div className={style.teamMember_link_text}>
                                                Linkedin
                                            </div>
                                        </a>
                                    </>
                                )}
                               
                            </div>
                        )}
                    </div>
                </>
                )}
            </div>
            )
        }
        const handleClick = async (refOpen, refClosed) => {
            if (length === "short") {
                await setLength("long");
                refOpen.current.scrollIntoView( {behavior: "smooth", block: "start"})
            } else {
                await setLength("short");
                refClosed.current.scrollIntoView();
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

    const MarcosEchevarria = {
        name: "Marcos Echevarria",
        position: "Founder & CEO",
        links: {
            twitter: "https://twitter.com/marcoseche00",
            instagram: "https://www.instagram.com/marcoseche/",
            linkedin: "https://www.linkedin.com/in/marcos-e-76826712b/",
        },
        description: "I am an MSc student at the LSE, studying European Politics. I'm a bit of a book geek, but I also enjoy football, golf, chess, and movies, among other things. Here at Spread the Word, we cannot wait to hear from you and read what you have to say",
        thumbnail_image: "/pictures/team/book-thumbnails/bomarzo.webp",
        profile_image: `/pictures/team/member-images/marcos.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
        id: "marcos-echevarria",
    }

    const PeterBarret  = {
        name: " Peter Barrett",
        position: "Chief Editor",
        links: {
            twitter: "",
            instagram: "https://www.instagram.com/peterbarrett0",
            linkedin: "",
        },
        description: "Hi, My name is Peter! I am London-based playwright and founder of Fundamentals Theatre Company. I graduated from the University of Edinburgh in 2021 reading Philosophy and English Literature - during my time there I was co-founder and editor of the student-run Hebenon Literary Journal and produced, directed, and wrote my first play (The Apology) through my theatre company that performed at EdinburghI study Creative Writing in Lancaster University. I am an aspiring poet and editor. I attempt to explore various aspects of humanity, life and the world in my poetry. By doing so, I hope to inspire my readers to view themselves, their lives and the world they live in from a fresh angle. I am also very interested in communicating with other writers and helping them with their works.",
        thumbnail_image: "/pictures/team/book-thumbnails/the-crying-of-lot-49.webp",
        profile_image: `/pictures/team/member-images/peterBarrett.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }

    const AikateriniRoka  = {
        name: "Aikaterini Roka",
        position: "Editor",
        links: {
            twitter: "",
            instagram: "https://www.instagram.com/katerinaroka_/",
            linkedin: "",
        },
        description: "A graduate of the English language and literature department at the National and Kapodistrian University of Athens. I'm currently doing a master’s in sociolinguistics at Leiden University. I've worked as a book editor in Amsterdam editing novels and fiction books.",
        thumbnail_image: "/pictures/team/book-thumbnails/wurthering-heights.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }

    const BeatrizdeCastroPerez  = {
        name: "Beatriz de Castro Perez",
        position: "Marketing Strategist",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "",
        },
        description: "I am a final-year Economics and International Relations student at Lancaster University. I am passionate about the study of climate change in both economics and politics. My hobbies are reading, dancing, travelling and learning new languages.",
        thumbnail_image: "/pictures/team/book-thumbnails/normal-people-sally-rooney.webp",
        profile_image:  `/pictures/team/member-images/beatriz.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }

    const ChrisMillis  = {
        name: "Chris Millis",
        position: "Editor",
        links: {
            twitter: "https://twitter.com/MillisChris",
            instagram: "https://www.instagram.com/cjmillis/",
            linkedin: "https://www.linkedin.com/in/chris-millis-b8583b229",
        },
        description: "I’m a student from South London, currently undertaking an MA in English Literary Studies at Lancaster University in the North-West of England. Taking on this role has been a fantastic privilege helping to promote otherwise unheard voices. As a student looking for a career in publishing/editing, it has also allowed me to develop professional skills that I’m sure will prove invaluable over the coming years. I’ve loved working with the team, and look forward to reading and editing our next project!",
        thumbnail_image: "/pictures/team/book-thumbnails/atonement.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }

    const CristobalEchevarria  = {
        name: "Cristobal Echevarria",
        position: "Graphic Designer",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "",
        },
        description: "I am a third-year graphic communication and illustration student at Loughborough University. I am very passionate about branding, editorial design and animation. Website: cristobalechevarria.com1",
        thumbnail_image: "/pictures/team/book-thumbnails/the-outsiders.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }


    const LauraMolloy  = {
        name: "Laura Molloy",
        position: "Editor",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "",
        },
        description: "I’m a first-year English Literature student studying in Dublin. I’m one of the editors at Spread The Word. My favourite genres are classics, poetry and romance. I love reading, writing and listening to music.",
        thumbnail_image: "/pictures/team/book-thumbnails/northanger-abbey.webp",
        profile_image: `/pictures/team/member-images/laura.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }


    const MayaraZucheli  = {
        name: "Mayara Zucheli",
        position: "Graphic Designer",
        links: {
            twitter: "",
            instagram: "https://www.instagram.com/mayara.zucheli/",
            linkedin: "",
        },
        description: "I’m a designer with a bachelor’s in fine arts. I love books, travelling and cats.",
        thumbnail_image: "/pictures/team/book-thumbnails/4321.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }


    const NishaPatel  = {
        name: "Nisha Patel",
        position: "",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "",
        },
        description: "She has a solid BA in Creative Writing and English Language. She completed the New Writing Festival at university, where acclaimed poet Abena Essah  mentored  her.  She  was  shortlisted  at  Granta.  Her  work  appears  in  The  Wells  Street Journal. She has been longlisted at Young Poets Network. Her other interests include nature and art. She enjoys drawing as her hobby.",
        thumbnail_image: "/pictures/team/book-thumbnails/a-christmas-carol.webp",
        profile_image:  `/pictures/team/member-images/nisha.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }


    const RebeccaWeigler   = {
        name: "Rebecca Weigler",
        position: "Marketing Strategist",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/rebecca-weigler-30307924a",
        },
        description: "Hello,  my  name  is  Rebecca!  I  am  currently  studying  in  London  for  my  master's  degree  in Publishing, having recently graduated with a bachelor's degree in English. I love all things to do with books, art, travel and writing. When I am not working, I often read good books or with my Golden Retriever.",
        thumbnail_image: "/pictures/team/book-thumbnails/anne-of-green-gables.webp",
        profile_image:  `/pictures/team/member-images/rebecca.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }


    const SukhpreetChana  = {
        name: "Sukhpreet Chana",
        position: "Editor",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "",
        },
        description: "I am a book enthusiast, with a passion for reading crime, romance and psychological fiction novels. My hobbies and interest consist of writing short fiction novels and reading. I’m currently in the pursuit of expanding my knowledge and skills in the publishing industry/book world.",
        thumbnail_image: "/pictures/team/book-thumbnails/fifty-fifty.webp",
        profile_image:  `/pictures/team/member-images/sukhpreet.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }


    const ZoriNencheva  = {
        name: "Zori Nencheva",
        position: "Editor",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "http://linkedin.com/in/zori-nencheva",
        },
        description: "I’m Zori, a student studying English Literature, Spanish and History. I love to read and write, and being an editor for this project is exactly what I need to facilitate these passions!",
        thumbnail_image: "/pictures/team/book-thumbnails/normal-people-sally-rooney.webp",
        profile_image: `${process.env.REACT_APP_BACKEND_URL}files/authors/thumbnails/placeholder.webp`,
        refOpen: useRef(null),
        refClosed: useRef(null),
    }

    const BeatriceFeng  = {
        name: "Beatrice Feng",
        position: "",
        links: {
            twitter: "",
            instagram: "",
            linkedin: "",
        },
        description: "I study Creative Writing in Lancaster University. I am an aspiring poet and editor. I attempt to explore various aspects of humanity, life and the world in my poetry. By doing so, I hope to inspire my readers to view themselves, their lives and the world they live in from a fresh angle. I am also very interested in communicating with other writers and helping them with their works.",
        thumbnail_image: "/pictures/team/book-thumbnails/collected-poems.webp",
        profile_image: `/pictures/team/member-images/beatrice.webp`,
        id: "beatrice-feng",
        refOpen: useRef(null),
        refClosed: useRef(null),
    }



    return (
    <div className={style.team}>
        <div className = {style.team_container} >

            <div className = {style.team_title} >
                OUR TEAM
            </div>

        
                {renderTeamMemberItem(MarcosEchevarria.name, MarcosEchevarria.position,MarcosEchevarria.links, MarcosEchevarria.description, MarcosEchevarria.thumbnail_image, MarcosEchevarria.profile_image,"left", length, MarcosEchevarria.refOpen, MarcosEchevarria.refClosed)} 

                {renderTeamMemberItem(PeterBarret.name, PeterBarret.position,PeterBarret.links, PeterBarret.description, PeterBarret.thumbnail_image,PeterBarret.profile_image,"right",length, PeterBarret.refOpen, PeterBarret.refClosed)} 
                
                {renderTeamMemberItem(AikateriniRoka.name, AikateriniRoka.position,AikateriniRoka.links, AikateriniRoka.description, AikateriniRoka.thumbnail_image, AikateriniRoka.profile_image,"left",length, AikateriniRoka.refOpen, AikateriniRoka.refClosed)} 
                


                {renderTeamMemberItem(BeatrizdeCastroPerez.name, BeatrizdeCastroPerez.position, BeatrizdeCastroPerez.links, BeatrizdeCastroPerez.description, BeatrizdeCastroPerez.thumbnail_image , BeatrizdeCastroPerez.profile_image,"right", length, BeatrizdeCastroPerez.refOpen, BeatrizdeCastroPerez.refClosed)} 


                                
                {renderTeamMemberItem(ChrisMillis.name, ChrisMillis.position,ChrisMillis.links, ChrisMillis.description, ChrisMillis.thumbnail_image,ChrisMillis.profile_image, "left",length, ChrisMillis.refOpen, ChrisMillis.refClosed)} 


                {renderTeamMemberItem(CristobalEchevarria.name, CristobalEchevarria.position,CristobalEchevarria.links, CristobalEchevarria.description,CristobalEchevarria.thumbnail_image ,CristobalEchevarria.profile_image,"right", length, CristobalEchevarria.refOpen, CristobalEchevarria.refClosed)} 


                
                {renderTeamMemberItem(LauraMolloy.name, LauraMolloy.position,LauraMolloy.links, LauraMolloy.description,LauraMolloy.thumbnail_image,LauraMolloy.profile_image,"left",length, LauraMolloy.refOpen, LauraMolloy.refClosed)} 
                


                {renderTeamMemberItem(MayaraZucheli.name, MayaraZucheli.position, MayaraZucheli.links, MayaraZucheli.description, MayaraZucheli.thumbnail_image, MayaraZucheli.profile_image,"right", length, MayaraZucheli.refOpen, MayaraZucheli.refClosed)} 


                                
                {renderTeamMemberItem(NishaPatel.name, NishaPatel.position,NishaPatel.links, NishaPatel.description, NishaPatel.thumbnail_image ,NishaPatel.profile_image,"left",length, NishaPatel.refOpen, NishaPatel.refClosed)}






                {renderTeamMemberItem(RebeccaWeigler.name, RebeccaWeigler.position,RebeccaWeigler.links, RebeccaWeigler.description, RebeccaWeigler.thumbnail_image, RebeccaWeigler.profile_image,"right", length,  RebeccaWeigler.refOpen, RebeccaWeigler.refClosed)} 


                
                {renderTeamMemberItem(SukhpreetChana.name, SukhpreetChana.position,SukhpreetChana.links, SukhpreetChana.description, SukhpreetChana.thumbnail_image,SukhpreetChana.profile_image,"left",length, SukhpreetChana.refOpen, SukhpreetChana.refClosed)} 
                


                {renderTeamMemberItem(ZoriNencheva.name, ZoriNencheva.position, ZoriNencheva.links, ZoriNencheva.description, ZoriNencheva.thumbnail_image,ZoriNencheva.profile_image,"right", length, ZoriNencheva.refOpen, ZoriNencheva.refClosed)} 

                {renderTeamMemberItem(BeatriceFeng.name, BeatriceFeng.position,BeatriceFeng.links, BeatriceFeng.description, BeatriceFeng.thumbnail_image,BeatriceFeng.profile_image,"left",length, BeatriceFeng.refOpen, BeatriceFeng.refClosed)} 






            
           
    
        </div>
    </  div>
    );
}

export default Team;