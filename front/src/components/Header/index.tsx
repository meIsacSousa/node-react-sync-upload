import { HeaderBox, HeaderContainer, HeaderTextDefault, HeaderTextYellow } from "./style";

const Header = () => {
    return (
        <HeaderBox>
            <HeaderContainer>
                <HeaderTextDefault>Full</HeaderTextDefault><HeaderTextYellow>Cycle</HeaderTextYellow>
            </HeaderContainer>
        </HeaderBox>
    );
}


export default Header;