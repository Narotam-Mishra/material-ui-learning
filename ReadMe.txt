
# React Material UI (Codevolution)

# MUI Offical Docs - https://mui.com/material-ui/getting-started/installation/

## Lec 1 - Introduction (3:57)

Q. What is Material UI?
# It is a UI component library which provides us with components to build awesome user interface in quick time.

# It is implementation of Google's material design specification.

# Angular ---> Angular Material
# React ---> Material UI
# Vue ---> Vuetify

# Topics :-

# Install MUI in a react application
# Typography
# Components 
   a). Inputs/ Form controls
   b). Layout
   c). Navigation
   d). Data display and feedback
   e). MUI Lab 

# MUI Customization

## Lec 2 - Getting Started (4:03)

# mui/material is the core material library which provides us with ready-to-use components,

# @emotion/react - it is a library designed for writing CSS styles with JavaScript and it is the default styling solution used with version 5 of MUI

## Lec 3 - Typography (9:00)

# Typography deals with the style and appearance of text on the website.

# If the website has text content with way too many styles or font sizes it sort of spoils the UI. To address this concern MUI provides typography levels. Each level has definite font size, font weight and line height.

# There are 13 different variations of Typography component.

# body1 and body2 are rendered as paragraph HTML elements.

# We can find default theme on MUI Docx under Customization.

#In Typography, we can change the semantic element using the component 'prop'. Suppose we wanted to use h4 tag as heading element in every page, however we want the underlying html tag to be h1 and not h4 for that we can specify component like below

<Typography variant='h4' component='h1'>h4 Heading</Typography>

# gutterBottom used to give margin botton to the required element.

## Lec 4 - Button (14:03)

# MUI Buttons are basically native button or anchor elements enchanced with material design.

# To make use of MUI Buttons we need to import button component 

# Button component has three variants that we can use.

1). # Text variant is typically used when we have to grab less attention in the UI. Example - In a card footer or confirmation pop up. 

2). # contained variant is used when we have to grab user's attention and is used for primary actions in our application. Example - Login and Register button.

3). # outlined variant is sort of in between text and contained in terms of grabbing user's attention. they can be used for secondary actions in our application. For example - cancel or go back buttons.

# When we inspect these buttons in Dev tool then we can see the these three elements are button elements.

# We can also use 'href' attribute with the buttons. In such case the button becomes a link and the underlying html is now an anchor element.

# In MUI, we have predefined palette for colors (link - https://mui.com/material-ui/customization/palette/)

# For large or smaller buttons we can use the size prop.

# display is equal to 'block' is important as display 'flex' is the default value and affects the size of the buttons.

# how to add icons :- the MUI has a icons library with close to 2000 icons that we can use. (link - https://mui.com/material-ui/icons/). The Icons library give us access to the icons set (available in Material Icons)

# If we wanted to create a button with just an icon and without any text, to create such buttons MUI provides a second component 'IconButton'.

# Icon buttons are more appropriate for navigation bars where the regular buttons might look too pronounced.

# In contained buttons we can see that they are elevated and have a shadow. we can disable elevation using 'disableElevation' prop.

# When we click a button then we can see a ripple effect. We can disable this using 'disableRipple' prop.

# To handle click event, we can use 'onClick' prop.

## Lec 5 - Button Group (4:40)

# A possible scenario for the Button Group could be allowing the user to align content either left, center or right.

# when we use a ButtonGroup component, the variant should be specified on the button group and not on the individual buttons.

# Note - In button group, the 'onClick' prop has to be specified on the individual buttons.

# It is recommended to add an aria label. This will help us with accessbility.

## Lec 6 - Toggle Button (7:11)

# Toggle buttons can be used to group related options. However, this time we also have access to the selected state of the button group which can be utilized within the component.

# Suppose we want formatting options in our application like bold, italics and underline. To implement this we need to import two components 1). ToggleButtonGroup & 2). ToggleButton

# FormatBoldIcon, FormatItalicIcon & FormatUnderlinedIcon these icons will be the content for the three buttons.

# we have created buttons (for formatting), we need to handle overall selected state of button group as well as the change event and for this we will use useState hook from React.

# exclusive prop in ToggleButtonGroup component ensures we can select only one option at a time. So user can format the text either in bold or italic or underlined

