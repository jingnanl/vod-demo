import { StepContentProps } from '@/app/page';
import { ValueWithLabel } from '@/utils/xmlParser';
import { ColumnLayout, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

const SubmitJob = (props: StepContentProps) => {
  const { jobState, setJobState } = props;

  return (
    <Container
      header={
        <Header variant="h2">
          Confirm Media Convert Job
        </Header>
      }
    >
      <ColumnLayout columns={2} variant="text-grid">
        <SpaceBetween direction="vertical" size="l">
          <ValueWithLabel label="S3 Bucket">{jobState.sourceBucket}</ValueWithLabel>
          <ValueWithLabel label="Souce File">{jobState.sourceFile}</ValueWithLabel>
        </SpaceBetween>
        <ValueWithLabel label="Job Template">{jobState.jobTemplate}</ValueWithLabel>
      </ColumnLayout>
    </Container>
  );
};

export default SubmitJob;
