/* 🔥 Most Used Skills */
import javascript from '../app/assets/svg/skills/javascript.svg';//
import react from '../app/assets/svg/skills/react.svg';//
import nextJS from '../app/assets/svg/skills/nextJS.svg';//
import html from '../app/assets/svg/skills/html.svg';//
import css from '../app/assets/svg/skills/css.svg';//
import tailwind from '../app/assets/svg/skills/tailwind.svg';//

import nodejs from '../app/assets/svg/skills/nodejs.png';//
import express from '../app/assets/svg/skills/express.png';//
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';//

import aws from '../app/assets/svg/skills/aws.svg';//
import azure from '../app/assets/svg/skills/azure.svg';//
import git from '../app/assets/svg/skills/git.svg';//

/* 🎯 Other Skills (Randomly Shuffled) */
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';//
import python from '../app/assets/svg/skills/python.png';//
import pandas from '../app/assets/svg/skills/pandas.svg';//
import bcrypt from '../app/assets/svg/skills/bcrypt.png';//
import java from '../app/assets/svg/skills/java.svg';//

import cplex from '../app/assets/svg/skills/cplex.svg';//
import chatgpt from '../app/assets/svg/skills/chatgpt.png';//
import arena from '../app/assets/svg/skills/arena.jpeg';//
import powerbi from '../app/assets/svg/skills/powerbi.png';//

import cplusplus from '../app/assets/svg/skills/cplusplus.svg';//

import azurepipelines from '../app/assets/svg/skills/azure-pipelines.png';//


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().trim();

  switch (skillID) {

    /* 🔥 Most Used Skills — Always Near Top */
    case 'javascript': return javascript;
    case 'react': return react;
    case 'next js':
    case 'nextjs': return nextJS;
    case 'html': return html;
    case 'css': return css;
    case 'tailwind': return tailwind;
    case 'nodejs':
    case 'node js':
    case 'node': return nodejs;
    case 'express':
    case 'expressjs': return express;
    case 'mongodb':
    case 'mongo db': return mongoDB;
    case 'aws': return aws;
    case 'azure': return azure;
    case 'git': return git;

    /* 🎯 Other Skills (Randomly Shuffled) */
    case 'bootstrap': return bootstrap;
    case 'python': return python;
    case 'pandas': return pandas;
    case 'bcrypt': return bcrypt;
    case 'java': return java;
    case 'cplex':
    case 'ibm cplex': return cplex;
    case 'chatgpt':
    case 'openai': return chatgpt;
    case 'arena':
    case 'arena simulation': return arena;
    case 'powerbi':
    case 'power bi': return powerbi;
    case 'c++':
    case 'cpp': return cplusplus;
    case 'azure pipelines':
    case 'azure-pipelines': return azurepipelines;

    default:
      return null;
  }
};
