// default imports
import React, { Component } from 'react';
import './Portfolio.css';

// component imports (testing)
import MarkdownPreviewer from './components/MarkdownPreviewer';
import QuoteGenerator from './components/QuoteGenerator';
import DrumMachine from './components/DrumMachine';

// material imports
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faPhp, faReact, faNpm, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

library.add(faHtml5, faCss3, faPhp, faDatabase, faNpm, faJs);

class Portfolio extends Component {

  render() {
    return (

      <div id="portfolio" >
        <Typography variant="display1" style={{ margin: '.25em 0' }}>Portfolio</Typography>
        <Typography variant="display1" style={{ fontSize: '1.5rem', margin: '1.75em 0 .25em 0' }}>Websites</Typography>
        <Paper style={{ padding: '.25em 0'}}>
          <Mockup 
            projectUrl={'https://cdmccauley.github.io/ups-rate-live/'} 
            projectTitle={'Ups Rate Live'}
            projectTech={[faReact, faHtml5, faCss3]} 
            Also uses H
            projectDescription={`See the most popular posts being upvoted on Reddit. Built with React
               using the Reddit API.`}
            laptopUri={'assets/urlLaptopCrop.PNG'} 
            tabletUri={'assets/urlTabletCrop.PNG'}
            phoneUri={'assets/urlPhoneCrop.PNG'} 
          />
          <Mockup 
            projectUrl={'https://tech-mccauley-ggg.herokuapp.com/'} 
            projectTitle={'Git Gud Games'}
            projectTech={[faPhp, faDatabase, faHtml5, faCss3]} 
            Also uses H
            projectDescription={`An online game store with registration, login/logout, games profile, 
              and purchase/download features. Uses Heroku for hosting and was written with PHP, MySQL, 
              HTML, CSS/Bootstrap.`}
            laptopUri={'assets/gggLaptopCrop.PNG'} 
            tabletUri={'assets/gggTabletCrop.PNG'}
            phoneUri={'assets/gggPhoneCrop.PNG'} 
          />
          <Mockup 
            projectUrl={'https://codepen.io/cdmccauley/full/pdXaGK/'} 
            projectTitle={'Grace Hopper'}
            projectTech={[faHtml5, faCss3]} 
            projectDescription={`A responsive single page profile written about Grace Hopper. 
              Hosted on codepen.io created with HTML/CSS.`}
            laptopUri={'assets/ghLaptopCrop.PNG'} 
            tabletUri={'assets/ghTabletCrop.PNG'}
            phoneUri={'assets/ghPhoneCrop.PNG'} 
          />
          <Mockup 
            projectUrl={'https://mccauley.tech/portfolio-content/easy-astronomy'} 
            projectTitle={'Easy Astronomy'}
            projectTech={[faHtml5, faCss3]} 
            projectDescription={`A responsive website project to provide information about easily 
              observable events in our solar system(currently incomplete). Written with HTML and CSS.`}
            laptopUri={'assets/eaLaptopCrop.PNG'} 
            tabletUri={'assets/eaTabletCrop.PNG'}
            phoneUri={'assets/eaPhoneCrop.PNG'} 
          />
        </Paper>



        <Typography variant="display1" style={{ fontSize: '1.5rem', margin: '2em 0 .25em 0' }}>Components</Typography>
        <Paper>
          <div style={{ margin: '.25em 13% 1em 13%' }}>
            <Typography variant="headline" style={{ color: '#88e234' }}>Markdown Previewer</Typography>
            <div>
              <FontAwesomeIcon icon={ faReact } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faNpm } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faJs } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faHtml5 } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faCss3 } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
            </div>
            <Typography variant="subheading" align={'justify'} style={{ marginBottom: '1em' }}>
              {`Written using React.js, Marked.js, JavaScript, JSX, and HTML/CSS this component enables a 
                user to enter GitHub flavored Markdown into a textbox to preview its output.`}
            </Typography>
          </div>
          <MarkdownPreviewer />
          <div style={{ margin: '.25em 13% 1em 13%' }}>
            <Typography variant="headline" style={{ color: '#88e234' }}>Quote Generator</Typography>
            <div>
              <FontAwesomeIcon icon={ faReact } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faJs } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faHtml5 } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faCss3 } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
            </div>
            <Typography variant="subheading" align={'justify'} style={{ marginBottom: '1em' }}>
              {`Written using React.js, JavaScript, JSX, and HTML/CSS this component pulls JSON from a 
                GitHub Gist that contains a famous quote along with its author. Includes a button 
                enabling users to view another quote or share the quote to Twitter.`}
            </Typography>
          </div>
          <QuoteGenerator />
          <div style={{ margin: '.25em 13% 1em 13%' }}>
            <Typography variant="headline" style={{ color: '#88e234' }}>Drum Machine</Typography>
            <div>
              <FontAwesomeIcon icon={ faReact } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faJs } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faHtml5 } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
              <FontAwesomeIcon icon={ faCss3 } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />
            </div>
            <Typography variant="subheading" align={'justify'} style={{ marginBottom: '1em' }}>
              {`Written using React.js, JavaScript, JSX, and HTML/CSS this component plays an audio 
                clip hosted on Amazon AWS when a button is pressed. Press the switch below to enable 
                the clips to be played using your keyboard.`}
            </Typography>
          </div>
          <DrumMachine />
        </Paper>
      </div>

    );
  }
}

