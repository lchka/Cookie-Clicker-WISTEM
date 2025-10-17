What this project is:
An incremental game built with HTML and JavaScript, developed for the Summer 2025 “Women in STEM” coding camp. The project is inspired by the popular game Cookie Clicker and designed for beginner coders.


Pointers on errors and small adjustments:
HEY GUYS!

These are just some pointers on what the students can have issues with, like a little debugger <3

1. If their cookie counter isn't updating, make sure you're correctly updating the counter.textContent in the cookie.addEventListener function after each click.

2. Check that the script.js and style.css files are properly linked to the index.html. If they aren’t, none of the JavaScript functions or CSS styles will apply.

3. Make sure you're using the correct syntax for CSS animations and transitions. If the cookie is not animating as expected, check for any typos or missing semicolons.

4. If the reset button isn't working, confirm that the resetBtn.addEventListener function is properly defined and that the count variable is being reset to 0.

5. If the hover effect on the cookie or reset button isn't working, check the CSS selectors (#cookie:hover and #resetBtn:hover) and ensure there are no conflicting styles.

6. If the fade-in animations for elements like the header or counter aren't visible, verify that the @keyframes fadeIn animation is correctly defined and applied to the respective elements.

7. If the background color transition isn't working, ensure that the transition property is defined in the body selector and that the animation is triggered correctly.

8. If the cookie image isn't loading, confirm that the src attribute in the <img> tag points to a valid URL or file path. USE CHROME 'copy image address' not link!!

9. For any unexpected behavior, check the console for errors. JavaScript errors will often provide clues about what went wrong.