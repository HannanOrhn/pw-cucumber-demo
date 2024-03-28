import {BeforeAll, AfterAll, Before, After, Status, AfterStep} from "@cucumber/cucumber"
import {chromium,Browser, BrowserContext} from "@playwright/test"
import * as dotenv from "dotenv";
import { driver } from "../test/utils/driver";


let browser: Browser;
let context:BrowserContext;

BeforeAll(async function() {
    dotenv.config({ path: "C:/Users/omerb/OneDrive/Desktop/Playwrite/TypeScript -Udemy/uiAutomation/.env" });
    browser = await chromium.launch({headless:false});
} );


Before(async function(){ 
   context=await browser.newContext();
   const page=await context.newPage();
    driver.page=page;

})  
let img;
let date=new Date();
let dateOFDay = date.toTimeString().split("G")[0].toString().trim().replace(/:/g, "-");
AfterStep(async function({pickle}){

    img=await driver.page.screenshot({path: `./test-results/screenshotsFailed/${pickle.name}_${dateOFDay}.png`});
    await this.attach(img,"image/png");
})


After(async function({pickle, result}){
    // screenshots
         let img;
         let date=new Date();
         let dateOFDay = date.toTimeString().split("G")[0].toString().trim().replace(/:/g, "-");
         console.log(dateOFDay);
        if(result?.status==Status.FAILED){
            img=await driver.page.screenshot({path: `./test-results/screenshotsFailed/${pickle.name}_${dateOFDay}.png`});

        }else{
            img=await driver.page.screenshot({path: `./test-results/screenshotsPass/${pickle.name}__${dateOFDay}.png`});
           
        }
        await this.attach(img,"image/png");
  


    await driver.page.close();
    await context.close();
})


AfterAll(async function() {
    await browser.close();

} );