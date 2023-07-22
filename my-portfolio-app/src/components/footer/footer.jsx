import { Div, IconWhats, Copy, IconColor, SectionCopy } from "./style";
import { AiOutlineWhatsApp, AiTwotoneHeart } from "react-icons/ai";

function Footer () {
    return (
        <Div>
            <IconWhats><AiOutlineWhatsApp></AiOutlineWhatsApp></IconWhats>
            <SectionCopy>
                <Copy> <div>© 2019 - 2022 | Designed & coded with</div>  <IconColor><AiTwotoneHeart></AiTwotoneHeart></IconColor>
                <div>by Analice Silva </div> </Copy>
            </SectionCopy>
        </Div>
    )
}

export default Footer;