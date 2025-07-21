/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/PageObjects/shared/Actions.cy";
import printProductAssertions from "../../../../support/PageObjects/printProductsNames/Assertions.cy";
const sharedAction = new sharedActions();
const printProductAssertion = new printProductAssertions();

Given("The user navigated to magento website",()=>{
    sharedAction.visitHomePage();
})

Then("The products should be available in Hot Seller section",()=>{
    printProductAssertion.printProducts();
})