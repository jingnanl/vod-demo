import { StepContentProps } from '@/app/page';
import { parseXML } from '@/utils/xmlParser';
import { Box, Container, ExpandableSection, Header, Select, Textarea, Toggle } from '@cloudscape-design/components';
import React, { useEffect, useState } from 'react';

const templates = {
  default: [
    'H.264_mp4_720x480_Avc_0.9M_25fps_Rec.601_Aac_128K_48000_ITU_BS_1770_1',
    'H.264_mp4_720x480_Avc_0.9M_25fps_Rec.601_Aac_128K_48000',
    'H.264_mp4_720x576_Avc_1.1M_25fps_Rec.601_Aac_128K_48000_ITU_BS_1770_1',
    'H.264_mp4_720x576_Avc_1.1M_25fps_Rec.601_Aac_128K_48000',
    'H.264_mp4_1024x576_Avc_1.3M_25fps_Rec.601_Aac_128K_48000_ITU_BS_1770_1',
    'H.264_mp4_1024x576_Avc_1.3M_25fps_Rec.601_Aac_128K_48000',
    'H.264_mp4_1280x720_Avc_2.5M_25fps_Rec.709_Aac_128K_48000_ITU_BS_1770_1',
    'H.264_mp4_1280x720_Avc_2.5M_25fps_Rec.709_Aac_128K_48000',
    'H.264_mp4_high_1920x1080_Avc_6.5M_25fps_Rec.709_Aac_128K_48000_ITU_BS_1770_1',
    'H.264_mp4_high_1920x1080_Avc_6.5M_25fps_Rec.709_Aac_128K_48000',
    'H.264_mp4_high_3840x2160_Avc_6.5M_30fps_Rec.709_Aac_128K_48000_ITU_BS_1770_1',
    'H.264_mp4_high_3840x2160_Avc_6.5M_30fps_Rec.709_Aac_128K_48000',
    'H.264_hls_cbr_25fps_320x180_512x288_640x360_768x432_1280x720_1770_1',
    'H.264_hls_cbr_25fps_320x180_512x288_640x360_768x432_1770_1',
    'H.264_hls_cbr_25fps_320x180_512x288_1280x720_1770_1',
    'H.264_hls_cbr_25fps_512x288_640x360_768x432_1280x720_1770_1',
    'H.264_hls_cbr_30fps_320x180_512x288_640x360_768x432_1280x720_1770_1',
    'H.264_hls_cbr_30fps_320x180_512x288_640x360_768x432_1770_1',
    'H.264_hls_cbr_30fps_320x180_512x288_1280x720_1770_1',
    'H.264_hls_cbr_30fps_512x288_640x360_768x432_1280x720_1770_1',
    'H.264_dash_cbr_25fps_320x180_512x286_768x432_1280x720_1770_1',
    'H.264_dash_cbr_25fps_320x180_512x288_640x360_768x432_1280x720_1770_1',
    'H.264_dash_cbr_25fps_320x180_512x288_640x360_1770_1',
    'H.264_dash_cbr_30fps_320x180_512x286_768x432_1280x720_1770_1',
    'H.264_dash_cbr_30fps_320x180_512x288_640x360_768x432_1280x720_1770_1',
    'H.264_dash_cbr_30fps_320x180_512x288_640x360_1770_1',
  ],
  demo1: [
    'H.264_mp4_1024x576_Avc_1.3M_25fps_Rec.601_Aac_128K_48000',
  ],
  demo2: [
    'H.264_hls_cbr_30fps_320x180_512x288_640x360_768x432_1280x720_1770_1',
  ],
  demo3: [
    'H.264_hls_cbr_30fps_320x180_512x288_640x360_768x432_1280x720_1770_1',
    'H.264_hls_cbr_30fps_320x180_512x288_640x360_768x432_1770_1',
  ],
};

const templateOptions = (jobType: string, showSuggested: boolean) => {
  let optionLabels = templates.default;
  if (showSuggested) {
    optionLabels = templates[jobType] || templates.default;
  }

  return optionLabels.map(label => ({ label, value: label + '.json' }));
};

const JobTemplate = (props: StepContentProps) => {
  const { jobState, setJobState } = props;
  const [showSuggested, setShowSuggested] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    if (jobState.jobTemplate) {
      setSelectedTemplate({ label: jobState.jobTemplate, value: jobState.jobTemplate + '.json' });
    }
  }, []);

  useEffect(() => {
    const readFile = async (filename: string) => {
      try {
        const response = await fetch(`/templates/${filename}`);
        if (!response.ok) {
          throw new Error('Failed to fetch file');
        }
        const content = await response.text();
        setContent(content);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    };

    if (selectedTemplate) {
      setJobState({
        ...jobState,
        jobTemplate: selectedTemplate.label,
      });
      readFile(selectedTemplate.value);
    }
  }, [selectedTemplate]);

  return (
    <div>
      <Container
        header={
          <Header
            variant="h2"
            description="Select from preset job templates"
            actions={
              <Toggle
                onChange={({ detail }) => {
                  setShowSuggested(detail.checked);
                  setSelectedTemplate(null);
                  setContent('');
                  setJobState({ ...jobState, jobTemplate: undefined });
                }}
                checked={showSuggested}
              >
                Suggested templates only
              </Toggle>
            }
          >
            Job Template
          </Header>
        }
      >
        <ExpandableSection headerText="Job Info">
          {parseXML(jobState.jobType)}
        </ExpandableSection>
        <Box margin={{ top: 'l' }}>
          <Box variant="awsui-key-label" margin={{ vertical: 's' }}>Templates</Box>
          <Select
            selectedOption={selectedTemplate}
            onChange={({ detail }) =>
              setSelectedTemplate(detail.selectedOption)
            }
            options={templateOptions(jobState.jobType ?? '', showSuggested)}
          />
        </Box>
        {content &&
          <div style={{ marginTop: '20px' }}>
            <Textarea
              value={content}
              readOnly={true}
              rows={20}
            />
          </div>
        }
      </Container>
    </div>
  );
};

export default JobTemplate;
