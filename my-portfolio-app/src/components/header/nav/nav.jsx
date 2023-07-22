import {List,  Home, An } from "./style";

function Nav () {
    return (
        <div>
            <nav>
                <List>
                    <Home href="">Home</Home>
                    <An href="">About</An>
                    <An href="">Contact</An>
                    <An href="">GitHub</An>
                </List>
            </nav>
        </div>
    )
}

export default Nav;