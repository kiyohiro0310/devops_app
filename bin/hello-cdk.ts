#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DevOpsStack } from '../lib/devops-stack';

const app = new cdk.App();

new DevOpsStack(app, 'DevOpsStack', {
});