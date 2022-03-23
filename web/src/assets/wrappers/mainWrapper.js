import styled from 'styled-components';

const mainWrapper = styled.main`
    .page {
        min-height: calc(100vh - 6rem);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        background-color: red;
        margin-top: 10rem
    }

    .container-main {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 30px;
    }

    .main-img {
    display: none;
    }
`

export default mainWrapper;