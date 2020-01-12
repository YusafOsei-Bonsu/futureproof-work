# React-TDD-Reassessment
This repo contains my reassessment of second assessment

This repo contains my second attempt at the second assessment.

First, I configured the navigational Routers on the App component.

Afterwards, I made a container component where the textbox has a onChange handler that updates the 
search term for every character updated. In addition, the Submit button is a Link element that possesses
an appearence of a blue button (styled with Bootstrap); after this button is pressed, it takes me to the 
'City' page.

I made the CityPage stateless component, which renders a City stateful component. CityPage passes the query parameter to a City instance. This City comp fetches the image and weather info from the unsplash source and open weather API, respectively. 

Finally, I did the tests (each passed). 
