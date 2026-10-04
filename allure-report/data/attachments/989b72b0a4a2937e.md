# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 50.Test_Excercises\1.Kura_Healthcare.ts >> viewer
- Location: 50.Test_Excercises\1.Kura_Healthcare.ts:3:5

# Error details

```
TypeError: page.locator(...).tocontaintext is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - link "" [ref=f2e2] [cursor=pointer]:
    - /url: "#"
  - navigation [ref=f2e4]:
    - list [ref=f2e5]:
      - link "" [ref=f2e6] [cursor=pointer]:
        - /url: "#"
      - listitem [ref=f2e8]:
        - link "CURA Healthcare" [ref=f2e9] [cursor=pointer]:
          - /url: ./
      - listitem [ref=f2e10]:
        - link "Home" [ref=f2e11] [cursor=pointer]:
          - /url: ./
      - listitem [ref=f2e12]:
        - link "History" [ref=f2e13] [cursor=pointer]:
          - /url: history.php#history
      - listitem [ref=f2e14]:
        - link "Profile" [ref=f2e15] [cursor=pointer]:
          - /url: profile.php#profile
      - listitem [ref=f2e16]:
        - link "Logout" [ref=f2e17] [cursor=pointer]:
          - /url: authenticate.php?logout
  - banner [ref=f2e18]:
    - generic [ref=f2e19]:
      - heading "CURA Healthcare Service" [level=1] [ref=f2e20]
      - heading "We Care About Your Health" [level=3] [ref=f2e21]
      - link "Make Appointment" [ref=f2e22] [cursor=pointer]:
        - /url: ./index.php#appointment
  - generic [ref=f2e25]:
    - generic [ref=f2e26]:
      - heading "Make Appointment" [level=2] [ref=f2e27]
      - separator [ref=f2e28]
    - generic [ref=f2e29]:
      - generic [ref=f2e30]:
        - generic [ref=f2e31]: Facility
        - combobox "Facility" [ref=f2e33]:
          - option "Tokyo CURA Healthcare Center" [selected]
          - option "Hongkong CURA Healthcare Center"
          - option "Seoul CURA Healthcare Center"
      - generic [ref=f2e36] [cursor=pointer]:
        - checkbox "Apply for hospital readmission" [ref=f2e37]
        - text: Apply for hospital readmission
      - generic [ref=f2e38]:
        - generic [ref=f2e39]: Healthcare Program
        - generic [ref=f2e40]:
          - generic [ref=f2e41] [cursor=pointer]:
            - radio "Medicare" [checked] [ref=f2e42]
            - text: Medicare
          - generic [ref=f2e43] [cursor=pointer]:
            - radio "Medicaid" [ref=f2e44]
            - text: Medicaid
          - generic [ref=f2e45] [cursor=pointer]:
            - radio "None" [ref=f2e46]
            - text: None
      - generic [ref=f2e47]:
        - generic [ref=f2e48]: Visit Date (Required)
        - generic [ref=f2e50]:
          - textbox "Visit Date (Required)" [ref=f2e51]:
            - /placeholder: dd/mm/yyyy
          - generic [ref=f2e52]: 
      - generic [ref=f2e54]:
        - generic [ref=f2e55]: Comment
        - textbox "Comment" [ref=f2e57]
      - button "Book Appointment" [ref=f2e60] [cursor=pointer]
  - contentinfo [ref=f2e61]:
    - generic [ref=f2e64]:
      - heading [level=4] [ref=f2e65]:
        - strong [ref=f2e66]: CURA Healthcare Service
      - paragraph [ref=f2e67]: Atlanta 550 Pharr Road NE Suite 525Atlanta, GA 30305
      - list [ref=f2e68]:
        - listitem [ref=f2e69]:
          - generic [ref=f2e70]: 
          - text: (678) 813-1KMS
        - listitem [ref=f2e71]:
          - generic [ref=f2e72]: 
          - link "info@katalon.com" [ref=f2e73] [cursor=pointer]:
            - /url: mailto:info@katalon.com
      - list [ref=f2e74]:
        - listitem [ref=f2e75]:
          - link "" [ref=f2e76] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e78]:
          - link "" [ref=f2e79] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e81]:
          - link "" [ref=f2e82] [cursor=pointer]:
            - /url: "#"
      - separator [ref=f2e84]
      - paragraph [ref=f2e85]: Copyright © CURA Healthcare Service 2026
    - link "" [ref=f2e86] [cursor=pointer]:
      - /url: "#top"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('viewer', async ({ page }) => {
  4  |   await page.goto('https://katalon-demo-cura.herokuapp.com/');
  5  |   await expect(page).toHaveTitle(/CURA Healthcare Service/);
  6  |   await page.click("#btn-make-appointment");
  7  |    await page.fill("#txt-username", "John Doe");
  8  |     await page.fill("#txt-password", "ThisIsNotAPassword");
  9  |     await page.click("#btn-login");
> 10 |     let verify = await page.locator("h2").tocontaintext("Make Appointment");
     |                                           ^ TypeError: page.locator(...).tocontaintext is not a function
  11 | });
```