//referer is a HTTP header that identifies the address of the webpage 
// (i.e., the URI or IRI) that linked to the resource being requested. 
// By checking the referer, the new webpage can see where the request originated. This allows websites to identify where people are visiting them from and can also be used for analytics, logging, or security purposes.

import { test } from "@playwright/test";
test("set referer for entire context", async ({ browser }) => {
    
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    });
    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");


});