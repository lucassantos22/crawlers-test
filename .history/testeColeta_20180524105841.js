const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();

driver.get('https://www.google.com.br/');

driver.findElement(By.id('q'))