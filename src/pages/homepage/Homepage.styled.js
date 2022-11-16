import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  .homepage {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: 22%;
    background-position: 20% 100%;
    .overlay {
      background: var(--overlay);
      height: 100vh;
      .hero {
        display: flex;
        flex-direction: column;
        gap: 5vh;
        align-items: center;
        padding-top: 20vh;
        color: var(--secondary);
        h2 {
          max-width: 30vw;
        }
        .options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            "one two"
            "one three"
            "four four";
          width: 30vw;
          height: 15vw;
          gap: 8px;
        }

        a {
          background: linear-gradient(
            45deg,
            var(--primary),
            var(--secondary),
            var(--primary)
          );
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          text-decoration: none;
          font-weight: bold;
        }
        a:nth-of-type(1) {
          grid-area: one;
        }
        a:nth-of-type(2) {
          grid-area: two;
        }
        a:nth-of-type(3) {
          grid-area: three;
        }
        a:nth-of-type(4) {
          grid-area: four;
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .homepage {
      background-size: 50%;
      background-position: 50% 100%;
      .overlay {
        .hero {
          h2 {
            max-width: 50vw;
          }
          .options {
            width: 50vw;
            height: 25vw;
          }
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    .homepage {
      .overlay {
        .hero {
          h2 {
            max-width: 70vw;
          }
          .options {
            width: 90vw;
            height: 30vw;
            a {
              padding: 5vh 0;
            }
          }
        }
      }
    }
  }
`;
