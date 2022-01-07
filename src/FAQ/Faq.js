import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Faqs from './Faqs';
//import faqs from "./faqs";
export default function Faq() {
    const faqs=[{
        id:1,
        title:"System Requirements ?",
        content:`Online learning uses large amounts of data. 
        That data must have a robust internet connection to properly receive and transmit data to and from the server. 
        Loss of WIFI or wired connection will result in improper grade reporting and course location settings.

        Our courses are delivered in Adobe Flash and HTML 5.
         Older computer software operating systems may not use HTML 5 
         and Apple products do not allow Adobe Flash to be installed.
        
        PC or Apple Based DESKTOP Computer is REQUIRED
        
        4GB Memory
        
        50GB available hard drive space
        
        Wired Internet connection with at least a 10Mps download and 0.7 MPS upload speed.
        
        Using a computer without the proper configuration or network capacity, you may be required to take exams or lessons again to record a proper grade, BEFORE a certificate can be issued.`
        },
        {
            id:2,
            title:`I'm taking a quiz at the end of a lesson and while I've passed the quiz with a 70% or better, the grades are not being recorded by the system.
             How do I solve this issue?`,
            content:`Web browsing on your computer is designed to be a smooth and enjoyable experience, and not one cluttered by annoying ads, which can take up valuable screen space, slow down webpage loading times, and eat up valuable bandwidth. That's why browsers include native support for third-party content blockers.

            Content blockers prevent ads like popups and banners from loading on websites you visit, and may also disable cookies, beacons, and the like to prevent online tracking and protect your privacy. Occasionally, however, they may unintentionally block a page element that you need access to, like a web form, for example.
            
            If you suspect that a content blocker you installed is disabling a useful webpage element, or you just want to temporarily disable all blocking in your current browsing session, here's how to turn it off.
            
            In Safari: Go to Settings for the Safari Browser.
            
            Launch Safari on your iOS device and navigate to the site in question.
            Go to Settings in Mac Book or tap the "aA" icon in the top-left corner of the screen to reveal the Website View menu.
            Tap Turn Off Content Blockers.
            In Mozilla Firefox:
            
            Open Firefox.
            Load the site that you want to disable from Content Blocking.
            Click the Shield button next to the URL in the address bar.
            Click the Turn off Blocking for This Site button.
            In Microsoft Edge Browser
            How to disable Content Blocking or SmartScreen Filter in Microsoft Edge.
            Open Microsoft Edge.
            Click the menu (...) button in the top-right corner.
            Click on Settings .
            Click the "Site Permissions" link.
            Allow Cookies, JavaScript, Adobe Flash, Images, Pop-up and Redirects, PDF documents and Protected content.
            Additional Steps:
            Click the menu (...) button in the top-right corner.
            Click on Settings .
            Select: Privacy and services.
            Turn off Tracking Protection with the toggle switch above and right of the Strict Box.
            You can also keep the tracking protection on and allow Exception by adding www.safetyprotc.com to the Exceptions List.
            In Google Chrome:
            You can change your settings to allow BLOCKED CONTENT on our site.
            To the left of the web address, click Lock Lock or Info Info.
            Click the Site Settings
            You will see a Permissions page appear for https://www.safetyprotc.com.
            Select "Allow" foe Notifications, JavaScript, Flash, Images, Popup and Redirects, Ads and Insecure Content.
            Close the settin`
            },
            {
                id:3,
                title:`I purchased a course by mistake and would like a refund. How do I get one?
                `,
                content:`If you DID NOT start your training we normally issue a 100% refund, if reported with 14 days of purchase. If you started training and progressed to LESS THAN 50% completion, then a 50% refund is normally issued.
                 If you started training and you completed MORE THAN 50% then NO REFUND WILL BE ISSUED.                `
                },
                {
                    id:4,
                    title:`I've tried to login and I keep getting a "Site is down for maintenance"
                     message or the site is not displaying the pages I'm accustomed to. How do I fix this?                    `,
                    content:`These errors are most often caused by outdated website cache. The "Cache' are files and pages stored on your computer to reduce the amount of data transferred during use. Deleting the "Cache" will tell your computer to look for new pages and files and therefore download the latest file from the server.

                    Select "Settings" or "Options" from your browser menu and type "Cache" into the displayed search box. There are many types of cache. ONLY CLEAR WEB CONTENT (Mozilla Firefox) OR CACHED IMAGES AND FILES (Google Chrome). DO NOT DELETE OTHER CACHED ITEMS. THIS WILL NOT DAMAGE YOUR COMPUTER BUT WILL CAUSED SAVED DATA LIKE PASSWORDS TO BE DELETED`
                    },
                    {
                        id:5,
                        title:`I receive a error message when the player is running saying my network
                         speed is too slow to operate the system. How do I solve this issue?                        `,
                        content:`Online training is inherently data intense. Our servers are capable of large data transfers, 
                        but corporate or home networks are much less robust. While most networks have a set speed, there are many factors that effect the speed to your machine. Example: If your network has 10Mps download and 0.6 upload (minimum required) , this would be enough to operate the training system. However, if others are using the same network system resources at the same time you are training,
                         they may interfere with your download,
                         but most importantly your upload of data to the server.
                        When an Error Message appears while the course player is in operation indicating a slow network connection, STOP TRAINING and login to a more robust, faster internet connection or the progress made in the lessons will not be recorded properly in the grade reporting system. A desktop wired computer will provide the best educational experience and technical reporting of your training as required by the FAA.
                        If network speed is substantial ANTI-VIRUS software could be the problem. Disable your anti-virus software and/or allow our system through your firewall.`
                        },
                        {
                            id:6,
                            title:`I'm taking a lesson and there is no way to advance the program. 
                            I cannot see the next/previous buttons or the player controls, How is this resolved?`,
                            content:`This situation occurs when the screen zoom
                             is greater than 100%. Reducing the screen zoom to 100% or less will shrink the player so that the entire player will be visible. Additionally, 
                            if after the zoom issue is resolved the issue persists, the player window should be maximized.`
                            },
        
                            {
                                id:7,
                                title:`I successfully login and click the "My Course" button as soon as I log in and BEFORE then main page completely loads.
                                 The system then indicates I'm not logged in and I don't see my DashBoard/Course Overview Page?`,
                                content:`Clicking the "My Courses" button BEFORE the main page loads does not give the system time to log you in to the course delivery section of the website. Clicking the "Backspace" button and returning to the Main Page, you will be logged in 
                                again. Wait for the main page to load , then click the My Courses button and resume your training.`
                                },
                                {
                                    id:8,
                                    title:`I've logged out and when I log back in I get a "WARNING" message. How do I solve this problem.`,

                                    content:`First determine if you are using Internet Explorer 11. If so, revert to version 10 or use Google Chrome to interface with our Learning Management System A short time ago we installed a new server. This required a IP address change. Systems cache files, pages and images as well as cookies and save browsing history. These saved pages are served to you first, rather than going to the server to get
                                     a new file. The system sees the request but cannot determine where it should send it.
                                    To remedy this issue delete images, files and browsing history. DO NOT check the passwords, auto fill-in pages or other items you want to save. 
                                    Select the "Forgot You Password?" link. Enter your email address, receive your verification code and make a new password. Example: Tcpwm28%`
                                },
                                {
                                    id:9,
                                    title:`How do I change my name, email, password and/or profile contact information?`,
                                    content:`When on the site main page ( Home Page), 
                                    select the "Change Password" link at the top left of
                                     the page to edit your Name, User Name, Password or Email Address. 
                                     To edit other profile fields, select the "Edit Profile" button 
                                     above the Navigation Bar, then select the My Profile Settings
                                      link in the Administration Block, then select the Edit Profile 
                                      link to be directed to the complete profile edit page `
                                },
                                {
                                    id:10,
                                    title:`When I click the My Courses button, 
                                    the Course Overview page indicate an error reading database. How do I fix this?`,
                                    content:`Select the "Edit Profile" button above the Navigation Bar, then select the My Profile
                                     Settings link in the Administration Block, then select the Edit Profile link to be directed to the
                                      complete profile edit page. Completely fill in the Contact Information block and click the Submit button.
                                       Click the
                                     "My Courses" button and the database error will have been removed and your course will be visible.`
                                },
                                {
                                    id:11,
                                    title:`How do I change my profile information?`,
                                    content:`When on the site main page, select the
                                     My Profile link at the top left of the page to edit your Name, User Name, Password or Email Address. To edit other profile fields, select the My Courses button at the top right of the Navigation Bar, then select the My Profile Settings link in the Administration Block,
                                     then select the Edit Profile link to be directed to the complete profile edit page.`
                                },
                                {
                                    id:12,
                                    title:`How do I make another attempt at a quiz or final assessment?`,
                                    content:`When a score on a quiz or assessment does not meet minimum criteria,
                                     close out the current attempt and restart the lesson. In the Course Structure Page where the 
                                     Enter Button is there is a box to check to Start another attempt.
                                     You can then either retake the lesson or scroll directly to the quiz assessment and begin.`
                                },
                                {
                                    id:13,
                                    title:`What do I do if the course player does not appear
                                     after clicking the lesson hyperlink?`,
                                    content:`If when a lesson hyperlink is clicked,
                                     a pop-up window with the course player does not appear, verify pop-ups are allowed. Turn off all toolbars that may have pop-up blockers such a Google, Yahoo toolbars. This is accomplished by right clicking on the top of the open window and unchecking any installed toolbars.

                                    For Internet Explorer: Start by clicking tools, then hover over 
                                    pop-up blocker, then click pop-up blocker settings. A new dialogue box will open. Add online.safetyprotc.com to the allowed sites box and set the blocking level to "Low Allow Pop-up from secured sites".
                                    
                                    For Google Chrome: Start by clicking the " Customize and control Google Chrome" button on the right side of the URL address. Click Settings and a new tab will open. Select "Show advanced settings" at the bottom of the page. Under Privacy, select "Content Settings", a pop-up window will appear. Scroll down to Pop-ups Select the radio button labeled " Do not allow any site to show pop-ups". Select "Manage exceptions"
                                    and add online.safetyprotc.com to the text entry box and click done.`
                                }
                                ];
    console.log(faqs);
    return (
        <div>
            <Header></Header>
            <Faqs data={faqs}></Faqs>
            <Footer></Footer>
        </div>
    )
}
