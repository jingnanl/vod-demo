import { StepContentProps } from '@/app/page';
import { demo1_2Info, demo1Info, demo2Info, demo3Info, emptyInfo, parseXML } from '@/utils/xmlParser';
import { Box, CodeEditor, Container, Grid, Header, SpaceBetween } from '@cloudscape-design/components';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import 'ace-builds/css/ace.css';
import 'ace-builds/css/theme/dawn.css';
import 'ace-builds/css/theme/tomorrow_night_bright.css';

const ExtractKeyInfo = (props: StepContentProps) => {
  const { jobState, setJobState } = props;
  const [preferences, setPreferences] = useState<any>(undefined);
  const [ace, setAce] = useState<any>(undefined);

  useEffect(() => {
    const configAce = async () => {
      const ace = await import('ace-builds');
      ace.config.set('basePath', '/third-party/ace/')
      ace.config.set('useStrictCSP', true);
      setAce(ace);
    }

    configAce();
  }, []);

  useEffect(() => {
    let jobType = jobState.jobType;
    const xml = jobState.xml;

    if (xml?.includes('mp4') && xml?.includes('1770-1-di')) {
      jobType = 'demo1';
    } else if (xml?.includes('mp4') && xml?.includes('1770-2-di')) {
      jobType = 'demo1_2';
    } else if (xml?.includes('advanced_hls') && xml?.includes('1280x720')) {
      jobType = 'demo2';
    } else if (xml?.includes('advanced_hls') && !xml?.includes('1280x720')) {
      jobType = 'demo3';
    } else {
      jobType = '';
    }

    setJobState({
      ...jobState,
      jobType,
    });
  }, [jobState.xml]);

  return (
    <div>
      <Box variant="h2" margin={{ bottom: 'l' }}>Extract Media Convert Job Info</Box>
      <CodeEditor
        language="xml"
        value={jobState.xml ?? ''}
        preferences={preferences}
        onPreferencesChange={e => setPreferences(e.detail)}
        themes={{
          light: ['cloud_editor'],
          dark: ['cloud_editor_dark'],
        }}
        ace={ace}
        onChange={({ detail }) => {
          setJobState({
            ...jobState,
            xml: detail.value,
          });
        }}
      />
      <Box variant="h2" margin={{ vertical: 'l' }}>
        {parseXML(jobState.jobType)}
      </Box>
      <Script src="/third-party/ace/ace.min.js"/>
    </div>
  );
};

export default ExtractKeyInfo;
