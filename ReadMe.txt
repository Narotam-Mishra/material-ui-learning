
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

# gutterBottom used to give margin button to the required element.

## Lec 4 - Button (14:03)

# MUI Buttons are basically native button or anchor elements enchanced with material design.

# To make use of MUI Buttons we need to import button component 

# Button component has three variants that we can use.

# Text variant is typically used when we have to grab less attention in the UI. Example - In a card popup or confirmation pop up. 

# confirmation variant is used when we have to grab user's attention and is used for primary actions in our application. Example - Login and Register button.

# outlined variant is sort of in between text and contained in terms of grabbing user's attention. they can be used for secondary actions in our application. For example - cancel or go back buttons.

# 