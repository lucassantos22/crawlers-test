const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com.br/');

driver.manage().deleteAllCookies();
driver.manage().window().maximize();

driver.findElement(By.name('q')).sendKeys('Digitro Tecnologia');
driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);
driver.wait(webdriver.until.elementLocated({xpath:'//h3/a[1]'}));
driver.findElement(By.xpath('//h3/a[1]')).click();
driver.findElement(By.name('search_show')).click();
driver.findElement(By.name('search_show')).click();
driver.findElement(By.xpath('//div//select//option[2]')).click();