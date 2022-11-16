import styled from "styled-components";

export const Container = styled.div`
  .projects {
    display: flex;
    flex-direction: column;
    overflow: none;
    .title {
      display: flex;
      padding: 64px 20vw;
      align-items: center;
      justify-content: center;
      gap: 64px;
      a {
        color: var(--primary);
        text-decoration: none;
        .icon {
          font-size: 30px;
        }
      }
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 32px 20vw;
      .card {
        text-decoration: none;
        color: var(--primary);
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: var(--primary);
        text-transform: capitalize;
        font-weight: bold;
        img {
          width: 100%;
          border-radius: var(--border_radius);
          box-shadow: var(--box_shadow);
        }
      }
    }
  }
  @media screen and (max-width: 880px) {
    .projects {
      .title {
        margin-top: 8vh;
        padding: 0 20vw;
      }
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media screen and (max-width: 760px) {
    .projects {
      .title {
        margin-top: 8vh;
        padding: 0 24px;
      }
      .grid {
        padding: 32px 24px;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
