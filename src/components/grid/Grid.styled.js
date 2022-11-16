import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin: 64px 20vw;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  .card {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
    .icon {
      background: linear-gradient(
        45deg,
        var(--primary),
        var(--secondary),
        var(--primary)
      );
      border-radius: var(--border_radius);
      height: 15vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: var(--primary);
    }
    p {
      color: var(--primary);
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 880px) {
    margin: 64px 10vw;
  }
  @media screen and (max-width: 760px) {
    margin: 24px;
    grid-template-columns: repeat(1, 1fr);
    .card {
      .icon {
        height: 40vh;
      }
    }
  }
`;
