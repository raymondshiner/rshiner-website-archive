import { StyledHashLink } from "components";
import styled from "styled-components";

const Logo = () => {
  return (
    <>
      <LogoNav>
        <div>RS</div>
      </LogoNav>
    </>
  );
};

export default Logo;

const LogoNav = styled(StyledHashLink).attrs((props) => ({
  scroll: null,
  to: "#top",
}))`
  position: relative;
  font-weight: 700;
  font-size: 1.55rem;
  letter-spacing: 5px;
  width: 50px;
  margin-right: 50px;
  transition: 0.6s;
  border: 2px solid ${(props) => props.theme.primary};
  padding: 5px;
  padding-right: 1px;
  z-index: 2;
`;
