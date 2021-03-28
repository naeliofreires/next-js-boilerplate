import styled from 'styled-components';

export const Wrapper = styled.main`
  color: #fff;
  width: 100%;
  height: 100%;
  background-color: #06092b;

  padding: 3rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  /**
    get the min value between 30rem or 100%
   */
  width: min(30rem, 100%);
`;
