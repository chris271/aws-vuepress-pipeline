# VuePress CodePipeline Sample

Sample project to create an AWS CodePipeline pipeline to deploy a static VuePress website.

## Getting Setup

### Prerequisites

1.  [Node.js](https://nodejs.org/en/) v8.0+
2.  [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
3.  [Default AWS Credential Profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

### Local VuePress Setup Instructions

1.  [Clone this repo](https://github.com/chris271/aws-vuepress-pipeline)
2.  Run `yarn install` or `npm install`
3.  Run `yarn run dev` or `npm run dev` to run the VuePress site locally.
3.  Run `yarn run test` or `npm run dev` to run the unit tests located in `docs/.vuepress/components/__tests__`.

## CodePipeline CloudFormation Deployment

### Deploying the Provided Template

- Navigate to CloudFormation within the AWS Console  

- Click "Create Stack" then select "With new resources (standard)"
  
![Create Stack](images/CreateStack.PNG "Create Stack")

- Select "Upload a template file" and click "Browse"  

![Upload Template](images/CfnUpload.PNG "Upload Template")

- Choose the "pipeline-cfn-automation-multi-git.template" template file at the base of this repo.  

- Enter a value for the Stack Name (ex. "VuePressWorkshop")  

![Stack Name](images/StackName.PNG "Stack Name")

- For parameters first select the "Repository Type" you would like to use.  

- If "CodeCommit" is selected for "Repository Type" then skip the next step and all sub-steps.  

- When "GitHub" is selected for "Repository Type" 
  - Enter the Github repository owner's username for "Github Repository Owner"
  - Enter the Github repository name for "Github Repository Name"
  - Enter the Github repository branch name for "Github Repository Branch"
  - Generate a Github [Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) 
  with "admin:repo_hook" permission and paste the resulting value in the "GitHub OAuth Token" field.  
  
- Select a value for "Notification Endpoint" which should be an email that will receive pipeline notifications.

- Select a value for "Project Name" which will propagate to the names of pipeline resources.  

- When all parameters are selected the screen should look similar to below.  

![Parameters](images/CfnParams.PNG "Parameters")

- Once all parameters have been selected create the stack and move onto the next section!

### Running the Pipeline

- When the stack finishes creation navigate to the CloudFormation stack "Outputs" tab and click the link for "MainCICDPipeline".  

![Parameters](images/CfnOutputs.PNG "Parameters")



## Helpful links

This site is built on [VuePress](https://vuepress.vuejs.org/). Please see their [Guide](https://vuepress.vuejs.org/guide/) for more information on how it works. 

The provided VuePress sample is based on [this repository](https://github.com/bencodezen/vuepress-starter-kit) with adjustments.