## Lec 7 - Text Field (11:42)

# Text fields allow users to enter text in the browser. For example text fields in a user registration form, login form, checkout page etc.

# In TextField component , we have three variants and outlined is the deafult variant. They are :-
1). outlined, 2). filled, & 3). standard

# We can use color and size prop also with TextField. Size can be either small, medium or large and color can be one of the predefined colors from the theme palette.

# Form related props that is used with TextField - required, helperText, type etc

# 'type' prop which corresponds to the type attribute of an input element.

# We can also add prefix and suffixes to a text field and for that we use input adornmant component.

# TextField component is a wrapper around an input component and we use input props to target the underlying input component.

# Some other important props that we use are - 1). error which toggles the error state

## Lec 8 - Select (11:02)

# Select component from MUI is used for collectiong information from list of options 

# Box is just a plain old div tag on which we can specify some CSS like height and width. The select dropdown spans the available width.

# To make use of MUI 'Select' field, we can use two approaches 1). we can use TextField component, 2). we can use a separate select component which MUI provides.

# select dropdown also needs options which will be specified using menu item component.

# A variation of the select drop down is one where we can select multiple options.

# There are variations of the multi-select implementation where the options are checkboxes and the display is a list of chips instead of comma separated values. However we have not come across those individual yet and as beginner they are not necessary.

# More practical usage of this MUI Select component is will probabaly involve fetching the list of dropdown options from an API and populating the list.

## Lec 9 - Radio Button (8:19)

# FromtControl --> is a wrapper component,

# FormLabel --> this component is used to specify the label for the group of radio buttons.

# FormControlLabel :- this component is used to label the individual radio buttons,

# RadioGroup -> which wraps the individual radio component.

# FormHelperText - If we want to add an error message then we can add the FormHelperText component.

## Lec 10 - Checkbox (11:46)

# For single checkbox, we need to import two components and they are FormControlLabel & Checkbox

# We can also use icons as checkbox

# How to work with checkbox group 

## Lec 11 - Switch (04:21)

# switch component toggle the state of a single setting on or off and are the preferred way to adjust settings on mobile.

# switch option for user to toggle dark mode.

# If we want to use group of switches then in such case we can refer to the checkbox group. All we have to do is to change the control prop to switch from checkbox.

## Lec 12 -  Rating (7:45)

# Rating provide insight regarding others opinions and can allow the user to submit a rating of their own.

# 'precison' prop - using this prop we can select in multiple.

# Icon and empty icon which help customize the rating icon.

# 'highlightSelectedOnly' prop - as its name indicates highlights only one icon instead of all the icons leading up to that value.

# This prop is more suitable when you are collecting feedback using emojis. The first icon can be frawning icon and the last icon can be smiling icon, selecting the smiling icon should not highlight all the icons that appear before it.

## Lec 13 - Autocomplete (9:22)

# Autocomplete component has two mandatory props 1). options - which should be an array of strings, 2). renderInput - which renders the input.

# Autocomplete behaves like a combo box, when we click inside we see the options.

# Initially Autocomplete will not allow you to enter free text so if you type in random string and press enter, it won't be accepted. In order to allow the free solo prop, so on the autocomplete add 'freeSolo' and save the file.

# This scenario is suitable for autocomplete like google search.

# The Autocomplete component can accept either an array of strings or an array of objects which contains label key.

## Lec 14 -  Box (7:26)

# Box is first layout related component. Primarily the Box component serves as a wrapper component for most of your CSS utility needs.

# Box component in its most basic form used as a replacement for div tag.

# If we wanted to use semantic html like section, article, nav tag etc. To account for that Box component accepts a 'component' prop.

Q. Why we can't use simply div, span or html semantic html elements?
# It is because the Box component accepts a prop called 'sx' that can be used for defining custom style that has access to the theme.

# If we wanted to use regular inline styles on a normal html tag, we can not access the theme nor specify hover styles like we have done here.

# Box component as a CSS Utility component, it supports what are called Material UI System properties that simply means we can use a lot of the CSS properties as a prop directly on the component.

## Lec 15 -  Stack (3:53)

# Stack is another layout related component. Stack component is used to manage layout in one dimension either along the vertical or the horizontal axis.

# By default the Stack component arranges all the children elements in a column.

