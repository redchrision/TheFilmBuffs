# TheFilmBuffs-Website
A website created with HTML / CSS / Bootstrap / JQuery

Introduction: What is the essential story being told by your site and what type of structure did you choose to implement.
The website is done for a fictitious club, The Film Buffs, which has as aim to gather together a community of cinephiles, particularly around classical cinema.

Every month the club is proposing a director which is placed in the spotlight, on the Director spotlight page. A top 3 film recommendations is being done as well. Also, one film per week is promoted on the Filmography page, with more detailed information about the film, a trailer and also a survey with reviews of members that have watched the film. The survey is sent via mail, so only if people who subscribe to the Newsletter have access to the voting.

The Film Buffs is welcoming members from all around the world, because its ultimate goal is to promote cinema. This is being made online, through this website, but also locally, with the help of the Bucharest Cultural Centre (a fictional place, with a fictional location in the Old Town of Bucharest - which is more of an area, not an actual address).

The Centre is helping The Film Buffs to organize from time to time events related to cinema, movie projections, debates around cinema topics. Any events are announced on the website, but as in this period there are no events happening (especially due to Covid-19), there is nothing planned, nor mentioned. Also, it provides the necessary administration for answering questions from the Contact Form and the hours / location listed on the Contact details belong in fact to the Centre, overall.

To become a member of The Film Buffs you just have to adhere to their values listed in the Club Values page and also to be passionate about cinema. It’s not a strong engagement and it has no profit endings, so there is no fee applied to members or some administrative registration needed.

The type of structure is the one for a newsletter for a club, which has an aim also to promote the club and offer information about The Film Buffs, its values and contact details. The novelty from the website is that every month in the Director spotlight there is a new director and also on the Filmography page every week the film analyzed changes.

State 3 things that have inspired you when creating your website
I was inspired by Francois Truffaut’s films and posters, which I believe add a great value to the website. The film posters used are making the pages look more interesting and add to the visuals. I tried to emphasize them by creating a carousel on the Filmography page and place them as poster cards, one next to the other, sliding. In general, the visuals given by the captions from Francois Truffaut’s movies are very strong. On the Director spotlight page, I used as a background photo a famous caption from Jules and Jim; I couldn’t think of a better photo to have in the background of the spotlight and it creates a nice atmosphere of joy and energy, with the film characters running.

I was also inspired by the picture present on the Contact us page, with the debate happening in the cinema hall. I see that it is entitled “Debate sobre Direitos Urbanos e Cinema” and that most likely is from an event where people were invited to discuss rights and cinema. It belongs to Direitos Urbanos, an organisation that is meant to address issues of the town of Recife. In any case, I used the image with the purpose to portrait The Film Buffs members at a club event, in the cinema hall provided by the Bucharest Cultural Centre. As the entire information is fictitious, I found it challenging initially to make a portrait of the club members and, as an image speaks a thousand words, the picture was a big help for me to embellish the narrative.

A fundamental inspiration for the way the website is built came from the work of Ray Villalobos, a full-stack design/development teacher and senior staff instructor. His work in teaching Bootstrap and responsiveness was extremely valuable for me and his style of coding was something influential for the success of my project.

State 3 ways in which your site is accessible.
alt attributes for the images present in the website. This ensures that alternative information for the image is being offered, if for some reason the user is unable to view it (if a screen reader is being used or due to slow connection, for ex.).

role, aria-value-now, aria-value-min, aria-value-max attributes were used in the construction of the progress bar from the Filmography page. They are offering alternative information for the way the bar works and the percentages it contains. This is ensuring accessibility for website visitors that are using screen readers, for ex.

The website is accessible for users with a compact mobile device, with a small screen. The presence of a hamburger menu instead of the navigation bar present in Desktop view ensures that these users can benefit from the same navigation experience, in a form adapted to the device they use.

State 3 ways in which you have considered usability in your site.
A navigation panel is present on every page, which highlights the page the user is viewing. Also, in the Director Spotlight part, there is a dropdown menu which has the August 2020 page (the one created for the website) and also a “July 2020 - Archived” page. The last one is disabled and was created with the purposes of building a dropdown menu and having more options listed. I also wrote that it’s “Archived”, so that the user knows that it’s not because of a problem on the website that it’s not working, it’s just not accessible anymore from the Navigation bar.

Breadcrumbs present on the Director Spotlight page. As there are two options present in the dropdown menu, the August 2020 page has breadcrumbs which lead back to the Home page.

Responsiveness was considered for all the pages. They are available in Desktop view and also in mobile view, offering an adequate user experience considering the device used to access the website. In mobile view, the pages are having a different format which is adapted to the screen size. Also, in the carousel from the Home page, I disabled the quotes in mobile view and left only the director names. This is efficient in mobile view, maintaining the carousel visible, with the director names and creating an effect which is giving the user a similar experience to Desktop view, but adapted.

State 3 things you had to learn/find out by yourself when creating your site, and describe how you did that.
I used Bootstrap to make the website responsive and build a significant part of the elements present of the website. I followed a course on how to use Bootstrap. I used its mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. For easy layout options, I used predefined classes, as well as mixins for generating semantic layouts. For example, the navigation bar is built using Bootstrap and also the carousel from the index Home page. The navigation is created with Navs and Navbar components. The carousel is built with Bootstrap interactive components.

In the Filmography page, I used JQuery lightSlider, which is a lightweight responsive content slider. I followed the documentation which was available on github for using its features and integrating them into the website. There are elements recommended by lightSlider present in the filmography.html, style.css and script.js files. Also, I added the lightslider.js file in the website folder.

