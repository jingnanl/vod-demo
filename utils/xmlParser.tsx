import { Box, ColumnLayout, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

export const ValueWithLabel = ({ label, children }) => (
  <div>
    <Box variant="awsui-key-label">{label}</Box>
    <div>{children}</div>
  </div>
);

export const emptyInfo = (
  <Container
    header={
      <Header
        variant="h2"
      >
        Job Info
      </Header>
    }
  >
    -
  </Container>
);

export const demo1Info = (
  <Container
    header={
      <Header
        variant="h2"
      >
        Job Info
      </Header>
    }
  >
    <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
    <ColumnLayout columns={2} variant="text-grid">
      <SpaceBetween size="s">
        <ValueWithLabel label="output">mp4</ValueWithLabel>
        <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
        <ValueWithLabel label="framerate">25</ValueWithLabel>
        <ValueWithLabel label="profile">main</ValueWithLabel>
      </SpaceBetween>
      <SpaceBetween size="s">
        <ValueWithLabel label="bitrate">1300k</ValueWithLabel>
        <ValueWithLabel label="size">1024 * 576</ValueWithLabel>
        <ValueWithLabel label="color_primaries">5</ValueWithLabel>
      </SpaceBetween>
    </ColumnLayout>
    <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
    <ColumnLayout columns={2} variant="text-grid">
      <SpaceBetween size="s">
        <ValueWithLabel label="audio_codec">libfaac</ValueWithLabel>
        <ValueWithLabel label="audio_bitrate">128k</ValueWithLabel>
      </SpaceBetween>
      <SpaceBetween size="s">
        <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
        <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
      </SpaceBetween>
    </ColumnLayout>
  </Container>
);

export const demo1_2Info = (
  <Container
    header={
      <Header
        variant="h2"
      >
        Job Info
      </Header>
    }
  >
    <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
    <ColumnLayout columns={2} variant="text-grid">
      <SpaceBetween size="s">
        <ValueWithLabel label="output">mp4</ValueWithLabel>
        <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
        <ValueWithLabel label="framerate">25</ValueWithLabel>
        <ValueWithLabel label="profile">main</ValueWithLabel>
      </SpaceBetween>
      <SpaceBetween size="s">
        <ValueWithLabel label="bitrate">1300k</ValueWithLabel>
        <ValueWithLabel label="size">1024 * 576</ValueWithLabel>
        <ValueWithLabel label="color_primaries">5</ValueWithLabel>
      </SpaceBetween>
    </ColumnLayout>
    <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
    <ColumnLayout columns={2} variant="text-grid">
      <SpaceBetween size="s">
        <ValueWithLabel label="audio_codec">libfaac</ValueWithLabel>
        <ValueWithLabel label="audio_bitrate">128k</ValueWithLabel>
      </SpaceBetween>
      <SpaceBetween size="s">
        <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
        <ValueWithLabel label="loudness_mode">1770-2-di</ValueWithLabel>
      </SpaceBetween>
    </ColumnLayout>
  </Container>
);

export const demo2Info = (
  <Container
    header={
      <Header variant="h2">
        Job Info
      </Header>
    }
  >
    <SpaceBetween size="m">
      <div>
        <Box variant="h3">Stream: 1</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">180k</ValueWithLabel>
            <ValueWithLabel label="size">320 * 180</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 2</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">270k</ValueWithLabel>
            <ValueWithLabel label="size">320 * 180</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 3</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">450k</ValueWithLabel>
            <ValueWithLabel label="size">512 * 288</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 4</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">675k</ValueWithLabel>
            <ValueWithLabel label="size">640 * 360</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 5</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">1080k</ValueWithLabel>
            <ValueWithLabel label="size">768 * 432</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 6</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">1080k</ValueWithLabel>
            <ValueWithLabel label="size">1280 * 720</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
    </SpaceBetween>
  </Container>
);

export const demo3Info = (
  <Container
    header={
      <Header variant="h2">
        Job Info
      </Header>
    }
  >
    <SpaceBetween size="m">
      <div>
        <Box variant="h3">Stream: 1</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">180k</ValueWithLabel>
            <ValueWithLabel label="size">320 * 180</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 2</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">270k</ValueWithLabel>
            <ValueWithLabel label="size">320 * 180</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 3</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">450k</ValueWithLabel>
            <ValueWithLabel label="size">512 * 288</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 4</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">675k</ValueWithLabel>
            <ValueWithLabel label="size">640 * 360</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
      <div>
        <Box variant="h3">Stream: 5</Box>
        <Box variant="h4" margin={{ vertical: 'm' }}>Video Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="output">advanced_hls</ValueWithLabel>
            <ValueWithLabel label="video_codec">libx264</ValueWithLabel>
            <ValueWithLabel label="framerate">30</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="profile">main</ValueWithLabel>
            <ValueWithLabel label="bitrate">1080k</ValueWithLabel>
            <ValueWithLabel label="size">768 * 432</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
        <Box variant="h4" margin={{ vertical: 'm' }}>Audio Params</Box>
        <ColumnLayout columns={2} variant="text-grid">
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_codec">dolby_aac</ValueWithLabel>
            <ValueWithLabel label="audio_bitrate">96k</ValueWithLabel>
          </SpaceBetween>
          <SpaceBetween size="s">
            <ValueWithLabel label="audio_sample_rate">48000</ValueWithLabel>
            <ValueWithLabel label="loudness_mode">1770-1-di</ValueWithLabel>
          </SpaceBetween>
        </ColumnLayout>
      </div>
    </SpaceBetween>
  </Container>
);

export const parseXML = (jobType: string | undefined) => {
  switch (jobType) {
    case 'demo1':
      return demo1Info;
    case 'demo1_2':
      return demo1_2Info;
    case 'demo2':
      return demo2Info;
    case 'demo3':
      return demo3Info;
    default:
      return emptyInfo;
  }
};
