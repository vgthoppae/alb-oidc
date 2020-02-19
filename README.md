# What?
As a companion of the medium article https://medium.com/@tkvganesh/integrate-aws-alb-with-okta-oidc-authentication-51305c668c2c this project provides the source code for integrating OIDC Identity Provider OKTA with AWS ALB. 

# How to Use?
Follow along the article for best experience

# Contents

Contains two directories.

## infra
Contains AWS infrastructure as code.
- **alb-oidc-cloudformation.yml**: Cloudformation template to create the underlying resources
- **cf-params-template.json**: A template file to help create parameters file for the above Cloudformation template
- **cli-commands**: AWS CLI commands to execute the above template

## lambdas
Contains the lambda code
- **package.json**: Node dependency management file
- **serverless.yml**: Configuration file for the serverless framework
- **timeteller.js**: Source code for the lambda




