const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com.br/');

driver.manage().deleteAllCookies();
driver.manage().window().maximize();

driver.findElement(By.name('q')).sendKeys('Digitro Tecnologia').sendKeys(webdriver.Key.ENTER);
driver.findElement(By.name('q')).sendKeys('Digitro Tecnologia').sendKeys(webdriver.Key.ENTER);