Feature: Login fuctionality

    @TC-001 @TC
    Scenario: Validate that the user can login to magento page
        Given The user navigated to login page
        When Types email in email input field
        And Types password in password input field
        And Clicks on login button
        Then The user will be redirected to My Account page
        And "My Account" should be visible
        And "Welcome" should be visible
    
    @TC-002 @Testcase
    Scenario: Validate that the user cannot login to magento
        Given The user navigated to login page
        When Types wrong email in email input field
        And Types wrong password in password input field
        And Clicks on login button
        Then "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later." message should shown and be visible

   @TC00-3 @TC 
    Scenario Outline: check login functionality
        Given The user navigated to login page
        When Types <email> in email input field
        And Types <password> in password input field
        And Clicks on login button
        Then "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later." message should shown and be visible
    
    
    # Examples: #{string} --> examples with qutations
    #     | email | password | 
    #     | "CypressUser@gmail.comuuu" | "test@123"    |  
    #     | "CypressUser@gmail.com"    | "test@12663"  |
    #     | "CypressUser@gmail.comuuu" | "testccc@123" |

   Examples: #{word} --> examples without qutations
      | email | password | 
      | CypressUser@gmail.comuuu | test@123    |  
      | CypressUser@gmail.com    | test@12663  |
      | CypressUser@gmail.comuuu | testccc@123 |