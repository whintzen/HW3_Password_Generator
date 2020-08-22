# HW3_Password_Generator
# 03 JavaScript: Password Generator

Create an application that generates a random password based on the user selected criteria.  This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.  It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.
This Password generator has 
•	A text area to enter the Username
•	A Password text area with a clipboard button icon
•	A Password button

UserName:
This is no validation behind this form, but when the cursor hovers over this text area, it will display a message to ‘Please fill out this field’
Password Result Area:
This area will display the password according to the length you choose from the dropdown box.  The minimum length is 8 and the maximum is 128.  If the user tries to select a password less than 8, the interface will not allow that.  The password will consist of 
•	A lower case letter
•	An Upper Case letter
•	A number 
•	A symbol
There is also a clipboard icon that when clicked will provide a message that the password was copied to the clipboard.  As part of the process of clicking on the Password generate button, it generates the password, places it to the clipboard and then passes the results to the Password Results area.   

Password Generate Button:
This button responds to the number of check boxes clicked.  If one of the check boxes is unchecked and you click on the Password Button it will display a block message that tells
 “Password must contain one each of the following
A lowercase letter
A capital (uppercase) letter
A number
A special/symbol character  
      Once all boxes are checked, and you click on the Password Generate button, the process will loop over the length entered and the number of checked boxes to ensure that all 4 of them are TRUE (we defined the lower, upper, number and symbol as objects and then enclosed/wrapped them in an array because the TRUE/FALSE are Boolean and cannot be counted in a normal mathematical way), the random password is then generated, copied to the clipboard and then copied to the Password result area.   If you change the length of the password and click the generate password button, it will generate another random password that is that new length

Files included
    Index.html
    Index.js
    Styles.css
                                                                                                                                                                     
 (reference for clipboard: (https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f)
 (Character Code Set – http://www.net-comber.com/charset.html)

Images:
I have included pdf images of the interface in several steps of execution

Deployed Link:
https://tmbx9482.github.io/Project1_RUTSchool/index.html


 
