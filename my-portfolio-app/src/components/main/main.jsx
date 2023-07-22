import { Centro, Div, Img, YoureLogo, Section, DivYou, P, Button, SectionDivYou, Pink, SectionPhrase, Phrase, Paragraph, SectionProject, SectionProjects, Cards, CardsProject, ParagraphProject, ButtonProjects,  } from "./style";
import LogoPerson from "./../../assets/logo-person.png";
import Youre from "./../../assets/youre.png";
import Home from "../Routes/Home/Home";
import Footer from "../footer/footer";

function Main () {
    return (
        <Centro>
            <Div>
                <Section>
                    <div>
                        <Img src={LogoPerson} alt="" />
                    </div>

                    <SectionDivYou>
                        <YoureLogo src={Youre} alt="" />
                        <DivYou>
                            <P> I can teach you the simple study skills you need to earn better grades + minimize the stress and overwhelm that comes with being a busy, working college student. </P>
                            <p> <b>Click the button below to download my</b> <Pink>Anti-Procrastination Guide For The College Woman Who is Brilliant And Tired of Failing </Pink> <b>Because She Can’t Get Herself To Study When She Said She Would.</b> </p>
                            <Button>GET YOURS HERE!</Button>
                        </DivYou>
                    </SectionDivYou>
                </Section>
            </Div>

            <SectionPhrase>
                <Phrase>
                    <Paragraph> <b>This is for the college woman who was told she wasn’t cut out.</b> You were born for this. We believe that <b>every college woman has the ability and power within her to become extraordinarily brilliant</b> regardless of her circumstances, background, past grades and failures.</Paragraph>

                    <Paragraph> <b>We understand what this degree represents.</b> The weight that it holds. The failure you’ve had to overcome. The people you’ve vowed to prove wrong. <b>We’re here to bare witness to that radiant confidence that you’ve earned.</b> We’re here to remind you that you’re smart enough, talented enough and worthy enough of academic success. </Paragraph>

                    <Paragraph> <b>Ready to conquer your classes, build your academic confidence and feel extraordinarily brilliant?</b> </Paragraph>
                </Phrase>
            </SectionPhrase>

            <SectionProject>
                <SectionProjects>
                    <div>
                        <ParagraphProject>Projects</ParagraphProject>
                    </div>

                    <CardsProject>
                        <Cards>
                            <p>oi</p>
                        </Cards>
                        
                        <Cards>
                            <p>oi</p>
                        </Cards>

                        <Cards>
                            <p>oi</p>
                        </Cards>
                    </CardsProject>

                    <div>
                        <ButtonProjects>Ver mais</ButtonProjects>
                    </div>
                </SectionProjects>
            </SectionProject>
            <Home></Home>
            <Footer></Footer>
        </Centro>
    )
}

export default Main;