# Fylo dark theme landing page

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design preview for the Fylo dark theme landing page challenge](./design/desktop-preview.jpg)

### Links

- Live URL : https://mininpark.github.io/Fylo_darktheme/

This is the downgraded version from Fylo Website Version 2 due to hosting problem with nodeJS and MongoDB. 

# My process

## Built with

- Bootstrap-based Website
    - Modal, List, Flex, Accordion
- Mapbox API
- Responsive Web - with Mobile Device
- (Downgraded from Ver. 2) Delete NodeJS, Express, MongoDB
    - This version 3 is only for deploying the website in a static way without server problems. If you want to see **how it works locally with NodeJS, Express, and MongoDB, please go to Version 2**: [https://github.com/mininpark/Ver2_Fylo_darktheme](https://github.com/mininpark/Ver2_Fylo_darktheme)

## ****What I learned****

### Backend Options

- [Amazon AWS](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fec2%2Fv2%2Fhome%3Fregion%3Dus-east-1%26state%3DhashArgs%2523Instances%253A%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fec2&forceMobileApp=0&code_challenge=ACZehpWCdS6eqnczF85TSXlAJuBdPDC-S6yNzEDYJiw&code_challenge_method=SHA-256): SSH was unable to login into the instance - Operation timed out. Rebooting normally takes a long time to take effect,  suspect it might be because of memory issues
    - Security Group
        
        Make sure to have an inbound rule for **TCP port 22** and either all ips or your IP. You can find the security group through the ec2 menu, in the instance options.
        
    - Routing Table
        
        For a new subnet in a VPC, you need to change to a routing table that points **0.0.0.0/0 to internet gateway target**. When you create the subnet in your vpc, by default it assigns the default routing table, which probably does not accept incoming traffic from the internet. You can edit the routing table options in the vpc menu and then subnets.
        
    - Elastic IP
        
        For an instance in a vpc, you need to assign a **public elastic ip address**, and associate it with the instance. The private ip address can't be accessed from the outside. You can get an elastic ip in the ec2 menu (not instance menu).
        
- GitOage: No support on NodeJS, only for static website
- IONOS: Pricing Model, but no support on NodeJS
- [Hostinger](https://hpanel.hostinger.com/): Pricing Model, but no support on NodeJS
- [Heroku](https://dashboard.heroku.com/): Supporting on NodeJS but, after 30min sleep modus in free pricing model —> not proper for deploying, only for testing

If you want to see the previous version locally with NodeJS, Express, and MongoDB, please visit here:

[https://github.com/mininpark/Ver2_Fylo_darktheme](https://github.com/mininpark/Ver2_Fylo_darktheme)

### Bootstrap-based Website

- A consistent framework that supports major of all browsers and CSS compatibility fixes.
- With Bootstrap, it was possible to write HTML and CSS almost at same time. Pure CSS is more for default setting, media query and css attributes which are not possible to set by using Boostrap
- Responsive structures and styles d-flex

### Mapbox API

- Learned to allow to programmatically access Mapbox tools and services

### Responsive Web

- Flexbox
- Scrolled animated Navbar

```jsx
$(function () {
	    $(document).scroll(function () {
      const $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
```

To solve the hosting problems, I searched a lot of reasonable options by supporting NodsJS, because most free hosting providers don’t provide an option with NodeJS and MongoDB. In this process, I learned Backend options and Linux control. 

Considering all backend options, It seems like Amazon AWS Cloud is a proper hosting provider, so It took a lot to learn the basics and settings of Amazon AWS such as Inbound, Outbound, Securiy Gorup, and etc., but after setting AWS Cloud, memory of Linux seems like an error to run the AWS. 

### What I learned

For deploying the website, I searched different hosting service:

### Continued development

Figure out to how to deploy website, which is not static anymore
