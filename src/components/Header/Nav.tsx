import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
    return (
        <StyledNav>
            {/*<StyledAbsoluteLink href="https://www.huobimoon.com">*/}
            {/*    <TranslatedText translationId={112}>Home</TranslatedText>*/}
            {/*</StyledAbsoluteLink>*/}
            <StyledAbsoluteLink href="http://info.huobimoon.com">
                <TranslatedText translationId={262}>Analytics</TranslatedText>
            </StyledAbsoluteLink>
            {/*<StyledAbsoluteLink href="https://app.pippi.finance/staking">*/}
            {/*  <TranslatedText translationId={114}>Staking</TranslatedText>*/}
            {/*</StyledAbsoluteLink>*/}
            {/*<StyledAbsoluteLink href="https://app.pippi.finance/xpipi">*/}
            {/*  <TranslatedText translationId={132}>xPIPI Pools</TranslatedText>*/}
            {/*</StyledAbsoluteLink>*/}
            <StyledAbsoluteLink href="https://app.huobimoon.com/" className="active">
                <TranslatedText translationId={116}>Swap</TranslatedText>
            </StyledAbsoluteLink>
            {/*<StyledAbsoluteLink href="https://app.pippi.finance/nft">*/}
            {/*  <TranslatedText translationId={258}>NFT</TranslatedText>*/}
            {/*</StyledAbsoluteLink>*/}
            {/*<StyledAbsoluteLink href="https://app.pippi.finance/ido">*/}
            {/*  <TranslatedText translationId={264}>IDO</TranslatedText>*/}
            {/*</StyledAbsoluteLink>*/}
            {/*<StyledAbsoluteLink href="https://info.pippi.finance" target="_blank">*/}
            {/*  <TranslatedText translationId={262}>Analytics</TranslatedText>*/}
            {/*</StyledAbsoluteLink>*/}
            {/*<StyledAbsoluteLink href="https://voting.pippi.finance" target="_blank">*/}
            {/*  <TranslatedText translationId={284}>Voting</TranslatedText>*/}
            {/*</StyledAbsoluteLink>*/}
        </StyledNav>
    )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;
`

const StyledAbsoluteLink = styled.a`
  position: relative;
  color: rgb(127, 134, 143);
  margin-right: 24px;
  text-decoration: none;
  &:hover {
    color: ${({theme}) => theme.colors.primary}
  }
  @media (max-width: 400px) {
    margin-right: 24px;
  }
`
export default Nav
