var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.className('gsfi')).sendKeys('Digitro Tecnologia');
    driver.findElement({name:gsfi}).sendKeys()
    driver.findElement(webdriver.By.xpath('/html/body/div[5]/div[3]/div[10]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div[1]/div/div/div/div/h3/a')).click();
