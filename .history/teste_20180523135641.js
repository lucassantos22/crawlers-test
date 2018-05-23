const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com.br/');

driver.manage().deleteAll