jQuery was used particularly for the spotlight animation present on the Director spotlight page. I used mouse effects with mousemove() which make the spotlight move as the user is moving the mouse. Also, I used for the spotlight a customized gradient effect in CSS which was activated by the function updateSpotlight from script.js.

What aspect(s) of your work do you think worked well and why?
The style is coherent on all pages thanks to using the bootstrap CSS library. This enabled me to add a basic, uniform styling to the pages, which was boosted with CSS elements present in the style.css file.

The website is responsive thanks to using bootstrap and building it firstly for mobile devices and then for Desktop view. The features that bootstrap offers with the fluid grid system ensure usability for all pages, both in Desktop and mobile view.

The spotlight animation is working well on the Director Spotlight page, thanks to the JQuerry library and the way that I integrated it into the website.

The carousels from the index Home page and the Filmography page are working well, though are built differently. The first one is using Bootstrap interactive components, which I integrated in the html structure. The second one is built using JQuery lightSlider and this ensures that, once integrated in the elements of the website, it works well.

What aspect(s) of your work could be improved, and how might you do things differently another time?
I would add more animation to the website supporting elements on all the five pages. I added JavaScript on the Director spotlight and the Filmography page, for central elements: the spotlight and the carousel. However, in the future I would make use of more JavaScript and create more central effects on all pages.

I would add more content about the director and the film that is analyzed. Also, I would add more content on the Survey Reviews section, to make the scores be more relevant for a viewer. One option would be to complement the Survey with quotes from club members and their option about the film; another one would be to add more review criteria. JavaScript could be used here for adding animation to the scores, such that the progress bar is showing the percentage animated.

I could add some animation with JavaScript / CSS to the social media buttons, so that when the user is hovering the mouse over them, they are animated.

I would also like to add also that this was my first website that I built on my own (the Adventure park-themed one was a teamwork). I believe, therefore, that there are lots of things that could be improved, but I just have to discover them as I continue this journey into web development. As I gained more experience, the elements I built became better. For example, I first built the index - Home page and I thought that the carousel from the first page made with Bootstrap is really awesome. However, after creating the one from the Filmography page, I think it looks better than the first one.

What resources were used when creating your work?
R. Villalobos, Bootstrap 4 Essential Training“, 2018. [Online]. Available: https://github.com/planetoftheweb/bootstrap4 [Accessed: 19-Sept-2020]

Wikipedia, the free encyclopedia. [Online]. Available: https://en.wikipedia.org/wiki/Fran%C3%A7ois_Truffaut [Accessed: 19-Sept-2020]

Wikipedia, the free encyclopedia. [Online]. Available: https://en.wikipedia.org/wiki/The_400_Blows [Accessed: 19-Sept-2020]

Wikipedia, the free encyclopedia. [Online]. Available: https://en.wikipedia.org/wiki/Shoot_the_Piano_Player [Accessed: 19-Sept-2020]

The Criterion Collection. [Online]. Available: https://www.criterion.com/films/218-jules-and-jim [Accessed: 19-Sept-2020]

CC Search [Online]. Available: https://search.creativecommons.org/ [Accessed: 18-Sept 2020]

W3schools.com [Online]. Available: https://www.w3schools.com/howto/howto_css_responsive_form.asp [Accessed: 19-Sept-2020]

Font Awesome [Online] Available: https://fontawesome.com/

Divinector, “How to Design Responsive Footer with html css and Bootstrap | Footer Design html css”, 2019. [Online]. Available: https://www.youtube.com/watch?v=4jelwvPcS8w [Accessed: 19-Sept 2020]

Better Dev, “Radial Gradient Spotlight Effect On Mousemove | HTML CSS & Javascript Tutorial”, 2020. [Online]. Available: https://www.youtube.com/watch?v=x7onxhz4hp8&list=PLxWnfLOoHOJaDIec5R0cVa8hwfNg_mQD_&index=12&t=8s [Accessed: 19-Sept 2020]

Going-To Internet, “Responsive Product Slider Using HTML CSS and Javascript”, 2020. [Online]. Available: https://www.youtube.com/watch?v=drOgpionKpY&list=PLxWnfLOoHOJaDIec5R0cVa8hwfNg_mQD_&index=11&t=1s [Accessed: 19-Sept 2020]

JQuery lightSlider [Online]. Available: http://sachinchoolur.github.io/lightslider/index.html [Accessed: 19-Sept 2020]

Appendices
Site Map
Website Map
Wireframes
Index Wireframe
Index Wireframe
Director Spotlight Wireframe
Director Spotlight Wireframe
Filmography Wireframe
Filmography Wireframe
Club Values Wireframe
Club Values Wireframe
Contact Us Wireframe
Contact Us Wireframe
Mockups
Index Mockup - Desktop
Index Mockup - Desktop
Director Spotlight Mockup - Desktop
Director Spotlight Mockup - Desktop
Filmography Mockup - Desktop
Filmography Mockup - Desktop
Club Values Mockup - Desktop
Club Values Mockup - Desktop
Contact Us Mockup - Desktop
Contact Us Mockup - Desktop
Index Mockup - Mobile
Index Mockup - Mobile Index Mockup - Mobile with hamburger-menu expanded
Director Spotlight Mockup - Mobile
Director Spotlight Mockup - Mobile
Filmography Mockup - Mobile
Filmography Mockup - Mobile
Club Values Mockup - Mobile
Club Values Mockup - Mobile
Contact Us Mockup - Mobile
Contact Us Mockup - Mobile
