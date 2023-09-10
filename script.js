const courseTiles = document.querySelectorAll('.course-tile',);

courseTiles.forEach(tile => {
    tile.style.border = '1px solid #ddd';
    tile.style.padding = '20px';
    tile.style.margin = '10px';
    tile.style.textAlign = 'center';
    tile.style.backgroundColor = '#fff';
    tile.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
    tile.style.transition = 'transform 0.3s'; 
    tile.querySelector('a.cta-button').style.display = 'inline-block';
    tile.querySelector('a.cta-button').style.padding = '10px 20px';
    tile.querySelector('a.cta-button').style.backgroundColor = '#005a9e';
    tile.querySelector('a.cta-button').style.color = '#fff';
    tile.querySelector('a.cta-button').style.textDecoration = 'none';
    tile.querySelector('a.cta-button').style.fontWeight = 'bold';
    tile.querySelector('a.cta-button').style.borderRadius = '5px';
    tile.querySelector('a.cta-button').style.transition = 'background-color 0.3s';
});


courseTiles.forEach(tile => {
    tile.addEventListener('mouseover', () => {
        tile.style.transform = 'scale(1.05)';
    });

    tile.addEventListener('mouseout', () => {
        tile.style.transform = 'scale(1)';
    });
});

const aboutUsSection = document.querySelector('#about-us .about-us');


aboutUsSection.style.border = '1px solid #ddd';
aboutUsSection.style.padding = '20px';
aboutUsSection.style.margin = '10px';
aboutUsSection.style.textAlign = 'center';
aboutUsSection.style.backgroundColor = '#fff';
aboutUsSection.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
aboutUsSection.style.transition = 'transform 0.3s'; 


const aboutUsCTAButton = aboutUsSection.querySelector('a.cta-button');
aboutUsCTAButton.style.display = 'inline-block';
aboutUsCTAButton.style.padding = '10px 20px';
aboutUsCTAButton.style.backgroundColor = '#005a9e';
aboutUsCTAButton.style.color = '#fff';
aboutUsCTAButton.style.textDecoration = 'none';
aboutUsCTAButton.style.fontWeight = 'bold';
aboutUsCTAButton.style.borderRadius = '5px';
aboutUsCTAButton.style.transition = 'background-color 0.3s';


aboutUsSection.addEventListener('mouseover', () => {
    aboutUsSection.style.transform = 'scale(1.05)';
});

aboutUsSection.addEventListener('mouseout', () => {
    aboutUsSection.style.transform = 'scale(1)';
});
