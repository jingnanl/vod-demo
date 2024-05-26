'use client'

import ExtractKeyInfo from '@/components/wizard/ExtractKeyInfo';
import JobTemplate from '@/components/wizard/JobTemplate';
import SpecifySource from '@/components/wizard/SpecifySource';
import SubmitJob from '@/components/wizard/SubmitJob';
import { Link, Wizard } from '@cloudscape-design/components';
import { Dispatch, SetStateAction, useState } from 'react';

interface MediaConvertJobState {
  xml?: string;
  jobType?: string;
  jobTemplate?: string;
  sourceFile?: string;
  sourceBucket?: string;
}

export interface StepContentProps {
  jobState: MediaConvertJobState;
  setJobState:  Dispatch<SetStateAction<MediaConvertJobState>>;
}

const steps = [
  {
    title: 'Media info',
    description: 'Extract media info from the XML configuration file',
    stateKey: 'extract',
    StepContent: ExtractKeyInfo,
    isOptional: true,
  },
  {
    title: 'Job template',
    description: 'Choose from preset MediaConvert job templates based on the key info extracted from XML configuration',
    stateKey: 'jobTemplate',
    StepContent: JobTemplate,
  },
  {
    title: 'Source media',
    description: 'Specify the source media file name and S3 bucket',
    stateKey: 'specifySource',
    StepContent: SpecifySource,
  },
  {
    title: 'Confirm',
    stateKey: 'Confirm and submit MediaConvert job',
    StepContent: SubmitJob,
  },
];

const i18nStrings = {
  stepNumberLabel: (stepNumber: number) => `Step ${stepNumber}`,
  collapsedStepsLabel: (stepNumber: number, stepsCount: number) =>
    `Step ${stepNumber} of ${stepsCount}`,
  skipToButtonLabel: (step: any, stepNumber: number) => `Skip to ${step.title}`,
  navigationAriaLabel: 'Steps',
  cancelButton: 'Cancel',
  previousButton: 'Previous',
  nextButton: 'Next',
  submitButton: 'Submit Job',
  optional: 'optional',
};

export default function Home() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [jobState, setJobState] = useState<MediaConvertJobState>({});

  const wizardSteps = steps.map(({ title, description, stateKey, StepContent, isOptional }) => ({
    title,
    description,
    info: <Link variant="info">Info</Link>,
    content: (
      <StepContent jobState={jobState} setJobState={setJobState} />
    ),
    isOptional: !!isOptional,
  }));


  return (
    <Wizard
      steps={wizardSteps}
      activeStepIndex={activeStepIndex}
      i18nStrings={i18nStrings}
      onNavigate={({ detail }) => setActiveStepIndex(detail.requestedStepIndex)}
      allowSkipTo
      onCancel={() => {
        alert('cancel')
      }}
      onSubmit={() => {
        alert('submit')
      }}
    />
  );
}