const Mockup = (props) => {
  // deconstruct props for mockup images uri
  const { projectUrl, projectTitle, projectTech, projectDescription, laptopUri, tabletUri, phoneUri } = props;

  // creates an array of icon elements
  const iconBar = projectTech.map((techIcon) => {
    return <FontAwesomeIcon key={ techIcon.iconName } icon={ techIcon } style={{ color: '#5c9ccf', marginRight: '.25em', fontSize: '1.25em'}} />;
  });

  // divs create device frames to display screenshots of browsers displaying live sites
  return (
    <div>
      <a href={ projectUrl } target="_blank" rel="noopener noreferrer">
      <Typography style={{ 
        marginLeft: '14%', 
        marginRight: '14%',
        color: '#88e234' }} variant="headline">{ projectTitle }</Typography>

      <div style={{ 
          display: 'flex', 
          alignItems: 'flex-end', }}>

        {/* laptop frame */}
        <div style={{ 
          flexBasis: '70vw', 
          backgroundColor: 'black', 
          padding: '2vw 2vw 0 2vw', 
          marginLeft: '14%', 
          borderRadius: '1vw'}}>

          {/* laptop screen */}
          <img src={ laptopUri } style={{ width: '100%' }} alt={`${projectTitle} as displayed on a laptop`}/>

          {/* laptop keyboard */}
          <div className='keyboard' style={{ 
            backgroundColor: 'gray', 
            width: '111%', 
            height: '2.25vw', 
            marginTop: '1.5vw', 
            transform: 'translateX(-5%)', 
            borderRadius: '0 0 1.5vw 1.5vw' }}>

          </div>

        </div>

        {/* tablet frame */}
        <div style={{ 
          flexBasis: '20vw', 
          backgroundColor: 'black', 
          padding: '2vw', 
          transform: 'translateX(-50%)', 
          borderRadius: '1vw' }}>

          {/* tablet screen */}
          <img src={ tabletUri } style={{ width: '100%' }} alt={`${projectTitle} as displayed on a tablet`}/>

        </div>

        {/* phone frame */}
        <div style={{ 
          flexBasis: '10vw',
          backgroundColor: 'black', 
          padding: '1vw .4vw', 
          transform: 'translateX(-150%)', 
          borderRadius: '1vw'}}>

          {/* phone screen */}
          <img src={ phoneUri } style={{ width: '100%' }} alt={`${projectTitle} as displayed on a smartphone`} />
          
        </div>

      </div>
      </a>

      {/* icon bar */}
      <div style={{ margin: '.5em 0 0 13%' }}>{ iconBar }</div>

      <Typography variant="subheading" align={'justify'} style={{ margin: '0 13% 4vw 13%'}}>{ projectDescription }</Typography>

    </div>
  );
}

export default Portfolio;