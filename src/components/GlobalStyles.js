import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    /* colors */
    --primary: rgba(99,101,109);
    --secondary:#fff;
    --light_grey:#cccccc;
    --overlay:rgba(0,0,0,0.5);
    --box_shadow:rgba(17, 17, 26, 0.1) 0px 0px 16px;

    /* dimensions */
    --border_radius: 8px;
}
`;
