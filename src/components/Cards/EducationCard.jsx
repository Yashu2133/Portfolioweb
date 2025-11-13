import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 650px;
    border-radius: 14px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    border: 1px solid #854CE6;
    background: ${({ theme }) => theme.card};
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 0px 25px rgba(0,0,0,0.25);
    }

    @media (max-width: 768px) {
        width: 320px;
        padding: 18px;
    }
`;

const CertificateImage = styled.img`
    width: 100%;
    max-width: 420px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);

    @media (max-width: 768px) {
        max-width: 260px;
    }
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
`;

const School = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
`;

const Date = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary + 99};
    text-align: center;
`;

const Desc = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.text_primary + 99};
    text-align: center;
    max-width: 500px;
`;

const LinkButton = styled.a`
    padding: 12px 20px;
    background: ${({ theme }) => theme.primary};
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    margin-top: 8px;

    &:hover {
        opacity: 0.85;
    }
`;

const EducationCard = ({ education }) => {
    return (
        <Card>
            <CertificateImage src={education.img} />

            <Title>{education.degree}</Title>
            <School>{education.school}</School>
            <Date>{education.date}</Date>

            <Desc>{education.desc}</Desc>

            <LinkButton href={education.link} target="_blank">
                View Certificate
            </LinkButton>
        </Card>
    )
}

export default EducationCard
