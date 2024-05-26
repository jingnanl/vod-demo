import { StepContentProps } from '@/app/page';
import { Container, FormField, Header, Input, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

const SpecifySource = (props: StepContentProps) => {
  const { jobState, setJobState } = props;

  return (
    <Container
      header={
        <Header variant="h2">
          Specify Source Media
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="l">
        <FormField label="S3 Bucket">
          <Input
            value={jobState.sourceBucket ?? ''}
            onChange={({ detail }) => setJobState({ ...jobState, sourceBucket: detail.value })}
          />
        </FormField>
        <FormField label="File Path ">
          <Input
            value={jobState.sourceFile ?? ''}
            onChange={({ detail }) => setJobState({ ...jobState, sourceFile: detail.value })}
          />
        </FormField>
      </SpaceBetween>
    </Container>
  );
};

export default SpecifySource;