## Lec 16 -  Grid (7:43)

# Third layout related component i.e Grid component. It is useful for creating 2-D and responsive layout. 

# Grid component has two variations - 1). Grid container for the parent and 2). Grid item for the children 

# The Grid component under the hood uses the flexbox module. It consists of 12 columns.

# Each item in Grid can take up one or more columns as its width. There are five breakpoints each corresponding to a certain device width.

# xs - for mobile device, sm - for tablet, md - for desktop, lg and xl - for larger monitors.

# If we want to equally distribute the available width between all the items, then we can rely on order layout.

## Lec 17 -  Paper (2:47)

# Paper is a surface related component in MUI. It is a great component to use when creating layouts and provides a visual hierarchy which is very important in Material design.

# Let us assume that there is some content on the web page like a sign up section or a contact form. A common UI design is to put that content in a Card with some elevation and shadow and this can be done using Paper component.

# We can control the shadow using 'elevation' prop, by default the value is 1. More the shadow more will be the depth hierarchy.

# So based on your app design we can use the 'Paper' component to establish sections of UI and also visual hierarchy. This Paper component is also used under the hood to build card component MUI.

## Lec 18 -  Card (5:05)

# Cards contain content and actions about a single topic.

# To work with Card component, we need need two more components - 1). CardContent, 2). Typography,

# CardActions are typically buttons, so we need to import Button component to work with CardAction.

# To include images we need to import the card media component

## Lec 19 -   Accordion (7:19)

# Accordion component allows the user t show and hide sections of related content on a page.

# To use Accordion component, we need to import three components.

# In case of Accordion group the ideal behaviour is such that only one accordion is expanded at any given time. We can take care of that by maintaining state variable and adding the expanded and on change props.

# When no accordion is expanded then the state value will be false.

## Lec 20 -  ImageList (9:37)

# ImageList component used to display a collection of images in an organized grid. Suppose if we building recipe website then this component will be very useful.

# In order to use ImageList component, we need to import one more additional components i.e ImageListItem.

# The 'masonry' layout is best suited for dynamically sized uncropped content and does well with the aspect ratio of the image.

# ImageListItemBar component which let us add an overlaty to each image.

## Lec 21 - Navbar (6:02)

# Navbar component is primarily used for branding and navigation.

# To create 'navbar' we need two components 1). Appbar, 2). Toolbar

# By default the 'position' prop on this component is set to 'fixed'. To work with Navbar , we will set it to 'static'

# Note - Navbar doesn't have a strict design to follow, the content is completely upto you. But Appbar & Toolbar are the basic components we shall be needing.

## Lec 22 -  Menu (9:10)

# Menus display a list of choices on temporary surfaces.

# To create 'menu' we need two components, 1). Menu , 2). MenuItem

## Lec 23 -  Link (4:32)

# Link component allow us to easily customize with theme colors and typography styles. It's one of the mosrt straightforward component to use with very few props.

## Lec 24 - Breadcrumbs (6:04)

# Breadcrumbs is a type of secondary navigation scheme that reveals the user's location in a website.

# Within Breadcrumbs component, for every route we use a link component except for the current route the user is viewing.

## Lec 25 - Drawer (5:36)

# Drawer component can be used to create a sidebar which can be used for a number of things which completely depend on your application. They can contain links to other pages in your app allow you to switch accounts etc.

## Lec 26 - Speed Dial (5:34)

# Speed dial when pressed the component displays a few options in the form of speed dial.

# To create a speed dial components, we need two more components :- a). SpeedDialAction, b). SpeedDialIcon 

# This component is more applicable for a mobile device.

## Lec 27 - Bottom Navigation (5:29)

# Bottom Navigation is well suited for mobile and tablet device sizes and is used to switch between the primary destinations in an application.

## Lec 28 - Avatar (6:38)

# Some of data display components available in MUI are Avatar, Badge

# We can also group Avatars together. They are very useful when we have to showcase speakers for an event. To group Avatars, we need to import AvatarGroup component.

## Lec 29 - Badge (4:55)

# The Badge component generates a small badge to the top right of its child element.

## Lec 30 - List (6:22)

# Display data as a list in MUI, In order to display list item items we need to use two more components 1). ListItem, 2). ListItemText

# 