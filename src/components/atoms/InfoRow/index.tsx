import styled from '@emotion/native';
import React from 'react';

type InfoRowProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
  testID?: string;
};

const InfoRow = ({label, value, icon, testID}: InfoRowProps) => (
  <Row testID={testID}>
    <LabelWrapper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Label>{label}</Label>
    </LabelWrapper>
    <Value>{value}</Value>
  </Row>
);

export default InfoRow;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 6px;
`;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: ${({theme}) => theme.fontSizes.xl};
  text-align: left;
`;

const Value = styled.Text`
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: ${({theme}) => theme.fontWeights.bold};
`;

const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: ${({theme}) => theme.spacing(1)}px;
`;

const LabelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
