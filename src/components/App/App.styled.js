import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing.step * 5}px;
  padding-bottom: ${props => props.theme.spacing.step * 5}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding-top: ${props => props.theme.spacing.step * 10}px;
    padding-bottom: ${props => props.theme.spacing.step * 10}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding-top: ${props => props.theme.spacing.step * 20}px;
    padding-bottom: ${props => props.theme.spacing.step * 20}px;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: ${props => props.theme.spacing.step * 5}px;
  padding-right: ${props => props.theme.spacing.step * 5}px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
`;

export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  color: ${props => props.theme.colors.white};

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${props => props.theme.spacing.step * 5}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};

    margin-bottom: ${props => props.theme.spacing.step * 7}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.large};

    margin-bottom: ${props => props.theme.spacing.step * 10}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    margin-bottom: ${props => props.theme.spacing.step * 20}px;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${props => props.theme.spacing.step * 5}px;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};

  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};

  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
  }
`;
export const LinkBtn = styled(Link)`
  color: ${({ theme }) => theme.colors.white};

  letter-spacing: 0.06em;
  // border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.step * 1}px;
  margin-bottom: ${({ theme }) => theme.spacing.step * 15}px;
  margin-left: auto;
  padding: ${({ theme }) => theme.spacing.step * 1.5}px
    ${({ theme }) => theme.spacing.step * 2.5}px;
  transition: background-color ${({ theme }) => theme.animations.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
