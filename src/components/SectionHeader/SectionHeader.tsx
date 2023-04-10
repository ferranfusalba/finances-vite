import styled from "styled-components";

const StyledSectionHeader = styled.h2`
    padding: 1rem;
`

const SectionHeader = ({title}: {title: string}) => {
    return (
        <StyledSectionHeader>{title}</StyledSectionHeader>
    )
}

export default SectionHeader