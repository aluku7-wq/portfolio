import styled from "styled-components";

export const Container = styled.div`
  .project {
    display: flex;
    flex-direction: column;
    .projecthome {
      display: flex;
      padding: 64px;
      gap: 5vw;
      justify-content: center;
      align-items: center;
      .text {
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 5vh;
        color: var(--primary);

        .buttons {
          display: flex;
          gap: 32px;
          a {
            text-decoration: none;
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              45deg,
              var(--primary),
              var(--secondary),
              var(--primary)
            );
            border-radius: var(--border_radius);
            font-size: 14px;
            width: 100px;
            padding: 4px;
          }
        }
      }
      img {
        width: 30vw;
        border-radius: var(--border_radius);
        box-shadow: var(--box_shadow);
        height: fit-content;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .project {
      .projecthome {
        flex-direction: column-reverse;
        .text,
        img {
          width: 60vw;
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    .project {
      .projecthome {
        .text,
        img {
          width: 90vw;
        }
      }
    }
  }
`;
