import { H1, Section, Section1, Section2, Strong, P, DivSection1, Ancora } from "./StyleHome";
import Cards from "../../Cards/Cards";

function Home () {
    return (
        <Section>
            <Section1>
                <DivSection1>
                    <div>
                        <img src="" alt="" />
                        <H1>Hey, Im <Strong>Yuki</Strong>.</H1>
                        <H1>Im a <Strong>designer</Strong> working on cities and mobility.</H1>
                    </div>

                    <P>Currently a product designer at <Ancora href="">Uber</Ancora>.</P>
                </DivSection1>
            </Section1>
            
            <Section2>
               <Cards></Cards>
            </Section2>
        </Section>
    )
}

export default Home;