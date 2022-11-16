import styled from "styled-components";

export const Container = styled.div`
  .contact {
    background: linear-gradient(
      to bottom,
      var(--light_grey) 70%,
      var(--secondary) 30%
    );
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 64px 10vw;

      .card {
        display: flex;
        flex-direction: column;
        gap: 64px;
        box-shadow: var(--box_shadow);
        background: var(--secondary);
        border-radius: var(--border_radius);
        justify-content: center;
        align-items: center;
        padding: 64px;
        color: var(--primary);
        .icon {
          font-size: 40px;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .contact {
      .grid {
        grid-template-columns: repeat(1, 1fr);
        .card {
          height: 30vh;
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    .contact {
      .grid {
        padding: 24px;
        grid-template-columns: repeat(1, 1fr);
        .card {
          height: 30vh;
          padding: 24px;
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    .contact {
      .grid {
        padding: 24px;
        grid-template-columns: repeat(1, 1fr);
        .card {
          height: 30vh;
        }
      }
    }
  }
`;
