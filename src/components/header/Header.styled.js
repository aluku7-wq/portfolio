import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    .home_h1 {
      color: var(--secondary);
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
      img {
        width: 20px;
      }
    }
    .h1 {
      color: var(--primary);
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
      img {
        width: 20px;
      }
    }
  }
  .home_links {
    display: flex;
    gap: 24px;
    a {
      color: var(--secondary);
    }
  }
  .links {
    display: flex;
    gap: 24px;
    a {
      color: var(--primary);
    }
  }
  @media screen and (max-width: 760px) {
    padding: 32px;
    .home_links {
      display: flex;
      gap: 12px;
    }
    .links {
      gap: 12px;
    }
  }
`;
