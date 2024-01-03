import SourceSans3Regular from 'app/assets/fonts/SourceSans3-Regular.ttf'
import SourceSans3Medium from 'app/assets/fonts/SourceSans3-Medium.ttf'
import SourceSans3MediumItalic from 'app/assets/fonts/SourceSans3-MediumItalic.ttf'
import SourceSans3Light from 'app/assets/fonts/SourceSans3-Light.ttf'
import SourceSans3LightItalic from 'app/assets/fonts/SourceSans3-LightItalic.ttf'
import SourceSans3Italic from 'app/assets/fonts/SourceSans3-Italic.ttf'
import SourceSans3Bold from 'app/assets/fonts/SourceSans3-Bold.ttf'
import SourceSans3BoldItalic from 'app/assets/fonts/SourceSans3-BoldItalic.ttf'
import SourceSans3Black from 'app/assets/fonts/SourceSans3-Black.ttf'
import SourceSans3BlackItalic from 'app/assets/fonts/SourceSans3-BlackItalic.ttf'

const fonts = () => `
  @font-face {
    font-family: 'SourceSans3Regular';
    font-display: swap;
    src: url(${SourceSans3Regular}) format('opentype');
    font-style: normal;
    font-weight:400;
  }
  @font-face {
    font-family: 'SourceSans3Medium';
    font-display: swap;
    src: url(${SourceSans3Medium}) format('opentype');
    font-style: normal;
    font-weight:500;
  }
  @font-face {
    font-family: 'SourceSans3MediumItalic';
    font-display: swap;
    src: url(${SourceSans3MediumItalic}) format('opentype');
    font-style: italic;
    font-weight:500;
  }
  @font-face {
    font-family: 'SourceSans3Light';
    font-display: swap;
    src: url(${SourceSans3Light}) format('opentype');
    font-style: normal;
    font-weight:300;
  }
  @font-face {
    font-family: 'SourceSans3LightItalic';
    font-display: swap;
    src: url(${SourceSans3LightItalic}) format('opentype');
    font-style: italic;
    font-weight:300;
  }
  @font-face {
    font-family: 'SourceSans3Italic';
    font-display: swap;
    src: url(${SourceSans3Italic}) format('opentype');
    font-style: italic;
    font-weight:400;
  }
  @font-face {
    font-family: 'SourceSans3Bold';
    font-display: swap;
    src: url(${SourceSans3Bold}) format('opentype');
    font-style: normal;
    font-weight:700;
  }
  @font-face {
    font-family: 'SourceSans3BoldItalic';
    font-display: swap;
    src: url(${SourceSans3BoldItalic}) format('opentype');
    font-style: italic;
    font-weight:700;
  }
  @font-face {
    font-family: 'SourceSans3Black';
    font-display: swap;
    src: url(${SourceSans3Black}) format('opentype');
    font-style: normal;
    font-weight:900;
  }
  @font-face {
    font-family: 'SourceSans3BlackItalic';
    font-display: swap;
    src: url(${SourceSans3BlackItalic}) format('opentype');
    font-style: italic;
    font-weight:900;
  }
  `

export default fonts
