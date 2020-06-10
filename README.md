# VuePress CodePipeline Pipeline Sample

Sample project to create an AWS CodePipeline pipeline to deploy a static VuePress website.

## Getting Setup

### Prerequisites

1.  [Node.js](https://nodejs.org/en/) v8.0+
2.  [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
3.  [Default AWS Credential Profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

### Local Setup Instructions

1.  [Clone this repo](https://github.com/chris271/aws-vuepress-pipeline)
2.  Run `yarn install` or `npm install`
3.  Run `yarn run dev` or `npm run dev` to run the VuePress site locally.
3.  Run `yarn run test` or `npm run dev` to run the unit tests located in `docs/.vuepress/components/__tests__`.

## Helpful links

This site is built on [VuePress](https://vuepress.vuejs.org/). Please see their [Guide](https://vuepress.vuejs.org/guide/) for more information on how it works. 

The provided VuePress sample is based on [this repository](https://github.com/bencodezen/vuepress-starter-kit) with adjustments.
