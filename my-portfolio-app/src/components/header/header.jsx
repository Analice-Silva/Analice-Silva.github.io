import {Cabecalho, Img}  from "./style";
import Nav from "./nav/nav";
import Logo from "./../../assets/sheRocksAtCollege-white-logo@2x.png";

function Header () {
 return (
    <div>
        <Cabecalho>
            <Img src={Logo} alt="" />
            <Nav></Nav>
        </Cabecalho>
    </div>
 )
}

export default Header;