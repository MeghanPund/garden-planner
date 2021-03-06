# garden-planner
A simple site for the planning and organization of a garden. The drag and drop pictures of plants allow users to visualize and organize their future garden and the option to join the Garden Club makes users feel like part of a community. In partial fulfillment of the Code Louisville May 2021 Front End Wed Development class.

Media Query funtionality:
1) In mobile layout, my nav menu shows large buttons, oriented in a vertical style (easier to click with thumbs) and on a tablet or larger, my nav menu buttons orient horizontally across the top of the screen. 
2) My garden drag and drop boxes flip from a vertical layout on small screens to a two-column layout for screens > 1024px.

Included CSS Features: 
1) A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, AND is opened and closed by clicking the “hamburger” icon, here displayed as an image of three parallel horizontal lines.
2) Use Flexbox to organize content areas based on mobile or desktop views. I used Flexbox in my media query for screens > 1024px to reorient the garden planner from a single vertical stack into two side-by-side columns.
3) Use “:nth-child” to style a series of elements on your page. I made the nav links within the hamburger menu alternate colors.

Included JavaScript Features:
1) Create a form and validate at least one field. I created a form to join the Garden Club and used JS to capture the input for an email field and a name field, check to see if the email contained "@" and "." (and throw an error message if it does not), to disallow the entry of an empty field for a name, and to display the inputted name in a welcome message at the top of the page. I also used JS to wipe the input fields clear after submission.
2) Show/hide one or more content areas on your site through clicking a button. I used JS to show/hide my navigation menu.
3) Allow the user to rearrange or move items by clicking and dragging an element on your site. My plant pictures may be drag and dropped into the garden and organized at the user's leisure. This was the most challenging feature I included, and I can see many ways to improve upon the drag and drop functionality.